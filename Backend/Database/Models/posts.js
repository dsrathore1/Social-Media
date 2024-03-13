import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
  postText: {
    type: String,
  },
  photo: {
    type: String,
  },
  postLocation: {
    type: String,
  },
});

const postModel = mongoose.model("uploadPhoto", PostSchema);

export default postModel;
