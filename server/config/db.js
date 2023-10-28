import "dotenv/config.js";
import express from "express";
import mongoose from "mongoose";
import Router from "../routes/api.js"

// require("dotenv").config();
const uri = process.env.MONGO_URI;
// const express = require("express");
// const mongoose = require("mongoose");
// const Router = require("../routes/api");

// function to connect to database
const connectDB = () => {
  // connect to database using uri stored in .env
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });
};

// module.exports = connectDB;
export default connectDB
