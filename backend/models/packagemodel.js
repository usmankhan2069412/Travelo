import mongoose from 'mongoose';

const PackageSchema = new mongoose.Schema({
    id: { type: String, unique: true }, // Unique ID for the package
    name: { type: String, required: true },
    location:{type:String, required: true},
    duration : { type: String , required: true },
    price: { type: Number, required: true },
    description: { type: String },
    uploadImage: { type: String },
    // maxGuests: { type: Number, required: true },
    // activities: [{ type: String }],
    // includes: [{ type: String }],
    // notincludes: [{ type: String }],
    // safety: [{ type: String }],
});

export default mongoose.model('Package', PackageSchema);
