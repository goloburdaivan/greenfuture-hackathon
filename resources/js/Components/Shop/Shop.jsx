import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import Header from '@/Components/Header/Header.jsx';
import Footer from "@/Components/Footer/Footer.jsx";

const products = [
    { id: 1, name: 'Товар 1', description: 'Опис товару 1', price: 100, image: 'https://img.freepik.com/free-photo/funny-monkey-with-hat-studio_23-2150844087.jpg' },
    { id: 2, name: 'Товар 2', description: 'Опис товару 2', price: 150, image: 'https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 3, name: 'Товар 3', description: 'Опис товару 3', price: 200, image: 'https://t3.ftcdn.net/jpg/02/95/44/22/360_F_295442295_OXsXOmLmqBUfZreTnGo9PREuAPSLQhff.jpg' },
];

const Shop = () => {
    return (
        <div>
            {/* Используем Header */}
            <Header />

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
                                    <Typography variant="h6" color="primary" style={{
                                        marginTop: 10,
                                        backgroundImage: 'url(https://media.lordicon.com/icons/wired/lineal/290-coin.svg)',
                                        backgroundSize: '1em',
                                        backgroundRepeat: 'no-repeat',
                                        paddingLeft: '1.5em',
                                        paddingRight: '0.5em',}}>
                                        {product.price}
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

            <Footer/>
        </div>
    );
};

export default Shop;
