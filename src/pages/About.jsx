import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const services = [
        {
            title: 'Executive Programs',
            description: 'Industry-relevant certificate programs in emerging technologies like AI, Data Science, and Sustainable Energy Management.',
            color: 'service-blue'
        },
        {
            title: 'Digital Learning',
            description: 'State-of-the-art learning management systems with interactive content, live sessions, and hands-on projects.',
            color: 'service-green'
        },
        {
            title: 'Industry Collaboration',
            description: 'Strong partnerships with leading companies to ensure our curriculum meets current industry demands.',
            color: 'service-purple'
        },
        {
            title: 'Flexible Learning',
            description: 'Programs designed for working professionals with weekend classes and self-paced learning options.',
            color: 'service-orange'
        }
    ];

    const whyChoose = [
        'Learn from DTU\'s distinguished faculty and industry experts',
        'Access to cutting-edge learning technologies and resources',
        'Industry-recognized certificates from a premier institution',
        'Strong alumni network and placement support',
        'Flexible learning schedules for working professionals',
        'Hands-on projects and real-world case studies'
    ];

    return (
        <div className="about-page">
            {/* Hero */}
            <section className="about-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1>About CTEL</h1>
                        <p className="subtitle">Centre for Technology Enhanced Learning</p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="section">
                <div className="container">
                    <motion.div
                        className="about-content"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="content-section">
                            <h2>Our Mission</h2>
                            <p>
                                The Centre for Technology Enhanced Learning (CTEL) at Delhi Technological University
                                is dedicated to revolutionizing education through innovative digital solutions and
                                cutting-edge learning technologies. We strive to bridge the gap between traditional
                                academic excellence and modern industry requirements.
                            </p>
                        </div>

                        <div className="content-section">
                            <h2>What We Do</h2>
                            <p>
                                CTEL focuses on developing and delivering high-quality online and executive education
                                programs that cater to working professionals and lifelong learners. Our programs are
                                designed by industry experts and DTU faculty to ensure relevance and practical applicability.
                            </p>
                        </div>

                        {/* Services Grid */}
                        <motion.div
                            className="services-grid"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    className={`service-card ${service.color}`}
                                    variants={fadeInUp}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Why Choose */}
                        <div className="content-section">
                            <h2>Why Choose CTEL?</h2>
                            <ul className="why-list">
                                {whyChoose.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                    >
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Box */}
                        <motion.div
                            className="contact-box"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h3>Get in Touch</h3>
                            <p><strong>Email:</strong> ctel@dtu.ac.in</p>
                            <p><strong>Phone:</strong> 011-27871233</p>
                            <p><strong>Address:</strong> Delhi Technological University, Shahbad Daulatpur, Main Bawana Road, Delhi-110042</p>
                        </motion.div>
                    </motion.div>

                    {/* Back Button */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
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

export default About;
