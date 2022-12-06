const mongoose = require("mongoose");
var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
//CONECTING DB// APP CONFI
mongoose.connect("mongodb://localhost:27017/testData_dev", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//Schema
const PersonSchema = mongoose.Schema({
  name: String,
  old: Number,
  country: String,
});
const StorySchema = mongoose.Schema({
  tittle: String,
  author: { type: mongoose.Types.ObjectId, ref: "person" },
});
// tao model
const Person = mongoose.model("person", PersonSchema);
const Story = mongoose.model("story", StorySchema);
// tạo item

const person_1 = new Person({
  name: "Nguyen Anh Quan",
  old: 20,
  country: "VNmmmmm",
});
const person_2 = new Person({
  name: "Nguyen Viet An",
  old: 15,
  country: "VN",
});
Person.where("_id")
  .equals("6385e32745ec9202143b8f9c")
  .exec((error, person) => {
    const story_1 = new Story({
      tittle: "Day la banr tesst",
      author: person[0]._id,
    });
  });

Person.aggregate([
  //stage1
  { $match: { name: { $eq: "Nguyen Anh Quan" } } },
  //stage2
  { $group: { _id: null, sumOld: { $sum: "$old" }, avgOld: { $avg: "$old" } } },
]).exec((err, data) => {
  // console.log("tong toi123", data);
});
Person.aggregate();
// creat schema
const USERSchema = mongoose.Schema({
  name: String,
  old: Number,
  education: String,
});
// creat model
const USER = mongoose.model("user", USERSchema);
// const user_2 = new USER({
//   name: "Tran Van B",
//   old: 10,
//   education: "Dai hoc",
// });
// user_2.save((err, data) => {
//   console.log("user_1 tao thanh cong");
// });
// Story.find({})
//   .populate("author")
//   .exec((err, data) => {
//     console.log(data, "da");
//   });
module.exports = {
  Person,
  Story,
  USER,
};
