var express = require("express");
var router = express.Router();

const messages = [
  { text: "Hi there!", user: "Amanda", added: new Date() },
  { text: "Hello World!", user: "Charles", added: new Date() },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log(messages);
  res.render("index", { title: "Mini Message Board", messages });
});

/* GET NEW PAGE */
router.get("/new", (req, res, next) => {
  res.render("form");
});

router.post("/new", (req, res, next) => {
  const author = req.body.author;
  const message = req.body.message;
  messages.push({ text: message, user: author, added: new Date() });
  res.redirect("/");
});

module.exports = router;
