require('dotenv').config();
const express = require('express');
const app = express();

const morgan = require('morgan');
app.use(morgan('short'));

const PORT = process.env.PORT || 3001

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Crush those bugs!')
});

const ticketRoutes = require('./routes/Tickets');
const userRoutes = require('./routes/User');

app.use(ticketRoutes);
app.use(userRoutes);

app.listen(PORT, ()=> {
    console.log(`Server Running on Port ${PORT}`)
})