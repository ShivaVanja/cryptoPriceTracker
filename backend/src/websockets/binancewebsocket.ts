import { WebSocket } from "ws";
import symbolsFetcher from "../services/symbolsFetcher";
import { CryptoData } from "../types";

const priceWsUrl = process.env.PRICE_WS_URL
const cryptoData: { [symbol: string]: CryptoData } = {};

export const startBinanceWebsocket = async () => {
    const symbols = await symbolsFetcher();
    const tokens:Array<String> = []
    symbols.forEach((token)=>{
        tokens.push(token.symbol.toLowerCase()+"usdt@markPrice");

    })
    

    const wsUrl = `${priceWsUrl}${tokens.join('/')}`;

    const ws = new WebSocket(wsUrl);
    ws.on('open', () => {
        console.log('connected to binance webscoket', wsUrl);
    })
    ws.on('message', (data) => {
        let message: string;
        if (typeof data === 'string') {
            message = data;
        } else if (data instanceof Buffer) {
            message = data.toString('utf-8');
        } else {
            console.error('Unexpected message type:', typeof data);
            return;
        }
        const parsedMessage = JSON.parse(message);
        const streamName = parsedMessage.stream;
        const messageData = parsedMessage.data;
         // Extract relevant data
         const symbol = messageData.s.slice(0,-4);
         const price = parseFloat(messageData.p);
       
         cryptoData[symbol] ={
            symbol:symbol,
            price:price
         }

    

    });
    ws.on('error', (error) => {
        console.error('WebSocket error:', error);
    });
    ws.on('close', () => {
        console.log('WebSocket connection closed');
    });
}
export const getCryptoData = () => {
    // return Object.values(cryptoData);
   return cryptoData;
};