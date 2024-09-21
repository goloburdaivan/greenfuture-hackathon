import React, { useState } from "react";

function Header() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="w-full bg-gray-900 text-white shadow-md relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 relative">

                <a href="/" className="flex items-center text-2xl font-bold tracking-wide">
                    <img src="https://cdn-icons-png.flaticon.com/512/2988/2988036.png" alt="light bulb"
                         className="w-6 h-6 mr-2"/>
                    RZHADPower
                </a>

                <nav className="hidden sm:flex space-x-6">
                    <a href="#" className="hover:text-gray-300">Home</a>
                    <a href="#" className="hover:text-gray-300">Shop</a>
                    <a href="#" className="hover:text-gray-300">Contact</a>
                </nav>

                <div className="hidden sm:flex space-x-4">
                    <a href="/login" className="hover:text-gray-300">Login</a>
                    <a href="/register" className="hover:text-gray-300">Register</a>
                </div>

                <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="sm:hidden focus:outline-none"
                >
                    <span className="material-icons text-3xl">
                        {showMenu ? "close" : "menu"}
                    </span>
                </button>
            </div>

            {showMenu && (
                <nav className="sm:hidden bg-gray-800 py-4">
                    <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Home</a>
                    <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Shop</a>
                    <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Contact</a>
                    <a href="/login" className="block px-4 py-2 text-white hover:bg-gray-700">Login</a>
                    <a href="/register" className="block px-4 py-2 text-white hover:bg-gray-700">Register</a>
                </nav>
            )}
        </header>
    );
}

export default Header;
