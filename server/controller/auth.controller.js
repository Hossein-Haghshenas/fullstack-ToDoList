const User = require("../model/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const auth = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user) {
    return res.status(400).json({
      errors: [
        {
          msg: "user not found!!!",
        },
      ],
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({
      errors: [
        {
          msg: "password is't correct !!!",
        },
      ],
    });
  }

  const token = await jwt.sign(
    {
      username,
      id: user._id,
      adminity: user.adminity,
    },
    process.env.JWT_SEC,
    { expiresIn: "7d" }
  );

  res.json({
    token,
  });
};

module.exports = { auth };
