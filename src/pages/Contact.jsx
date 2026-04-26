import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { MapPin, Mail, Clock, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        inquiryType: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dummy submit
        alert(`Thank you ${formData.name}. We have received your inquiry regarding ${formData.inquiryType || 'General Business'} and will respond to ${formData.email} shortly.`);
        setFormData({ name: '', email: '', inquiryType: '', message: '' });
    };

    return (
        <div className="contact-page">
            {/* Page Header */}
            <section className="page-header bg-primary text-white text-center">
                <div className="container">
                    <ScrollReveal>
                        <h1 className="text-white">Get in Touch</h1>
                        <p className="subtitle mx-auto">
                            Partner with DigitalBridge Commerce. We are ready to drive your business forward globally.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Contact Content */}
            <section className="contact-content bg-light">
                <div className="container">
                    <div className="contact-grid">

                        {/* Contact Details */}
                        <ScrollReveal>
                            <div className="contact-info-panel bg-white glass-panel shadow-soft">
                                <h3 className="mb-4">Our Office</h3>

                                <ul className="contact-list">
                                    <li>
                                        <div className="contact-icon text-gold">
                                            <MapPin size={24} />
                                        </div>
                                        <div className="contact-text">
                                            <p className="contact-label">Address</p>
                                            <p>26th Floor, Amber Gem Tower,</p>
                                            <p>Ajman, United Arab Emirates</p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="contact-icon text-gold">
                                            <Mail size={24} />
                                        </div>
                                        <div className="contact-text">
                                            <p className="contact-label">Email Support</p>
                                            <a href="mailto:anilnilambur86@gmail.com" className="contact-link">
                                                anilnilambur86@gmail.com
                                            </a>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="contact-icon text-gold">
                                            <Clock size={24} />
                                        </div>
                                        <div className="contact-text">
                                            <p className="contact-label">Business Hours</p>
                                            <p>Monday - Friday</p>
                                            <p>9:00 AM - 6:00 PM (GST)</p>
                                        </div>
                                    </li>
                                </ul>

                                <div className="map-container mt-5">
                                    <iframe
                                        title="Office Location"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14421.378943343603!2d55.4389!3d25.3995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIzJzU4LjIiTiA1NcKwMjYnMjAuMCJF!5e0!3m2!1sen!2sae!4v1680000000000!5m2!1sen!2sae"
                                        width="100%"
                                        height="250"
                                        style={{ border: 0, borderRadius: '8px' }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Contact Form */}
                        <ScrollReveal delay={200}>
                            <div className="contact-form-panel bg-white shadow-soft">
                                <h3 className="mb-4">Send an Inquiry</h3>
                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@company.com"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="inquiryType">Subject / Inquiry Type *</label>
                                        <select
                                            id="inquiryType"
                                            name="inquiryType"
                                            value={formData.inquiryType}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="" disabled>Select a category</option>
                                            <option value="International Trading">International Trading Partnership</option>
                                            <option value="E-Commerce">E-Commerce & Retail Inquiry</option>
                                            <option value="Software Development">Software Development Request</option>
                                            <option value="HR Consultancy">HR & Consulting Services</option>
                                            <option value="General Inquiry">General Business Inquiry</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Message Details *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows="5"
                                            placeholder="How can we partner together?"
                                            required
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-block submit-btn">
                                        <span>Submit Inquiry</span>
                                        <Send size={18} />
                                    </button>
                                </form>
                            </div>
                        </ScrollReveal>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
