const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database Connected!");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = dbConnection;
