import { useEffect, useState } from "react";
type pricedata = {
    // id:string,
    name:string,
    symbol:string
    price:number, 
    totalSupply:number|string,
    circulatingSupply:number
    // hourChange:string,
    // dailyChange:string,
}
type Parsed ={
    cryptoPrices:pricedata[],
}
const PricesCard = () => {
   
    const [prices, setPrices] = useState<pricedata[]>([]);
    useEffect(()=>{
        const ws = new WebSocket("ws://localhost:3000");
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
            (<tr className="text-sm border-y border-gray-400 h-20 general-text">
                <td className="font-bold">{token.name}</td>
                <td className="font-semibold">{token.symbol}</td>
                <td>${token.price.toLocaleString()}</td>
                <td>{token.circulatingSupply.toLocaleString()}</td>
                <td>${Math.trunc(token.price*token.circulatingSupply).toLocaleString()}</td>
                <td>{token.totalSupply=="uncapped"?'∞':(token.totalSupply).toLocaleString()}</td>
                {/* <td>{token.hourChange}</td>
                <td>{token.dailyChange}</td>
                <td>{token.price * token.totalSupply}</td> */}
            </tr>))}
        
            </>

    )
}

export default PricesCard