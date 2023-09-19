
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './DTO/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { CredentialsDTO } from './DTO/credentials.dto';

// import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
    ) {}

  async signUp(CreateUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.createUser(CreateUserDto);
  }

  async signIn(CredentialsDTO: CredentialsDTO): Promise<{ accessToken: string }> {
    const { name, password } = CredentialsDTO;
    const user = await this.userRepository.findOne({ name });

    // if(user && (await bcrypt.compare(password, user.password))) {
    if(user) {
      const payload = { id: user.id, username: user.name };
      const accessToken = await this.jwtService.sign(payload);
      return { accessToken }; 
    }
    throw new UnauthorizedException(
      'ユーザー名またはパスワードを確認してください。',
    );
  }
}