import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
    const [visitorCount, setVisitorCount] = useState(0);

    // Visitor counter using localStorage
    useEffect(() => {
        const VISITOR_KEY = 'ctel_visitor_count';
        const VISITOR_ID_KEY = 'ctel_visitor_id';

        // Get or create visitor ID
        let visitorId = localStorage.getItem(VISITOR_ID_KEY);
        let currentCount = parseInt(localStorage.getItem(VISITOR_KEY) || '0');

        // If this is a new visitor
        if (!visitorId) {
            visitorId = 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem(VISITOR_ID_KEY, visitorId);
            currentCount += 1;
            localStorage.setItem(VISITOR_KEY, currentCount.toString());
        }

        // Start with a base count for realism
        const baseCount = 0;
        setVisitorCount(baseCount + currentCount);
    }, []);

    // Format visitor count
    const formatCount = (count) => {
        if (count >= 1000) {
            return (count / 1000).toFixed(1) + 'K';
        }
        return count.toString();
    };

    const quickLinks = [
        { label: 'Contact Us', path: '/contact' },
        { label: 'Team', },
        { label: 'Programs', path: '/programmes' },
        { label: 'News' },
    ];

    const exploreLinks = [
        { label: 'AI Programme', path: '/programme/ai' },
        { label: 'CSR & ESG', path: '/programme/csr-esg' },
        { label: 'Renewable Energy', path: '/programme/renewable-energy' },
    ];

    const companyLinks = [
        { label: 'JARO', path: 'https://www.jaroeducation.com/', external: true },
        { label: 'TimesPro', path: 'https://timespro.com/', external: true },
        { label: 'VCNow', path: 'https://vcnow.in/', external: true },
    ];

    return (
        <footer className="footer">
            {/* Main Footer with Background Image */}
            <div className="footer-main">
                <div className="footer-bg-overlay" />
                <div className="container footer-content">
                    {/* Top Row - Logo & Visitor Count */}
                    <motion.div
                        className="footer-top-row"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="footer-logo-section">
                            <img src="/images/logos/dtu_logo.png" alt="DTU Logo" className="footer-logo" loading="lazy" />
                            <div className="footer-logo-text">
                                <span className="logo-highlight">CTEL</span> DTU
                            </div>
                        </div>
                        <div className="visitor-counter">
                            <span className="visitor-label">TOTAL VISITORS :</span>
                            <span className="visitor-count">{formatCount(visitorCount)}</span>
                        </div>
                    </motion.div>

                    {/* Address Row */}
                    <motion.div
                        className="footer-address-row"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <p>Delhi Technological University, Shahbad Daulatpur, Main Bawana Road, Delhi – 110042</p>
                    </motion.div>

                    {/* Links Grid */}
                    <motion.div
                        className="footer-links-grid"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {/* Quick Links */}
                        <div className="footer-column">
                            <h4 className="footer-column-title">QUICK LINKS</h4>
                            <ul className="footer-link-list">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link to={link.path}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Explore */}
                        <div className="footer-column">
                            <h4 className="footer-column-title">EXPLORE</h4>
                            <ul className="footer-link-list">
                                {exploreLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link to={link.path}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Partners */}
                        <div className="footer-column">
                            <h4 className="footer-column-title">PARTNERS</h4>
                            <ul className="footer-link-list">
                                {companyLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link to={link.path}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="footer-column">
                            <h4 className="footer-column-title">CONTACT</h4>
                            <div className="footer-contact-info">
                                <p>
                                    <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                    <a href="mailto:ctel@dtu.ac.in">ctel@dtu.ac.in</a>
                                </p>
                                <p>
                                    <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                    011-27871233
                                </p>
                            </div>

                            {/* Social Icons */}
                            <div className="social-icons">
                                <a rel="noopener noreferrer" className="social-icon facebook" aria-label="Facebook">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/company/ctel-dtu/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin" aria-label="LinkedIn">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                        <rect x="2" y="9" width="4" height="12" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" className="social-icon twitter" aria-label="X/Twitter">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                                <a rel="noopener noreferrer" className="social-icon instagram" aria-label="Instagram">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="footer-bottom">
                <div className="container footer-bottom-content">
                    <p>©️ Copyright CTEL DTU. All Rights Reserved. Developed & Maintained by Team CTEL DTU | (Website Launched on 25-12-2025) Last Updated: 25-12-2025</p>
                    <div className="footer-bottom-actions">
                        <button className="scroll-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 19V5M5 12l7-7 7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;