import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            {/* Hero */}
            <section className="contact-hero">
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>Contact Us</h1>
                        <p className="subtitle">Get in touch with CTEL, DTU</p>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="section">
                <div className="container">
                    <motion.div
                        className="contact-grid"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Contact Info */}
                        <div className="contact-info">
                            <h2>Centre for Technology Enhanced Learning</h2>
                            <p>Delhi Technological University</p>

                            <div className="info-item">
                                <h3>📧 Email</h3>
                                <p><a href="mailto:ctel@dtu.ac.in">ctel@dtu.ac.in</a></p>
                            </div>

                            <div className="info-item">
                                <h3>📞 Phone</h3>
                                <p>+91-11-XXXX-XXXX</p>
                            </div>

                            <div className="info-item">
                                <h3>📍 Address</h3>
                                <p>
                                    Delhi Technological University,<br />
                                    Shahbad Daulatpur,<br />
                                    Main Bawana Road,<br />
                                    Delhi - 110042, India
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <h2>Send us a Message</h2>
                            <form className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" name="name" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" name="email" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" id="subject" name="subject" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" rows="5" required></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
