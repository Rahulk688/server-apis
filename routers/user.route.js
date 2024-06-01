const router = require('express').Router();
const userController = require('../controller/user.controller');

router.post("/register",userController.register);
router.post("/login",userController.login);
router.post("/findservant",userController.findservant);
router.post("/findone",userController.findone);

module.exports = router;
