const express = require('express');
const router = express.Router();

router.get('/user', (req,res) => {
    res.send({data: "users placeholder"})
});

module.exports = router;