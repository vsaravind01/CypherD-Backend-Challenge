import { Body, Controller, Post } from '@nestjs/common';
import { AggregateDto } from './dto';
import { AggregateService } from './aggregate.service';

@Controller('aggregate')
export class AggregateController {
  constructor(private aggregateService: AggregateService) {}
  @Post('get')
  async getAggregate(@Body() dto: AggregateDto) {
    return this.aggregateService.getAggregate(dto.address);
  }
}
