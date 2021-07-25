import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getBook(): string {
    return 'Hello Books!';
  }
}
