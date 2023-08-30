import { Module } from "@nestjs/common";
import { SaunalogController } from "./saunalog.controller";
import { SaunalogService } from "./saunalog.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Saunalog } from "backend/src/entities/saunalog.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Saunalog])],
  controllers: [SaunalogController],
  providers: [SaunalogService],
})
export class SaunalogModule {}