import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/Scroll/ScrollToTop';

// Admin components
import Signup from './pages/SignUp';
import AdminLayout from './components/AdminComponent/AdminLayout';
import AdminDashboard from './components/AdminComponent/AdminDashboard';
import AdminBlogs from './components/AdminComponent/AdminBlogs';
import AdminPackage from './components/AdminComponent/PackagesPages/CreatePackage';
import AdminUser from './components/AdminComponent/InnerPages/user/AdminContact';
import BookingTable from './components/AdminComponent/Booking table/Booking_table';
import PackageTable from './components/AdminComponent/PackagesPages/PackageTable';
// import PackageCardForm from './components/AdminComponent/PackagesPages/PackageOnly';
import NoPage from './pages/NotFound';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './components/Context/AuthContext';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

// Lazy-loaded components
const HomePage = lazy(() => import('./pages/HomePage'));
const TourDetail = lazy(() => import('./pages/TourDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const PopularCities = lazy(() => import('./pages/PopularDestination'));
const Package = lazy(() => import('./pages/Package'));
const Help = lazy(() => import('./pages/Help'));
const FAQ = lazy(() => import('./components/FAQ/FAQ'));
const Booking = lazy(() => import('./pages/Booking'));
const BookingFormpage = lazy(() => import('./pages/BookingFormpage'));
const NotFound = lazy(() => import('./pages/NotFound'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const LoadingComponent = lazy(() => import('./components/LoadingComponent/LondingComponent'));

function App() {
    return (
    <AuthProvider>   
        <Router>
            <ScrollToTop />
            {/* Fallback loading indicator while lazy-loaded components are being fetched */}
            <Suspense fallback={<LoadingComponent />}>
                <Routes>
                    {/* Public routes */}
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/populardestination" element={<PopularCities />} />

                    {/* Package-related routes */}
                    <Route path="/package" element={<Package />} />
                    <Route path="/package/booking-form/:id" element={<BookingFormpage />} /> {/* Dynamic ID here */}
                    <Route path="/package/:id" element={<TourDetail />} /> {/* Dynamic ID here */}
                    <Route path="/package/tour-detail/booking" element={<Booking />} />

                    {/* Other public pages */}
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/help/faq" element={<FAQ />} />
                    <Route path="/blog" element={<BlogPage />} /> 
                    {/* Login and Signup routes */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    {/* Admin routes */}
                    <Route path="/admin" element={
                        <ProtectedRoute>
                        <AdminLayout />
                        </ProtectedRoute>
                        
                        }>
                        <Route index element={
                            <ProtectedRoute>
                                <AdminDashboard />

                            </ProtectedRoute>
                            
                            } />
                        <Route path="blogs" element={
                            <ProtectedRoute>
                                <AdminBlogs/>
                            </ProtectedRoute>
                            } />
                        <Route path="create-package" element={
                            <ProtectedRoute>
                                <AdminPackage />
                            </ProtectedRoute>
                            } />
                        <Route path="contact-info" element={
                            <ProtectedRoute>
                            <AdminUser/>
                            </ProtectedRoute>
                            }/>
                        <Route path="booking-details" element={
                            <ProtectedRoute>

                                <BookingTable/>
                            </ProtectedRoute>

                            }/>
                        <Route path="package-list" element={
                            <ProtectedRoute>

                                <PackageTable />
                            </ProtectedRoute>

                            } />
                        {/* <Route path="package-card" element={<PackageCardForm />} /> */}
                        <Route path="*" element={<NoPage />} />
                    </Route>

                    {/* 404 page for undefined routes */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
            <Toaster /> {/* Toast notifications */}
        </Router>
        </AuthProvider>
    );
}

export default App;
