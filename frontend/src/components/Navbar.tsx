import React from 'react';
import logo from "./../assets/priceTracker.png"
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

interface NavbarProps {
    setLightMode: React.Dispatch<React.SetStateAction<boolean>>;
    lightMode: boolean;
}
const Navbar: React.FC<NavbarProps> = ({ setLightMode, lightMode }) => {
    return (
        <div className='flex text-xl  text-yellow-600 realtive'>
            <img src={logo} className='w-40 h-7'></img>
            <div className='flex ml-auto mr-10 space-x-5'>
                {lightMode ?
                    <div className='absolute top-1' onClick={() => setLightMode(!lightMode)}><MdDarkMode />
                    </div> :
                    <div className='absolute top-1' onClick={() => setLightMode(!lightMode)}><MdOutlineLightMode /></div>}
                <div className="group relative ml-1 ">
                    <p className='ml-3'>
                        Exchanges
                    </p>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2  w-20 h-5 bg-gray-100 rounded shadow-lg text-xs text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ">
                        Coming soon..
                    </div>
                </div>
                <div className="group relative ml-1 ">
                    <p >
                        Watchlist
                    </p>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2  w-20 h-5 bg-gray-100 rounded shadow-lg text-xs text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ">
                        Coming soon..
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
