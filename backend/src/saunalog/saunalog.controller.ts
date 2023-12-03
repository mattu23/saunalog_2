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
import { UpdateSaunalogDto } from 'src/dto/update-saunalog.dto';


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
  updateSaunalog( @Param('id', ParseIntPipe) id: number, @Body() UpdateSaunalogDto: UpdateSaunalogDto) {
    return this.saunalogService.updateSaunalog(id, UpdateSaunalogDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.saunalogService.delete(id);
  }
}
