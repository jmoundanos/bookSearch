const express = require("express");
const routes = require("./routes");
//const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
require('dotenv').config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://User:daphnemax12@cluster0.ke4lc.mongodb.net/BookSearch?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

// mongoose.connect(
//     process.env.MONGODB_URI || "mongodb://localhost/googlebooks",{useNewUrlParser: true}
    
//  )
//  console.log("DB connected");

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });