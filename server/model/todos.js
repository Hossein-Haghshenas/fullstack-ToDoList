const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const TodoSchema = new Schema({
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
