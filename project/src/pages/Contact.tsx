import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Users, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="display-4 fw-bold mb-4">Get in Touch</h1>
              <p className="lead text-muted">
                Have a question, suggestion, or want to contribute? We'd love to hear from you!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4 mb-5">
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm text-center h-100">
                <div className="card-body p-4">
                  <div className="bg-primary text-white rounded-circle p-3 d-inline-flex mb-3">
                    <MessageCircle size={32} />
                  </div>
                  <h5 className="fw-bold mb-3">General Inquiries</h5>
                  <p className="text-muted mb-3">
                    Questions about our content, partnerships, or general feedback
                  </p>
                  <a href="mailto:hello@techblog.com" className="btn btn-outline-primary">
                    hello@techblog.com
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm text-center h-100">
                <div className="card-body p-4">
                  <div className="bg-primary text-white rounded-circle p-3 d-inline-flex mb-3">
                    <Users size={32} />
                  </div>
                  <h5 className="fw-bold mb-3">Write for Us</h5>
                  <p className="text-muted mb-3">
                    Interested in contributing articles or guest posts to our blog
                  </p>
                  <a href="mailto:writers@techblog.com" className="btn btn-outline-primary">
                    writers@techblog.com
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm text-center h-100">
                <div className="card-body p-4">
                  <div className="bg-primary text-white rounded-circle p-3 d-inline-flex mb-3">
                    <Clock size={32} />
                  </div>
                  <h5 className="fw-bold mb-3">Response Time</h5>
                  <p className="text-muted mb-3">
                    We typically respond to all inquiries within 24-48 hours
                  </p>
                  <span className="badge bg-success fs-6 px-3 py-2">
                    Fast Response
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-lg">
                <div className="card-body p-5">
                  <div className="text-center mb-4">
                    <h3 className="fw-bold mb-3">Send us a Message</h3>
                    <p className="text-muted">
                      Fill out the form below and we'll get back to you as soon as possible
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label fw-semibold">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label fw-semibold">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="subject" className="form-label fw-semibold">
                          Subject *
                        </label>
                        <select
                          className="form-select form-select-lg"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Choose a subject...</option>
                          <option value="general">General Inquiry</option>
                          <option value="feedback">Feedback</option>
                          <option value="contribution">Article Contribution</option>
                          <option value="partnership">Partnership</option>
                          <option value="technical">Technical Issue</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label htmlFor="message" className="form-label fw-semibold">
                          Message *
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us more about your inquiry..."
                          required
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-primary btn-lg px-5">
                          <Send size={20} className="me-2" />
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Info */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="row g-4 text-center">
                <div className="col-md-4">
                  <div className="d-flex flex-column align-items-center">
                    <div className="bg-light rounded-circle p-3 mb-3">
                      <Mail size={24} className="text-primary" />
                    </div>
                    <h6 className="fw-bold">Email</h6>
                    <p className="text-muted small mb-0">hello@techblog.com</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex flex-column align-items-center">
                    <div className="bg-light rounded-circle p-3 mb-3">
                      <Phone size={24} className="text-primary" />
                    </div>
                    <h6 className="fw-bold">Phone</h6>
                    <p className="text-muted small mb-0">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex flex-column align-items-center">
                    <div className="bg-light rounded-circle p-3 mb-3">
                      <MapPin size={24} className="text-primary" />
                    </div>
                    <h6 className="fw-bold">Location</h6>
                    <p className="text-muted small mb-0">San Francisco, CA</p>
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

export default Contact;