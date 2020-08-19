const express = require('express');
const cors = require('cors')
const morgan = require('morgan');
require('./database.js');

require('dotenv/config')


const app = express();
const port = process.env.PORT || 3000;


app.use(cors())
app.use(express.json());
app.use(morgan('dev'));
app.use('/api', require('./routes/api'))




app.get('/',(req, res)=>{

    console.log(req.query)
    res.send(`hola a todos jeje `)


});





app.listen(port, (e)=>{
    if(!e){
        console.log('todo al cien')
    }else {
        console.log('hubo un error loko')
    }
});

