const express = require("express");
const UserController = require("../../controllers/user");
const {userAuth} = require("../../middlewares/userAuth");
const router = express.Router();

router.post("/signup", userAuth, UserController.create);
router.post("/signin",userAuth, UserController.signIn);
module.exports = router;
