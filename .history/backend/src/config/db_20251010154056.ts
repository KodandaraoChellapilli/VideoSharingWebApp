import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectDb = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI as string);
  } catch (error) {
    console.log(`Error in connecting to the db ${error}`);
  }
};

export default connectDb;
