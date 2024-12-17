import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { microserviceConfig } from '../config/microservices.config';

@Injectable()
export class MicroserviceClientService {
  private clients: Map<string, ClientProxy> = new Map();

  getClient(serviceName: string): ClientProxy {
    if (!this.clients.has(serviceName)) {
      this.clients.set(
        serviceName,
        ClientProxyFactory.create({
              transport: Transport.REDIS,
              options: {
                host: 'localhost', // Adresse Redis
                port: 6379,
              },
            })
      );
    }
    return this.clients.get(serviceName);
  }
}