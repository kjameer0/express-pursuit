const express = require("express");
const app = express();
const usersController = require("./usersController")
const cors = require("cors")
app.get("/", (request, response) => {
  response.send("This is an app my guy.")
})

app.use(cors({
  origin: '*'
}));

app.use((req, res, next) => {

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  next();
});


//create controller

app.use("/users", usersController)
module.exports = app;
