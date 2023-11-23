import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class updatePasswordDTO {
  @IsString()
  @MinLength(8)
  @MaxLength(32)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
  
  password: string;
}