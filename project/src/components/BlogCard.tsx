import React from 'react';
import { Calendar, User, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card h-100">
        <img 
          src={post.image} 
          className="card-img-top" 
          alt={post.title}
          style={{height: '250px', objectFit: 'cover'}}
        />
        <div className="card-body d-flex flex-column">
          <div className="mb-3">
            <span className="badge category-badge text-white">
              {post.category}
            </span>
          </div>
          
          <h5 className="card-title fw-bold mb-3">
            <Link to={`/post/${post.slug}`} className="text-decoration-none text-dark">
              {post.title}
            </Link>
          </h5>
          
          <p className="card-text text-muted mb-4 flex-grow-1">
            {post.description}
          </p>
          
          <div className="mt-auto">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="d-flex align-items-center">
                <User size={16} className="text-muted me-2" />
                <small className="text-muted">{post.author}</small>
              </div>
              <div className="d-flex align-items-center">
                <Clock size={16} className="text-muted me-2" />
                <small className="text-muted">{post.readTime}</small>
              </div>
            </div>
            
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <Calendar size={16} className="text-muted me-2" />
                <small className="post-date">{post.date}</small>
              </div>
              <Link to={`/post/${post.slug}`} className="btn btn-read-more text-white">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;