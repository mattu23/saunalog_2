import { IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min } from "class-validator";

export class UpdateSaunalogDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  area: string;

  @IsNumber()
  @Min(1)
  @Max(5)
  @IsNotEmpty()
  rank: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  comment: string;
}