import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Saunalog } from "src/entities/saunalog.entity";
import { Repository } from "typeorm";

@Injectable()
export class SaunalogService {
  constructor(
    @InjectRepository(Saunalog)
    private readonly saunalogRepository: Repository<Saunalog>,
  ) {}

  async store(name: string, area: string, rank: number, comment: string) {
    const saunalog = new Saunalog();
      saunalog.name = name;
      saunalog.area = area;
      saunalog.rank = rank;
      saunalog.comment = comment;
    const updatedSaunalog = await this.saunalogRepository.save(saunalog);
    return updatedSaunalog;
  }

  get() {
    return this.saunalogRepository.find();
  }

  async findOne(id: number) {
    const log = await this.saunalogRepository.findOne(id);
    return log;
  }
 
  async update(id, name: string, area: string, rank: number, comment: string) {
    const saunalog = await this.saunalogRepository.findOne(id);  
    saunalog.name = name;
    saunalog.area = area;
    saunalog.rank = rank;
    saunalog.comment = comment;
    return this.saunalogRepository.save(saunalog);
  }

  async delete(id: number) {
    const saunalog = await this.saunalogRepository.findOne(id);
    return this.saunalogRepository.remove(saunalog);
  }
  
}