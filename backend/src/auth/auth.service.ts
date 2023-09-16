
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './DTO/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { CredentialsDTO } from './DTO/credentials.dto';

import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
    ) {}

  async signUp(CreateUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.createUser(CreateUserDto);
  }

  async signIn(CredentialsDTO: CredentialsDTO): Promise<{ accessToken: string }> {
    const { name, password } = CredentialsDTO;
    const user = await this.userRepository.findOne({ name });

    if(user && (await bcrypt.compare(password, user.password))) {
      const payload = { id: user.id, username: user.name };
      const accessToken = await this.jwtService.sign(payload);
      return { accessToken }; 
    }
    throw new UnauthorizedException(
      'ユーザー名またはパスワードを確認してください。',
    );
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