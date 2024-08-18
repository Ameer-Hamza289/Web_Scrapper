// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController');

// Register a new user
router.post('/register', registerUser);

// Login a user
router.post('/login', loginUser);

// Get user details (Protected route)
router.get('/me', getUserProfile);

module.exports = router;
