require("dotenv").config();
require("./db/mongoose");

const morgan = require("morgan");
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const route = require("./routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("tiny"));

const User = require("./models/users");

const port = process.env.PORT || 7000;

route.apiRoute(app);

app.post("/api/login", async function (req, res) {
  var user = await User.findOne({
    email: req.body.email,
  });

  if (!user) {
    res.status(400).send("Invalid credentials");
    return;
  }

  var match = await bcrypt.compare(req.body.password, user.password);

  if (!match) {
    res.status(400).send("Invalid credentials");
    return;
  }

  var token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });
  res.status(200).send({
    msg: "Logged in Successfully",
    token,
  });
});

app.listen(port, function () {
  console.log("The Server Upon Port: 7000");
});