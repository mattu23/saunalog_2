import { Module } from "@nestjs/common";
import { SaunalogController } from "./saunalog.controller";
import { SaunalogService } from "./saunalog.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Saunalog } from "src/entities/saunalog.entity";
import { AuthModule } from "src/auth/auth.module";

@Module({
  imports: [TypeOrmModule.forFeature([Saunalog]), AuthModule],
  controllers: [SaunalogController],
  providers: [SaunalogService],
})
export class SaunalogModule {}