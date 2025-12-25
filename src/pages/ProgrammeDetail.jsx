import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { programmes } from '../data/programmes';
import './ProgrammeDetail.css';

const ProgrammeDetail = () => {
    const { id } = useParams();
    const programme = programmes.find(p => p.id === id);
    const [expandedModule, setExpandedModule] = useState(0);

    if (!programme) {
        return (
            <div className="not-found">
                <div className="container">
                    <h1>Programme Not Found</h1>
                    <Link to="/programmes" className="btn btn-primary">Back to Programmes</Link>
                </div>
            </div>
        );
    }

    const formatDate = (date) => {
        return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    };

    const toggleModule = (index) => {
        setExpandedModule(expandedModule === index ? null : index);
    };

    return (
        <div className="programme-detail-page">
            {/* Breadcrumb */}
            <nav className="breadcrumb-nav">
                <div className="container">
                    <Link to="/programmes" className="breadcrumb-link">
                        ← Back to Certificate Programs
                    </Link>
                </div>
            </nav>

            {/* Header */}
            <motion.header
                className="programme-header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container">
                    <div className="header-content">
                        <div>
                            <h1>{programme.title}</h1>
                            <p>{programme.subtitle}</p>
                        </div>
                        <div className="provider-badge">
                            Service Provider: {programme.serviceProvider}
                        </div>
                    </div>
                </div>
            </motion.header>

            <div className="container">
                <div className="detail-grid">
                    {/* Main Content */}
                    <div className="main-content">
                        {/* Features */}
                        <motion.section
                            className="content-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <h2>Features</h2>
                            <div className="features-tags">
                                <span className="tag tag-red">Application Deadline: {programme.applicationDeadline || 'TBD'}</span>
                                <span className="tag tag-red">Duration: {programme.duration}</span>
                                <span className="tag tag-red">Mode: {programme.mode || 'Online + Campus'}</span>
                            </div>
                        </motion.section>

                        {/* Program Directors */}
                        {programme.directors && (
                            <motion.section
                                className="content-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.15 }}
                            >
                                <h2>Program Director(s)</h2>
                                <div className="directors-list">
                                    {programme.directors.map((director, index) => (
                                        <div key={index} className="director-card">
                                            <div className="director-avatar">
                                                {director.image && <img src={director.image} alt={director.name} />}
                                            </div>
                                            <div className="director-info">
                                                <h3>{director.name}</h3>
                                                <p>{director.designation}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.section>
                        )}

                        {/* Faculty */}
                        {programme.faculty && (
                            <motion.section
                                className="content-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <h2>Program Faculty</h2>
                                <div className="directors-list">
                                    {programme.faculty.map((faculty, index) => (
                                        <div key={index} className="director-card">
                                            <div className="director-avatar">
                                                {faculty.image && <img src={faculty.image} alt={faculty.name} />}
                                            </div>
                                            <div className="director-info">
                                                <h3>{faculty.name}</h3>
                                                <p>{faculty.designation}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.section>
                        )}

                        {/* Objectives */}
                        {programme.objectives && (
                            <motion.section
                                className="content-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.25 }}
                            >
                                <h2>Program Outcomes & Objectives</h2>
                                <ul className="objectives-list">
                                    {programme.objectives.map((obj, index) => (
                                        <li key={index}>{obj}</li>
                                    ))}
                                </ul>
                            </motion.section>
                        )}

                        {/* Target Audience */}
                        {programme.targetAudience && (
                            <motion.section
                                className="content-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <h2>Who Should Attend / Target Segment?</h2>
                                {Array.isArray(programme.targetAudience) ? (
                                    <ul className="target-list">
                                        {programme.targetAudience.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>{programme.targetAudience}</p>
                                )}
                                {programme.experienceLevel && (
                                    <p className="experience-level"><strong>Experience Level:</strong> {programme.experienceLevel}</p>
                                )}
                            </motion.section>
                        )}

                        {/* Modules / Program Contents */}
                        {programme.modules && (
                            <motion.section
                                className="content-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.35 }}
                            >
                                <h2>Program Contents</h2>
                                <div className="modules-accordion">
                                    {programme.modules.map((module, index) => (
                                        <div key={index} className="module-item">
                                            <button
                                                className={`module-header ${expandedModule === index ? 'expanded' : ''}`}
                                                onClick={() => toggleModule(index)}
                                            >
                                                <span>{module.title}</span>
                                                <motion.span
                                                    className="chevron"
                                                    animate={{ rotate: expandedModule === index ? 180 : 0 }}
                                                >
                                                    ▼
                                                </motion.span>
                                            </button>
                                            <AnimatePresence>
                                                {expandedModule === index && (
                                                    <motion.div
                                                        className="module-content"
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <ul>
                                                            {module.topics.map((topic, idx) => (
                                                                <li key={idx}>{topic}</li>
                                                            ))}
                                                        </ul>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                            </motion.section>
                        )}

                        {/* Pedagogy */}
                        {programme.pedagogy && (
                            <motion.section
                                className="content-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <h2>Pedagogy</h2>
                                <p>{programme.pedagogy}</p>
                            </motion.section>
                        )}

                        {/* Duration / Schedule */}
                        {programme.schedule && (
                            <motion.section
                                className="content-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.45 }}
                            >
                                <h2>Duration of the Program</h2>
                                <p className="schedule-duration">Programme Duration: {programme.duration}</p>
                                <ul className="schedule-list">
                                    <li>• Total Learning Hours: {programme.schedule.totalHours} hours</li>
                                    {programme.schedule.campusHours && <li>• Campus classes: {programme.schedule.campusHours} hours</li>}
                                    {programme.schedule.liveHours && <li>• Online classes: {programme.schedule.liveHours} hours</li>}
                                    {programme.schedule.tutorialHours && <li>• Tutorial Hours: {programme.schedule.tutorialHours}</li>}
                                    {programme.schedule.projectMentorship && <li>• Project Mentorship: {programme.schedule.projectMentorship}</li>}
                                    {programme.schedule.assignmentHours && <li>• {programme.schedule.assignmentHours} hours Assignments</li>}
                                    {programme.schedule.capstoneHours && <li>• {programme.schedule.capstoneHours} hours Capstone Project</li>}
                                    {programme.schedule.campusImmersion && <li>• {programme.schedule.campusImmersion}</li>}
                                    {programme.schedule.masterclasses && <li>• {programme.schedule.masterclasses}</li>}
                                </ul>
                                <p className="schedule-timing"><strong>Program Schedule:</strong> {programme.schedule.timing}</p>
                            </motion.section>
                        )}

                        {/* Key Learning Outcomes */}
                        {programme.keyLearningOutcomes && (
                            <motion.section
                                className="content-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.47 }}
                            >
                                <h2>Key Learning Outcomes</h2>
                                <ul className="objectives-list">
                                    {programme.keyLearningOutcomes.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </motion.section>
                        )}

                        {/* Tools / Libraries */}
                        {programme.tools && (
                            <motion.section
                                className="content-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.48 }}
                            >
                                <h2>Tools / Libraries</h2>
                                <ul className="objectives-list">
                                    {programme.tools.map((tool, index) => (
                                        <li key={index}>{tool}</li>
                                    ))}
                                </ul>
                            </motion.section>
                        )}

                        {/* In-Campus Modules */}
                        {programme.inCampusModules && (
                            <motion.section
                                className="content-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.49 }}
                            >
                                <h2>In-Campus Modules</h2>
                                <p>{programme.inCampusModules}</p>
                            </motion.section>
                        )}

                        {/* Evaluation Methodology */}
                        {programme.evaluation && (
                            <motion.section
                                className="content-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <h2>Evaluation Methodology</h2>
                                <p>{programme.evaluation.description}</p>
                                <p>{programme.evaluation.attendance}</p>
                                <p>{programme.evaluation.projects}</p>
                                {programme.evaluation.passingCriteria && (
                                    <p>{programme.evaluation.passingCriteria}</p>
                                )}
                            </motion.section>
                        )}

                        {/* Assignments / Case-Projects */}
                        {programme.assignments && (
                            <motion.section
                                className="content-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.52 }}
                            >
                                <h2>Assignments / Case-Projects</h2>
                                <ul className="assignments-list">
                                    {programme.assignments.map((assignment, index) => (
                                        <li key={index}>{assignment}</li>
                                    ))}
                                </ul>
                            </motion.section>
                        )}

                        {/* Certification */}
                        {programme.certification && (
                            <motion.section
                                className="content-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.55 }}
                            >
                                <h2>Certification</h2>
                                <ul className="certification-list">
                                    {programme.certification.description.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                                <p className="cert-issuer"><strong>Certificate Issued By:</strong> {programme.certification.issuedBy}</p>
                                {programme.certification.bonus && (
                                    <p className="cert-bonus"><strong>Bonus:</strong> {programme.certification.bonus}</p>
                                )}
                                <div className="certificate-sample">
                                    <div className="cert-header">
                                        <h3>Delhi Technological University</h3>
                                        <p>(DTU, New Delhi)</p>
                                    </div>
                                    <div className="cert-body">
                                        <p>This is to certify that</p>
                                        <p className="cert-name">Mr./Ms. Name Of The Participant</p>
                                        <p>has successfully completed the</p>
                                        <p className="cert-programme">{programme.title}</p>
                                        <p className="cert-dates">held from {formatDate(programme.startDate)} onwards</p>
                                        <p>by the Delhi Technological University.</p>
                                    </div>
                                </div>
                            </motion.section>
                        )}

                        {/* Eligibility */}
                        <motion.section
                            className="content-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <h2>Eligibility</h2>
                            <p>{programme.eligibility}</p>
                            {programme.experience && (
                                <p className="experience-req"><strong>Experience:</strong> {programme.experience}</p>
                            )}
                        </motion.section>

                        {/* Batch Size */}
                        {programme.batchSize && (
                            <motion.section
                                className="content-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.65 }}
                            >
                                <h2>Batch Size</h2>
                                <p><strong>Minimum:</strong> {programme.batchSize.minimum} participants</p>
                                <p><strong>Maximum:</strong> {programme.batchSize.maximum} participants</p>
                            </motion.section>
                        )}

                        {/* Program Delivery */}
                        {programme.programDelivery && (
                            <motion.section
                                className="content-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                            >
                                <h2>Program Delivery</h2>
                                <p>{programme.programDelivery}</p>
                            </motion.section>
                        )}

                        {/* Selection Criteria */}
                        {programme.selectionCriteria && (
                            <motion.section
                                className="content-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.75 }}
                            >
                                <h2>Selection Criteria</h2>
                                <p>Screening the Participants Profile based on the following criteria:</p>
                                <ul className="criteria-list">
                                    {programme.selectionCriteria.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </motion.section>
                        )}

                        {/* Admission Criteria */}
                        {programme.admissionCriteria && (
                            <motion.section
                                className="content-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                <h2>Admission Criteria</h2>
                                <ul className="criteria-list">
                                    {programme.admissionCriteria.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </motion.section>
                        )}

                        {/* Fee Structure */}
                        {programme.feeStructure && (
                            <motion.section
                                className="content-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.85 }}
                            >
                                <h2>Fee Structure</h2>
                                <div className="fee-list">
                                    {Object.entries(programme.feeStructure).map(([key, value]) => {
                                        if (typeof value === 'object' && value.label) {
                                            return (
                                                <div key={key} className={`fee-row ${key === 'totalFee' ? 'total' : ''}`}>
                                                    <span>{value.label}:</span>
                                                    <span className="fee-amount">{value.amount}</span>
                                                </div>
                                            );
                                        }
                                        return null;
                                    })}
                                </div>

                                {programme.installments && (
                                    <>
                                        <h3 className="installment-title">Installment Schedule</h3>
                                        <table className="installment-table">
                                            <thead>
                                                <tr>
                                                    <th>Installment</th>
                                                    {programme.installments[0]?.dueDate && <th>Due Date</th>}
                                                    <th>Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {programme.installments.map((inst, index) => (
                                                    <tr key={index}>
                                                        <td>{inst.installment}</td>
                                                        {inst.dueDate && <td>{inst.dueDate}</td>}
                                                        <td>{inst.amount}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </>
                                )}
                                <p className="fee-note">* GST will be additional at 18%</p>
                                <p className="fee-note">** All payments are to be made to Delhi Technological University, Delhi</p>
                            </motion.section>
                        )}

                        {/* Program Launch Schedule */}
                        {programme.launchSchedule && (
                            <motion.section
                                className="content-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.9 }}
                            >
                                <h2>Program Launch Schedule</h2>
                                <div className="schedule-table">
                                    {Object.entries(programme.launchSchedule).map(([key, value]) => (
                                        <div key={key} className="schedule-row">
                                            <span className="schedule-label">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</span>
                                            <span className="schedule-value">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.section>
                        )}

                        {/* Refund Policy */}
                        {programme.refundPolicy && (
                            <motion.section
                                className="content-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.95 }}
                            >
                                <h2>Refund Policy</h2>
                                <ul className="refund-list">
                                    {programme.refundPolicy.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </motion.section>
                        )}

                        {/* Important Points */}
                        {programme.importantPoints && (
                            <motion.section
                                className="content-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1 }}
                            >
                                <h2>Important Points to Note</h2>
                                <ul className="important-list">
                                    {programme.importantPoints.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </motion.section>
                        )}

                        {/* Highlights */}
                        {programme.highlights && (
                            <motion.section
                                className="content-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1.05 }}
                            >
                                <h2 className="highlights-title">Programme Highlights</h2>
                                <div className="highlights-grid">
                                    {programme.highlights.map((highlight, index) => (
                                        <motion.div
                                            key={index}
                                            className="highlight-card"
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            <p>{highlight}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.section>
                        )}
                    </div>

                    {/* Sidebar */}
                    <motion.aside
                        className="sidebar"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="sidebar-card">
                            <div className="sidebar-header">
                                <span className="dtu-badge">DTU</span>
                                <div className="nirf-rank">
                                    <span className="rank">#29</span>
                                    <p>NIRF 2024 (Engineering)</p>
                                </div>
                            </div>
                            <h3>{programme.title}</h3>
                            <p className="sidebar-subtitle">{programme.subtitle}</p>

                            <div className="sidebar-info">
                                <div className="info-row">
                                    <span>Duration:</span>
                                    <span>{programme.duration}</span>
                                </div>
                                <div className="info-row">
                                    <span>Start Date:</span>
                                    <span>{formatDate(programme.startDate)}</span>
                                </div>
                                <div className="info-row">
                                    <span>Application Deadline:</span>
                                    <span>{programme.applicationDeadline || 'TBD'}</span>
                                </div>
                                <div className="info-row">
                                    <span>Programme Type:</span>
                                    <span>Online Certificate</span>
                                </div>
                                <div className="info-row">
                                    <span>Status:</span>
                                    <span className="status-badge">{programme.status || 'Coming Soon'}</span>
                                </div>
                                <div className="info-row">
                                    <span>Total Fee:</span>
                                    <span className="fee-bold">{programme.cost}</span>
                                </div>
                                <div className="info-row">
                                    <span>Application Fee:</span>
                                    <span>{programme.applicationFee || 'INR 2,000 + GST'}</span>
                                </div>
                            </div>

                            <button
                                className="btn btn-primary full-width btn-disabled"
                                disabled
                                title="Enrollment not available yet"
                            >
                                Enroll Now
                            </button>
                        </div>
                    </motion.aside>
                </div>
            </div>
        </div>
    );
};

export default ProgrammeDetail;
