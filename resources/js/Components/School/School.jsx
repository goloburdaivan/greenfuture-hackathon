import React, { useState } from 'react';
import Floor from '../../Components/Floor/Floor';
import { Modal, TextField, Button, Box, Typography, Paper } from '@mui/material';

export default function School({ school }) {
    const [selectedFloor, setSelectedFloor] = useState(school.floors[0]?.id || null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newRoomCode, setNewRoomCode] = useState("");
    const [isFloorModalOpen, setIsFloorModalOpen] = useState(false);
    const [newFloorNumber, setNewFloorNumber] = useState("");

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setNewRoomCode("");
    };

    const handleAddRoom = () => {
        console.log("Добавить новый класс:", newRoomCode);
        handleCloseModal();
    };

    const handleOpenFloorModal = () => {
        setIsFloorModalOpen(true);
    };

    const handleCloseFloorModal = () => {
        setIsFloorModalOpen(false);
        setNewFloorNumber("");
    };

    const handleAddFloor = () => {
        console.log("Добавить новый этаж:", newFloorNumber);
        handleCloseFloorModal();
    };

    return (
        <div className="bg-gray-100 min-h-screen p-8 flex">
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

                    <div className="flex justify-center mt-4">
                        <Paper
                            className="p-6 text-center shadow-md rounded-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer"
                            style={{
                                backgroundColor: '#e0f7fa',
                                border: '2px dashed #80deea',
                                color: '#333',
                                width: '33%',
                            }}
                            onClick={handleOpenModal}
                        >
                            <Typography variant="h4" className="text-gray-600">
                                +
                            </Typography>
                        </Paper>
                    </div>
                </div>

                {/* Переключатели этажей справа по середине */}
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

                    {/* Кнопка для создания нового этажа */}
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
                open={isModalOpen}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    className="bg-white p-8 rounded-lg shadow-lg w-96 mx-auto mt-20"
                    sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Створення нового класу
                    </Typography>
                    <TextField
                        label="Номер кабінету"
                        type="number"
                        variant="outlined"
                        value={newRoomCode}
                        onChange={(e) => setNewRoomCode(e.target.value)}
                        fullWidth
                    />
                    <Button
                        key="add-floor"
                        onClick={handleOpenFloorModal}
                        className={'py-2 px-4 mt-4 rounded-lg transition-all duration-300 ease-in-out text-lg font-medium bg-gray-300 text-gray-800 hover:bg-gray-400'}
                    >
                        Додати поверх
                    </Button>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={handleCloseModal}
                    >
                        Відмінити
                    </Button>
                </Box>
            </Modal>

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
                        variant="outlined"
                        value={newFloorNumber}
                        onChange={(e) => setNewFloorNumber(e.target.value)}
                        fullWidth
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddFloor}
                    >
                        Створити
                    </Button>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={handleCloseFloorModal}
                    >
                        Відмінити
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}
