import AssetCard from "./PricesCard";
import { FaInfoCircle } from "react-icons/fa";

const Home: React.FC = () => {


    return (
        <div>
            <div className="flex-col text-white ">
                <div className="mx-10 ">
                    <h1 className="text-2xl font-bold py-2 general-text">
                        Track crypto prices in Real time
                    </h1>
                    <div >
                        <table className="w-full">
                            <thead>
                                <tr className="text-left text-yellow-600 font-sans text-lg">

                                    <th>Name</th>
                                    <th>Symbol</th>
                                    <th>Price</th>
                                    <th className="flex">Circulating supply
                                        <div className="group relative ml-1 top-2">
                                            <FaInfoCircle className="text-sm text-gray-400 cursor-help " />
                                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mb-2 p-2 w-48 bg-white rounded shadow-lg text-sm text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none font-normal">
                                                The amount of coins that are circulating in the market and are in public hands.
                                            </div>
                                        </div>
                                    </th>
                                    <th className="">Marketcap

                                    </th>
                                    <th className="flex">Total supply
                                        <div className="group relative ml-1 top-2">
                                            <FaInfoCircle className="text-sm text-gray-400 cursor-help " />
                                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mb-2 p-2 w-48 bg-white rounded shadow-lg text-sm text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-normal pointer-events-none ">
                                                Total supply = Total coins created - coins that have been burned (if any)
                                            </div>
                                        </div>
                                    </th>

                                    {/* <th>1h%</th>
                            <th>24h%</th>
                            <th>Marketcap</th> */}
                                </tr>
                            </thead>
                            <tbody >

                                <AssetCard />
                            </tbody>
                        </table>

                    </div>

                </div>
                <div>

                </div>
            </div>
        </div>)
}

export default Home;