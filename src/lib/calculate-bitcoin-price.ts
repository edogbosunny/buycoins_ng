export class BitcoinConversion {
    static calculateBitcoinPrice(type: string,
        margin: number,
        exchangeRate: number,
        currentBitcoinPrice: number) {

        const percentageMarginValue = margin * 100

        if (type === 'BUY') {
            // evaluate and convert to Naira using the exchange rate
            return Math.round((percentageMarginValue + currentBitcoinPrice) * exchangeRate);

        } else {
            return Math.round((percentageMarginValue - currentBitcoinPrice) * exchangeRate);
        }
    }
}