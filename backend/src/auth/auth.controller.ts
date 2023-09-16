import { Body, Controller, Post } from '@nestjs/common';
import { User } from 'src/entities/user.entity'
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

  @Post('signin')
  async signin(@Body() CredentialsDTO: CredentialsDTO): Promise<{ accessToken: string }> {
    return await this.authService.signIn(CredentialsDTO);
  }

}
