const express = require('express');
const app = express();
const connectDB = require('./db/db');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//import routes
const orderRoutes=require('./routes/orders');
const userRoutes = require('./routes/users');

//middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use(orderRoutes);
app.use(userRoutes);



connectDB();

const port = process.env.PORT || 7000;

app.listen(port, () => console.log(`Listening on port ${port}`));