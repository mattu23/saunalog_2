import { IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min } from "class-validator";

export class UpdateSaunalogDto {
  @IsString()
  @IsNotEmpty({ message: '名前は入力必須です' })
  @MaxLength(20, { message: '名前は20文字以内で入力してください。' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'エリアは入力必須です' })
  @MaxLength(20, { message: 'エリアは20文字以内で入力してください。' })
  area: string;

  @IsNumber()
  @Min(1)
  @Max(5)
  @IsNotEmpty({ message: 'ランクは入力必須です' })
  rank: number;

  @IsString()
  @IsNotEmpty({ message: 'コメントは入力必須です' })
  @MaxLength(100, { message: 'コメントは100文字以内で入力してください。' })
  comment: string;
}
