const express = require('express');
const router = express.Router();
const TeamController = require('../controllers/teamController');

router.post('/create', TeamController.createTeam);
router.post('/update', TeamController.updateTeam);

module.exports = router;