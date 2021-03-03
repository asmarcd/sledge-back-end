const express = require('express');
const app = express();
const mysql = require('mysql2');
require('dotenv').config();

const PORT = process.env.PORT || 3001

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const db = mysql.createConnection({
    user: process.env.SERVER_USER,
    host: 'localhost',
    password: process.env.SERVER_PASSWORD,
    database: 'ticket_tracker'
});

const routes = require('./controllers/');
app.use(routes);

app.listen(PORT, ()=> {
    console.log(`Server Running on Port ${PORT}`)
});