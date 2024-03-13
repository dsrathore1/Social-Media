import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.models.user || mongoose.model("user", UserSchema);

export default userModel;
