const express = require('express');
const router = express.Router();
const db = require('../models');

// will need to come back here and add user auth check and association of tickets to particular users and owners

// show all tickets
router.get('/tickets', (req, res) => {
    db.Ticket.findAll()
        .then(allTickets => {
            res.json(allTickets)
        })
});

// create a new ticket
router.post('/tickets', async (req, res) => {
    await db.Ticket.create(
        {
            title: req.body.title,
            type: req.body.type,
            description: req.body.description,
            priorty: req.body.priorty,
            owner: req.body.owner
        }
    )
    await res.status(200).send("New Ticket Added")
});

// find a specific ticket

// search tickets by title

// find all tickets of a particular type

// find all tickets with particular owner

// update existing ticket
router.put('/tickets/:id', (req, res) => {
    db.Ticket.update(
        {
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
        }
    ).then(updatedTicket => {
        if (updatedTicket.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
});

// delete existing ticket
router.delete('/tickets/:id', (req, res) => {
    db.Ticket.destroy(
        {
            where: {
                id: req.params.id
            }
        }).then(deletedTicket => {
            if (deletedTicket.changedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        })
});

module.exports = router;