import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitMqModule } from './rabbit-mq/rabbit-mq.module';
import { RabbitMQModule as RMQ} from '@golevelup/nestjs-rabbitmq';

@Module({
  imports: [
    RMQ.forRoot(RMQ, {
      exchanges: [
        {
          name: 'encaminhamento',
          type: 'topic',
        },
      ],
      uri: 'amqps://avltcrcf:YL5TXofezoFyXFs5yPGPJO9h5ImeIrUJ@woodpecker.rmq.cloudamqp.com/avltcrcf',        
      connectionInitOptions: { wait: false }
    }),
    AppModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
