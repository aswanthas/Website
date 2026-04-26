import { Link } from 'react-router-dom';
import { ArrowRight, Globe, ShoppingBag, Code, Briefcase, Zap, ShieldCheck } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <ScrollReveal>
                        <h1 className="hero-headline">
                            Bridging Global <span className="text-gold">Trade</span> &<br /> Digital <span className="text-gold">Innovation</span>
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <p className="hero-subheadline">
                            We are a diversified international trading and digital solutions company, combining global commerce, comprehensive e-commerce operations, and cutting-edge technology services under one roof.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal delay={400}>
                        <div className="hero-actions">
                            <Link to="/services" className="btn btn-gold glass-btn">
                                Our Services <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                            </Link>
                            <Link to="/contact" className="btn btn-outline glass-btn-outline">
                                Contact Us
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Company Overview Section */}
            <section className="overview-section bg-white">
                <div className="container">
                    <div className="overview-grid">
                        <ScrollReveal className="overview-text">
                            <h4 className="section-subtitle text-gold">Who We Are</h4>
                            <h2 className="section-title">A Premier Free Zone Entity in Ajman, UAE</h2>
                            <p>
                                Established as an FZE LLC, DigitalBridge Commerce sits at the intersection of traditional global trade and modern digital solutions. We leverage the strategic advantage of the UAE to connect markets, supply chains, and technology stacks.
                            </p>
                            <p>
                                Our mission is to empower businesses and consumers alike through reliable import/export operations, dynamic online retail experiences, and bespoke software development and consulting.
                            </p>
                            <Link to="/about" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                                Discover Our Story
                            </Link>
                        </ScrollReveal>
                        <ScrollReveal delay={200} className="overview-visual">
                            <div className="glass-panel-dark decorative-box">
                                <Globe size={64} className="text-gold mb-4" />
                                <h3>Global Reach</h3>
                                <p className="text-light-muted">Connecting continents through efficient trade networks and scalable digital platforms.</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Business Divisions Section */}
            <section className="divisions-section bg-light">
                <div className="container">
                    <ScrollReveal>
                        <div className="section-header text-center">
                            <h4 className="section-subtitle text-gold">Our Divisions</h4>
                            <h2 className="section-title">Comprehensive Business Solutions</h2>
                            <p className="section-desc mx-auto">
                                We operate across three core verticals, providing integrated services that drive growth, efficiency, and market expansion.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="cards-grid">
                        <ScrollReveal delay={100}>
                            <div className="service-card">
                                <div className="card-icon-wrapper">
                                    <Briefcase size={32} className="text-gold" />
                                </div>
                                <h3>International Trading</h3>
                                <p>Import and export of used cars, mobile phones, video games, gifts, and sports equipment across global channels.</p>
                                <Link to="/services" className="card-link">Explore Trading <ArrowRight size={16} /></Link>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={200}>
                            <div className="service-card">
                                <div className="card-icon-wrapper">
                                    <ShoppingBag size={32} className="text-gold" />
                                </div>
                                <h3>E-Commerce & Retail</h3>
                                <p>Direct-to-consumer online retail sales, specialized mail order distribution, and targeted social media e-commerce.</p>
                                <Link to="/services" className="card-link">Explore Retail <ArrowRight size={16} /></Link>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={300}>
                            <div className="service-card">
                                <div className="card-icon-wrapper">
                                    <Code size={32} className="text-gold" />
                                </div>
                                <h3>Technology & Consulting</h3>
                                <p>Custom software development services and expert human resources consultancy to scale your enterprise.</p>
                                <Link to="/services" className="card-link">Explore Tech <ArrowRight size={16} /></Link>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Why Choose Us & Animated Stats */}
            <section className="stats-section bg-primary text-white position-relative">
                <div className="world-map-bg"></div>
                <div className="container relative z-10">
                    <div className="stats-header text-center mb-5">
                        <ScrollReveal>
                            <h2 className="section-title text-white">Why Partner With Us?</h2>
                            <p className="section-desc mx-auto text-light-muted">
                                Our dual expertise in physical commodities and digital frontiers makes us uniquely positioned to solve complex business challenges.
                            </p>
                        </ScrollReveal>
                    </div>

                    <div className="stats-grid">
                        <ScrollReveal delay={100} className="stat-card glass-panel-dark">
                            <Zap size={40} className="text-gold mb-3" />
                            <div className="stat-number">
                                <AnimatedCounter targetValue={2026} duration={1500} />
                            </div>
                            <div className="stat-label">Year Established</div>
                        </ScrollReveal>

                        <ScrollReveal delay={200} className="stat-card glass-panel-dark">
                            <Globe size={40} className="text-gold mb-3" />
                            <div className="stat-number">
                                <AnimatedCounter targetValue={100} suffix="%" duration={2000} />
                            </div>
                            <div className="stat-label">UAE Free Zone Owned</div>
                        </ScrollReveal>

                        <ScrollReveal delay={300} className="stat-card glass-panel-dark">
                            <ShieldCheck size={40} className="text-gold mb-3" />
                            <div className="stat-number">
                                <AnimatedCounter targetValue={3} duration={1500} />
                            </div>
                            <div className="stat-label">Multi-Industry Core Divisions</div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Modern CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <ScrollReveal>
                        <div className="cta-box glass-panel text-center">
                            <h2 className="cta-title">Ready to Elevate Your Global Business?</h2>
                            <p className="cta-desc">
                                Whether you need robust supply chain solutions, custom software development, or an e-commerce partner, we are here to help.
                            </p>
                            <div className="cta-actions">
                                <Link to="/contact" className="btn btn-primary btn-lg">
                                    Request Business Proposal
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default Home;
