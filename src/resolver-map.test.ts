import 'cross-fetch/polyfill'
import resolverMap from './resolver-map';


describe('testing resolver test', () => {
    let args = {
        data: {
            margin: 2.3,
            exchangeRate: 360,
            type: 'BUY'
        }
    }
    it('should test resolver', async () => {
        const resolver = (resolverMap as any).Query.calculatePrice;
        const result = await resolver({}, args)
        expect(result.nairaEquivalent).not.toBe(null);
    })
})