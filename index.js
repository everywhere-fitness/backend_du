require("dotenv").config(); //allows to 'inject' fake enviorment variables

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

server.use(express.json()); // teaches express to parse req.body
server.use(cors());
server.use(helmet());

const { PORT } = require("./config");

server.get("/", (req, res) => {
  res.send(`
      <h1>Lambda School is the best<h1>
      `);
});

server.use("*", (req, res, next) => {
  res.json({
    message: "Lambda School is the best!",
  });
});

server.listen(PORT, () => {
  // heroku machine uses a different port
  console.log(`listening on ${PORT}`);
});