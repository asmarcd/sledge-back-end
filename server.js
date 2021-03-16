require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./models');

const cors = require('cors');
app.use(cors());

const morgan = require('morgan');
app.use(morgan('short'));

const PORT = process.env.PORT || 3001

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Crush those bugs!')
});

const ticketRoutes = require('./routes/Tickets');
app.use(ticketRoutes);

const userRoutes = require('./routes/User');
app.use(userRoutes);

const labelRoutes = require('./routes/Label');
app.use(labelRoutes);

db.sequelize.sync({ force:false }).then(() => {
    app.listen(PORT, ()=> {
        console.log(`Server Running on Port ${PORT}`)
    })
})
