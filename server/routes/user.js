const Router = require("express");
const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/user.controller");

const router = Router();

router.get("/admin", getAllUsers);
router.get("/user/:id", getOneUser);
router.post("/register", createUser);
router.patch("/user/:id", updateUser);
router.delete("/admin/:id", deleteUser);

module.exports = router;
