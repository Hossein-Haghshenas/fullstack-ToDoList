const Router = require("express");
const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/user.controller");

const router = Router();

// Route: /admin
// method: GET
// PRIVATE
router.get("/admin", getAllUsers);

// Route: /user/:id
// method: GET
// PRIVATE
router.get("/user/:id", getOneUser);

// Route: /register
// method: POST
// PUBLIC
router.post("/register", createUser);

// Route: /user/:id
// method: PATCH
// PRIVATE
router.patch("/user/:id", updateUser);

// Route: /admin/:id
// method: DELETE
// PRIVATE
router.delete("/admin/:id", deleteUser);

module.exports = router;
