import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './MessageVC.css';

const MessageVC = () => {
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
                        <h1>Prof. Prateek Sharma</h1>
                        <p className="designation">Vice Chancellor, Delhi Technological University</p>
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
                                        src="/images/faculty/prateek.jpg"
                                        alt="Prof. Prateek Sharma"
                                        className="vc-image"
                                        loading="lazy"
                                    />
                                </div>
                            </div>

                            {/* Text */}
                            <div className="message-text">
                                <p>
                                    Delhi Technological University (DTU), formerly Delhi College of Engineering, has a
                                    distinguished legacy of over 84 years in delivering high-quality education, pioneering
                                    research, and fostering innovation. As one of the country's premier institutions, DTU
                                    remains committed to producing competent, industry-ready professionals across diverse
                                    disciplines including engineering, technology, management, and finance.
                                </p>

                                <p>
                                    Our academic programs are designed to provide a strong foundation in core principles,
                                    complemented by hands-on projects, research opportunities, and holistic development
                                    initiatives that nurture both technical competence and leadership qualities.
                                </p>

                                <p>
                                    The University maintains strong linkages with industry and actively promotes
                                    collaborative initiatives that ensure our graduates are well-prepared to meet evolving
                                    professional challenges. Our distinguished faculty actively bridge the gap between
                                    academia and industry, engaging in collaborative research and practice.
                                </p>

                                <p>
                                    To our valued industry partners, I extend an invitation to collaborate with DTU's
                                    skilled and motivated student cohort. We are confident that our graduates will
                                    contribute meaningfully to your organizations, both in technical capability and
                                    professional conduct.
                                </p>

                                <p>
                                    To our students, I encourage you to make the most of the opportunities that come
                                    through the Department of T&P. I am sure that all of you will carry forward DTU's
                                    legacy with integrity, adaptability, and a deep sense of responsibility. Let your
                                    knowledge and values guide you in shaping a better future for yourself and for society.
                                </p>

                                <p>
                                    I commend the efforts of the Department of Training and Placement in strengthening
                                    industry-academia collaboration and in paving the way for our students' success.
                                    As we continue to grow and evolve together, I extend my best wishes to our students
                                    for success in all their future endeavours, and to our industry partners, I wish
                                    continued innovation and prosperity.
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

export default MessageVC;