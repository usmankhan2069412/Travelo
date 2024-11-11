import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const authMiddleware = (req, res, next) => {
    // Get the token from the request headers
    const token = req.header('Authorization')?.split(' ')[1]; // Assuming 'Bearer <token>' format

    // Check if token is not present
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach the user data to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};

export default authMiddleware;
