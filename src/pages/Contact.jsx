import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './Contact.css';

// ⚠️ IMPORTANT: Replace these with your actual EmailJS credentials
// 1. Create account at https://www.emailjs.com/
// 2. Add an email service (Gmail, Outlook, etc.)
// 3. Create an email template with variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
// 4. Get your credentials from the EmailJS dashboard
const emailjsConfig = {
    serviceId: 'CTEL DTU Queries',      // e.g., 'service_abc123'
    templateId: 'template_h8sfs6n',    // e.g., 'template_xyz789'
    publicKey: '0-UJxDxgGs4PiQNVc',      // e.g., 'abcdefghijk123456'
};

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            await emailjs.sendForm(
                emailjsConfig.serviceId,
                emailjsConfig.templateId,
                formRef.current,
                emailjsConfig.publicKey
            );

            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('EmailJS Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

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
                                <p>011-27871233</p>
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

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <div className="alert alert-success">
                                    ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="alert alert-error">
                                    ❌ Oops! Something went wrong. Please try again or email us directly at ctel@dtu.ac.in
                                </div>
                            )}

                            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;

