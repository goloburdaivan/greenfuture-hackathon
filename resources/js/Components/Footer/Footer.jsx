import React from 'react';
import { Typography } from '@mui/material';

const Footer = () => {
    return (
        <footer style={{ marginTop: 20, padding: 20, textAlign: 'center', backgroundColor: '#f1f1f1' }}>
            <Typography variant="body2" color="text.secondary">
                © 2024 RZHADPower. Усі права захищені.
            </Typography>
        </footer>
    );
};

export default Footer;

