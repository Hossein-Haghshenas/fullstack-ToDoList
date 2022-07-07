const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/connect");
const todo = require("./routes/todo");
const user = require("./routes/user");
const auth = require("./routes/auth");
const cors = require("cors");

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/", todo);
app.use("/", user);
app.use("/", auth);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(PORT, () => {
      console.log(`server is up on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
