import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthProxyService } from './auth.service';
import { MicroserviceClientService } from './microservice-client.service';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthProxyService, MicroserviceClientService],
})
export class AppModule {}
