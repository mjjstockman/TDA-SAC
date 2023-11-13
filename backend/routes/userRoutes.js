const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.post('/register', UserController.register);
router.post('/update', UserController.update);
router.post('/remove', UserController.remove);

module.exports = router;