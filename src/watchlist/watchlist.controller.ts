import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { WatchlistService } from './watchlist.service';
import { AddTokenTdo, watchListDto } from './dto/watchlist.dto';

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

  @Put('add-token')
  addToken(@Body() dto: AddTokenTdo) {
    return this.watchListService.addToken(dto.id, dto.tokensToBeAdded);
  }

  @Delete('delete-token')
  deleteToken(@Body() dto: AddTokenTdo) {
    return this.watchListService.deleteToken(dto.id, dto.tokensToBeAdded);
  }
}
