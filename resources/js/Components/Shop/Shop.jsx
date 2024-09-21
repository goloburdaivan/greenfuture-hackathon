import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardMedia, CardContent, CardActions } from '@mui/material';

const products = [
    { id: 1, name: 'Товар 1', description: 'Опис товару 1', price: 100, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Товар 2', description: 'Опис товару 2', price: 150, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Товар 3', description: 'Опис товару 3', price: 200, image: 'https://via.placeholder.com/150' },
];

const App = () => {
    return (
        <div>
            {/* Шапка */}
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Мій Магазин
                    </Typography>
                    <Button color="inherit">Головна</Button>
                    <Button color="inherit">Товари</Button>
                    <Button color="inherit">Контакти</Button>
                </Toolbar>
            </AppBar>

            {/* Секція товарів */}
            <Container>
                <Typography variant="h4" gutterBottom style={{ marginTop: 20 }}>
                    Наші Товари
                </Typography>
                <Grid container spacing={4}>
                    {products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={product.image}
                                    alt={product.name}
                                />
                                <CardContent>
                                    <Typography variant="h5">{product.name}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.description}
                                    </Typography>
                                    <Typography variant="h6" color="primary" style={{ marginTop: 10 }}>
                                        ₴{product.price}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Додати в кошик
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Підвал */}
            <footer style={{ marginTop: 20, padding: 20, textAlign: 'center', backgroundColor: '#f1f1f1' }}>
                <Typography variant="body2" color="text.secondary">
                    © 2024 Мій Магазин. Усі права захищені.
                </Typography>
            </footer>
        </div>
    );
};

export default App;
