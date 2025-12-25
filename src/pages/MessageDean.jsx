import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './MessageVC.css';

const MessageDean = () => {
    return (
        <div className="message-page">
            {/* Hero */}
            <section className="message-hero">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="quote-icon">❝</div>
                        <h1>Prof. S Indu</h1>
                        <p className="designation">Dean (Digital Education), Delhi Technological University</p>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="section">
                <div className="container">
                    <motion.div
                        className="message-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="message-grid">
                            {/* Image */}
                            <div className="message-image-wrap">
                                <div className="message-image-sticky">
                                    <img
                                        src="/images/faculty/indu.jpg"
                                        alt="Prof. S Indu"
                                        className="vc-image"
                                        loading="lazy"
                                    />
                                </div>
                            </div>

                            {/* Text */}
                            <div className="message-text">
                                <p>
                                    Welcome to the Centre for Technology Enhanced Learning (CTEL) at Delhi Technological
                                    University. As the Dean of Digital Education, it gives me immense pleasure to introduce
                                    our initiatives aimed at making quality education accessible to working professionals
                                    across the country.
                                </p>

                                <p>
                                    In today's rapidly evolving technological landscape, continuous learning has become
                                    essential for career advancement. CTEL has been established to bridge the gap between
                                    traditional education and the demands of the modern workforce by offering flexible,
                                    industry-relevant programmes through digital platforms.
                                </p>

                                <p>
                                    Our certificate and diploma programmes are designed in collaboration with industry
                                    partners and delivered by experienced DTU faculty members. The curriculum is regularly
                                    updated to reflect current industry practices and emerging technologies, ensuring that
                                    our participants gain practical, applicable skills.
                                </p>

                                <p>
                                    We have partnered with leading education service providers including TimesPro, JARO
                                    Education, and VCNow to deliver world-class learning experiences. These partnerships
                                    enable us to combine DTU's academic excellence with cutting-edge delivery platforms
                                    and industry connections.
                                </p>

                                <p>
                                    I invite working professionals, recent graduates, and lifelong learners to explore our
                                    programmes and take the next step in their professional journey. Our team is committed
                                    to providing exceptional support throughout your learning experience.
                                </p>

                                <p>
                                    Together, let us embrace the future of education and continue building a skilled,
                                    knowledgeable workforce that will drive India's growth and innovation. I wish all
                                    our learners success in their educational endeavours.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Back Button */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link to="/" className="btn btn-primary">
                            ← Back to Home
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default MessageDean;