import { BitcoinConversion } from './calculate-bitcoin-price';

describe('#Calculate Bitcoin Price', () => {

    it('should add percentageMarginValue and currentBitcoinPric and convert to naira when BUY is passed  ', () => {
        const nairaEquivalent = BitcoinConversion.calculateBitcoinPrice('BUY', 0.2, 360, 360);
        expect(nairaEquivalent).toBe(129601);
    })

    it('should subtract percentageMarginValue from currentBitcoinPric and convert to naira when SELL is passed  ', () => {
        const nairaEquivalent = BitcoinConversion.calculateBitcoinPrice('SELL', 0.2, 360, 360);
        expect(nairaEquivalent).toBe(129599);
    })

    it('Return N/A when invalid enum is passed for type ', () => {
        const nairaEquivalent = BitcoinConversion.calculateBitcoinPrice('TEST', 0.2, 360, 360);
        expect(nairaEquivalent).toBe("NA");
    })
});
