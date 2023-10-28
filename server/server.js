// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require('dotenv').config()

import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import "dotenv/config.js";
import router from "./routes/api.js"
import connectDB from "./config/db.js";


// const router = require("./routes/api");
// const connectDB = require("./config/db");
const app = express();

// connect to database
connectDB();

// cors: enables requests from all sources
app.use(cors());

// parse incoming requests as JSON, making data readily available via req.body
app.use(express.json());

// app.get('/', (req, res) => { res.send('Hello from Express!')})

// API
app.use('/',router);

app.listen(process.env.PORT || 5050, () => { 
  console.log("Server is running at port 5050");
});
