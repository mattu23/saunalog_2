import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CredentialsDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  password: string;
}