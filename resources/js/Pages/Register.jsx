import React from "react";
import Header from "@/Components/Header/Header.jsx";
import RegistrationForm from "@/Components/RegistrationForm/RegistrationForm.jsx";
import Footer from "@/Components/Footer/Footer.jsx";

const Registration = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <div className="flex-grow flex justify-center items-center bg-gray-200">
                <RegistrationForm />
            </div>

            <Footer />
        </div>
    );
};

export default Registration;
