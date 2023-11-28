import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import "dotenv/config.js";
import router from "./routes/api.js"
import connectDB from "./config/db.js";

const app = express();

// connect to database
connectDB();

// cors: enables requests from all sources
app.use(cors({origin: true, credentials: true}));

// parse incoming requests as JSON, making data readily available via req.body
app.use(express.json());

// API
app.use('/',router);

app.listen(process.env.PORT || 5050, () => {
  console.log("Server is running at port 5050");
});
