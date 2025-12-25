import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { programmes, calendarEvents } from '../data/programmes';
import './Home.css';

const Home = () => {
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const features = [
        {
            title: 'Personalized Learning Paths',
            description: 'Tailor your learning journey with personalized recommendations based on your goals, interests, and progress.',
            color: 'feature-red'
        },
        {
            title: 'Interactive Quizzes & Assignments',
            description: 'Test your knowledge with engaging quizzes and real-world assignments. Immediate feedback helps you improve.',
            color: 'feature-blue'
        },
        {
            title: 'Expert-Led Video Lectures',
            description: 'Learn from industry leaders and renowned educators through high-quality video lectures designed for clarity.',
            color: 'feature-purple'
        }
    ];

    // Calendar State
    const [currentDate, setCurrentDate] = useState(new Date());

    const formatDate = (date) => {
        return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    };

    // Calendar helper functions
    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay();
    };

    const getMonthName = (month) => {
        const months = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];
        return months[month];
    };

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    // Get events for a specific day
    const getEventsForDay = (day) => {
        return calendarEvents.filter(event => {
            const eventDate = new Date(event.startDate);
            return eventDate.getDate() === day &&
                eventDate.getMonth() === currentDate.getMonth() &&
                eventDate.getFullYear() === currentDate.getFullYear();
        });
    };

    // Get events for current month
    const getEventsForMonth = () => {
        return calendarEvents.filter(event => {
            const eventDate = new Date(event.startDate);
            return eventDate.getMonth() === currentDate.getMonth() &&
                eventDate.getFullYear() === currentDate.getFullYear();
        });
    };

    // Render calendar days
    const renderCalendar = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const daysInMonth = getDaysInMonth(year, month);
        const firstDay = getFirstDayOfMonth(year, month);

        const days = [];

        // Empty cells for days before the first day
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        }

        // Days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const events = getEventsForDay(day);
            const isToday = new Date().getDate() === day &&
                new Date().getMonth() === month &&
                new Date().getFullYear() === year;

            days.push(
                <div
                    key={day}
                    className={`calendar-day ${events.length > 0 ? 'has-event' : ''} ${isToday ? 'today' : ''}`}
                >
                    <span className="day-number">{day}</span>
                    {events.map((event, idx) => (
                        <Link
                            key={idx}
                            to={event.link}
                            className="calendar-event-badge"
                            title={event.title}
                        >
                            {event.title.substring(0, 15)}...
                        </Link>
                    ))}
                </div>
            );
        }

        return days;
    };

    return (
        <div className="home">
            {/* Hero Section - Image Background instead of Video */}
            <section className="hero">
                <div className="hero-bg">
                    <img src="/images/campus.jpg" alt="DTU Campus" className="hero-bg-image" />
                    <div className="hero-overlay" />
                </div>
                <motion.div
                    className="hero-content container"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <h1 className="hero-title">DTU Digital Education</h1>
                    <p className="hero-subtitle">
                        Executive and continuing education programmes from Delhi Technological University.
                    </p>
                    <Link to="/programmes" className="btn btn-outline">
                        Explore Programmes
                    </Link>
                </motion.div>
            </section>

            {/* Features Section */}
            <section className="section bg-off-white" id="features">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Why Choose DTU Digital Education?</h2>
                    </motion.div>

                    <motion.div
                        className="features-grid"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {features.map((feature, index) => (
                            <motion.article
                                key={index}
                                className={`feature-card ${feature.color}`}
                                variants={fadeInUp}
                                transition={{ duration: 0.5 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Programmes Section */}
            <section className="section" id="certificate-programs">
                <div className="container">
                    <motion.div
                        className="section-header-flex"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                    >
                        <div>
                            <h2>Online Certificate Programmes</h2>
                        </div>
                        <Link to="/programmes" className="btn btn-primary">
                            View All Programmes
                        </Link>
                    </motion.div>

                    <motion.div
                        className="programmes-grid"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {programmes.map((programme) => (
                            <motion.article
                                key={programme.id}
                                className="programme-card"
                                variants={fadeInUp}
                                transition={{ duration: 0.5 }}
                                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
                            >
                                <Link to={`/programme/${programme.id}`}>
                                    <div className="programme-image">
                                        <img src={programme.image} alt={programme.title} />
                                        <span className="programme-badge">{programme.provider}</span>
                                    </div>
                                    <div className="programme-body">
                                        <h3>{programme.title}</h3>
                                        <p className="programme-duration">{programme.duration}</p>
                                        <p className="programme-description">{programme.description}</p>
                                        <p className="programme-provider">{programme.serviceProvider}</p>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Calendar Section - Visual Calendar */}
            <section className="section bg-off-white" id="calendar">
                <div className="container">
                    <motion.div
                        className="section-header"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                    >
                        <h2>Programme Registration Calendar</h2>
                        <p>View all programme registration start dates and plan your enrollment</p>
                    </motion.div>

                    <motion.div
                        className="calendar-container"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Calendar Widget */}
                        <div className="calendar-widget">
                            <div className="calendar-header">
                                <button className="calendar-nav-btn" onClick={prevMonth}>&lt;</button>
                                <h3>{getMonthName(currentDate.getMonth())} {currentDate.getFullYear()}</h3>
                                <button className="calendar-nav-btn" onClick={nextMonth}>&gt;</button>
                            </div>
                            <div className="calendar-weekdays">
                                <div>Sun</div>
                                <div>Mon</div>
                                <div>Tue</div>
                                <div>Wed</div>
                                <div>Thu</div>
                                <div>Fri</div>
                                <div>Sat</div>
                            </div>
                            <div className="calendar-days">
                                {renderCalendar()}
                            </div>
                        </div>

                        {/* Upcoming Registrations */}
                        <div className="calendar-registrations">
                            <h3>{getMonthName(currentDate.getMonth())} Registrations</h3>
                            {getEventsForMonth().length > 0 ? (
                                getEventsForMonth().map((event) => (
                                    <Link key={event.id} to={event.link} className="registration-card">
                                        <div className="registration-status">{event.status}</div>
                                        <h4>{event.title}</h4>
                                        <p><strong>Registration Starts:</strong> {formatDate(event.startDate)}</p>
                                        <p><strong>Duration:</strong> {event.duration}</p>
                                    </Link>
                                ))
                            ) : (
                                <p className="no-events">No registrations scheduled this month.</p>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Short Film Section */}
            <section className="section short-film-section">
                <div className="container">
                    <motion.div
                        className="short-film-inner"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <motion.div className="short-film-text" variants={fadeInUp}>
                            <h2>DTU - A Short Film</h2>
                            <p>
                                Delhi Technological University is more than just a premier engineering institute –
                                it is a crucible of innovation, leadership, and excellence. Discover the campus,
                                the people, and the spirit that drive DTU.
                            </p>
                        </motion.div>
                        <motion.div className="short-film-video" variants={fadeInUp}>
                            <div className="responsive-video">
                                <iframe
                                    src="https://www.youtube.com/embed/pYfLvmp7JQw?rel=0&modestbranding=1"
                                    title="DTU - A Short Film"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
