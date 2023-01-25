import { Injectable } from '@nestjs/common';
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
}
