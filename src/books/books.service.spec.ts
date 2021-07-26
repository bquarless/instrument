import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from './books.service';
import { Connection, Repository } from 'typeorm'
import { getRepositoryToken } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Author } from './entities/author.entity';

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;
const createMockRepository = <T = any>(): MockRepository<T> => ({
  findOne: jest.fn(),
  create: jest.fn(),
});

describe('BooksService', () => {
  let service: BooksService;
  let bookRepository: MockRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BooksService,
        {provide: Connection, useValue: {}},
        {
          provide: getRepositoryToken(Book),
          useValue: createMockRepository(),
        },
        {
          provide: getRepositoryToken(Author),
          useValue: createMockRepository(),
        },
      ],
    }).compile();

    service = module.get<BooksService>(BooksService);
    bookRepository = module.get<MockRepository>(getRepositoryToken(Book));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findOne', () => {
    describe('when book with ID exists', () => {
      it('should return the book object', async () => {
        const bookId = '1';
        const expectedBook = {};

        bookRepository.findOne.mockReturnValue(expectedBook);
        const book = await service.findOne(bookId);
        expect(book).toEqual(expectedBook);
      });
    });
  });
});
