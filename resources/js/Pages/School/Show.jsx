import React from 'react';
import Header from "@/Components/Header/Header.jsx";
import School from "@/Components/School/School.jsx";
import {WebSocketProvider} from "@/Providers/WebSocketProvider.jsx";
import Footer from "@/Components/Footer/Footer.jsx";

export default function Show({ school }) {
    return (
        <div className="bg-gray-100 flex flex-col min-h-screen">
            <Header/>
                <div className="flex-grow justify-center items-center">
                    <WebSocketProvider>
                        <School school={school}/>
                    </WebSocketProvider>
                </div>
            <Footer/>
        </div>
    );
}
