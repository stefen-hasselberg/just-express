const path = require("path");
const helmet = require("helmet");
const express = require("express");

const app = express();

console.log(path.join(__dirname + "/public/ajax.html"));
app.use(helmet());
app.use(express.static(path.join(__dirname + "/public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/ajax.html"));
});

app.post("/ajax", (req, res) => {
  console.log(req.body);
  res.json({ name: "Stefen" });
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
