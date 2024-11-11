    // routes/packageRoutes.js

    import express from 'express';
    import {
        createPackage,
        getAllPackages,
        getPackageById,
        updatePackage,
        deletePackage,
        upload 
    } from '../Controller/packageController.js';

    const router = express.Router();

    // Define the routes
    router.post('/', upload.single('uploadImage'), createPackage); // Create with image upload
    router.get('/', getAllPackages); // Get all packages
    router.get('/:id', getPackageById); // Get package by ID
    router.put('/:id', upload.single('uploadImage'), updatePackage); // Update with image upload
    router.delete('/:id', deletePackage); // Delete package

    export default router;
