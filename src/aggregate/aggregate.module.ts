import { Module } from '@nestjs/common';
import { AggregateController } from './aggregate.controller';
import { AggregateService } from './aggregate.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule.register({ timeout: 300222000, maxRedirects: 5 })],
  controllers: [AggregateController],
  providers: [AggregateService],
})
export class AggregateModule {}
