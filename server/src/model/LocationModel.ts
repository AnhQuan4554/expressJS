import mongoose from "mongoose";
const locationSchema = new mongoose.Schema({
  imgAddress: {
    type: String,
  },
  contentAddress: {
    type: String,
  },
  location: {
    type: String,
  },
  addedDate: {
    type: String,
  },
  status: {
    type: String,
  },
  userID: {
    type: String,
  },
});
export default mongoose.model("location", locationSchema);