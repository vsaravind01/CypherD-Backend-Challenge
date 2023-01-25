import { Module } from '@nestjs/common';
import { WatchlistController } from './watchlist.controller';
import { WatchlistService } from './watchlist.service';
import { SharedModule } from 'src/shared';

@Module({
  imports: [SharedModule],
  controllers: [WatchlistController],
  providers: [WatchlistService],
})
export class WatchlistModule {}
