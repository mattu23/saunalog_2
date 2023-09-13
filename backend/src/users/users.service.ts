import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity'; // typeormで定義したUserエンティティ


/**
 * @description User情報を扱うクラス
 */

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}
  //ユーザーを一人返す
  findOne(username: User['name']): Promise<User | undefined> {
    //TypeORMからDBにアクセスして、ユーザーを取得する
    return this.userRepository.findOne({ where: {name} });
  }
}

