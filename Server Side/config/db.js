import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const dbConnect = await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
