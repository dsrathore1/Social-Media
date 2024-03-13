import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      trim: true,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    pwd: String,
    cPwd: String,
    gender: String,
    userName: String,
    profilePic: {
      type: String,
      default:
        "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg",
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("user", UserSchema);

export default UserModel;
