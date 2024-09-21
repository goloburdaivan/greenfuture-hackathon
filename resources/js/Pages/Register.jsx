import React, { useState } from "react";
import Header from "@/Components/Header/Header.jsx";
import RegistrationForm from "@/Components/RegistrationForm/RegistrationForm.jsx";
import Footer from "@/Components/Footer/Footer.jsx";

const Registration = () => {
    return (
        <>
            <Header/>
            <RegistrationForm/>
            <Footer/>
        </>
    );
};

export default Registration;
