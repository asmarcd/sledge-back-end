const express = require('express');
const router = express.Router();
const db = require('../models')

// Create new user
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