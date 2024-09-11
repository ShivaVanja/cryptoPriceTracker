import React from 'react';
import { Menu, Moon, Sun } from 'lucide-react'


interface NavbarProps {
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
    darkMode: boolean;
}
const Navbar: React.FC<NavbarProps> = ({ setDarkMode, darkMode }) => {
    return (
        <div className='bg-gray-800 dark:bg-gray-950 p-4 flex text-xl  text-yellow-600 realtive'>
            <div className="flex items-center space-x-4">
                <button className="md:hidden">
                    <Menu className="h-6 w-6" />
                </button>
            <p className="text-xl font-bold">CryptoTracker</p>
            </div>
            <div className='flex ml-auto mr-10 space-x-5'>
                {darkMode ?
                    <div className='absolute top-4' onClick={() => setDarkMode(!darkMode)}> <Sun className="h-5 w-5" />
                    </div> :
                    <div className='absolute top-4' onClick={() => setDarkMode(!darkMode)}><Moon className="h-5 w-5" /></div>}
            </div>
        </div>
    );
};

export default Navbar;
