const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const reservationRouter = require('./routes/reservation');
const subscriptionRouter = require('./routes/subscription');
const contactRouter = require('./routes/contact');
const eventRouter = require('./routes/event');

app.use('/admin/reservation', reservationRouter);
app.use('/admin/subscription', subscriptionRouter);
app.use('/admin/contact', contactRouter);
app.use('/admin/event', eventRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});