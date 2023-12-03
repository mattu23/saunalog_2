import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CredentialsDTO {
  @IsString()
  @IsNotEmpty({ message: 'Eメールは必須です' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Eメールは必須です' })
  @MinLength(8, { message: 'パスワードは8文字以上で入力してください' })
  @MaxLength(32, { message: 'パスワードは32文字以下で入力してください' })
  password: string;
}
