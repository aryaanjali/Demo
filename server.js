const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

async function connectMongoDb() {
  return mongoose
    .connect(process.env.DB_NAME, {})
    .then(() => {
      console.log("connection successful");
    })
    .catch((err) => console.log("no connection"));
}

module.exports = {
  connectMongoDb,
};
