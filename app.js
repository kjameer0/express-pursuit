const express = require("express");
const app = express();
const usersController = require("./usersController");
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (request, response) => {
  response.send("This is an app my friend.");
});

app.use("/users", usersController);

//create controller

module.exports = app;
