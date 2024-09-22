import React, { useState } from 'react';
import Floor from '../../Components/Floor/Floor';
import { Modal, TextField, Button, Box, Typography, Paper } from '@mui/material';
import {useForm} from "@inertiajs/react";

export default function School({ school }) {
    const floorForm = useForm({
        number: 1,
    });
    const [selectedFloor, setSelectedFloor] = useState(school.floors[0]?.id || null);
    const [isFloorModalOpen, setIsFloorModalOpen] = useState(false);

    const handleFloorChange = (e) => {
        const { name, value } = e.target;
        floorForm.setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleOpenFloorModal = () => {
        setIsFloorModalOpen(true);
    };


    const handleCloseFloorModal = () => {
        setIsFloorModalOpen(false);
    };

    const handleAddFloor = () => {
        floorForm.post(`/schools/${school.id}/floors`, {
            preserveScroll: true,
            onSuccess: () => {
                floorForm.setData({
                    number: 1,
                })
                handleCloseFloorModal();
            },
            onError: () => {
                handleCloseFloorModal()
            }
        });
    };

    return (
        <div className="bg-gray-100 p-8 flex">
            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8 flex-1 flex">
                <div className="flex-1">
                    <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
                        {school.name}
                    </h1>

                    <div>
                        {school.floors
                            .filter(floor => floor.id === selectedFloor)
                            .map(floor => (
                                <div key={floor.id} className="bg-blue-100 p-6 rounded-lg shadow-lg mb-4">
                                    <Floor floor={floor} />
                                </div>
                            ))}
                    </div>

                </div>

                <div className="flex flex-col justify-center ml-4">
                    {school.floors.slice().reverse().map(floor => (
                        <button
                            key={floor.id}
                            onClick={() => setSelectedFloor(floor.id)}
                            className={`py-2 px-4 mb-2 rounded-lg transition-all duration-300 ease-in-out text-lg font-medium ${
                                selectedFloor === floor.id
                                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                                    : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
                            }`}
                        >
                            Поверх {floor.number}
                        </button>
                    ))}

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleOpenFloorModal}
                        className="mt-4"
                    >
                        Додати поверх
                    </Button>
                </div>
            </div>

            <Modal
                open={isFloorModalOpen}
                onClose={handleCloseFloorModal}
                aria-labelledby="floor-modal-title"
                aria-describedby="floor-modal-description"
            >
                <Box
                    className="bg-white p-8 rounded-lg shadow-lg w-96 mx-auto mt-20"
                    sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                >
                    <Typography id="floor-modal-title" variant="h6" component="h2">
                        Створення нового поверху
                    </Typography>
                    <TextField
                        label="Номер поверху"
                        type="number"
                        name="number"
                        value={floorForm.data.name}
                        variant="outlined"
                        onChange={handleFloorChange}
                        fullWidth
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddFloor}
                        disabled={floorForm.processing}
                    >
                        {floorForm.processing ? 'Створення...' : 'Створити'}
                    </Button>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={handleCloseFloorModal}
                        disabled={floorForm.processing}
                    >
                        Відмінити
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}
