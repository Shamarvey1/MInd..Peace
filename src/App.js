import About from './components/About';
import Home from './components/Home';
import Product from './components/Product';
import Blog from './components/Blog';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
   <nav className="navbar">
       
          <div className='brand'>
          Mental Health Tracker
          </div>
          <div className='links'>
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/Blog" className="nav-link">Blog</Link>
          </div>
          <div className='Button'>
            <button>Login</button>
            <button>Sign Up</button>
          </div>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path= "/products" element={<Product/>}/>
        <Route path= "/Blog" element={<Blog/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


