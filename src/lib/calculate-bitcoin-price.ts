export class BitcoinConversion {
    static calculateBitcoinPrice(type: string,
        margin: number,
        exchangeRate: number,
        currentBitcoinPrice: number) {

        const percentageMarginValue = margin / 100;

        const typeMap: any = {
            'BUY': Math.round((percentageMarginValue + currentBitcoinPrice) * exchangeRate),
            'SELL': Math.round((currentBitcoinPrice - percentageMarginValue) * exchangeRate),
        }

        return typeMap[type] ? typeMap[type] : 'NA';
    }
}
