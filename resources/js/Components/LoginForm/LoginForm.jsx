import React, { useState } from "react";
import { useForm } from '@inertiajs/react';

const LoginForm = () => {
    const {data, setData, post, errors} = useForm({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/login');
    };

    return (
        <div className="flex justify-center items-center bg-gray-200 flex-grow">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Вхід</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Електронна пошта
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                        />
                        {errors.email && <div>{errors.email}</div>}
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Пароль
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                        />
                        {errors.password && <div>{errors.password}</div>}
                    </div>
                    {errors.credentials && <div>{errors.credentials}</div>}
                    <button
                        type="submit"
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    >
                        Увійти
                    </button>
                </form>
                <div className="text-center mt-4">
                    <p>
                        Ще не маєте акаунта?{" "}
                        <a href="/register" className="text-blue-700 hover:underline">
                            Зареєструватися
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
