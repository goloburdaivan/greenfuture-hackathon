import React, { useState } from 'react';
import Device from '../Device/Device';
import { Modal, TextField, Button, Box, Typography } from '@mui/material';
import {useForm} from "@inertiajs/react";

export default function Room({ room }) {
    const {data, setData, post, processing, errors} = useForm({
        name: "",
        device_hash: "",
        max_consumption: 0,
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleAddDevice = () => {
        const consumptionValue = parseFloat(data.max_consumption);
        if (consumptionValue <= 0) {
            alert("Максимальне споживання повинно бути більше 0.");
            return;
        }
        post(`/rooms/${room.id}/devices`, {
            preserveScroll: true,
            onSuccess: () => {
                setData({
                    name: "",
                    device_hash: "",
                    max_consumption: 0,
                });
                handleCloseModal();
            },
            onError: () => {
                handleCloseModal()
            }
        });
    };

    return (
        <div className="relative w-full h-auto border-4 border-black p-4 flex flex-col items-center">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white px-2 text-lg font-bold">
                {room.room_number}
            </div>

            <div className="grid grid-cols-3 gap-4 w-full justify-items-center mt-8 mb-4">
                {room.devices.map(device => (
                    <Device key={device.id} device={device} />
                ))}

                <button
                    className="w-8 h-8 bg-white border-2 border-gray-400 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-100"
                    onClick={handleOpenModal}
                >
                    +
                </button>
            </div>

            <Modal
                open={isModalOpen}
                onClose={handleCloseModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box
                    className="bg-white p-8 rounded-lg shadow-lg w-96 mx-auto mt-20"
                    sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                >
                    <Typography id="modal-title" variant="h6" component="h2">
                        Додати новий пристрій
                    </Typography>
                    <TextField
                        label="Назва пристрою"
                        variant="outlined"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="Хеш пристрою"
                        variant="outlined"
                        name="device_hash"
                        value={data.device_hash}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="Максимальне споживання (Вт)"
                        variant="outlined"
                        type="number"
                        name="max_consumption"
                        value={data.max_consumption}
                        onChange={handleChange}
                        fullWidth
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddDevice}
                        disabled={processing}
                    >
                        {processing ? 'Створення...' : 'Додати'}
                    </Button>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={handleCloseModal}
                        disabled={processing}
                    >
                        Відмінити
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}
