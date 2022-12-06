var express = require("express");
var router = express.Router();
// router.get("/", function (req, res, next) {
//   // res.send("respond with a resource");
//   res.render("regis");
// });
router.get("/:id", (req, res) => {
  res.json("id nhe bn oi" + req.params.id);
});
router.get("/", (req, res) => {
  res.render("regis");
});
router.post("/", (req, res) => {
  console.log(req.body, "test bang post xem");
  console.log(req.headers, "test bang post xem");
  res.json({ requestHeader: req.headers, requestBody: req.body });
});

module.exports = router;
