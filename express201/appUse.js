const express = require("express");

const app = express();

// middleware function
function validatedUser(req, res, next) {
  res.locals.validated = true;
  console.log("validated ran!");
  next();
}

// run this function all all requestes
// app.use(validatedUser);

// run validation only on /admin route
app.use("/admin", validatedUser);

app.get("/", (req, res) => {
  res.send("<h1>Main Page</h1>");
  console.log(res.locals.validated);
});

app.get("/admin", (req, res) => {
  res.send("<h1>Admin Page</h1>");
  console.log(res.locals.validated);
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
