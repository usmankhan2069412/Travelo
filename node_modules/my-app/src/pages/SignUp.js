import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import axios from 'axios'; // Import axios
import { Link, Navigate, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
        terms: false,
    });
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return; // Prevent multiple submissions
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        // Simple email validation (optional)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
            toast.error("Invalid email format");
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/api/account/signup', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            toast.success(response.data.message || "Signup successful");
            navigate("/login");

            setFormData({
                username: '',
                phone: '',
                email: '',
                password: '',
                confirmPassword: '',
                terms: false,
            });
        } catch (error) {
            // Handle errors from the response or network errors
            toast.error(error.response?.data?.message || error.message || "Signup failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Toaster />
            <div className="flex items-center justify-center bg-[url('https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center bg-no-repeat">
                <div className="bg-white/90 backdrop-blur-sm p-4 mt-20 mb-20 min-h-screen rounded-lg shadow-lg max-w-lg w-full space-y-6 relative">
                    {/* SVG Decoration */}
                    <div className="absolute -top-10 left-0 right-0 flex justify-center">
                        <img src="/images/svg/login.svg" alt="Travel Icon" className="w-16 h-16 rounded-full border-4 border-white shadow-lg" />
                    </div>

                    <div className="text-center mt-12">
                        <h2 className="text-3xl font-bold text-[#344E41]">Create an Account</h2>
                        <p className="text-[#588157]">Join us and explore exciting destinations!</p>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {/* Full Name */}
                        <div className="relative">
                            <label htmlFor="username" className="block text-sm font-medium text-[#3A5A40]">UserName</label>
                            <div className="relative mt-1">
                                <input 
                                    id="username" 
                                    name="username" 
                                    type="text" 
                                    required 
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="block w-full px-3 py-2 border rounded-md shadow-sm border-[#344E41] focus:ring-[#588157] focus:border-[#588157] sm:text-sm" 
                                    placeholder="Usman" 
                                />
                                <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#3A5A40]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A6.98 6.98 0 0112 19a6.98 6.98 0 016.879-4.804A6.978 6.978 0 0119 12a7 7 0 10-14 0 6.978 6.978 0 010 5.804zM12 7a4 4 0 110 8 4 4 0 010-8z" />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        {/* Phone Number */}
                        <div className="relative">
                            <label htmlFor="phone" className="block text-sm font-medium text-[#3A5A40]">Phone Number</label>
                            <div className="relative mt-1">
                                <input 
                                    id="phone" 
                                    name="phone" 
                                    type="tel" 
                                    required 
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="block w-full px-3 py-2 border rounded-md shadow-sm border-[#344E41] focus:ring-[#588157] focus:border-[#588157] sm:text-sm" 
                                    placeholder="+92 342 2069412" 
                                />
                                <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#3A5A40]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10v1a5 5 0 005 5h1l4 4V6l-4 4H8a5 5 0 00-5 5v1" />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        {/* Email Address */}
                        <div className="relative">
                            <label htmlFor="email" className="block text-sm font-medium text-[#3A5A40]">Email address</label>
                            <div className="relative mt-1">
                                <input 
                                    id="email" 
                                    name="email" 
                                    type="email" 
                                    required 
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="block w-full px-3 py-2 border rounded-md shadow-sm border-[#344E41] focus:ring-[#588157] focus:border-[#588157] sm:text-sm" 
                                    placeholder="your@email.com" 
                                />
                                <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#3A5A40]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m0 0l-4 4m4-4l4-4" />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <label htmlFor="password" className="block text-sm font-medium text-[#3A5A40]">Password</label>
                            <div className="relative mt-1">
                                <input 
                                    id="password" 
                                    name="password" 
                                    type="password" 
                                    required 
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="block w-full px-3 py-2 border rounded-md shadow-sm border-[#344E41] focus:ring-[#588157] focus:border-[#588157] sm:text-sm" 
                                    placeholder="Create a password" 
                                />
                                <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#3A5A40]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10v1a5 5 0 005 5h1l4 4V6l-4 4H8a5 5 0 00-5 5v1" />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div className="relative">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#3A5A40]">Confirm Password</label>
                            <div className="relative mt-1">
                                <input 
                                    id="confirmPassword" 
                                    name="confirmPassword" 
                                    type="password" 
                                    required 
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="block w-full px-3 py-2 border rounded-md shadow-sm border-[#344E41] focus:ring-[#588157] focus:border-[#588157] sm:text-sm" 
                                    placeholder="Re-enter your password" 
                                />
                                <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#3A5A40]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10v1a5 5 0 005 5h1l4 4V6l-4 4H8a5 5 0 00-5 5v1" />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        {/* Terms and Conditions */}
                        <div className="relative flex items-center">
                            <input 
                                id="terms" 
                                name="terms" 
                                type="checkbox" 
                                required 
                                checked={formData.terms}
                                onChange={handleChange}
                                className="h-4 w-4 border-gray-300 rounded" 
                            />
                            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">I agree to the terms and conditions</label>
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            className={`w-full py-2 rounded-md ${loading ? 'bg-gray-400' : 'bg-[#588157]'} text-white font-bold`}
                            disabled={loading}
                        >
                            {loading ? 'Loading...' : 'Sign Up'}
                        </button>
                    </form>

                    {/* Sign In Link */}
                    <div className="text-center mt-4">
                        <p className="text-sm text-gray-600">Already have an account? <Link to="/login" className="text-[#588157] font-semibold">Sign In</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
