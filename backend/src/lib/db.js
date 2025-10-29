import mongoose from "mongoose";

export const connectDB = async ()=>{
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log ("failed to connect to DB", error)
    process.exit(1);
  }
}