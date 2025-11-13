import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Landing_Page/Home/HomePage";
import AboutPage from "./Landing_Page/about/AboutPage";
import PricingPage from "./Landing_Page/pricing/PricingPage";
import ProductsPage from "./Landing_Page/products/ProductPage";
import SignUp from "./Landing_Page/Signup/SignUp";
import SupportPage from "./Landing_Page/support/SupportPage";
import Navbar from "./Landing_Page/Navbar";
import Footer from "./Landing_Page/Footer";
import NotFound from "./Landing_Page/NotFound";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="pricing" element={<PricingPage />} />
      <Route path="products" element={<ProductsPage />} />
      <Route path="support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
);
