
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { Auth0User } from './user.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async signUp(auth0User: Auth0User): Promise<void> {
    const user = await this.getUser(auth0User);
    if (!user) {
      const user = new User();
      user.name = auth0User.name;
      user.email = auth0User.email;
      user.auth0_user_id = auth0User.user_id;
      await this.usersRepository.save(user);
    }
  }

  async getUser(auth0User: Auth0User): Promise<User> {
    const email = auth0User.email;
    const user = await this.usersRepository.findOne({
      email: email,
    });
    return user;
  }
}





// import bcrypt = require('bcrypt');
// import { Injectable } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { User } from 'src/entities/user.entity'
// import { UsersService } from 'src/users/users.service';


// type PasswordOmitUser = Omit<User, 'password'>;

// interface JWTPayload {
//   userId: User['id'];
//   username: User['name'];
// }

// /**
//  * @description Passportでは出来ない認証処理をするクラス
//  */

// @Injectable()
// export class AuthService {
//   constructor(private jwtService: JwtService, private usersService: UsersService) {}

//   //ユーザーを認証する
//   async validateUser(name: User['name'], pass: User['password']): Promise<PasswordOmitUser | null> {
//     const user = await this.usersService.findOne(name); //DBからUserを取得

//     // DBに保存されているpasswordはハッシュ化されている事を想定しているので、
//     // bcryptなどを使ってパスワードを判定する
//     if(user && bcrypt.compareSync(pass, user.password)) {
//       const { password, ...result } = user; //パスワードを外部に出さないようにする
//       return result;
//     }
//     return null;
//   }

//   // jwt tokenを返す
//   async login(user: PasswordOmitUser) {
//     //jwtにつけるPayload情報
//     const payload: JwtPayload = { userId: user.id, username: user.name };

//     return  {
//       access_token: this.jwtService.sign(payload),
//     };
//   }
// }