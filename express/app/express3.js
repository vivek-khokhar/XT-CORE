const express = require('express');
 const app = express();

 const welcomeMiddleware = (req, res, next) => {
     console.log('welcome to my app');
     next();
 }

 const timeStampMiddleware = (req, res, next) => {
    console.log(new Date());
    next();
 }

 app.use(welcomeMiddleware);
 app.use(timeStampMiddleware);

 app.use((req, res, next) => {console.log('one'); next()}, (req, res, next) => {console.log('two'); next()})
 app.get('/', (req,res) => res.end('<h1>Welcome to my app<h1>'));

 app.get('/greeter', (req, res, next) => {
     console.log('Host Name' + req.method);
     next();
 })

 app.listen(8080, () => console.log('Server started'));