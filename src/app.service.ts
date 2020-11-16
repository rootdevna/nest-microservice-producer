import { Injectable } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Injectable()
export class AppService {
  constructor(private readonly amqpConnection: AmqpConnection
    ) {}
  public async getHello(msg: {}) {
    console.log(`Received message: ${JSON.stringify(msg)}`);
  }
}
