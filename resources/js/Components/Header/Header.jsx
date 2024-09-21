import React, {useState} from "react";
import {usePage} from "@inertiajs/react";

function Header() {
    const {props} = usePage();
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="bg-gray-900 text-white shadow-md relative font-sans">
            <div className=" px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 relative">
                <a href="/" className="flex items-center text-xl font-bold tracking-wide ml-0">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2988/2988036.png"
                        alt="light bulb"
                        className="w-6 h-6 mr-2"
                    />
                    RZHADPower
                </a>

                <nav className="hidden text-lg sm:flex space-x-8">
                    <a href="/" className="hover:text-gray-300">Головна</a>
                    <a href="/shop" className="hover:text-gray-300">Магазин</a>
                    <a href="/faq" className="hover:text-gray-300">FAQ</a>
                </nav>

                {!props.auth ? <div className="hidden sm:flex space-x-4">
                    <a href="/login" className="text-lg hover:text-gray-300">Увійти</a>
                    <a href="/register" className="text-lg hover:text-gray-300">Зареєструватися</a>
                </div> : null}

                <div
                    className="sm:hidden cursor-pointer flex flex-col justify-center items-center space-y-1 w-8 h-8 ml-auto"
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <div
                        className={`h-1 w-6 bg-white transform transition duration-300 ${showMenu ? 'rotate-45 translate-y-2' : ''}`}
                    />
                    <div
                        className={`h-1 w-6 bg-white transition duration-300 ${showMenu ? 'opacity-0' : ''}`}
                    />
                    <div
                        className={`h-1 w-6 bg-white transform transition duration-300 ${showMenu ? '-rotate-45 -translate-y-2' : ''}`}
                    />
                </div>
            </div>

            {showMenu && (
                <nav className="sm:hidden bg-gray-800 py-4">
                    <a href="#" className="block px-4 py-2 text-lg text-white hover:bg-gray-700">Home</a>
                    <a href="#" className="block px-4 py-2 text-lg text-white hover:bg-gray-700">Shop</a>
                    <a href="/FAQPage" className="block px-4 py-2 text-lg text-white hover:bg-gray-700">FAQ</a>
                    <a href="/login" className="block px-4 py-2 text-lg text-white hover:bg-gray-700">Login</a>
                    <a href="/register" className="block px-4 py-2 text-lg text-white hover:bg-gray-700">Register</a>
                </nav>
            )}
        </header>
    );
}

export default Header;
