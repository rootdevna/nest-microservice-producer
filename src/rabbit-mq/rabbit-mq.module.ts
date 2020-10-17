import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RabbitMqService } from './rabbit-mq.service';

@Module({
    imports: [
      ClientsModule.register([
        {
          name: 'rabbit-mq-module',
          transport: Transport.RMQ,
          options: {
            urls: [
              'amqps://zicaldzw:pTK2IWIaXxIFwTubNoGxMWPeqe0UIOUI@toad.rmq.cloudamqp.com/zicaldzw',
            ],
            queue: 'rabbit-mq-nest-js',
          },
        },
      ]),
    ],
    controllers: [],
    providers: [RabbitMqService, RabbitMqService],
    exports: [RabbitMqService],
  })
export class RabbitMqModule {}
