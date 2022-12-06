var express = require("express");
var router = express.Router();
const { Person, Story } = require("./db");
/* GET home page. */

router.get("/", function (req, res, next) {
  // Lop.find({}, (error, data) => {
  //   console.log("danh sach thanh vien", data);
  // });
  Person.find({}, (err, data) => {
    res.render("index", { persons: data });
  });
});

const lop = ["quan", "an", "lam"];
// router.post("/", (req, res) => {
//   console.log(req.body);
//   res.json(req.body);
// });

module.exports = router;
