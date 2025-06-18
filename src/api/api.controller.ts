import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { ApiService } from './api.service';
import { GoogleAuthGuard } from './utils';
import { Request } from 'express';

@Controller('api/auth')
@UseGuards(GoogleAuthGuard)
export class ApiController {
  constructor(private main: ApiService){}

  @Get("google/login")
  Test() : { msg : string } {
    return this.main.TestFunc()
  }


  // 이 값으로 리다이렉트가 될 예정이다. 
  @Get("google/redirect")
  RedirectFunc(@Req() req : Request) : { msg : string } {
    return this.main.RedirectFunc(req)
  }
}
