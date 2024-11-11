import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const SignUpSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true, // Unique phone numbers
    },
    email: {
        type: String,
        required: true,
        unique: true, // Unique email addresses
        lowercase: true, // Store email in lowercase for consistency
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now, // Automatically set the creation date
    }
});

// Pre-save hook for hashing the password
SignUpSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

export default mongoose.model('SignUp', SignUpSchema);
