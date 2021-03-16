const express = require('express');
const router = express.Router();
const db = require('../models');

// will need to come back here and add user auth check and association of labels to particular users

// show all tickets
router.get('/labels', (req, res) => {
    db.Label.findAll()
        .then(allLabels => {
            res.json(allLabels)
        })
});

// create a new ticket
router.post('/labels', async (req, res) => {
    await db.Label.create(
        {
            name: req.body.name
        }
    )
    await res.status(200).send("New Label Added")
});