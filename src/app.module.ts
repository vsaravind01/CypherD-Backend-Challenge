import { SharedModule } from './shared';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AggregateModule } from './aggregate/aggregate.module';
import { ConfigModule } from '@nestjs/config';
import { WatchlistModule } from './watchlist/watchlist.module';

@Module({
  imports: [SharedModule, ConfigModule.forRoot({ isGlobal: true }), AggregateModule, WatchlistModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
