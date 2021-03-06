const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

/* Authentication */

router.post('/login', UserController.login);

router.post('/signup', UserController.signup);

router.post('/token', UserController.refreshToken);

module.exports = router;
