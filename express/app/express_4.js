const express = require('express');
const orderCtrl = require('./orderController');
const bodyParser = require('body-parser');
const app = express();

// bind controller(router with application) object
app.use(bodyParser)
app.use('/api/orders',orderCtrl);

app.listen(8080, () => console.log('express server is ready'));