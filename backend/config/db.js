const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/spotify_clone");
    console.log("MongoDB connected");
  } catch (error) {
    console.log("DB error:", error);
  }
};

module.exports = connectDB;
