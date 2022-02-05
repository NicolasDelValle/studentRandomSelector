const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(PORT);
