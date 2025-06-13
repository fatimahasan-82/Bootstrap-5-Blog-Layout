import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import Categories from './pages/Categories';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <div className="min-h-screen d-flex flex-column">
        <Navbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm} />} />
            <Route path="/post/:slug" element={<BlogPost />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;