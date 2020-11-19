const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
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
// try {
//   mongoose.connect( uri, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
//   console.log("connected"));    
//   }catch (error) { 
//   console.log("could not connect");    
//   }

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true, useUnifiedTopology: true},
    
    
 )


app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });