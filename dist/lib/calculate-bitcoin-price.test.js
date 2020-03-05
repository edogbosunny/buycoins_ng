"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculate_bitcoin_price_1 = require("./calculate-bitcoin-price");
describe('#Calculate Bitcoin Price', function () {
    it('should add percentageMarginValue and currentBitcoinPric and convert to naira when BUY is passed  ', function () {
        var nairaEquivalent = calculate_bitcoin_price_1.BitcoinConversion.calculateBitcoinPrice('BUY', 0.2, 360, 360);
        expect(nairaEquivalent).toBe(129601);
    });
    it('should subtract percentageMarginValue from currentBitcoinPric and convert to naira when SELL is passed  ', function () {
        var nairaEquivalent = calculate_bitcoin_price_1.BitcoinConversion.calculateBitcoinPrice('SELL', 0.2, 360, 360);
        expect(nairaEquivalent).toBe(129599);
    });
    it('Return N/A when invalid enum is passed for type ', function () {
        var nairaEquivalent = calculate_bitcoin_price_1.BitcoinConversion.calculateBitcoinPrice('TEST', 0.2, 360, 360);
        expect(nairaEquivalent).toBe("NA");
    });
});
