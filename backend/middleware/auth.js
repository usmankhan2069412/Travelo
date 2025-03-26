import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// Load environment variables once at startup
dotenv.config();

const authMiddleware = async (req, res, next) => {
    try {
        // Extract token from Authorization header
        const authHeader = req.header('Authorization');
        if (!authHeader?.startsWith('Bearer ')) {
            return res.status(401).json({ 
                success: false,
                message: 'Access denied. No token provided.' 
            });
        }

        const token = authHeader.split(' ')[1];
        
        // Verify and decode the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Attach decoded user data to request
        req.user = decoded;
        next();
    } catch (error) {
        // Handle different types of JWT errors
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ 
                success: false,
                message: 'Invalid token format.' 
            });
        }
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ 
                success: false,
                message: 'Token has expired.' 
            });
        }
        
        // Handle any other unexpected errors
        return res.status(500).json({ 
            success: false,
            message: 'Authentication error.' 
        });
    }
};

export default authMiddleware;
