const express = require("express");
const dotenv = require("dotenv").config();
const connectWithDb = require("./config/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// connect with database
connectWithDb();

const app = express();

// regular middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(cors())
app.use(cookieParser())

const registration = require('./routes/Registration');
const admin = require("./routes/Admin");
const project = require("./routes/Project")
app.use('/api/v1', registration);
app.use("/api/v1", admin);
app.use("/api/v1", project)

app.use(cookieParser());



module.exports = app;