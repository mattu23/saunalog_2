import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(16)
  username: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  @Matches(/^[A-Za-z0-9]+$/)
  password: string;
}