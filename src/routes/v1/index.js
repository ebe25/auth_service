const express = require("express");
const UserController = require("../../controllers/user");
const {AuthUserValidators} = require("../../middlewares/index");
const router = express.Router();

router.post("/signup", AuthUserValidators.userAuth, UserController.create);
router.post("/signin", AuthUserValidators.userAuth, UserController.signIn);
router.get("/isAuthenticated", UserController.isAuthenticated);
router.get("/isAdmin", AuthUserValidators.isAdminAuth, UserController.isAdmin);

module.exports = router;
