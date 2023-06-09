require("dotenv").config();

const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./modles/schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { response } = require("express");
const cors = require("cors");
const app = express();

const jwt_secret = "hunnysingh";
const port = 3030;
const mongo_url =
  "mongodb+srv://Harbhjan:harbhjan@cluster0.tztiudx.mongodb.net/hunny?retryWrites=true&w=majority";

mongoose.connect(mongo_url, (err) => {
  if (err) {
    console.log("failed to connect", err);
  } else {
    console.log("connected to mongodb");
  }
});

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors());

app.use("/auth", require("./routes/route"));
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, (err) => {
  if (!err) console.log("server is listning at port 3030");
});
