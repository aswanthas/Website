import ScrollReveal from '../components/ScrollReveal';
import {
    CarFront, Smartphone, Gamepad2, Gift, PenTool, Dumbbell,
    ShoppingCart, Mail, Share2,
    Code2, Users
} from 'lucide-react';
import './Services.css';

const Services = () => {
    return (
        <div className="services-page">
            {/* Page Header */}
            <section className="page-header bg-primary text-white text-center">
                <div className="container">
                    <ScrollReveal>
                        <h1 className="text-white">Our Services</h1>
                        <p className="subtitle mx-auto">
                            A diversified portfolio extending from physical commodities to digital frontiers.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* International Trading */}
            <section className="service-category bg-white">
                <div className="container">
                    <ScrollReveal>
                        <div className="category-header text-center mb-5">
                            <h4 className="section-subtitle text-gold">Division A</h4>
                            <h2 className="section-title">International Trading</h2>
                            <p className="mx-auto text-text-light" style={{ maxWidth: '700px' }}>
                                Leveraging the UAE's strategic hub status to import, export, and distribute high-demand goods across global markets seamlessly.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="services-grid">
                        <ServiceCard delay={100} icon={<CarFront size={32} />} title="Used Cars" desc="Import and export of quality pre-owned vehicles globally." />
                        <ServiceCard delay={200} icon={<Smartphone size={32} />} title="Mobile Phones" desc="Wholesale trading and distribution of mobile devices." />
                        <ServiceCard delay={300} icon={<Gamepad2 size={32} />} title="Video Game Consoles" desc="Supplying the latest gaming hardware and accessories." />
                        <ServiceCard delay={400} icon={<Gift size={32} />} title="Gifts Trading" desc="Corporate and generic gift items sourced internationally." />
                        <ServiceCard delay={500} icon={<PenTool size={32} />} title="Stationery" desc="Office and school stationery supplies in bulk quantities." />
                        <ServiceCard delay={600} icon={<Dumbbell size={32} />} title="Sports Equipment" desc="High-quality athletic and fitness gear trading." />
                    </div>
                </div>
            </section>

            {/* E-Commerce & Retail */}
            <section className="service-category bg-light">
                <div className="container">
                    <ScrollReveal>
                        <div className="category-header text-center mb-5">
                            <h4 className="section-subtitle text-gold">Division B</h4>
                            <h2 className="section-title">E-Commerce & Retail</h2>
                            <p className="mx-auto text-text-light" style={{ maxWidth: '700px' }}>
                                Connecting directly with consumers through multifaceted digital retail channels and streamlined order fulfillment.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="services-grid">
                        <ServiceCard delay={100} icon={<ShoppingCart size={32} />} title="Online Retail Sales" desc="Direct-to-consumer digital storefronts featuring our diverse product lines." />
                        <ServiceCard delay={200} icon={<Mail size={32} />} title="Mail Order Sales" desc="Traditional and modern catalog-based fulfillment logistics." />
                        <ServiceCard delay={300} icon={<Share2 size={32} />} title="Social Media E-Commerce" desc="Leveraging platforms to drive sales and product engagement directly." />
                    </div>
                </div>
            </section>

            {/* Technology & Consulting */}
            <section className="service-category bg-white">
                <div className="container">
                    <ScrollReveal>
                        <div className="category-header text-center mb-5">
                            <h4 className="section-subtitle text-gold">Division C</h4>
                            <h2 className="section-title">Technology & Consulting</h2>
                            <p className="mx-auto text-text-light" style={{ maxWidth: '700px' }}>
                                Providing the digital backbone and human capital insights necessary to scale modern enterprises.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
                        <ServiceCard delay={100} icon={<Code2 size={40} />} title="Software Development" desc="Custom web applications, enterprise software, and mobile solutions tailored to operational needs." />
                        <ServiceCard delay={200} icon={<Users size={40} />} title="HR Consultancy" desc="Expert human resources advisory, talent acquisition mapping, and organizational structuring." />
                    </div>
                </div>
            </section>
        </div>
    );
};

const ServiceCard = ({ icon, title, desc, delay }) => (
    <ScrollReveal delay={delay}>
        <div className="detailed-service-card">
            <div className="ds-icon text-gold">
                {icon}
            </div>
            <div className="ds-content">
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    </ScrollReveal>
);

export default Services;
