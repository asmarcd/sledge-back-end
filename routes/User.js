const express = require('express');
const router = express.Router();
const db = require('../models');
const bcrypt = require('bcrypt');

// show all users
router.get('/users', (req, res) => {
    db.User.findAll()
        .then(allUsers => {
            res.send(allUsers)
        })
});

// show a specific user
router.get('/users/:id', (req, res) => {
    db.User.findOne(
        {
            where: {
                id: req.params.id
            }
        }
    ).then(user => {
        res.send(user)
    }).catch(console.log('Error'))
});

// create a new user
router.post('/users', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        db.User.create(
            {
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword
            }
        )
        res.status(200).send('New User Added')
    } catch {
        res.status(500).send();
    }
});

// user login
router.get('/login', async (req, res) => {
    try {
        const user = await db.User.findOne(
            {
                where: {
                    email: req.body.email
                }
            }
        )
        console.log(user)
        if (user == null) {
            return res.status(400).send("Cannot find user")
        } else if (await bcrypt.compare(req.body.password, user.password)) {
            res.send('success')
        } else {
            res.send('incorrect password')
        }
    } catch {
        res.status(500).send();
    }
});

// update existing user
router.put('/users/:id', (req, res) => {
    db.User.update(
        {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        },
        {
            where: {
                id: req.params.id
            }
        }
    ).then(updatedUser => {
        if (updatedUser.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
});

// delete existing user
router.delete('/users/:id', (req, res) => {
    db.User.destroy(
        {
            where: {
                id: req.params.id
            }
        }
    ).then(deletedUser => {
        if (deletedUser.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})

module.exports = router;