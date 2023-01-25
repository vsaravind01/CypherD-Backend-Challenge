import { Body, Controller, Get, Post } from '@nestjs/common';
import { WatchlistService } from './watchlist.service';
import { watchListDto } from './dto/watchlist.dto';

@Controller('watchlist')
export class WatchlistController {
  constructor(private watchListService: WatchlistService) {}

  @Get('coins')
  getMasterCoinList() {
    console.log('Get Master Coins API Triggered');
    return this.watchListService.getMasterCoinsList();
  }

  @Post('create')
  createCoin(@Body() dto: watchListDto) {
    console.log('Create watchlist API triggered');
    return this.watchListService.createCoin(dto.name);
  }
}
