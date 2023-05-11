const express = require("express");
const server = express();
const { postSendMail } = require("./send_email.js");

// EJS config
server.set("view engine", "ejs");
server.set("views", __dirname + "/views");

// Middelwares
server.use(express.json()); // info por body
server.use(express.urlencoded({ extended: false })); // info -> {} -> {info} por FORMULARIOS

// Cors
// const cors = require('cors')
// server.use(cors()) // all *
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

server.get("/", (req, res) => {
  res.status(200).json({ message: "in nodemailer challege" });
});

server.post("/send", postSendMail);

module.exports = server;
