import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";


@Injectable()
export class GoogleAuthGuard extends AuthGuard("google") {

  async canActivate(context: ExecutionContext) : Promise<boolean> {

    // 인증이 진행이 됬는가 안됬는가를 판별해주는 부분 이다. (passport가 정상적으로 validate를 가져오면 실행되도록 해준다.)
    const activate = await super.canActivate(context) as boolean


    // const request = context.switchToHttp().getRequest()

    // // request.user에 데이터를 넣는 과정 
    // await super.logIn(request);
    
    return activate
  }
}