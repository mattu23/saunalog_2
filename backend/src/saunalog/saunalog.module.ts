import { Module } from "@nestjs/common";
import { SaunalogController } from "./saunalog.controller";
import { SaunalogService } from "./saunalog.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Saunalog } from "src/entities/saunalog.entity";
import { AuthModule } from "src/auth/auth.module";
import { User } from "src/entities/user.entity";
import { SaunalogRepository } from "./saunalog.repository";

@Module({
  imports: [TypeOrmModule.forFeature([Saunalog,User,SaunalogRepository]), AuthModule],
  controllers: [SaunalogController],
  providers: [SaunalogService],
})
export class SaunalogModule {}