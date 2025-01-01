const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL).then(() => {
      console.log("Connected to MongoDB");
    });
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
