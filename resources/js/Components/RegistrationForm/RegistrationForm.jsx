import React, { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: "", // Новое поле для имени
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError("Паролі не співпадають");
            return;
        }

        setError("");
        console.log("Submitted data:", formData);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-200 pt-0">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm mt-0">
                <h2 className="text-2xl font-bold mb-6 text-center">Реєстрація</h2>
                <form onSubmit={handleSubmit}>
                    {/* Поле для ввода имени */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Ім'я
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Електронна пошта
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Пароль
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            htmlFor="confirmPassword"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Підтвердіть пароль
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                    <button
                        type="submit"
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    >
                        Зареєструватися
                    </button>
                </form>
                <div className="text-center mt-4">
                    <p>
                        Вже маєте акаунт?{" "}
                        <a href="/login" className="text-blue-700 hover:underline">
                            Увійти
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;
