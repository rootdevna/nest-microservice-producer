import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RabbitMqService } from './rabbit-mq.service';

@Module({
    imports: [
      ClientsModule.register([
        {
          name: '.orange.',
          transport: Transport.RMQ,
          options: {
            urls: [
              'amqps://avltcrcf:YL5TXofezoFyXFs5yPGPJO9h5ImeIrUJ@woodpecker.rmq.cloudamqp.com/avltcrcf',
            ],
            queue: 'user-messages',
          },
        },
        {
          name: 'rabbit-mq-module',
          transport: Transport.RMQ,
          options: {
            urls: [
              'amqps://avltcrcf:YL5TXofezoFyXFs5yPGPJO9h5ImeIrUJ@woodpecker.rmq.cloudamqp.com/avltcrcf',
            ],
            queue: 'user-messages',
          },
        },
        {
          name: 'book-rabbit-mq-module',
          transport: Transport.RMQ,
          options: {
            urls: [
              'amqps://avltcrcf:YL5TXofezoFyXFs5yPGPJO9h5ImeIrUJ@woodpecker.rmq.cloudamqp.com/avltcrcf',
            ],
            queue: 'book-messages',
          },
        },
        {
          name: 'tasks-rabbit-mq-module',
          transport: Transport.RMQ,
          options: {
            urls: [
              'amqps://avltcrcf:YL5TXofezoFyXFs5yPGPJO9h5ImeIrUJ@woodpecker.rmq.cloudamqp.com/avltcrcf',
            ],
            queue: 'create-task',
          },
        },
      ])
    ],
    controllers: [],
    providers: [RabbitMqService, RabbitMqService],
    exports: [RabbitMqService],
  })
export class RabbitMqModule {}
