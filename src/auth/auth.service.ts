import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MicroserviceClientService } from './microservice-client.service';
import { RegisterDto, LoginDto } from './auth.interface';

@Injectable()
export class AuthProxyService {
  private client: ClientProxy;

  constructor(private microserviceClient: MicroserviceClientService) {
    this.client = this.microserviceClient.getClient('auth');
  }

  async register(data: RegisterDto) {
    return this.client.send('auth.register', data).toPromise();
  }

  async login(data: LoginDto) {
    return this.client.send('auth.login', data).toPromise();
  }

  async getUser(userId: string) {
    return this.client.send('auth.get_user', { userId }).toPromise();
  }

  async updateUser(userId: string, updates: any) {
    return this.client.send('auth.update_user', { userId, updates }).toPromise();
  }

  async deleteUser(userId: string) {
    return this.client.send('auth.delete_user', { userId }).toPromise();
  }

  async resetPassword(email: string) {
    return this.client.send('auth.reset_password', { email }).toPromise();
  }

  async verifyToken(token: string) {
    return this.client.send('auth.verify_token', { token }).toPromise();
  }
}