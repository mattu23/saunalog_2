import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'ユーザー名は必須です' })
  @MaxLength(16, { message: 'ユーザー名は16文字以内で入力してください' })
  username: string;

  @IsString()
  @IsNotEmpty({ message: 'Eメールは必須です' })
  @Matches(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, { message: '有効なEメールを入力してください' })
  email: string;

  @IsString()
  @MinLength(8, { message: 'パスワードは8文字以上で入力してください' })
  @MaxLength(32, { message: 'パスワードは32文字以下で入力してください' })
  @Matches(/^[A-Za-z0-9]+$/, { message: 'パスワードは半角英数字のみで入力してください' })
  password: string;
}
