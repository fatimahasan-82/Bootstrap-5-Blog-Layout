import React, { useState, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';

interface HomeProps {
  searchTerm: string;
}

const Home: React.FC<HomeProps> = ({ searchTerm }) => {
  const [visiblePosts, setVisiblePosts] = useState(6);

  const filteredPosts = useMemo(() => {
    if (!searchTerm) return blogPosts;
    
    return blogPosts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  const displayedPosts = filteredPosts.slice(0, visiblePosts);

  const loadMorePosts = () => {
    setVisiblePosts(prev => Math.min(prev + 3, filteredPosts.length));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section text-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">
                Stay Updated with the Latest in Technology
              </h1>
              <p className="lead mb-5">
                Discover cutting-edge insights, tutorials, and trends in web development, 
                AI, cybersecurity, and more from industry experts.
              </p>
              <a href="#blog-posts" className="btn btn-light btn-lg px-5 py-3 rounded-pill">
                Explore Articles <ArrowRight className="ms-2" size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section id="blog-posts" className="py-5 bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-5 fw-bold mb-3">
                {searchTerm ? `Search Results for "${searchTerm}"` : 'Latest Articles'}
              </h2>
              <p className="lead text-muted">
                {searchTerm 
                  ? `Found ${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''}`
                  : 'Curated content to help you stay ahead in the tech world'
                }
              </p>
            </div>
          </div>
          
          {filteredPosts.length === 0 ? (
            <div className="row">
              <div className="col-12 text-center">
                <div className="py-5">
                  <h4 className="text-muted">No articles found</h4>
                  <p className="text-muted">Try adjusting your search terms or browse all articles.</p>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="row g-4">
                {displayedPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
              
              {visiblePosts < filteredPosts.length && (
                <div className="row mt-5">
                  <div className="col-12 text-center">
                    <button 
                      className="btn btn-outline-primary btn-lg px-5"
                      onClick={loadMorePosts}
                    >
                      Load More Articles
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h3 className="mb-4">Stay in the Loop</h3>
              <p className="lead mb-4">
                Get the latest articles and insights delivered straight to your inbox
              </p>
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="input-group input-group-lg">
                    <input 
                      type="email" 
                      className="form-control" 
                      placeholder="Enter your email address"
                    />
                    <button className="btn btn-light text-primary fw-semibold" type="button">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;