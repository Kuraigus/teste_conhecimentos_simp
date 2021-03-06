const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const express = require("express");
const routes = require("./routes");
const dbConfig = require("./config/database.config");

const app = express();

app.use(express.json());

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

app.use(routes);

const port = process.env.PORT || 3333;

const server = app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
