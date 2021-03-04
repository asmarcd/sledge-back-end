const express = require('express');
const router = express.Router();

router.get('/ticket', (req,res) => {
    res.send({data: "tickets placeholder"})
});

module.exports = router;