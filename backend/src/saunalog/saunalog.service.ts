import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { User } from "src/entities/user.entity";
import { SaunalogRepository } from "./saunalog.repository";
import { CreateSaunalogDto } from "src/dto/create-saunalog.dto";

@Injectable()
export class SaunalogService {
  constructor(private readonly SaunalogRepository: SaunalogRepository) {}

  async getLogsByUser(userid: number) {
    return this.SaunalogRepository.find({
      where: {userId: userid }
    });
  }

  async findOne(id: number) {
    const log = await this.SaunalogRepository.findOne(id);
    return log;
  }

  async create(CreateSaunalogDto: CreateSaunalogDto, user: User) {
    try {
      return this.SaunalogRepository.createSaunalog(CreateSaunalogDto, user);
    } catch {
      throw new InternalServerErrorException('サウナログの登録に失敗しました。');
    }
  }
 
  async updateSaunalog(id, UpdateSaunalogDto) {
    const saunalog = await this.SaunalogRepository.findOne(id);  
    saunalog.name = UpdateSaunalogDto.name;
    saunalog.area = UpdateSaunalogDto.area;
    saunalog.rank = UpdateSaunalogDto.rank;
    saunalog.comment = UpdateSaunalogDto.comment;

    try {
      return this.SaunalogRepository.save(saunalog);
    } catch {
      throw new InternalServerErrorException('サウナログの更新に失敗しました。');
    }
  }

  async delete(id: number) {
    const saunalog = await this.SaunalogRepository.findOne(id);
    return this.SaunalogRepository.remove(saunalog);
  }
  
}