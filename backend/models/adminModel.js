const { Schema, model } = require("mongoose");

const adminModel = new Schema({
  name: {
    type: String,
    required: true, 
  },
  email: {
    type: String,
    required: true, 
  },
  password: {
    type: String,
    required: true,  // Fixed missing closing brace here
  },
  image: {
    type: String,
  },
  role: {
    type: String,
    default: "admin",
  },
});

module.exports = model("Admin", adminModel);
