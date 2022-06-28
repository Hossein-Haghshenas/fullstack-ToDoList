const user = require("../model/users");

const getAllUsers = async (req, res) => {
  try {
    const users = await user.find({});
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getOneUser = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const targetUser = await user.findById({ _id });
    res.status(200).json({ targetUser });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = new user({
      profilePicture: req.file.originalname,
      ...req.body,
    });
    const createNewUser = await user.create(newUser);
    res.status(200).json({ createNewUser });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const newInfo = req.body;
    const updateUser = await user.findByIdAndUpdate(
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
    const targetUser = await user.findByIdAndRemove({ _id });
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
