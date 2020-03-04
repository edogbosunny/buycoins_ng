import axiosInstance from '../config/http';

export default class BIitcoinService {
    static async getCurrentBitcoinPrice() {
        try {
            const serverResponse = await axiosInstance.get('/currentprice.json')
            return serverResponse.data;
        }
        catch (err) {
            return err;
        }
    }
}
