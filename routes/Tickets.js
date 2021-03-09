const express = require('express');
const router = express.Router();
const db = require('../models');

// will need to come back here and add user auth check and association of tickets to particular users and owners

router.get('/tickets', (req, res) => {
    db.Ticket.findAll()
        .then(allTickets => {
            res.send(allTickets)
        })
});

router.post('/tickets', (req, res) => {
    db.Ticket.create({
        title: req.body.title,
        type: req.body.type,
        description: req.body.description,
        priorty: req.body.priorty,
        owner: req.body.owner
    })
    res.status(200).send("New Ticket Added")
});

router.put('/tickets/:id', (req, res) => {
    db.Ticket.update({
        title: req.body.title,
        type: req.body.type,
        description: req.body.description,
        priorty: req.body.priorty,
        owner: req.body.owner
    },
        {
            where: {
                id: req.params.id
            }
        }).then(updatedTicket => {
            if (updatedTicket.changedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        })
});

router.delete('/tickets/:id', (req, res) => {
    db.Ticket.destroy({
        where: {
            id: req.params.id
        }
    }).then(deletedTicket => {
        if (deletedTicket.chagedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
});

module.exports = router;