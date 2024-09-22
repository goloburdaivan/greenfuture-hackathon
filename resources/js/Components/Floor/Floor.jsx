import React, { useState } from 'react';
import Room from '../Room/Room';
import { Modal, TextField, Button, Box, Typography } from '@mui/material';

export default function Floor({ floor }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newRoomCode, setNewRoomCode] = useState("");

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setNewRoomCode("");
    };

    const handleAddRoom = () => {
        handleCloseModal();
    };

    return (
        <div className="grid grid-cols-3 gap-4 w-full h-full border-4 border-black p-4">
            {floor.rooms.map(room => (
                <Room key={room.id} room={room} />
            ))}

            <button
                onClick={handleOpenModal}
                className="flex items-center justify-center w-full h-full bg-gray-200 border-2 border-dashed border-gray-400 rounded-lg text-4xl font-bold text-gray-600 hover:bg-gray-300 transition-colors duration-200"
            >
                +
            </button>

            <Modal
                open={isModalOpen}
                onClose={handleCloseModal}
                aria-labelledby="add-room-modal-title"
                aria-describedby="add-room-modal-description"
            >
                <Box
                    className="bg-white p-8 rounded-lg shadow-lg w-96 mx-auto mt-20"
                    sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                >
                    <Typography id="add-room-modal-title" variant="h6" component="h2">
                        Додати нову кімнату
                    </Typography>
                    <TextField
                        label="Номер кімнати"
                        type="number"
                        variant="outlined"
                        value={newRoomCode}
                        onChange={(e) => setNewRoomCode(e.target.value)}
                        fullWidth
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddRoom}
                        disabled={!newRoomCode.trim()}
                    >
                        Додати
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
        </div>
    );
}
