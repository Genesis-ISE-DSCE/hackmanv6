const express = require("express");
const dotenv = require("dotenv").config();
const connectWithDb = require("./config/db");
const cookieParser = require("cookie-parser")

// connect with database
connectWithDb();

const app = express();

// regular middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
const registration = require('./routes/Registration')
app.use('/api/v1',registration)
app.use(cookieParser());



module.exports = app;