import React from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Editor-in-Chief",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "10+ years in tech journalism, specializing in AI and emerging technologies."
    },
    {
      name: "Michael Chen",
      role: "Senior Developer",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Full-stack developer with expertise in React, Node.js, and cloud technologies."
    },
    {
      name: "Emily Parker",
      role: "UX/UI Specialist",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Design expert focused on creating intuitive and accessible user experiences."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section text-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">About TechBlog</h1>
              <p className="lead mb-0">
                Empowering developers and tech enthusiasts with cutting-edge insights, 
                tutorials, and industry trends since 2020.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h2 className="display-6 fw-bold mb-4">Our Mission</h2>
              <p className="lead mb-4">
                We believe that knowledge should be accessible to everyone. Our mission is to 
                democratize tech education by providing high-quality, practical content that 
                helps developers at all levels grow their skills and advance their careers.
              </p>
              <div className="row g-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div className="bg-primary text-white rounded-circle p-3 me-3">
                      <Target size={24} />
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Quality Content</h6>
                      <small className="text-muted">Expert-reviewed articles</small>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div className="bg-primary text-white rounded-circle p-3 me-3">
                      <Users size={24} />
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Community</h6>
                      <small className="text-muted">50K+ developers</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Team collaboration" 
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-lg-3 col-md-6">
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <div className="bg-primary text-white rounded-circle p-3 d-inline-flex mb-3">
                  <Award size={32} />
                </div>
                <h3 className="fw-bold text-primary">500+</h3>
                <p className="text-muted mb-0">Articles Published</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <div className="bg-primary text-white rounded-circle p-3 d-inline-flex mb-3">
                  <Users size={32} />
                </div>
                <h3 className="fw-bold text-primary">50K+</h3>
                <p className="text-muted mb-0">Monthly Readers</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <div className="bg-primary text-white rounded-circle p-3 d-inline-flex mb-3">
                  <Target size={32} />
                </div>
                <h3 className="fw-bold text-primary">15+</h3>
                <p className="text-muted mb-0">Tech Categories</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <div className="bg-primary text-white rounded-circle p-3 d-inline-flex mb-3">
                  <Heart size={32} />
                </div>
                <h3 className="fw-bold text-primary">4.8/5</h3>
                <p className="text-muted mb-0">Reader Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="display-6 fw-bold mb-3">Meet Our Team</h2>
              <p className="lead text-muted">
                Passionate experts dedicated to bringing you the best tech content
              </p>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="card border-0 shadow-sm text-center h-100">
                  <div className="card-body p-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="rounded-circle mb-3"
                      style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                    />
                    <h5 className="fw-bold mb-1">{member.name}</h5>
                    <p className="text-primary fw-semibold mb-3">{member.role}</p>
                    <p className="text-muted">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="display-6 fw-bold mb-4">Our Values</h2>
              <div className="row g-4">
                <div className="col-md-4">
                  <h5 className="fw-bold mb-3">Quality First</h5>
                  <p>Every article is thoroughly researched, fact-checked, and reviewed by industry experts.</p>
                </div>
                <div className="col-md-4">
                  <h5 className="fw-bold mb-3">Community Driven</h5>
                  <p>We listen to our readers and create content that addresses real-world challenges.</p>
                </div>
                <div className="col-md-4">
                  <h5 className="fw-bold mb-3">Always Learning</h5>
                  <p>Technology evolves rapidly, and so do we. We stay current with the latest trends and best practices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;