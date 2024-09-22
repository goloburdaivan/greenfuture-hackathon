import React from 'react';
import Header from "@/Components/Header/Header.jsx";
import School from "@/Components/School/School.jsx";
import Footer from "@/Components/Footer/Footer.jsx";

export default function Show({ school }) {
    return (
        <div className="bg-gray-100 flex flex-col min-h-screen">
            <Header/>
                <div className="flex-grow justify-center items-center">
                    <School school={school}/>
                </div>
            <Footer/>
        </div>
    );
}
