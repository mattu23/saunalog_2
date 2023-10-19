import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from 'src/entities/user.entity'
import { UserRepository } from "./user.repository";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userRepository: UserRepository) {
    super({
      //リクエストのどこの部分にjwtを記述するか指定する
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      //Tokenの有効期限切れを考慮するかどうか（有効期限を無視したい場合はtrue）
      ignoreExpiration: false,
      secretOrKey: 'secretKey123',
    });
  }

  async validate(payload: { id: string , username: string}): Promise<User> {
    const { id, username } = payload;
    const user = await this.userRepository.findOne(id);
    
    if (user) {
      return user;
    }
    throw new UnauthorizedException();
  }
}