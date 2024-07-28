//type for token data
export interface tokenData{
    name:string,
    symbol:string,
    contractAddress?:string,
    circulatingSupply?:number,
    totalSupply?: string;
}
export type CryptoData = Partial<tokenData>&{
   
    symbol: string;
    price: number;
};