import mongoose from "mongoose";

const connectDB = () => {
  const { connection } = mongoose.connect(process.env.MONGO_URI, {
    newUrlParser: false,
    newUnifiedTopology: false,
  });
};

export default connectDB;
