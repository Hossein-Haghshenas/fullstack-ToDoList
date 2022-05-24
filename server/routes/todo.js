const Router = require("express");

const {
  getAllTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/todoControl");

const router = Router();

router.get("/", getAllTodo);
router.post("/", createTodo);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
