const express = require('express');
const profileCtrl = require('./profileController');
const app = express();

// bind controller(router with application) object
app.use('/api/profiles',profileCtrl);

app.listen(8080, () => console.log('express server is ready'));