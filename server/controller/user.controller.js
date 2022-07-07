const User = require("../model/users");
const bcrypt = require("bcrypt");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getOneUser = async (req, res) => {
  try {
    const { username } = req.params;
    const targetUser = await User.findOne({ username });
    res.status(200).json({ targetUser });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createUser = async (req, res) => {
  try {
    const {
      profilePicture,
      firstName,
      lastName,
      age,
      language,
      githubAddress,
      linkedinAddress,
      abilities,
      username,
      password,
      adminity,
    } = req.body;

    const hashedPass = await bcrypt.hash(password, 15);

    const newUser = await {
      profilePicture,
      firstName,
      lastName,
      age,
      language,
      githubAddress,
      linkedinAddress,
      abilities,
      username,
      password: hashedPass,
      adminity,
    };

    const createNewUser = await User.create(newUser);
    res.status(200).json({ createNewUser });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const newInfo = req.body;
    const updateUser = await User.findByIdAndUpdate(
      _id,
      {
        ...newInfo,
        _id,
      },
      {
        new: true,
      }
    );
    res.status(200).json({ updateUser });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const targetUser = await User.findByIdAndRemove({ _id });
    res.status(200).json({ targetUser });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
