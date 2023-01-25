import { ArrayMinSize, IsArray, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class watchListDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(20)
  name!: string;
}

export class AddTokenTdo {
  @IsString()
  @IsNotEmpty()
  id!: string;

  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  tokensToBeAdded!: string[];
}
