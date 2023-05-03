const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const { connectMongoDb } = require("./server");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

//connection
connectMongoDb();

app.get('/try', (req, res) => {
    res.send("GET Request Called")
})



app.listen(process.env.PORT, () => console.log("app is running"));
