
const express = require('express');
const morgan = require('morgan');
const mongoose = require('./database.js');
c
require('dotenv/config')


const app = express();
const port = process.env.PORT;



app.use(express.json());
app.use(morgan('dev'));
app.use('/api', require('./routes/api'))




app.get('/',(req, res)=>{

    console.log(req.query)
    res.send(`hola a todos jeje ${req.query.hola}`)


});





app.listen(port, (e)=>{
    if(!e){
        console.log('todo al cien')
    }else {
        console.console.log();('hubo un error loko')
    }
});

