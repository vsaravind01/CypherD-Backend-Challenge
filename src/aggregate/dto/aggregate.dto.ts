import { IsNotEmpty, IsString } from 'class-validator';

export class AggregateDto {
  @IsString()
  @IsNotEmpty()
  address!: string;
}
