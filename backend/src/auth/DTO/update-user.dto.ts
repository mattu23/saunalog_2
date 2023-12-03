import { IsNotEmpty, IsString, Matches, MaxLength, } from "class-validator";

export class updateUserDTO {
  @IsString()
  @IsNotEmpty({ message: 'ユーザー名は必須です' })
  @MaxLength(16,  { message: 'ユーザー名は16文字以内で入力してください' })
  username: string;

  @IsString()
  @IsNotEmpty({ message: 'Eメールは必須です' })
  @Matches(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, { message: '有効なEメールを入力してください' })
  email: string;
}