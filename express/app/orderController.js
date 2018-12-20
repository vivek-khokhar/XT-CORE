const express = require('express');
const orders = require('../models/Orders');

const orderCtrl = express.Router();

orderCtrl.get('/', (rew,res) => {
    res.status(200).json(orders.Orders);
})

orderCtrl.post('/', (req, res) => {
    req.on('data', (order) => {
        
        console.log(JSON.parse(order));
        orders.addOrder(JSON.parse(order));
        res.status(201).json(orders.Orders);
    });
    
    req.end("orders - pst");
    
})

module.exports = orderCtrl;