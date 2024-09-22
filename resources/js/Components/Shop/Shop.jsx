import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Box, Typography, Button } from '@mui/material';
import {usePage} from "@inertiajs/react";

const Shop = ({ items }) => {
    const { props } = usePage();
    const [open, setOpen] = useState(false);
    const [purchaseMessage, setPurchaseMessage] = useState('');
    const [hash, setHash] = useState('');
    const [purchasedItem, setPurchasedItem] = useState(null);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleBuy = async (itemId) => {
        try {
            const response = await axios.post(`/shop/${itemId}`);
            if (response.data.success) {
                setPurchaseMessage(response.data.message);
                setHash(response.data.hash);
                setPurchasedItem(response.data.item); // Сохраняем информацию о купленном товаре
                handleOpen();
            }
        } catch (error) {
            console.error('Error purchasing item:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-10">Товари</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {items.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img
                                src={product.image_url}
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
                                <Button
                                    className="w-full"
                                    variant="contained"
                                    color="primary"
                                    sx={{
                                        backgroundColor: props.auth.coins < product.price ? 'gray' : 'blue', // Цвет для активного и неактивного состояний
                                        '&:hover': {
                                            backgroundColor: props.auth.coins < product.price ? 'gray' : 'darkblue', // Цвет при наведении
                                        },
                                    }}
                                    disabled={props.auth.coins < product.price}
                                    onClick={() => handleBuy(product.id)}
                                >
                                    Купити
                                </Button>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                }}>
                    <Typography id="modal-title" variant="h6" component="h2">
                        Покупка успішна!
                    </Typography>

                    {purchasedItem && (
                        <>
                            <img
                                src={purchasedItem.image_url}
                                alt={purchasedItem.title}
                                style={{ width: '100%', height: '200px', objectFit: 'cover', marginTop: '16px' }}
                            />
                            <Typography id="modal-item-title" sx={{ mt: 2 }}>
                                <strong>Товар:</strong> {purchasedItem.title}
                            </Typography>
                            <Typography id="modal-item-description" sx={{ mt: 1 }}>
                                <strong>Опис:</strong> {purchasedItem.description}
                            </Typography>
                        </>
                    )}

                    <Typography id="modal-description" sx={{ mt: 2 }}>
                        {purchaseMessage}
                    </Typography>

                    <Typography sx={{ mt: 2 }}>
                        Хеш покупки:
                        <Typography sx={{fontSize: 9}}>
                            {hash}
                        </Typography>
                    </Typography>

                    <Button onClick={handleClose} variant="contained" sx={{ mt: 2 }}>
                        Закрити
                    </Button>
                </Box>
            </Modal>
        </div>
    );
};

export default Shop;
