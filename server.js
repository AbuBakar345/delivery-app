"use strict";
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const smsRoutes = require('./routes/sms');
dotenv.config({ path: ".env" });

const app = express();

global.__basedir = __dirname;

app.use(express.json({ limit: "50mb", extended: true }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);
app.use(cors());

app.use(smsRoutes);


app.get("/", (req, res) => {
  res.json("Welcome to your Nextel..!");
});



// Set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
