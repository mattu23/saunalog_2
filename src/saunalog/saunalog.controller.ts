import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { SaunalogService } from './saunalog.service';
import { CreateSaunalogDto } from 'src/dto/create-saunalog.dto';
import { Saunalog } from 'src/entities/saunalog.entity';

// type Body = {
//   name: string;
//   area: string;
//   rank: number;
//   comment: string;
// }
@Controller('saunalog')
export class SaunalogController {
  constructor(private readonly saunalogService: SaunalogService) {}

  @Get()
  getData() {
    return this.saunalogService.get();
  }

  @Post()
  postData(
    // @Body() CreateSaunalogDto: CreateSaunalogDto) {
    @Body('name') name: string,
    @Body('area') area: string,
    @Body('rank') rank: number,
    @Body('comment') comment: string,
  ) {
    return this.saunalogService.store(name, area, rank, comment);
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
