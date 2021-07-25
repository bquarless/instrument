/* BooksService */
import {Injectable, Logger, NotFoundException, UseInterceptors} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { Author } from './entities/author.entity';
import { FilterInterceptor } from '../common/interceptor/filter.interceptor';

@Injectable()
export class BooksService {
    private readonly logger = new Logger(BooksService.name);

    constructor(
        @InjectRepository(Book)
        private readonly bookRepository: Repository<Book>,
        @InjectRepository(Author)
        private readonly authorRepository: Repository<Author>,
    ) {}

    @UseInterceptors(FilterInterceptor)
    findAll(filter) {
        return this.bookRepository.find({
            relations: ['authors'],
            order: {
                title: "ASC"
            },
            // where: {
            //     authors: "Adams"
            // }
        });
    }

    async findOne(id: string) {
        const book = await this.bookRepository.findOne(id, {
            relations: ['authors'],
        });
        if (!book) {
            throw new NotFoundException(`Book #${id} not found`);
        }
        return book;
    }

    async create(createBookDto: CreateBookDto) {
        const authors = await Promise.all(
            createBookDto.authors.map(name => this.preloadAuthorByName(name)),
        );

        const book = this.bookRepository.create({
            ...createBookDto,
            authors,
        });
        return this.bookRepository.save(book);
    }

    async update(isbn: string, updateBookDto: UpdateBookDto) {
        const authors =
            updateBookDto.authors &&
            (await Promise.all(
                updateBookDto.authors.map(name => this.preloadAuthorByName(name)),
            ));

        const book = await this.bookRepository.preload({
            isbn,
            ...updateBookDto,
            authors,
        });
        if (!book) {
            throw new NotFoundException(`Book #${isbn} not found`);
        }
        return this.bookRepository.save(book);
    }

    async remove(id: string) {
        const book = await this.findOne(id);
        return this.bookRepository.remove(book);
    }

    private async preloadAuthorByName(name: string): Promise<Author> {
        const existingAuthor = await this.authorRepository.findOne({name});
        if (existingAuthor) {
            return existingAuthor;
        }
        return this.authorRepository.create({name});
    }

    private async filter(data, filter) {
        if (filter) {
            const filteredBooks = [];
            this.logger.log(`Filter name = ${JSON.stringify(filter)} `);
            data.map((book) => {
                book.authors.map((author) => {
                    if (author.name == Object.values(filter)[0]) {
                        this.logger.log(`filter book FOUND`);
                        filteredBooks.push(book);
                    }
                })
            })
            //this.logger.log(`Filtered books = ${JSON.stringify(filteredBooks)} `);
            return filteredBooks
        }else {
            return data;
        }
    }
}
