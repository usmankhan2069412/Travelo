import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../components/Context/AuthContext.js';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await login(email, password); // Use context's login with credentials
            toast.success('Login successful!');
            navigate('/admin');
        } catch (error) {
            toast.error('Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-screen flex items-center justify-center bg-[url('https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center bg-no-repeat">
            <div className="bg-white/90 mt-10 backdrop-blur-sm p-5 rounded-lg shadow-lg h-[420px] max-w-md w-full space-y-6 relative">
                <div className="text-center mt-10">
                    <h2 className="text-2xl font-bold text-[#344E41]">Log in to Explore</h2>
                    <p className="text-[#588157]">Find the best travel packages</p>
                </div>

                <form className="space-y-4" onSubmit={handleLogin}>
                    <div className="relative">
                        <label htmlFor="email" className="block text-sm font-medium text-[#3A5A40]">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full px-3 py-2 border rounded-md shadow-sm border-[#344E41] focus:ring-[#588157] focus:border-[#588157] sm:text-sm"
                            placeholder="your@email.com"
                        />
                    </div>

                    <div className="relative">
                        <label htmlFor="password" className="block text-sm font-medium text-[#3A5A40]">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full px-3 py-2 border rounded-md shadow-sm border-[#344E41] focus:ring-[#588157] focus:border-[#588157] sm:text-sm"
                            placeholder="Enter your password"
                        />
                    </div>

                    <div className="text-center">
                        <p className="text-sm text-[#344E41]">
                            Don't have an account? <Link to="/signup" className="font-medium text-[#588157] hover:text-[#3A5A40]">Sign up</Link>
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#588157] hover:bg-[#3A5A40] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#588157]"
                        disabled={loading}
                    >
                        {loading ? 'Signing in...' : 'Sign in'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
