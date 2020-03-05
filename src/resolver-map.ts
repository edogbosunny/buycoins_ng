import { IResolvers } from 'graphql-tools';

import service from './service/buy-bitcoins.service';
import { BitcoinConversion } from './lib/calculate-bitcoin-price';

const resolverMap: IResolvers = {
  Query: {
    async calculatePrice(_: void, args: any) {
      const bitcoinApiResponse = await service.getCurrentBitcoinPrice();
      const { rate_float } = bitcoinApiResponse.bpi.USD
      const { type, margin, exchangeRate } = args.data;
      const bitcoinPrice = BitcoinConversion.calculateBitcoinPrice(type, margin, exchangeRate, rate_float);
      return {
        nairaEquivalent: bitcoinPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      };
    }
  },
};
export default resolverMap;
