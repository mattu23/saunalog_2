import { IsInt, IsNotEmpty, IsString, Max, MaxLength, Min } from "class-validator";

export class CreateSaunalogDto {
  // id: number;
  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  name: string;

  @IsString()
  @IsNotEmpty()
  area: string;

  @IsInt()
  @Min(1)
  @Max(5)
  @IsNotEmpty()
  rank: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  comment: string;
}