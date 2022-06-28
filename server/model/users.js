const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  profilePicture: String,
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

module.exports = model("user", UserSchema);
