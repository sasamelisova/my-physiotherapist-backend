const express = require('express');
const userController = require('../controllers/userController');
const therapyController = require('../controllers/therapyController');
const router = express.Router();

router.post('/SignUp', userController.register);
router.post('/LogIn', userController.login);
router.get('/:username', userController.getUserByUsername);
router.post('/:username/therapy', therapyController.addTherapySession);
router.get('/:username/therapy', therapyController.getTherapySessions);

module.exports = router;





