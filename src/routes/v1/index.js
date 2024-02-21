const express = require("express");
const UserController = require("../../controllers/user");
const {AuthUserValidator} = require("../../middlewares/index");
const router = express.Router();

router.post("/signup", AuthUserValidator.userAuth , UserController.create);
router.post("/signin", AuthUserValidator.userAuth, UserController.signIn);
router.get("/isAuthenticated", UserController.isAuthenticated);
module.exports = router;
