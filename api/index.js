import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
 
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO);
    console.log(`MongoDB Connected Succesfully`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

connectDB();

const app = express();

app.listen(4000, () => {
  console.log(`Server running on http://localhost:4000/`);
});
