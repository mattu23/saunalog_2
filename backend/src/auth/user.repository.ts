import { User } from "src/entities/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { CreateUserDto } from "./DTO/create-user.dto";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(CreateUserDto: CreateUserDto): Promise<User> {
    const { name, email, password } = CreateUserDto;
    const user = this.create( { name, email, password });

    await this.save(user);
    return user;
  }
}