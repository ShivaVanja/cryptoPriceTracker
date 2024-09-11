import { useEffect, useState } from "react";
import { numTruncator } from "../utils/numTruncator";
type pricedata = {
    name:string,
    symbol:string
    price:number, 
    totalSupply:string,
    circulatingSupply:number
    
}
type Parsed ={
    cryptoPrices:pricedata[],
}
const PricesCard = () => {
   
    const [prices, setPrices] = useState<pricedata[]>([]);
    useEffect(()=>{
     const ws = new WebSocket("ws://localhost:3000");//ws://3.111.157.2:8080
        ws.onopen = () => {
            console.log("initialised ws on browser");
        }
        try{
        ws.onmessage = (message) => {
            const parsed: Parsed = JSON.parse(message.data);
            setPrices(parsed.cryptoPrices);
        }
    }
    catch(error){
        console.log("error caught:",error)
    }
    return () => {
        ws.close();
      };

    },[])
   

    return (
        <>
            {prices.map((token)=>
            (
            <tr className="dark:text-white text-black border-y border-gray-400 h-16 general-text text-lg ">
                <td className="font-bold ">{token.name}</td>
                <td className="font-semibold">{token.symbol}</td>
                <td>${numTruncator(token.price)}</td>
                <td>{numTruncator(token.circulatingSupply)}</td>
                <td>${numTruncator(token.price*token.circulatingSupply)}</td>
                <td>{token.totalSupply}</td>
                </tr>
            )
            )}
        
            </>

    )
}

export default PricesCard