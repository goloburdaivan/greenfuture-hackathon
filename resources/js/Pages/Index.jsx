import React, { useState } from "react";
import { Grid, Typography, Paper, Modal, TextField, Button, Box } from "@mui/material";
import Header from "@/Components/Header/Header.jsx";
import Footer from "@/Components/Footer/Footer.jsx";

export default function Index({ schools }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newSchoolName, setNewSchoolName] = useState("");

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setNewSchoolName("");
    };

    const handleCreateSchool = () => {
        console.log("Створення нової школи:", newSchoolName);
        handleCloseModal();
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-200">
            <Header />
            <div className="flex-grow p-8 rounded-lg w-full max-w-6xl mx-auto">
                <Typography variant="h4" gutterBottom align="center" className="text-gray-800 font-bold">
                    Головна сторінка
                </Typography>
                <Typography variant="h5" gutterBottom align="center" className="text-gray-600 mb-6">
                    Список шкіл:
                </Typography>
                <Grid container spacing={4}>
                    {schools.map((school) => (
                        <Grid item xs={12} sm={6} md={4} key={school.id}>
                            <a
                                href={`/schools/${school.id}`}
                                style={{ textDecoration: 'none' }}
                            >
                                <Paper
                                    className="p-4 text-center shadow-md rounded-lg hover:shadow-xl transition-shadow duration-200"
                                    style={{
                                        backgroundColor: '#f0f4f8',
                                        border: '1px solid #e0e0e0',
                                        color: '#333',
                                        minHeight: '200px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Typography variant="h4" className="font-semibold mb-2">
                                        {school.name}
                                    </Typography>
                                </Paper>
                            </a>
                        </Grid>
                    ))}

                    <Grid item xs={12} sm={6} md={4}>
                        <Paper
                            className="p-2 text-center shadow-md rounded-lg hover:shadow-xl transition-shadow duration-200"
                            style={{
                                backgroundColor: '#e0f7fa',
                                border: '2px dashed #80deea',
                                color: '#333',
                                minHeight: '200px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                            }}
                            onClick={handleOpenModal}
                        >
                            <Typography variant="h1" className="text-gray-600">
                                +
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>

            <Footer />

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
                        Створення нової школи
                    </Typography>
                    <TextField
                        label="Назва школи"
                        variant="outlined"
                        value={newSchoolName}
                        onChange={(e) => setNewSchoolName(e.target.value)}
                        fullWidth
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleCreateSchool}
                    >
                        Створити
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
