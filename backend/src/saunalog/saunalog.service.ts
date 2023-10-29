import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Saunalog } from "src/entities/saunalog.entity";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { SaunalogRepository } from "./saunalog.repository";
import { CreateSaunalogDto } from "src/dto/create-saunalog.dto";

@Injectable()
export class SaunalogService {
  constructor(private readonly SaunalogRepository: SaunalogRepository) {}

  get() {
    return this.SaunalogRepository.find();
  }

  async findOne(id: number) {
    const log = await this.SaunalogRepository.findOne(id);
    return log;
  }

  async create(CreateSaunalogDto: CreateSaunalogDto, user: User) {
    return this.SaunalogRepository.createSaunalog(CreateSaunalogDto, user);
  }
 
  async update(id, name: string, area: string, rank: number, comment: string) {
    const saunalog = await this.SaunalogRepository.findOne(id);  
    saunalog.name = name;
    saunalog.area = area;
    saunalog.rank = rank;
    saunalog.comment = comment;
    return this.SaunalogRepository.save(saunalog);
  }

  async delete(id: number) {
    const saunalog = await this.SaunalogRepository.findOne(id);
    return this.SaunalogRepository.remove(saunalog);
  }
  
}