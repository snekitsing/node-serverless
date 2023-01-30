const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

// app.get("/", (req, res) => {
//   res.json({
//     path: "Home",
//     Firstname: "Sing",
//     Surname: "Nekitsing",
//   });
// });

// app.get("j/son", (req, res) => {
//   res.json({
//     path: "json",
//     Author: "Sing Nekitsing",
//   });
// });

router.get("/", (req, res) => {
  res.json({
    path: "Home",
    Firstname: "Sing",
    Surname: "Nekitsing",
  });
});

router.get("/test", (req, res) => {
  res.json({
    path: "test",
    message: "This is a test",
  });
});

app.use("/", router);

module.exports.handler = serverless(app);
