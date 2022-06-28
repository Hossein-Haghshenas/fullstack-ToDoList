const Router = require("express");
const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/userControl");

const { upload } = require("../middleware/profilePhoto");

const router = Router();

router.get("/admin", getAllUsers);
router.get("/user/:id", getOneUser);
router.post("/register", upload.single("profilePicture"), createUser);
router.patch("/user/:id", updateUser);
router.delete("/admin/:id", deleteUser);

module.exports = router;
