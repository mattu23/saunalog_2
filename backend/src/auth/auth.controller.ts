import { Body, Controller, Post, Req, Get, } from '@nestjs/common';
import { Request } from 'express';
import { User } from 'src/entities/user.entity';
import { AuthService } from './auth.service';
import { CreateUserDto } from './DTO/create-user.dto';
import { CredentialsDTO } from './DTO/credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body() CreateUserDto: CreateUserDto): Promise<User> {
    return await this.authService.signUp(CreateUserDto);
  }

  @Post('login')
  async signin(@Body() credentialsDto: CredentialsDTO, @Req() req: Request) {
    return this.authService.signIn(credentialsDto, req)
  }

  @Get('user')
  async getUser(@Req() req:Request): Promise<User> {
    const user = await this.authService.getUserById(req.session.userId);
    return user;
  }

  @Post('logout')
  async logout(@Req() req: Request) {
    return this.authService.signOut(req);
  }
}
