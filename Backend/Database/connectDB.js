import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.URI, {
      dbName: "YO-DB",
    });

    console.log(`Your database is connected to ${connection.name}`);
  } catch (error) {
    if (error) throw error;
  }
};

export default connectDB;
