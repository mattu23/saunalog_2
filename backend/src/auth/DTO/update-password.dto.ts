import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class updatePasswordDTO {
  @IsString()
  @MinLength(8, { message: 'パスワードは8文字以上で入力してください' })
  @MaxLength(32, { message: 'パスワードは32文字以内で入力してください' })
  @Matches(/^[A-Za-z0-9]+$/, { message: 'パスワードは半角英数字のみで入力してください' })
  password: string;

  @IsString()
  @MinLength(8, { message: '新しいパスワードは8文字以上で入力してください' })
  @MaxLength(32, { message: '新しいパスワードは32文字以内で入力してください' })
  @Matches(/^[A-Za-z0-9]+$/, { message: '新しいパスワードは半角英数字のみで入力してください' })
  newPassword: string;
}