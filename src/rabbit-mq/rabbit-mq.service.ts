import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';


@Injectable()
export class RabbitMqService {
    constructor(
        @Inject('rabbit-mq-module') private readonly client: ClientProxy,
        @Inject('book-rabbit-mq-module') private readonly book: ClientProxy,
        @Inject('tasks-rabbit-mq-module') private readonly task: ClientProxy
      ) {}
    
      public send(pattern: string, data: any) {
        return this.client.send(pattern, data).toPromise();
      }
      public sendTask( pattern: string, data: any ){
        return this.task.send(pattern, data).toPromise();
      }
      public postBook(pattern: string, data: any) {
        return this.book.send(pattern, data).toPromise();
      }
    }    