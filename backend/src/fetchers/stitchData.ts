import { CryptoData, tokenData } from "../types";
import { getCryptoData } from "../websockets/binancewebsocket"
import symbolsFetcher from "./symbolsFetcher";
export const stitchData = async ()=>{
    const priceData =  getCryptoData();
    const symbols = await symbolsFetcher();
    const priceFeed: { name: string; symbol: string; price: number; totalSupply: string | null; circulatingSupply: number | null; }[] = [];

    symbols.forEach(token => {
        if(priceData[token.symbol] !=undefined){

        
        const price = {
            name:token.name,
            symbol:priceData[token.symbol].symbol,
            price:priceData[token.symbol].price,
            totalSupply:token.totalSupply,
            circulatingSupply:token.circulatingSupply,
        }
      
        priceFeed.push(price);
    }
    });

    return priceFeed;
    
    
}

