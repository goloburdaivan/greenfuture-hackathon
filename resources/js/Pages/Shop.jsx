import React from 'react';
import Shop from '../Components/Shop/Shop.jsx';
import Header from "@/Components/Header/Header.jsx";
import Footer from "@/Components/Footer/Footer.jsx";

const ShopPage = ({ items }) => {
    return (
        <>
            <Header/>
            <Shop items={items}/>
            <Footer/>
        </>
    );
};

export default ShopPage;
