const express = require("express");
const mongoose = require("mongoose");
const Router = require("../routes/api");

const connectDB = () => {
  mongoose.connect('mongodb+srv://kojiroso18:cXNPBosOITkbDg9R@authenticrecipes.ca5lw3i.mongodb.net/authentic-recipes?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully")
  });
}

module.exports = connectDB;