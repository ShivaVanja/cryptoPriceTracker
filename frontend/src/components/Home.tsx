import AssetCard from "./PricesCard";


const Home: React.FC = () => {


    return (
        <div className="dark:bg-gray-900 dark:text-gray-100 min-h-screen ">
            <div className="flex-col dark:text-white text-black">
                <div className=" container mx-4  px-4 ">
                    <h1 className="text-2xl font-semibold mb-4">Cryptocurrency Prices</h1>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left text-black dark:text-gray-500 font-sans text-lg">
                                    <th className="font-medium">Name</th>
                                    <th>Symbol</th>
                                    <th>Price</th>
                                    <th className="flex">Circulating supply </th>
                                    <th >Marketcap</th>
                                    <th className="flex">Total supply</th>
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