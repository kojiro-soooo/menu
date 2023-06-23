const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config()

const router = require("./routes/api");
const connectDB = require("./config/db");
const app = express();

// connect to database
connectDB();

// cors: enables requests from all sources
app.use(cors({origin: true, credentials: true}));

// parse incoming requests as JSON, making data readily available via req.body
app.use(express.json());

// app.get('/', (req, res) => { res.send('Hello from Express!')})

// API
app.use('/',router);

app.listen(process.env.PORT || 5050, () => {
  console.log("Server is running at port 5050");
});
