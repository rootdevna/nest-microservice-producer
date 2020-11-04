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

}
