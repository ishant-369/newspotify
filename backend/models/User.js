const mongoose = require("mongoose");

//Define what a User looks like in the database
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});

//Create the User model from the schema
const User = mongoose.model("User", userSchema);

//Export it so other files can use it
module.exports = User;