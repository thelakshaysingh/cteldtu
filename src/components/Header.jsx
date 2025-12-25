import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const navItems = [
        { label: 'Home', path: '/' },
        {
            label: 'About Us',
            dropdown: [
                { label: 'About CTEL', path: '/about' },
                { label: 'Message from VC', path: '/message-vc' },
                { label: 'Message from Dean (DE)', path: '/message-dean' },
            ],
        },
         {
            label: 'Programs',
            dropdown: [
                { label: 'Certificate', path: '/programmes#certificate' },
                { label: 'Diploma', path: '#', disabled: true },
                { label: 'Degree', path: '#', disabled: true  },
            ],
        },
        {
            label: 'Empanelled Companies',
            dropdown: [
                { label: 'JARO', path: 'https://www.jaroeducation.com/', external: true },
                { label: 'TimesPro', path: 'https://timespro.com/', external: true },
                { label: 'VCNow', path: 'https://vcnow.in/', external: true },
            ],
        },
        { label: 'Contact Us', path: '/contact' },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (!isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = '';
    };

    return (
        <>
            <header className="header">
                <div className="header-inner container">
                    <Link to="/" className="logo-link" onClick={closeMobileMenu}>
                        <img src="/images/logos/dtu_logo.png" alt="DTU Logo" className="logo-image" />
                        <span className="logo-text">CTEL DTU</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="desktop-nav">
                        {navItems.map((item, index) => (
                            item.dropdown ? (
                                <div
                                    key={index}
                                    className="dropdown"
                                    onMouseEnter={() => setActiveDropdown(index)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <span className="dropdown-toggle">
                                        {item.label}
                                        <svg className="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                     <AnimatePresence>
                                        {activeDropdown === index && (
                                            <motion.div
                                                className="dropdown-menu"
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {item.dropdown.map((subItem, subIndex) => (
                                                    subItem.disabled ? (
                                                        <span
                                                            key={subIndex}
                                                            className="dropdown-item dropdown-item-disabled"
                                                        >
                                                            {subItem.label}
                                                            {subItem.comingSoon && <span className="coming-soon-badge">Coming Soon</span>}
                                                        </span>
                                                    ) : subItem.external ? (
                                                        <a
                                                            key={subIndex}
                                                            href={subItem.path}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="dropdown-item"
                                                        >
                                                            {subItem.label}
                                                        </a>
                                                    ) : (
                                                        <Link
                                                            key={subIndex}
                                                            to={subItem.path}
                                                            className="dropdown-item"
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    )
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <NavLink key={index} to={item.path} className="nav-link">
                                    {item.label}
                                </NavLink>
                            )
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="mobile-menu-btn"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            className="mobile-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeMobileMenu}
                        />
                        <motion.nav
                            className="mobile-menu"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                        >
                            <button className="mobile-close-btn" onClick={closeMobileMenu}>
                                ✕
                            </button>

                            {navItems.map((item, index) => (
                                item.dropdown ? (
                                    <div key={index} className="mobile-dropdown">
                                        <button
                                            className="mobile-dropdown-toggle"
                                            onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                                        >
                                            <span>{item.label}</span>
                                            <motion.span
                                                animate={{ rotate: activeDropdown === index ? 90 : 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                ›
                                            </motion.span>
                                        </button>
                                        <AnimatePresence>
                                            {activeDropdown === index && (
                                                <motion.div
                                                    className="mobile-submenu"
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    {item.dropdown.map((subItem, subIndex) => (
                                                        subItem.disabled ? (
                                                            <span
                                                                key={subIndex}
                                                                className="mobile-submenu-link mobile-submenu-link-disabled"
                                                            >
                                                                {subItem.label}
                                                                {subItem.comingSoon && <span className="coming-soon-badge">Coming Soon</span>}
                                                            </span>
                                                        ) : subItem.external ? (
                                                            <a
                                                                key={subIndex}
                                                                href={subItem.path}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="mobile-submenu-link"
                                                                onClick={closeMobileMenu}
                                                            >
                                                                {subItem.label}
                                                            </a>
                                                        ) : (
                                                            <Link
                                                                key={subIndex}
                                                                to={subItem.path}
                                                                className="mobile-submenu-link"
                                                                onClick={closeMobileMenu}
                                                            >
                                                                {subItem.label}
                                                            </Link>
                                                        )
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        key={index}
                                        to={item.path}
                                        className="mobile-nav-link"
                                        onClick={closeMobileMenu}
                                    >
                                        {item.label}
                                    </Link>
                                )
                            ))}
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
