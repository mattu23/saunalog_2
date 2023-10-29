import { CreateSaunalogDto } from "src/dto/create-saunalog.dto";
import { Saunalog } from "src/entities/saunalog.entity";
import { EntityRepository, Repository } from "typeorm";
import { User } from "src/entities/user.entity";

@EntityRepository(Saunalog)
export class SaunalogRepository  extends Repository<Saunalog>{
  async createSaunalog(CreateSaunalogDto: CreateSaunalogDto, user: User): Promise<Saunalog> {
    const {name, area, rank, comment } = CreateSaunalogDto;
    const saunalog = this.create({
      name,
      area,
      rank,
      comment,
      user,
    });

    // await this.save(saunalog);
    try {
      await this.save(saunalog);
    } catch (error) {
      console.error(error);
    };
    

    return saunalog;
  }
}