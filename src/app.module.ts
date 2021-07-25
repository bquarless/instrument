import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {LoggingMiddleware} from "./common/middleware/logging.middleware";

import ormconfig from './ormconfig';

@Module({
  imports: [
      BooksModule,  TypeOrmModule.forRoot(ormconfig)
    ],
    controllers: [AppController],
    providers: [AppService],
  })
  export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(LoggingMiddleware)
        .forRoutes('*');
  }
}
