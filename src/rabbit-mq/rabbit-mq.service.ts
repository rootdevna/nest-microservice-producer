import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';


@Injectable()
export class RabbitMqService {
    constructor(
        @Inject('rabbit-mq-module') private readonly client: ClientProxy,
        @Inject('book-rabbit-mq-module') private readonly book: ClientProxy,
      ) {}
    
      public send(pattern: string, data: any) {
        return this.client.send(pattern, data).toPromise();
      }
      public postBook(pattern: string, data: any) {
        return this.book.send(pattern, data).toPromise();
      }
    }    