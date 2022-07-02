const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const User = new Schema({
  profilePicture: {
    picture: String,
  },
  firstName: String,
  lastName: String,
  age: Number,
  language: String,
  githubAddress: String,
  linkedinAddress: String,
  abilities: Array,
  username: String,
  password: String,
  adminity: Boolean,
});

module.exports = model("User", User);
