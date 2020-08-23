const express = require("express");

const app = express();

app.all("*", (req, res) => {
  console.log(req);

  res.send("<h1>This is express</h1>");
});

app.listen(3000);
