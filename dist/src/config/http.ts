import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();


const axiosInstance = axios.create({
  baseURL: `${process.env.BITCOIN_PRICE_INDEX}/v1/bpi`,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export default axiosInstance;