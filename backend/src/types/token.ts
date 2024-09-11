//type for token data
export interface tokenData{
    name:string,
    symbol:string,
    contractAddress?:string,
    circulatingSupply?:number,
    totalSupply: bigint;
}
export type CryptoData = Partial<tokenData>&{
   
    symbol: string;
    price: number;
};