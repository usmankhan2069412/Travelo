import SignUp from '../models/signup.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

// Signup Controller
export const signup = async (req, res) => {
    const { username, email, phone, password } = req.body;

    try {
        // Check if user exists by email or phone
        const existingUser = await SignUp.findOne({ $or: [{ email }, { phone }] });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user without hashing the password here
        const newUser = new SignUp({
            username,
            email,
            phone,
            password, // Raw password, hashing will happen in the model
        });
        
        await newUser.save(); // Save the new user

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error creating user:', error.message);
        res.status(500).json({ error: 'Server error', details: error.message });
    }
};

// Login Controller
export const login = async (req, res) => {
    const { email, password } = req.body; // Change variable to 'email'

    try {
        // Find user by email only
        const user = await SignUp.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Check if provided password matches stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token upon successful login
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        res.json({ token });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

