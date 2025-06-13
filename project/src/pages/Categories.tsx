import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import { blogPosts, categories } from '../data/blogPosts';

const Categories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category.toLowerCase().replace(/\s+/g, '-').replace('&', '') === selectedCategory);

  return (
    <div>
      {/* Header */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4 fw-bold mb-3">Categories</h1>
              <p className="lead text-muted">
                Explore articles by topic and find exactly what you're looking for
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-4 bg-white border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex align-items-center mb-3">
                <Filter size={20} className="me-2 text-primary" />
                <h5 className="mb-0 fw-semibold">Filter by Category</h5>
              </div>
              <div className="d-flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`btn ${
                      selectedCategory === category.id 
                        ? 'btn-primary' 
                        : 'btn-outline-primary'
                    } btn-sm`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <h3 className="fw-bold">
                {selectedCategory === 'all' 
                  ? 'All Articles' 
                  : categories.find(c => c.id === selectedCategory)?.name
                }
              </h3>
              <p className="text-muted">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="row">
              <div className="col-12 text-center py-5">
                <h4 className="text-muted">No articles found in this category</h4>
                <p className="text-muted">Check back later for new content!</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Categories;