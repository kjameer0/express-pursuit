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

//create controller

app.use("/users", usersController)
module.exports = app;
