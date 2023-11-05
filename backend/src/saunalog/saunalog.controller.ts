import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { SaunalogService } from './saunalog.service';
import { CreateSaunalogDto } from 'src/dto/create-saunalog.dto';
import { SessionAuthGuard } from 'src/auth/guards/auth.guard';
import { GetUser } from 'src/auth/decorator/get-user.decorator';
import { User } from 'src/entities/user.entity';
import { Request } from 'express';




@Controller('saunalog')
@UseGuards(SessionAuthGuard)
export class SaunalogController {
  constructor(private readonly saunalogService: SaunalogService) {}

  @Get()
  getData(@Req() req) {
    const userId = req.user.id;
    return this.saunalogService.getLogsByUser(userId);
  }

  @Get(':id')
  async getOneSaunalog(@Param('id', ParseIntPipe) id: number) {
    return await this.saunalogService.findOne(id);
  }

  @Post()
    postData(@Body() CreateSaunalogDto: CreateSaunalogDto, @GetUser() user: User) {
      return this.saunalogService.create(CreateSaunalogDto, user);
    }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body('name') name: string,
    @Body('area') area: string,
    @Body('rank') rank: number,
    @Body('comment') comment: string,
  ) {
    return this.saunalogService.update(id, name, area, rank, comment);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.saunalogService.delete(id);
  }
}
