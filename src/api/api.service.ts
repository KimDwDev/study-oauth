import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class ApiService {

  TestFunc() : { msg : string} {
    return { msg : "구글 로그인 되었습니다." }
  }

  RedirectFunc( req : Request) : { msg : string } {

    console.log(req.user)

    return { msg : "구글에서 리다이렉트 해줬습니다." }
  }
} 
