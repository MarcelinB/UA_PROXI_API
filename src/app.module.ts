import { Module } from '@nestjs/common';
import { ApiController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [ApiController],
  providers: [AppService],
})
export class AppModule {}
