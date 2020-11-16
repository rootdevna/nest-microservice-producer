import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy, ClientProxyFactory, Transport }from '@nestjs/microservices'
import { RabbitMqService } from './rabbit-mq/rabbit-mq.service';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';


@Controller('api/v1')
export class AppController {

  private clientAdminBackend: ClientProxy;

  constructor(
    private readonly appService: AppService,
    private readonly amqpConnection: AmqpConnection
    ) {}


 /* @Post()
  async getHello(@Body() message) {
    this.rabbitMqService.send('rabbit-mq-producer', {
      username: message.username,
      password: message.password
    })
    return 'Message sent to the queue!';
  }

  @Get('test')
  async getTest() {
    this.rabbitMqService.send('rabbit-mq-producer', {
      message: "sdfsalddkldksa"
    })
    return 'Message test sent to the queue!';
  }
*/
  @Post('topic')
  async getTopic(@Body() message) {
      this.amqpConnection.publish(
      'encaminhamento',
       message.route,
       message.title);

    return 'Chamado Encamihado';
  }

/*  @Post('tasks')
  async createTask(@Body() message){
    this.rabbitMqService.sendTask('rabbit-mq-producer',{
      description: message.description,
      completed: message.completed
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
*/
}
