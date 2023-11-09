const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.post('/register', UserController.register);
router.post('/update', UserController.update);

module.exports = router;