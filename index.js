const express = require("express");
const { findParams, findQuery } = require("./controller");

// Import controller disini

const app = express();
const port = 3000;

app.use(express.json());

// tulis api kalian disini

app.get("/user/:nama/:location", findParams);
app.get("/user", findQuery);

app.listen(port, () => {
  console.log(`running server http://localhost:${port}`);
});
