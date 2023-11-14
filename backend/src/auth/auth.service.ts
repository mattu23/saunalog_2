import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './DTO/create-user.dto';
import { CredentialsDTO } from './DTO/credentials.dto';
import * as bcrypt from 'bcrypt';
import { Request } from 'express';
import { error } from 'console';

@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository) {}

  //新規ユーザー登録：UserRepositoryを介してデータベースに保存
  async signUp(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.createUser(createUserDto);
  }

  //ユーザーログイン
  async signIn(credentialsDto: CredentialsDTO, req: Request): Promise<{ message: string }> {
    const { email, password } = credentialsDto;
    const user = await this.userRepository.findOne({ email });
    //パスワードが一致したらセッションにユーザーIDを保存
    if (user && (await bcrypt.compare(password, user.password))) {
      req.session.userId = user.id;
      return { message: 'ログインに成功しました' };
    }
    console.error(error);
    throw new UnauthorizedException('ログイン情報が正しくありません');
  }

  //ログインユーザーの特定
  async getUserById(userId: number): Promise<User> {
    return await this.userRepository.findOne(userId);
  }

  //ログアウト
  async signOut(req: Request): Promise<{ message: string }> {
    return new Promise((resolve, reject) => { req.session.destroy(err => {
        if (err) {
          reject(err);
        } else {
          resolve({ message: 'ログアウトしました' });
        }
      });
    });
  }
}
