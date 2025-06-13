import React from 'react';
import { Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ searchTerm, onSearchChange }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'active fw-semibold' : '';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand text-primary fw-bold" to="/">
          TechBlog
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/')}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/categories')}`} to="/categories">Categories</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/about')}`} to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/contact')}`} to="/contact">Contact</Link>
            </li>
          </ul>
          
          <div className="d-flex align-items-center">
            <div className="input-group me-3" style={{width: '300px'}}>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
              />
              <button className="btn btn-outline-primary" type="button">
                <Search size={16} />
              </button>
            </div>
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;