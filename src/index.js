require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const app = express();

//settings
app.set('port', process.env.PORT || 4000); //setear puerto

//middlewares
app.use(morgan('dev')); //Ver request en consola
app.use(express.urlencoded({extended: false})); //body post form html
app.use(express.json()); //JSON documents

//Routes
app.use('/api', require('./routes/clienteRouter'));

//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});