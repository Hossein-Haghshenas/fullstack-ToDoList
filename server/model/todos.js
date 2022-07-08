const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const TodoSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    unique: true,
    required: true,
  },
  id: String,
  time: Number,
  date: String,
  statusColor: String,
});

module.exports = model("TodoList", TodoSchema);
