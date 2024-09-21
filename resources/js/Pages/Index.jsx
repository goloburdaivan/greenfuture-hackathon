import React from "react";
import Header from "@/Components/Header/Header.jsx";
import Footer from "@/Components/Footer/Footer.jsx";


export default function Index() {
    return (
        <>
            <Header/>
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                    <h1>Головна сторінка</h1>
                </div>
            <Footer/>
        </>
    );
}
