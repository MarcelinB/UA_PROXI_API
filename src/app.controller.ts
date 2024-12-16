import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Controller('api')
export class ApiController {
  private readonly serviceClient: ClientProxy;

  constructor() {
    // Crée un client pour communiquer avec un microservice via Redis
    this.serviceClient = ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        host: 'localhost', // Adresse Redis
        port: 6379,
      },
    });
  }

  @Get('users/:id')
  async getUser(@Param('id') id: string) {
    // Proxy vers un microservice qui gère les utilisateurs
    return this.serviceClient.send('get_user', id).toPromise();
  }

  @Post('orders')
  async createOrder(@Body() orderData: any) {
    // Proxy vers un microservice qui gère les commandes
    return this.serviceClient.send('create_order', orderData).toPromise();
  }

  @Post('login')
  async register(@Body() body: { email: string; password: string }) {
    // Envoi du message au microservice avec le sujet 'auth_register'
    return this.serviceClient.send('auth_login', body).toPromise();
  }
}

