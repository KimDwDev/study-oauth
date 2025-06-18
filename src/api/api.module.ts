import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { GoogleAuthGuard, GoogleStartegy } from './utils';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [ApiController],
  providers: [
    GoogleStartegy,
    ConfigService,
    GoogleAuthGuard,
    ApiService,
  ]
})
export class ApiModule {}
