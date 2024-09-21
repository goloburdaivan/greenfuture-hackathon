import React from 'react';

const products = [
    { id: 1, name: 'Товар 1', description: 'Опис товару 1', price: 100, image: 'https://img.freepik.com/free-photo/funny-monkey-with-hat-studio_23-2150844087.jpg' },
    { id: 2, name: 'Товар 2', description: 'Опис товару 2', price: 150, image: 'https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 3, name: 'Товар 3', description: 'Опис товару 3', price: 200, image: 'https://t3.ftcdn.net/jpg/02/95/44/22/360_F_295442295_OXsXOmLmqBUfZreTnGo9PREuAPSLQhff.jpg' },
];

const Shop = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-10">Товари</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold">{product.name}</h3>
                                <p className="text-gray-600 mt-2">{product.description}</p>
                                <p className="text-lg text-blue-500 mt-4 relative pl-6">
                                    <span className="absolute left-0 top-0">
                                        <img src="https://media.lordicon.com/icons/wired/lineal/290-coin.svg" alt="coin icon" className="w-6 h-6" />
                                    </span>
                                    {product.price}
                                </p>
                            </div>
                            <div className="p-6 pt-0">
                                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
                                    Купити
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;
