const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const con = await mongoose.connect("mongodb+srv://techieboii4:mJXGsl8ilLTSlvvQ@cluster0.0sm0s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Database connected successfully..");
  } catch (err) {
    console.log(`error : ${err}`);
    process.exit(1);
  }
};

module.exports = connectDB;
