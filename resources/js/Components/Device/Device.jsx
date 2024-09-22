import React, {useEffect, useState} from "react";
import DevicesIcon from '@mui/icons-material/Devices';
import WarningIcon from '@mui/icons-material/Warning';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField, Snackbar, Alert } from "@mui/material";
import axios from "axios";
import {useWebSocket} from "@/Providers/WebSocketProvider.jsx";

function Device({ device }) {
    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setMessage] = useState('');
    const { device: websocketDevice } = useWebSocket();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setFile(null);
    };

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append("image", file);

        try {
            setIsSubmitting(true);
            const response = await axios.post(`/devices/${device.id}/task/complete`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setMessage(response.data.message);
            handleClose();
            device.task = null;
            setSnackbarOpen(true);
        } catch (error) {
            console.error("Error uploading file:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        if (Object.keys(websocketDevice).length !== 0) {
            if (websocketDevice.deviceId === device.id) {
                device.last_consumption.consumption_value = websocketDevice.consumption;
            }
            if (websocketDevice.consumption > device.max_consumption) {
                device.task = true;
            }
        }
    }, [websocketDevice]);

    return (
        <div className="flex flex-col items-center relative">
            <div className="relative">
                <DevicesIcon />
                {device.task ? (
                    <WarningIcon
                        onClick={handleClickOpen}
                        style={{
                            position: "absolute",
                            top: "-15px",
                            right: "-20px",
                            color: "red",
                            cursor: "pointer",
                        }}
                    />
                ) : null}
            </div>

            <span className="text-center text-sm">{device.name}</span>
            <span className="text-center text-sm">{device.last_consumption.consumption_value} Вт</span>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Upload Photo</DialogTitle>
                <DialogContent>
                    <TextField
                        type="file"
                        fullWidth
                        onChange={handleFileChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        color="primary"
                        disabled={!file || isSubmitting}
                    >
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                </DialogActions>
            </Dialog>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    );
}

export default Device;
