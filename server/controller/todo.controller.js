const TodoList = require("../model/todos");

const getAllTodo = async (req, res) => {
  try {
    const { user } = await req.params;
    const todos = await TodoList.find({ user });
    res.status(200).json({ todos });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTodo = async (req, res) => {
  try {
    const newTodo = req.body;

    const todo = await TodoList.create(newTodo);
    res.status(200).json({ todo });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const todo = req.body;
    const updateTodo = await TodoList.findByIdAndUpdate(
      _id,
      {
        ...todo,
        _id,
      },
      {
        new: true,
      }
    );
    res.status(200).json({ updateTodo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const todo = await TodoList.findByIdAndRemove({ _id });
    res.status(200).json({ todo });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
