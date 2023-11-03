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

    try {
      await this.save(user);
      return user;
    } catch (error) {
      throw new Error('ユーザーの保存に失敗しました。');
    }
  }
}





// import { User } from "src/entities/user.entity";
// import { EntityRepository, Repository } from "typeorm";
// import { CreateUserDto } from "./DTO/create-user.dto";
// import * as bcrypt from 'bcrypt';

// @EntityRepository(User)
// export class UserRepository extends Repository<User> {
//   async createUser(CreateUserDto: CreateUserDto): Promise<User> {
//     const { username, email, password } = CreateUserDto;
//     const salt = await bcrypt.genSalt();
//     const hashPassword = await bcrypt.hash(password, salt);
//     const user = this.create( { username, email, password: hashPassword });

//     //エンティティをデータベースに保存する
//     await this.save(user);
//     return user;
//   }
// }