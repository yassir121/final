const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/express", (req, res) => {
  res.send("Hi!! This is my First express server");
});

app.listen(5005, () => console.log("Server running on port 5005..."));
