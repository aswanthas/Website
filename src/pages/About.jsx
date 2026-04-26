import ScrollReveal from '../components/ScrollReveal';
import { Target, Lightbulb, CheckCircle2, Award, Scale } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            {/* Page Header */}
            <section className="page-header bg-primary text-white text-center">
                <div className="container">
                    <ScrollReveal>
                        <h1 className="text-white">About DigitalBridge</h1>
                        <p className="subtitle mx-auto">
                            Connecting markets and embracing digital transformation from the heart of the UAE.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Introduction */}
            <section className="about-intro bg-white">
                <div className="container">
                    <div className="intro-grid">
                        <ScrollReveal className="intro-content">
                            <h2 className="section-title">Our Story</h2>
                            <p>
                                Founded in January 2026, DigitalBridge Commerce FZE LLC was established with a clear vision: to create a seamless bridge between traditional commodity trading and the fast-paced world of digital solutions.
                            </p>
                            <p>
                                Headquartered in the vibrant Ajman Free Zone of the United Arab Emirates, we leverage the region's unparalleled logistics, progressive business environment, and strategic global position to serve clients worldwide.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <div className="vision-mission-box glass-panel text-center">
                                <div className="vm-icon">
                                    <Target size={40} className="text-gold" />
                                </div>
                                <h3>Our Mission</h3>
                                <p className="mb-4 text-text-light">To streamline global supply chains while delivering robust software and e-commerce solutions that drive business success.</p>

                                <div className="vm-icon mt-4">
                                    <Lightbulb size={40} className="text-gold" />
                                </div>
                                <h3>Our Vision</h3>
                                <p className="text-text-light">To be the most trusted hybrid trading and technology partner in the Middle East and beyond.</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Management Profile */}
            <section className="management-section bg-light">
                <div className="container">
                    <ScrollReveal>
                        <div className="text-center mb-5">
                            <h2 className="section-title">Leadership</h2>
                            <p className="mx-auto text-text-light" style={{ maxWidth: '600px' }}>
                                Guided by experienced professionals dedicated to international growth and corporate excellence.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={100}>
                        <div className="manager-profile glass-panel mx-auto">
                            <div className="manager-avatar bg-primary">
                                <span className="text-gold" style={{ fontSize: '2rem', fontWeight: 'bold' }}>AK</span>
                            </div>
                            <div className="manager-info">
                                <h3>Anil Kumar Thottasseri</h3>
                                <p className="manager-title text-gold">Manager & Director</p>
                                <p className="mt-2 text-text-light">
                                    With deep expertise spanning local logistics, international procurement, and strategic digital transformation, Anil directs the overarching strategy of DigitalBridge Commerce. Under his leadership, the company integrates varied business licenses into a unified powerhouse.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Legal & Compliance */}
            <section className="legal-section bg-primary text-white relative overflow-hidden">
                <div className="legal-pattern"></div>
                <div className="container relative z-10">
                    <ScrollReveal>
                        <div className="text-center mb-5">
                            <Scale size={48} className="text-gold mx-auto mb-3" />
                            <h2 className="text-white">Corporate Governance & Compliance</h2>
                            <p className="text-light-muted">Operating with complete transparency and regulatory adherence.</p>
                        </div>
                    </ScrollReveal>

                    <div className="legal-grid">
                        <ScrollReveal delay={100} className="legal-card glass-panel-dark">
                            <Award size={24} className="text-gold mb-2" />
                            <h4>License Number</h4>
                            <p>2628410356888</p>
                        </ScrollReveal>

                        <ScrollReveal delay={200} className="legal-card glass-panel-dark">
                            <CheckCircle2 size={24} className="text-gold mb-2" />
                            <h4>Registration Number</h4>
                            <p>2628410356888</p>
                        </ScrollReveal>

                        <ScrollReveal delay={300} className="legal-card glass-panel-dark">
                            <Target size={24} className="text-gold mb-2" />
                            <h4>Legal Status</h4>
                            <p>FZE LLC</p>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal delay={500}>
                        <div className="compliance-statement text-center mt-5">
                            <p className="text-gold font-medium">UAE Compliance Statement</p>
                            <p className="text-light-muted italic text-sm mx-auto" style={{ maxWidth: '800px' }}>
                                "Relevant authority approvals are obtained prior to conducting applicable business activities. DigitalBridge Commerce strictly adheres to the regulations set forth by the Ajman Free Zone Authority and the Federal Laws of the United Arab Emirates."
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default About;
