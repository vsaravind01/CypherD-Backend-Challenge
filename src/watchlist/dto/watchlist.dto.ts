import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class watchListDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(20)
  name!: string;
}
