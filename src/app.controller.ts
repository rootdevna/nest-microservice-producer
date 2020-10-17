import { Controller, Get } from '@nestjs/common';
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


  @Get()
  async getHello() {
    const pendingOperations = Array.from(new Array(5)).map((_, index) =>
      this.rabbitMqService.send('rabbit-mq-producer', {
        message: this.appService.getHello() + index,
      }),
    );
    Promise.all(pendingOperations);
    return 'Message sent to the queue!';
  }

}
