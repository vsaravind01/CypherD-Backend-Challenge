import { Module } from '@nestjs/common';
import { WatchlistController } from './watchlist.controller';
import { WatchlistService } from './watchlist.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule.register({ timeout: 30000000 })],
  controllers: [WatchlistController],
  providers: [WatchlistService],
})
export class WatchlistModule {}
