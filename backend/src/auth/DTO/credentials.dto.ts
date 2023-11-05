import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

//ログイン情報のDTO
export class CredentialsDTO {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  password: string;
}