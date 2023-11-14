import { EntityRepository, Repository } from "typeorm";
import { User } from "src/entities/user.entity";
import { CreateUserDto } from "./DTO/create-user.dto";
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { username, email, password } = createUserDto;
    const hashPassword = await bcrypt.hash(password, 10); // ソルトを自動で生成
    const user = this.create({ username, email, password: hashPassword });

    //ユーザー情報をDBに保存
    try {
      await this.save(user);
      return user;
    } catch (error) {
      throw new Error('ユーザーの保存に失敗しました。');
    }
  }
}
