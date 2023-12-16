import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET_KEY,
    });
  }

  async validate(payload: { sub: string; username: string }) {
    // You can add additional validation logic here
    // If the token is not valid, throw an UnauthorizedException
    // If the token is valid, return the user data stored in the token
    return { userId: payload.sub, username: payload.username };
  }
}