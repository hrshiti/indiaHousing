import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/auth/LoginPage';
import OtpPage from '@/pages/auth/OtpPage';
import SearchPage from '@/pages/SearchPage';
import PropertyDetailsPage from '@/pages/PropertyDetailsPage';
import PostPropertyPage from '@/pages/PostPropertyPage';
import ProfilePage from '@/pages/profile/ProfilePage';
import SavedPage from '@/pages/SavedPage';
import CategorySearchPage from '@/pages/CategorySearchPage';
import SplashScreen from '@/components/auth/SplashScreen';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { AnimatePresence } from 'framer-motion';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return null; // Or a spinner
  if (!user) return <Navigate to="/auth/login" />;
  return children;
};

// ... imports

/* Ensure PageTransition and ScrollToTop are imported */
import PageTransition from '@/components/common/PageTransition';
import ScrollToTop from '@/components/common/ScrollToTop';

/* ... imports ... */

function AppRoutes() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/auth/login" element={<PageTransition><LoginPage /></PageTransition>} />
          <Route path="/auth/otp" element={<PageTransition><OtpPage /></PageTransition>} />

          <Route element={<MainLayout />}>
            <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
            <Route path="/search" element={<PageTransition><SearchPage /></PageTransition>} />
            <Route path="/category/:category" element={<PageTransition><CategorySearchPage /></PageTransition>} />
            <Route path="/property/:id" element={<PageTransition><PropertyDetailsPage /></PageTransition>} />
            <Route path="/sell" element={<PageTransition><PostPropertyPage /></PageTransition>} />
            <Route path="/profile" element={<PageTransition><ProfilePage /></PageTransition>} />
            <Route path="/saved" element={<PageTransition><SavedPage /></PageTransition>} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}


export default App;
