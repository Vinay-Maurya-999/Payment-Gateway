import mongoose from "mongoose";
import _config from "./config.js";

const connectDB = async () => {
  try {
    await mongoose.connect(_config.mongoose_uri);
    console.log("MONGOOSE DB IS CONNECTED");
  } catch (err) {
    console.log(`ERROR IS FROM DB ${err}`);
  }
};

export default connectDB;
