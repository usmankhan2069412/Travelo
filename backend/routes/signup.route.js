import express from 'express';
import {signup ,login } from '../Controller/signup.controller.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/signup', signup); // Signup route
router.post('/login', login);   // Login route

// Example protected route
router.get('/admin', auth, (req, res) => {
  res.send('Admin dashboard - protected');
});

export default router;