import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './DTO/create-user.dto';
import { CredentialsDTO } from './DTO/credentials.dto';
import * as bcrypt from 'bcrypt';
import { Request } from 'express';

@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository) {}

  async signUp(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.createUser(createUserDto);
  }


  async signIn(credentialsDto: CredentialsDTO, req: Request): Promise<{ message: string }> {
    const { email, password } = credentialsDto;
    const user = await this.userRepository.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // パスワードが一致したらセッションにユーザーIDを保存
      req.session.userId = user.id;
      return { message: 'ログインに成功しました' };
    }
    console.error();
    throw new UnauthorizedException('ログイン情報が正しくありません');
  }


  async getUserById(userId: number): Promise<User> {
    return await this.userRepository.findOne(userId);
  }

  
  async signOut(req: Request): Promise<{ message: string }> {
    return new Promise((resolve, reject) => {
      req.session.destroy(err => {
        if (err) {
          reject(err);
        } else {
          resolve({ message: 'ログアウトしました' });
        }
      });
    });
  }
}
