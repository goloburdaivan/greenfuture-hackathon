import React, { useState } from "react";
import { usePage } from "@inertiajs/react";

function Header() {
    const { props } = usePage();
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="bg-gray-900 text-white shadow-md relative font-sans">
            <div className="px-4 sm:px-6 lg:px-8 flex items-center h-16 relative">

                <a href="/" className="flex items-center text-xl font-bold tracking-wide">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2988/2988036.png"
                        alt="light bulb"
                        className="w-6 h-6 mr-2"
                    />
                    RZHADPower
                </a>

                <nav className="text-lg flex space-x-8 ml-8">
                    <a href="/" className="hover:text-gray-300">Головна</a>
                    <a href="/shop" className="hover:text-gray-300">Магазин</a>
                    <a href="/faq" className="hover:text-gray-300">FAQ</a>
                </nav>

                <div className="absolute right-0 mr-6">
                    {!props.auth ? (
                        <div className="hidden sm:flex space-x-4">
                            <a href="/login" className="text-lg hover:text-gray-300">Увійти</a>
                            <a href="/register" className="text-lg hover:text-gray-300">Зареєструватися</a>
                        </div>
                    ) : (
                        <div className="hidden sm:flex space-x-4">
                            <a href="/logout" className="text-lg hover:text-gray-300">Вийти</a>
                        </div>
                    )}
                </div>

                <div
                    className="sm:hidden cursor-pointer flex flex-col justify-center items-center space-y-1 w-8 h-8 absolute right-0 mr-4"
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
                    <a href="/" className="block px-4 py-2 text-lg text-white hover:bg-gray-700">Головна</a>
                    <a href="/shop" className="block px-4 py-2 text-lg text-white hover:bg-gray-700">Магазин</a>
                    <a href="/faq" className="block px-4 py-2 text-lg text-white hover:bg-gray-700">FAQ</a>
                    {!props.auth ? (
                        <>
                            <a href="/login" className="block px-4 py-2 text-lg text-white hover:bg-gray-700">Увійти</a>
                            <a href="/register" className="block px-4 py-2 text-lg text-white hover:bg-gray-700">Зареєструватися</a>
                        </>
                    ) : (
                        <a href="/logout" className="block px-4 py-2 text-lg text-white hover:bg-gray-700">Вийти</a>
                    )}
                </nav>
            )}
        </header>
    );
}

export default Header;
