import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class AggregateService {
  constructor(private config: ConfigService) {}

  async getAggregate(address: string) {
    const api_key = this.config.get('COVALANTHQ_API_KEY');
    const url = `https://api.covalenthq.com/v1/1/address/${address}/balances_v2/?key=${api_key}`;
    const data = (await axios.get(url)).data.data;
    const items = data.items;
    const result = {
      address: address,
      balances: {
        eth: Array(),
        polygon: Array(),
        fantom: Array(),
      },
    };

    items.forEach((item: any) => {
      if (item.contract_name === 'Ether') {
        result.balances.eth.push({
          name: item.contract_name,
          symbol: item.contract_ticker_symbol,
          decimals: '',
          contractAddress: item.contract_address,
          contractDecimals: '',
          logo: item.logo_url,
          balance: item.balance,
          balanceInUSD: item.balance_24h,
        });
      } else if (item.contract_name === 'Polygon') {
        result.balances.polygon.push({
          name: item.contract_name,
          symbol: item.contract_ticker_symbol,
          decimals: '',
          contractAddress: item.contract_address,
          contractDecimals: '',
          logo: item.logo_url,
          balance: item.balance,
          balanceInUSD: item.balance_24h,
        });
      } else if (item.contract_name === 'Fantom') {
        result.balances.fantom.push({
          name: item.contract_name,
          symbol: item.contract_ticker_symbol,
          decimals: '',
          contractAddress: item.contract_address,
          contractDecimals: '',
          logo: item.logo_url,
          balance: item.balance,
          balanceInUSD: item.balance_24h,
        });
      }
    });
    console.log('Aggregate API triggered | address : ' + address);
    return result;
  }
}
