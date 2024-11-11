// controllers/packageController.js

import TourPackage from '../models/packagemodel.js';
import multer from 'multer';
import path from 'path';

// Set up multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Specify your uploads directory
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Create a unique filename with timestamp
    }
});

// File filter for image validation
const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true);
    }
    cb(new Error('Only images are allowed!'));
};

// Multer upload instance
export const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // Limit: 5MB
});

// Create a new tour package
export const createPackage = async (req, res) => {
    try {
        const packageData = { ...req.body };

        // Check if file is uploaded
        if (req.file) {
            packageData.uploadImage = `uploads/${req.file.filename}`; // Save the file path without leading slash
        }

        const newPackage = new TourPackage(packageData);
        const savedPackage = await newPackage.save();
        res.status(201).json(savedPackage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Read all tour packages
// Read all tour packages with optional search by location
export const getAllPackages = async (req, res) => {
    try {
        const { location } = req.query; // Get the search query from request parameters

        // Build a search filter, checking if location query is provided
        const filter = {};
        if (location) {
            filter.location = { $regex: new RegExp(location, 'i') }; // Case-insensitive search
        }

        // Retrieve packages based on filter
        const packages = await TourPackage.find(filter);

        // Map packages to include full image URLs if needed
        const formattedPackages = packages.map(pkg => ({
            ...pkg.toObject(),
            uploadImage: `http://localhost:5000/${pkg.uploadImage}` // Construct full URL for frontend
        }));

        res.status(200).json(formattedPackages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



// Read a single tour package by ID
// Read a single tour package by ID
export const getPackageById = async (req, res) => {
    try {
        const tourPackage = await TourPackage.findById(req.params.id);
        if (!tourPackage) return res.status(404).json({ message: 'Package not found' });

        // Construct full URL for the image
        tourPackage.uploadImage = `http://localhost:5000${tourPackage.uploadImage}`; // This should only append the base URL once
        res.status(200).json(tourPackage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




// Update a tour package with image upload
// Update a tour package with image upload
// Update a tour package with image upload
export const updatePackage = async (req, res) => {
    try {
        const packageData = { ...req.body };

        // Check if file is uploaded
        if (req.file) {
            packageData.uploadImage = `/uploads/${req.file.filename}`; // This is correct; keep leading slash here
        }

        const updatedTourPackage = await TourPackage.findByIdAndUpdate(req.params.id, packageData, { new: true });
        if (!updatedTourPackage) return res.status(404).json({ message: 'Package not found' });

        // Construct full URL for the image
        updatedTourPackage.uploadImage = `http://localhost:5000${updatedTourPackage.uploadImage}`; // Ensure no duplicate path
        res.status(200).json(updatedTourPackage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};



// Delete a tour package
export const deletePackage = async (req, res) => {
    try {
        const deletedPackage = await TourPackage.findByIdAndDelete(req.params.id);
        if (!deletedPackage) return res.status(404).json({ message: 'Package not found' });
        res.status(204).send(); // No content to send back
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
