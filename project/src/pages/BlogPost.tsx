import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h1 className="display-4 mb-4">Post Not Found</h1>
            <p className="lead mb-4">The blog post you're looking for doesn't exist.</p>
            <Link to="/" className="btn btn-primary">
              <ArrowLeft size={16} className="me-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <Link to="/" className="btn btn-outline-primary mb-4">
                <ArrowLeft size={16} className="me-2" />
                Back to Articles
              </Link>
              
              <div className="mb-4">
                <span className="badge category-badge text-white fs-6 px-3 py-2">
                  {post.category}
                </span>
              </div>
              
              <h1 className="display-5 fw-bold mb-4">{post.title}</h1>
              
              <div className="d-flex flex-wrap align-items-center text-muted mb-4">
                <div className="d-flex align-items-center me-4 mb-2">
                  <User size={18} className="me-2" />
                  <span>{post.author}</span>
                </div>
                <div className="d-flex align-items-center me-4 mb-2">
                  <Calendar size={18} className="me-2" />
                  <span>{post.date}</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <Clock size={18} className="me-2" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <div className="mb-4">
                {post.tags.map((tag, index) => (
                  <span key={index} className="badge bg-light text-dark me-2 mb-2">
                    <Tag size={12} className="me-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <img 
                src={post.image} 
                alt={post.title}
                className="img-fluid rounded shadow-lg"
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="article-content">
                <div 
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  style={{
                    lineHeight: '1.8',
                    fontSize: '1.1rem'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row mb-4">
              <div className="col-12">
                <h3 className="fw-bold">Related Articles</h3>
                <p className="text-muted">More articles in {post.category}</p>
              </div>
            </div>
            <div className="row g-4">
              {relatedPosts.map((relatedPost) => (
                <div key={relatedPost.id} className="col-lg-4">
                  <div className="card h-100">
                    <img 
                      src={relatedPost.image} 
                      className="card-img-top" 
                      alt={relatedPost.title}
                      style={{height: '200px', objectFit: 'cover'}}
                    />
                    <div className="card-body">
                      <h6 className="card-title">
                        <Link to={`/post/${relatedPost.slug}`} className="text-decoration-none text-dark">
                          {relatedPost.title}
                        </Link>
                      </h6>
                      <p className="card-text text-muted small">
                        {relatedPost.description.substring(0, 100)}...
                      </p>
                      <div className="d-flex align-items-center justify-content-between">
                        <small className="text-muted">{relatedPost.readTime}</small>
                        <Link to={`/post/${relatedPost.slug}`} className="btn btn-sm btn-outline-primary">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;