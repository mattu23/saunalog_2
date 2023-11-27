import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class updatePasswordDTO {
  @IsString()
  @MinLength(8)
  @MaxLength(32)
  @Matches(/^[A-Za-z0-9]+$/)
  password: string;
}