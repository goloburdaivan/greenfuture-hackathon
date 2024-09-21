import React from "react";
import Header from "@/Components/Header/Header.jsx";
import LoginForm from "@/Components/LoginForm/LoginForm.jsx";
import Footer from "@/Components/Footer/Footer.jsx";

const Login = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <div className="flex-grow flex justify-center items-center bg-gray-200">
                <LoginForm />
            </div>

            <Footer />
        </div>
    );
};

export default Login;
