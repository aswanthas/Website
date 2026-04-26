import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <header className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="brand">
                    <Globe className="brand-icon text-gold" />
                    <span className="brand-text">DigitalBridge</span>
                </Link>

                <nav className={`nav-links ${isOpen ? 'active bg-primary' : ''}`}>
                    <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>Home</Link>
                    <Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''}>About</Link>
                    <Link to="/services" className={location.pathname === '/services' ? 'active-link' : ''}>Services</Link>
                    <Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''}>Contact</Link>
                    <Link to="/contact" className="btn btn-gold mobile-cta">Get Started</Link>
                </nav>

                <div className="nav-actions">
                    <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} className="text-gold" /> : <Menu size={28} className="text-gold" />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
