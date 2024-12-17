import { Transport } from '@nestjs/microservices';

export const microserviceConfig = {
  redis: {
    transport: Transport.REDIS,
    options: {
      host: process.env.REDIS_HOST || 'localhost',
      port: parseInt(process.env.REDIS_PORT, 10) || 6379,
    },
  },
};