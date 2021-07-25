import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Patch,
    Delete,
    Query, Logger
} from '@nestjs/common';
import {BooksService} from "./books.service";
import {CreateBookDto} from "./dto/create-book.dto";

@Controller('api/books')
export class BooksController {
    private readonly logger = new Logger(BooksController.name);
    constructor(private readonly booksService: BooksService) {}

    @Get()
    findAll(@Query() author) {
        this.logger.log(`Using this filter  - ${JSON.stringify(author)}`);
        return this.booksService.findAll(author);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.booksService.findOne(id);
    }

    @Post()
    create(@Body() createBookDto: CreateBookDto) {
        return this.booksService.create(createBookDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateBookDto) {
        return this.booksService.update(id, updateBookDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.booksService.remove(id);
    }
}
