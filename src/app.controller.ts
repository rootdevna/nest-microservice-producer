import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy, ClientProxyFactory, Transport }from '@nestjs/microservices'
import { RabbitMqService } from './rabbit-mq/rabbit-mq.service';

@Controller('api/v1')
export class AppController {

  private clientAdminBackend: ClientProxy;

  constructor(
    private readonly appService: AppService,
    private readonly rabbitMqService: RabbitMqService 
    ) {}


  @Post()
  async getHello(@Body() message) {
    this.rabbitMqService.send('rabbit-mq-producer', {
      username: message.username,
      password: message.password
    })
    return 'Message sent to the queue!';
  }

  @Post('books')
  async postBook(@Body() message) {
    this.rabbitMqService.postBook('rabbit-mq-producer', {
      BookName: message.bookname, 
      Price: message.price, 
      Category: message.category, 
      Author: message.author
    })
    return 'Message sent to the queue!';
  }

}
