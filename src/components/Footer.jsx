import { Link } from 'react-router-dom';
import { Globe, MapPin, Mail, Clock, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer bg-primary">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col brand-col">
                        <Link to="/" className="brand footer-brand">
                            <Globe className="brand-icon text-gold" size={24} />
                            <span className="brand-text">DigitalBridge</span>
                        </Link>
                        <p className="footer-desc">
                            Bridging Global Trade & Digital Innovation. A diversified international trading and digital solutions company combining global commerce, e-commerce operations, and technology services.
                        </p>
                        <div className="compliance-box">
                            <p><strong>License No:</strong> 2628410356888</p>
                            <p><strong>Reg No:</strong> 2628410356888</p>
                            <p><strong>Entity:</strong> FZE LLC</p>
                        </div>
                    </div>

                    <div className="footer-col links-col">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><ArrowRight size={14} className="text-gold" /><Link to="/about">About Us</Link></li>
                            <li><ArrowRight size={14} className="text-gold" /><Link to="/services">Services</Link></li>
                            <li><ArrowRight size={14} className="text-gold" /><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col services-col">
                        <h4 className="footer-heading">Our Expertise</h4>
                        <ul className="footer-links">
                            <li><ArrowRight size={14} className="text-gold" /><span>International Trading</span></li>
                            <li><ArrowRight size={14} className="text-gold" /><span>E-Commerce & Retail</span></li>
                            <li><ArrowRight size={14} className="text-gold" /><span>Technology Services</span></li>
                            <li><ArrowRight size={14} className="text-gold" /><span>HR Consultancy</span></li>
                        </ul>
                    </div>

                    <div className="footer-col contact-col">
                        <h4 className="footer-heading">Contact Us</h4>
                        <ul className="contact-info">
                            <li>
                                <MapPin size={18} className="text-gold shrink-0" />
                                <span>26th Floor, Amber Gem Tower, Ajman, UAE</span>
                            </li>
                            <li>
                                <Mail size={18} className="text-gold shrink-0" />
                                <a href="mailto:anilnilambur86@gmail.com">anilnilambur86@gmail.com</a>
                            </li>
                            <li>
                                <Clock size={18} className="text-gold shrink-0" />
                                <span>Mon - Fri, 9:00 AM - 6:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">&copy; 2026 DigitalBridge Commerce FZE LLC. All rights reserved.</p>
                    <p className="compliance-disclaimer">
                        Relevant authority approvals are obtained prior to conducting applicable business activities.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
