const mogoose = require("mongoose");

const connectDB = (url) => mogoose.connect(url);

module.exports = connectDB;
