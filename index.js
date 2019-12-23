const express = require('express');
const database  = require('./src/database/config');
const requireDir = require('require-dir');
const cors = require('cors');
const app = express();
require("dotenv/config");
requireDir('./src/models');


app.use(express.json());
app.use('/api',require('./src/routes'))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3001, function(){
       console.log('Rodando na porta 3001');
});