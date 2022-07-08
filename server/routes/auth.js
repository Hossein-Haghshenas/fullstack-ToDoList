const Router = require("express");
const { auth } = require("../controller/auth.controller");
const router = Router();

// Route: /login
// method: POST
// PUBLIC
router.post("/login", auth);

module.exports = router;
