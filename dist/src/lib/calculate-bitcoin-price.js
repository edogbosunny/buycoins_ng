"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BitcoinConversion = (function () {
    function BitcoinConversion() {
    }
    BitcoinConversion.calculateBitcoinPrice = function (type, margin, exchangeRate, currentBitcoinPrice) {
        var percentageMarginValue = margin / 100;
        var typeMap = {
            'BUY': Math.round((percentageMarginValue + currentBitcoinPrice) * exchangeRate),
            'SELL': Math.round((currentBitcoinPrice - percentageMarginValue) * exchangeRate),
        };
        return typeMap[type] ? typeMap[type] : 'NA';
    };
    return BitcoinConversion;
}());
exports.BitcoinConversion = BitcoinConversion;
