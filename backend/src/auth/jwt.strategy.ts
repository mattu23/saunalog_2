import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from 'src/entities/user.entity'
import { UserRepository } from "./user.repository";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userRepository: UserRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secretKey123',
    });
  }

  async validate(payload: { id: string }): Promise<User> {
    const { id } = payload;
    const user = await this.userRepository.findOne(id);
    
    if (user) {
      return user;
    }
    throw new UnauthorizedException();
  }
}