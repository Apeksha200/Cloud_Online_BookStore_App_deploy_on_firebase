const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

DB_USERNAME = process.env.DB_USERNAME;
DB_PASSWORD = process.env.DB_PASSWORD;

// const db_link = `mongodb+srv://{}:apekshaM2004@cluster0.hiafl1t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const db_link = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.hiafl1t.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0`;

const connectionWithDB = () => {
  mongoose
    .connect(db_link, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function (db) {
      console.log("__ DB CONNECTED __");
    })
    .catch(function (err) {
      console.log(err);
    });
};

module.exports = connectionWithDB;
