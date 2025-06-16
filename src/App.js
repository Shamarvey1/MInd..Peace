import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import About from './components/About';
import Home from './components/Home';
import Product from './components/Product';
import Blog from './components/Blog';
import HeroSection from './components/HeroSection';
import Login from './components/Login';
import ToolSection from './components/ToolSection';
import Featuredsection from './components/Featuredsection'; 
import TestimonialCard from './components/TestimonialCard';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="brand">Mental Health Tracker</div>
        <div className="links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
        </div>
        <div className="Button">
          <Link to="/login"><button>Login</button></Link>
          <button>Sign Up</button>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <Home />
            <ToolSection />
            <Featuredsection /> 
            <TestimonialCard />
            <Footer />
          </>
        } />

        <Route path="/home" element={
          <>
            <HeroSection />
            <Home />
            <ToolSection />
            <Featuredsection /> 
            <TestimonialCard />
            <Footer />
          </>
        } />

        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
