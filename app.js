const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/help", (req, res) => {
  res.render("help");
});

app.get("/aboutme", (req, res) => {
  res.render("aboutme");
});

app.listen(PORT);
