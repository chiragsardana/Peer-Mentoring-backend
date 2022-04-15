// This is App.js 
const express = require("express");
const res = require("express/lib/response");
const app = express(); // express function and it return an app fn

require("dotenv").config();


const server = app.listen(process.env.PORT || 1234, (err) => {
  if (err) {
    console.log("App Crash ", err);
  } else {
    console.log("Server Started... ", server.address().port);
  }
});
app.get('/', (req, res) => {
    res.sendFile(__dirname+"/public/index.html");
})
