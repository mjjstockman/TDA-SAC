const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

router.post("/register", UserController.register);
router.put("/status/:id", UserController.status);
// router.put('/update/:id', UserController.update);
router.delete("/delete/:id", UserController.remove);

module.exports = router;
