import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { programmes } from '../data/programmes';
import './Programmes.css';

const getAdmissionStatusInfo = (statusStr) => {
    if (!statusStr) return { text: 'Admissions Open', isClosed: false };
    const lower = String(statusStr).toLowerCase();
    const isClosed = lower.includes('close');
    let text = statusStr;
    if (statusStr === 'open' || statusStr === 'Open') text = 'Admissions Open';
    if (statusStr === 'closed' || statusStr === 'Closed') text = 'Admissions Closed';
    return { text, isClosed };
};

const Programmes = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const formatDate = (date) => {
        if (!date || !(date instanceof Date)) return 'TBD';
        return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    };

    return (
        <div className="programmes-page">
            {/* Breadcrumb */}
            <section className="breadcrumb-section">
                <div className="container">
                    <Link to="/" className="breadcrumb-link">← Back to Homepage</Link>
                </div>
            </section>

            {/* Programmes Listing */}
            <section className="section">
                <div className="container">
                    <motion.div
                        className="programmes-header"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                    >
                        <div>
                            <h1 className="programmes-title">PROGRAMMES</h1>
                            <span className="programmes-count">
                                All Programmes ({programmes.length})
                            </span>
                        </div>
                    </motion.div>

                    {/* Programmes List */}
                    <div className="programmes-list">
                        {programmes.length === 0 ? (
                            <p className="no-programmes">No programs available at this time.</p>
                        ) : (
                            programmes.map((programme, index) => (
                                <motion.div
                                    key={programme.id}
                                    className="programme-row"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeInUp}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.01 }}
                                >
                                    <div className="programme-left-section">
                                        <div className="programme-info-top">
                                            <span>DTU</span>
                                            <span>Delhi Technological University</span>
                                        </div>
                                        <span className="batch-badge">{programme.batch}</span>

                                        <div className="programme-main-content">
                                            <h3>{programme.title}</h3>
                                            {programme.subtitle && <p className="programme-subtitle">{programme.subtitle}</p>}

                                            <div className="programme-features">
                                                <span>📅 Duration: {programme.duration}</span>
                                                <span>👥 Peer-to-Peer Learning</span>
                                                <span>🎥 LIVE Sessions</span>
                                                <span>🏛️ Campus Immersion</span>
                                            </div>
                                        </div>
                                        <div className="programme-bottom">
                                            <div className="duration-badge">{programme.duration}</div>
                                            <a
                                                href={programme.enroll}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="enroll-btn"
                                            >
                                                Enroll Now
                                            </a>
                                        </div>
                                    </div>

                                    <div className="programme-right-section">
                                        <h4>{programme.title}</h4>
                                        {programme.serviceProvider && (
                                            <p className="provider">
                                                <strong>Service Provider:</strong> {programme.serviceProvider}
                                            </p>
                                        )}
                                        {(() => {
                                            const info = getAdmissionStatusInfo(programme.admissionStatus || programme.status);
                                            return (
                                                <div className="programme-status-wrapper">
                                                    <span className={`status-badge ${info.isClosed ? 'closed' : 'open'}`}>
                                                        <span className="status-dot"></span>
                                                        {info.text}
                                                    </span>
                                                </div>
                                            );
                                        })()}
                                        {programme.cost && (
                                            <p className="detail">
                                                <strong>Programme Fee:</strong> {programme.cost}
                                            </p>
                                        )}
                                        <Link to={`/programme/${programme.id}`} className="know-more-btn">
                                            Know More →
                                        </Link>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Programmes;
