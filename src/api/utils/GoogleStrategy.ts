import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-google-oauth20"


@Injectable()
export class GoogleStartegy extends PassportStrategy(Strategy) {
  constructor(config : ConfigService) {
    super({
      clientID : config.get<string>("NEST_APP_GOOGLE_CLIETN_ID"),
      clientSecret : config.get<string>("NEST_APP_GOOGLE_CLIENT_PASSWORD"),
      callbackURL : config.get<string>("NEST_APP_GOOGLE_REDIRECT_URL"),
      scope : ['profile', 'email']
    })
  }

  async validate(accessToken : string, refreshToken : string, profile : Profile ) {

    return profile
  }
}