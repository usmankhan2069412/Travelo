import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/tour%26travel')
.then(() => {
    console.log('MongoDB Connected...');
})
.catch((err) => {
    console.log('Failed to connect to MongoDB', err);
});