const express = require('express');
const orders = require('../models/Orders');
const app = express();

app.get('/api/orders', (req, res) => {
    res.status(200).json(orders);
})

app.post('/api/orders', (req, res) => {
    res.end('orders - POST');
})

app.put('/api/orders', (req, res) => {
    res.end('orders - put');
})

app.delete('/api/orders', (req, res) => {
    res.end('orders - delete');
})

app.listen(8080, () => console.log('express server is ready'));
