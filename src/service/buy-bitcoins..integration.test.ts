import BitcoinService from './buy-bitcoins.service';

jest.mock('axios');

describe('#Bitcoin service', () => {
    it('should test the service function', async () => {
        const response = await BitcoinService.getCurrentBitcoinPrice();
        expect(response).not.toBe(null);
    })
})