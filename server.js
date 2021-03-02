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

// Move this into routes file once ready
app.post('/create_user', (req, res) => {
    res.json(req.body);

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const permission = req.body.permission;

    db.query(`INSERT INTO users (name, email, password, permission) VALUES (?,?,?,?)`, [name, email, password, permission], (err, res) => {
        if (err) {
            console.log(err);
        } else {
            res.json();
        }
    })
});


app.listen(PORT, ()=> {
    console.log(`Server Running on Port ${PORT}`)
});