const Router = require("express");

const {
  getAllTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/todo.controller");

const router = Router();

// Route: /:slag
// method: GET
// PUBLIC
router.get("/:user", getAllTodo);
// Route: /
// method: POST
// PRIVATE
router.post("/", createTodo);
// Route: /
// method: PATCH
// PRIVATE
router.patch("/:id", updateTodo);
// Route: /
// method: DELETE
// PRIVATE
router.delete("/:id", deleteTodo);

module.exports = router;
