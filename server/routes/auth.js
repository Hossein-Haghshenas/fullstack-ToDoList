const Router = require("express");
const { auth } = require("../controller/auth.controller");
const router = Router();

router.post("/login", auth);

module.exports = router;
