import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import {Connection, Repository} from 'typeorm';
import {Book} from "./entities/book.entity";
import {Author} from "./entities/author.entity";
import {getRepositoryToken} from "@nestjs/typeorm";

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;
const createMockRepository = <T = any>(): MockRepository<T> => ({
  findOne: jest.fn(),
});

describe('BooksController', () => {
  let controller: BooksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [
          BooksService,
          Repository,
         {
           provide: Connection,
           useValue: {}
         },
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

    controller = module.get<BooksController>(BooksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

