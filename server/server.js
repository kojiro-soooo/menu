const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config()

const router = require("./routes/api");
const connectDB = require("./config/db");
const app = express();

// connect to database
connectDB();

// middleware

// cors
app.use(cors({origin: true, credentials: true}));

// parse incoming requests as JSON
// any incoming request with a JSON payload is automatically parsed, making data readily available via req.body
app.use(express.json());

app.get('/', (req, res) => { res.send('Hello from Express!')})


// API
app.use('https://boiling-castle-95970-3d9abd54de8a.herokuapp.com',router);

app.listen(process.env.PORT || 5050, () => {
  console.log("Server is running at port 5050");
});
