import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiModule } from './api/api.module';
import * as CookieParser from "cookie-parser"

@Module({
  imports: [
    ConfigModule.forRoot({}),
    ApiModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(CookieParser())
    .forRoutes("*")
  }
}
