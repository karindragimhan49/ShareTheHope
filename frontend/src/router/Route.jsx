import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import HomePage from "../pages/Home";
import DonorDashboard from "../pages/DonorDashboard";
import RecipientDashboard from "../pages/RecipientDashboard";
import Login from "../pages/login";
import Register from "../pages/Register";
const RoutesConfig = () => {
  const location = useLocation();

  // Define routes where NavBar should not appear
  const noNavBarRoutes = ["/DonorDashboard","/login","/register"];

  return (
    <div>
      {/* Conditionally render NavBar */}
      {!noNavBarRoutes.includes(location.pathname) && <NavBar />}

      {/* Routes are defined here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/DonorDashboard" element={<DonorDashboard />} />
        <Route path="/RecipientDashboard" element={<RecipientDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="Register" element={<Register />} />
      </Routes>

      {/* Footer remains constant */}
      <Footer />
    </div>
  );
};

export default RoutesConfig;
