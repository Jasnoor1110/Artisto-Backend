const express = require('express');
const app = express();
const cors = require('cors');
const epl = require('express-pino-logger');
const logger = require('../setups/pino.setup')
require('dotenv').config()

exports.runserver = ()=>{
app.use(express.urlencoded({"extended":true}));
app.use(cors());

const eplMiddleware  = epl({
    logger : logger,
    useLevel : "http"
})

port = 3000 || process.env.PORT
app.use(eplMiddleware);

app.get('/api/v1' , (req,res)=>{
    res.send("Welcome to the Artisto-Backend");
})


app.listen(`${port}` , ()=>{
    console.log(`http://localhost/api/v1:${port}`)
})
}
