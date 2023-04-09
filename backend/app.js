const express = require("express");
const dotenv = require("dotenv").config();
const connectWithDb = require("./config/db");

// connect with database
connectWithDb();

const app = express();

// regular middlewares
app.use(express.json())




module.exports = app;