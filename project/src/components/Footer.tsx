import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h5 className="fw-bold mb-3">TechBlog</h5>
            <p className="text-light">
              Your go-to source for the latest in technology, web development, 
              and digital innovation. Stay informed, stay ahead.
            </p>
            <div className="mt-4">
              <a href="#" className="social-icon">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-icon">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-icon">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-icon">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-icon">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-semibold mb-3">Categories</h6>
            <ul className="list-unstyled">
              <li><Link to="/categories" className="text-light text-decoration-none">Web Development</Link></li>
              <li><Link to="/categories" className="text-light text-decoration-none">AI & Technology</Link></li>
              <li><Link to="/categories" className="text-light text-decoration-none">DevOps</Link></li>
              <li><Link to="/categories" className="text-light text-decoration-none">Security</Link></li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-semibold mb-3">Company</h6>
            <ul className="list-unstyled">
              <li><Link to="/about" className="text-light text-decoration-none">About Us</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
              <li><a href="#" className="text-light text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-light text-decoration-none">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-semibold mb-3">Resources</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Tutorials</a></li>
              <li><a href="#" className="text-light text-decoration-none">Documentation</a></li>
              <li><a href="#" className="text-light text-decoration-none">Community</a></li>
              <li><a href="#" className="text-light text-decoration-none">Support</a></li>
            </ul>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-semibold mb-3">Connect</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Newsletter</a></li>
              <li><a href="#" className="text-light text-decoration-none">RSS Feed</a></li>
              <li><a href="#" className="text-light text-decoration-none">Podcast</a></li>
              <li><a href="#" className="text-light text-decoration-none">YouTube</a></li>
            </ul>
          </div>
        </div>
        
        <hr className="my-4" style={{borderColor: '#34495e'}} />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0 text-light">
              © 2024 TechBlog. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0 text-light">
              Made with ❤️ for the developer community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;