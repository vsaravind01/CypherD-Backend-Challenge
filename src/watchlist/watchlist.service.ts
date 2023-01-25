import { Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios';
import { DbService } from 'src/shared';

@Injectable()
export class WatchlistService {
  constructor(private readonly db: DbService) {}
  async getMasterCoinsList() {
    const url = 'https://api.coingecko.com/api/v3/coins/list';
    const data = await axios.get(url);
    return data.data;
  }

  async createCoin(name: string) {
    const result = await this.db.create(name, []);
    return result;
  }

  async addToken(id: string, tokens: string[]) {
    const coin = (await this.db.find(id))[0];
    console.log(coin);
    if (coin) {
      coin.tokens.push(...tokens);
      coin.tokens = coin.tokens.filter((v: any, i: any, a: string | any[]) => a.indexOf(v) === i);
      const result = await this.db.update(coin.name, coin.tokens);
      return result;
    } else {
      throw new NotFoundException('Coin ID not found');
    }
  }
}
