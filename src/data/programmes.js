import { image } from "framer-motion/client";
import { href } from "react-router-dom";

export const programmes = [
        {
        id: 'ai',
        enroll: 'https://saarthi.dtu.ac.in/ctel/ctel_apai/sourceCode/',
        title: 'Advanced Certificate Program in Artificial Intelligence',
        shortTitle: 'AI Programme',
        subtitle: 'Master AI fundamentals and advanced techniques',
        description: 'A comprehensive programme on machine learning, deep learning, and AI applications for industry professionals.',
        duration: '6 Months',
        batch: 'Batch 01',
        startDate: new Date('2026-03-28'),
        mode: 'Online + 3-day Campus',
        cost: 'INR 1,50,000 + GST',
        applicationFee: 'INR 2,000 + GST',
        provider: 'Times Edutech and Events Limited (TimesPro)',
        serviceProvider: 'Times Edutech and Events Limited (TimesPro)',
        category: 'certificate',
        image: '/images/program/1.png',
        certificate: '/images/certificates/ai.jpeg',
        status: 'Coming Soon',
        directors: [
            { name: 'Prof. Neeraj Sharma', designation: 'Adjunct Professor, Delhi Technological University', image: "/public/images/faculty/neeraj.jpg" },
            { name: 'Prof. S Indu', designation: 'Dean – Digital Education, Delhi Technological University', image: "/public/images/faculty/indu.jpg" }
            
        ],
        faculty: [
            { name: 'Dr. Dhirendra Kumar ', designation: 'Department of Applied Mathematics, DTU', image: "/public/images/faculty/dhirendra.jpg" },
            { name: 'Dr. Kavinder Singh', designation: 'Department of Computer Science & Engineering, DTU', image: "/public/images/faculty/kavinder.jpeg" },
            { name: 'Dr. Trasha Gupta', designation: 'Department of Applied Mathematics, DTU', image: "/public/images/faculty/trasha.jpg" }
        ],
        highlights: [
            'Certificate from DTU, an Institute of Eminence',
            'Learn from DTU faculty and industry experts',
            'Hands-on projects with real-world datasets',
            '3-day Campus Immersion at DTU Delhi',
            'Network with AI professionals and peers',
            'Guest Lectures by Industry experts',
            'Covers latest topics such as Generative AI'
        ],
        schedule: {
            totalHours: 110,
            campusHours: 20,
            liveHours: 60,
            tutorialHours: 30,
            projectMentorship: 'NA',
            campusImmersion: '3-day Campus Immersion at the end of the programme (optional)',
            timing: 'Saturday, 6:30 PM - 9:40 PM IST (Session 1: 6:30 PM - 8:00 PM, Break: 8:00 PM - 8:10 PM, Session 2: 8:10 PM - 9:40 PM)'
        },
        eligibility: "Graduates or Post-Graduates in Engineering, Technology, Computer Science, IT, Mathematical Sciences and related disciplines will be preferred. Preference to working professionals with minimum 1 year of prior experience in IT, software, technology, engineering or related domains.",
        targetAudience: [
            'Graduates or Post-Graduates in Engineering, Technology, Computer Science, IT, Mathematical Sciences and related disciplines',
            'Working professionals with minimum 1 year of prior experience in IT, software, technology, engineering or related domains'
        ],
        objectives: [
            'The Certificate Program in Artificial Intelligence is a comprehensive course that provides participants with a foundational understanding of artificial intelligence, AI tools, algorithms, and their industrial applications.',
            'The course will equip participants with the knowledge and practical skills necessary to proficiently apply machine learning techniques to tackle complex problems across diverse domains such as sales and marketing, medical diagnostics, to sports analytics.',
            'The course is thoughtfully crafted with a fine balance between theory and practice, with a special focus on learners from non-CS backgrounds.',
            'Contemporary industry case studies and practice sessions have been curated to provide hands-on experience of applying advanced machine learning techniques, that are used by leading tech and non-tech companies (e.g., Google, Amazon, Coca-Cola, Flipkart, think tanks, Civil and Mechanical Engineering firms, Power companies, Government agencies, etc.).'
        ],
        keyLearningOutcomes: [
            'Understanding of machine learning tools, algorithms, and industrial applications',
            'Gain hands-on experience in applying advanced ML techniques through case studies and practice exercises',
            'Understand the working of neural networks and gain the ability to design and implement them using various tools and techniques',
            'Able to design and implement various AI and ML techniques in a range of real-world applications',
            'Covers latest topics such as Generative AI'
        ],
        modules: [
            {
                title: 'Module 1: Practical Python for Industry Professionals',
                topics: [
                    'Foundations of Python Programming',
                    'Functional Programming in Python',
                    'Data Structures, Loops, and Control Structures'
                ],
                outcome: 'Master Python programming fundamentals for AI/ML applications.'
            },
            {
                title: 'Module 2: Mathematical Foundations for AI/ML – Linear Algebra',
                topics: [
                    'Vectors and Matrices',
                    'Vector Space and Subspace',
                    'System of Linear Equations',
                    'The Concept of Rank and Independent Vectors',
                    'Inner Product Space',
                    'Norms',
                    'Positive Definite Matrix',
                    'Matrix factorization (EVD, SVD, QR, LR, etc.)',
                    'Projection and Orthogonality',
                    'Hands-on Demo: Linear Algebra using NumPy'
                ],
                outcome: 'Build strong mathematical foundations in linear algebra for ML.'
            },
            {
                title: 'Module 3: Mathematical Foundations for AI/ML – Probability, Statistics & Optimization',
                topics: [
                    'Probability and Statistics: Random Variables, Distribution and Density Functions, Conditional Probability, Bayes Theorem, Joint Distribution',
                    'Concept of Independence, Covariance, and Correlation',
                    'Introductory Statistical Inference (Likelihood, MAP, etc.)',
                    'Concept of Entropy, Mutual Information, and KL Divergence',
                    'Optimization: Function and Derivatives, Gradient Descent, Stochastic Gradient Descents',
                    'Convex Optimization, Formulation and Optimality Conditions',
                    'ADAM Optimizer'
                ],
                outcome: 'Master probability, statistics, and optimization techniques for ML.'
            },
            {
                title: 'Module 4: Regression Methods',
                topics: [
                    'Simple and Multiple Linear Regression',
                    'Hands-on Demo: SLR/MLR',
                    'Least Squares Approach',
                    'Moving beyond Linearity: Non-linear Regression',
                    'Hands-on Demo: NLR',
                    'Model Selection, Regularization and Bias-Variance Trade-off',
                    'M2 Project: Regression Application'
                ],
                outcome: 'Apply regression methods for predictive modeling.'
            },
            {
                title: 'Module 5: Classification Methods',
                topics: [
                    'Motivation and Introduction to Classification Problems',
                    'Logistic Regression with Hands-on Demo',
                    'Decision Trees: Introduction, Random Forests, Bagging, and Boosting',
                    'Hands-on Demo: Random Forests',
                    'Interpretability of Machine Learning Models',
                    'Concept of Hyperplane Classifier',
                    'Support Vector Machines (SVM), Kernel SVM with Hands-on Demo',
                    'Multi-Class Classifiers',
                    'Clustering Methods with Hands-on Demo',
                    'M3 Project: Classification Application',
                ],
                outcome: 'Master classification algorithms and their applications.'
            },
            {
                title: 'Module 6: Deep Learning',
                topics: [
                    'Neural Networks: Fundamentals of Neural Network and Feedforward Network, Concept of Training and Backpropagation, Hands-on Demo: ANN',
                    'Convolutional Neural Networks: Fundamentals of Convolution, CNN Architecture, Hands-on Demo: CNN',
                    'Recurrent Neural Networks/LSTM: Introduction to Time Series and Sequential Data, Introduction to Language Modeling and NLP, RNN and LSTM/GRU, Hands-on Demo',
                    'Variational Autoencoders (VAE): Image encoding to latent spaces, Generating new images',
                    'Generative Adversarial Networks (GAN): Generating realistic synthetic data',
                    'Graph Neural Networks (GNN): GCN, GraphSAGE for social media and biomedical applications',
                    'Natural Language Processing (NLP): Text summarization and modern NLP techniques',
                    'Course Project: Design and build your own recommender system'
                ],
                outcome: 'Design and implement deep learning models including CNNs, RNNs, GANs, and GNNs.'
            }
        ],
        assignments: [
                    'Sentiment Analysis using Logistic Regression',
                    'Comparative performance: Decision Trees vs Random Forest vs XGBoost to identify and  reduce customer attrition.',
                    'Image Classification with SVM (FashionMNIST)',
                    'Build Neural Networks from scratch',
                    'CNN interpretability using Grad-CAM',
                    'Image & video captioning with LSTMs',
                    'Variational Autoencoder on MNIST',
                    'GAN development for synthetic image generation',
                    'Graph Neural Networks for Social Network Analysis'
        ],
        pedagogy: "It's a mix of classroom teaching, live examples, peer discussions, quizzes, assessments and context based case studies. Each lecture is accompanied by a hands-on demo session along with a student project. There will be doubt clearance and discussion sessions during and after the programme as well.",
        launchSchedule: {
            salesStart: '15th December 2025',
            salesEnd: '27th March 2026',
            batchStart: '28th March 2026',
            batchEnd: 'August 2026'
        },
        feeStructure: {
            applicationFee: { label: 'Application Fee', amount: 'INR 2,000 + GST' },
            programFee: { label: 'Program Fee', amount: 'INR 1,50,000 + GST (Including Campus Immersion & accommodation charges)' },
            OverallFee: { label: 'Overall Program Fee', amount: 'INR 1,52,000 + GST'}
        },
        installments: [
            { installment: 'Application Fee', dueDate: 'At the time of Application', amount: 'INR 2,000 + GST' },
            { installment: '1st Installment', dueDate: 'Within one week of offer rollout', amount: 'INR 50,000 + GST' },
            { installment: '2nd Installment', dueDate: '27th April 2026 (30 days from programme start)', amount: 'INR 50,000 + GST' },
            { installment: '3rd Installment', dueDate: '27th May 2026 (60 days from programme start)', amount: 'INR 50,000 + GST' }
        ],
        programDelivery: 'Online Direct 2 Device (D2D)',
        selectionCriteria: [
            'Selection based on assessment of the profile through data provided in application form',
            'Statement of Purpose will form an integral and important part of the selection process'
        ],
        admissionCriteria: [
            'Corporate Nominations from Multiple Corporates',
            'Application + credentials'
        ],
        certification: {
            description: [
                'Certificate of Completion will be awarded to candidates who score at least 70% marks overall and have a minimum attendance of 70%',
                'Certificate of Participation will be awarded to candidates who fail to score overall 70% marks but have requisite attendance',
                'Any participant with less than 70% attendance will receive no certification from the University'
            ],
            issuedBy: 'Delhi Technological University (DTU, New Delhi)'
        },
        evaluation: {
            description: 'MCQ based evaluation (Mid term & End term exam)',
            attendance: 'A minimum of 70% attendance is a prerequisite for the successful completion of this programme.',
            projects: 'The Programme includes hands-on demo sessions, student projects for each module, and a final course project.'
        },
        inCampusModules: '3 days (20 hours) of campus immersion at the end of the programme (optional for the learners to attend)',
        refundPolicy: [
            'Requests for refund of fees on account of cancellation of enrolment shall be considered only if such requests are received prior to closure of registration or 21 days before the commencement date of program, whichever is earlier.',
            'In the event of valid requests for refund of fees are received, the first installment paid (joining fee) money shall be refunded after deducting a penalty of INR 5,000/- (Administrative Charges).',
            'In all other cases, no refund shall be made.'
        ],
        importantPoints: [
            'Boarding and Lodging: Campus stay organized by DTU, New Delhi on a double occupancy basis',
            'The program will be delivered through Direct-to-Device format',
            'Program launch dates as well as installment dates are open to change as per requirement',
            'Corporate Nominations from Multiple Corporates are accepted',
            'The payment of the registration fee does not mean that you have earned the certification',
            'The Institute reserves every right to withhold the certification if the stipulated rules and regulations are not followed'
        ],
        tools: ['Python', 'PyTorch', 'TensorFlow', 'Sklearn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn']
    },
        {
        id: 'csr-esg',
        enroll: 'https://saarthi.dtu.ac.in/ctel/ctel_lpce/sourceCode/',
        title: 'Leadership Program in CSR, ESG & Corporate Sustainability',
        shortTitle: 'CSR & ESG',
        subtitle: 'Strategic leadership for sustainable business transformation',
        description: 'Build ESG-compliant business models, learn from industry leaders, and drive sustainable business transformation.',
        duration: '6 Months',
        batch: 'Batch 01',
        startDate: new Date('2026-05-10'),
        mode: 'Online + 3-day Campus',
        cost: 'INR 1,50,000 + GST',
        applicationFee: 'INR 2,000 + GST',
        provider: 'Unified Collaboration Services LLP (VCNow)',
        serviceProvider: 'Unified Collaboration Services LLP (VCNow)',
        category: 'certificate',
        image: '/images/program/3.png',
        certificate: '/images/certificates/csr.jpeg',
        status: 'Coming Soon',
        directors: [
            { name: 'Prof. Amit Mookerjee', designation: 'USME, Delhi Technological University', image: "/images/faculty/amit.jpg"},
            { name: 'Prof. Neeraj Sharma', designation: 'Adjunct Professor, Delhi Technological University', image: "/images/faculty/neeraj.jpg"}
        ],
        faculty: [
            { name: 'Prof. Amit Mookerjee', designation: 'USME, Delhi Technological University', image: "/images/faculty/amit.jpg"},
            { name: 'Prof. Neeraj Sharma', designation: 'Adjunct Professor, Delhi Technological University', image: "/images/faculty/neeraj.jpg"}
        ],
        highlights: [
            'Certificate from DTU, an Institute of Eminence',
            'Learn from DTU faculty and industry experts',
            'Comprehensive ESG and sustainability frameworks',
            '3-day Campus Immersion at DTU Delhi',
            'Network with CSR and ESG professionals',
            'Executive Alumni Status & Networking Access'
        ],
        schedule: {
            totalHours: 84,
            liveHours: 72,
            campusHours: 12,
            campusImmersion: '3-day Campus Immersion towards early stages of the programme',
            timing: 'Sunday, 9:00 AM - 12:10 PM IST (Once a week for 3 hours)'
        },
        eligibility: "For Indian Participants: Graduates (10+2+3) or Diploma Holders (only 10+2+3) from a recognized university (UGC/AICTE/DEC/AIU/State Government) in any discipline. For International Participants: Graduation or equivalent degree from any recognized University or Institution in their respective country.",
        experience: 'Working Professionals with 5 years of work experience',
        targetAudience: 'Mid to senior-level professionals including ESG/CSR managers, CXOs, consultants, policy professionals, and sustainability officers',
        objectives: [
            'Equip professionals with integrated knowledge of CSR, ESG, and corporate sustainability frameworks.',
            'Develop strategic thinking and leadership aligned with sustainability goals.',
            'Enable professionals to build ESG-compliant business models and reporting frameworks.',
            'Expose learners to emerging trends such as green finance, tech-enabled ESG systems, and biodiversity governance.'
        ],
        modules: [
            {
                title: 'Module 1: Foundations of CSR, ESG & Responsible Business Leadership',
                topics: [
                    'Week 1: Evolution of CSR & ESG | Triple Bottom Line & Stakeholder Capitalism',
                    'Week 2: Corporate Responsibility in the SDG Era | Ethics, Governance & Accountability',
                    "Week 3: Leadership's Role in Building Sustainable Enterprises | Responsible Decision-Making",
                    'Week 4: CSR & ESG Trends in Emerging Economies | Business Case for Sustainability'
                ],
                outcome: 'Understand the foundations of CSR and ESG frameworks, and develop responsible business leadership skills.'
            },
            {
                title: 'Module 2: Legal, Regulatory & Global ESG Frameworks',
                topics: [
                    "Week 5: Companies Act (Section 135), CSR Rules & SEBI's BRSR Requirements",
                    'Week 6: Global ESG Disclosure Frameworks: GRI, SASB, TCFD, CDP, UNGC, TNFD',
                    'Week 7: Voluntary Sustainability Standards: ISO 26000, Fairtrade, FSC | ESG Litigation Risk',
                    'Week 8: Governance Best Practices | Corporate Accountability & Reporting Mandates'
                ],
                outcome: 'Master legal and regulatory frameworks for CSR and ESG compliance at national and global levels.'
            },
            {
                title: 'Module 3: Strategic CSR Design, Stakeholder Engagement & Social Impact',
                topics: [
                    'Week 9: Community Need Assessment | Impact Gap Analysis & Theory of Change',
                    'Week 10: Stakeholder Mapping, Engagement & CSR-PPP Frameworks',
                    'Week 11: Designing High-Impact CSR Programs (Urban & Rural Focus) | Partnering with NGOs',
                    'Week 12: Social ROI, Impact Assessment, & Outcome Tracking'
                ],
                outcome: 'Design high-impact CSR programs with effective stakeholder engagement and social impact measurement.'
            },
            {
                title: 'Module 4: ESG Metrics, Reporting & Digital Innovation',
                topics: [
                    'Week 13: ESG KPIs, Materiality Mapping & Dashboard Design',
                    'Week 14: Integrated Sustainability Reporting (GRI, SASB, TCFD, BRSR)',
                    'Week 15: ESG Ratings, Greenwashing Prevention & Benchmarking (MSCI, Sustainalytics)',
                    'Week 16: Technology in ESG: Blockchain, AI, and IoT for Compliance & Traceability'
                ],
                outcome: 'Master ESG metrics, reporting frameworks, and leverage digital innovation for compliance.'
            },
            {
                title: 'Module 5: Climate Change, Resource Management & Sustainable Finance',
                topics: [
                    'Week 17: Net Zero, Carbon Neutrality & Science-Based Targets (SBTi)',
                    'Week 18: Resource Efficiency, Circular Economy & Decarbonization Strategies',
                    'Week 19: Renewable Energy Projects, Nature-Positive Business Models & TNFD',
                    'Week 20: Green Bonds, Climate Finance, ESG Risk in Financial Reporting & Sustainable Investing'
                ],
                outcome: 'Understand climate change strategies, resource management, and sustainable finance mechanisms.'
            },
            {
                title: '3-Day Campus Immersion (Initial Stages of the Program)',
                topics: [
                    'Executive Strategy Lab: Group Simulations & Live Case Exercises',
                    'Networking with Industry Leaders, Practitioners, and DTU Faculty',
                    'Capstone Project Presentations & Peer Learning',
                    'Industry Expert Sessions & Case Study Discussions'
                ],
                outcome: 'Apply learning through executive strategy lab and network with industry professionals.'
            }
        ],
        pedagogy: "The classes for this Program will be delivered through LIVE lectures using Direct to Device (D2D) Technology facilitated by VCNow. The pedagogy comprises of case studies, interactive sessions, quizzes, mid-term and end-term examinations, class participation, project work and group-based presentations, in-class exercises imparted by DTU's faculty to help participants gain knowledge, understanding and hands-on skills to immediately apply their learning in the workplace. Additionally, participants opting for a Certificate of Completion will be assigned project work and presentations that will be evaluated by the faculty in addition to providing individual feedback.",
        launchSchedule: {
            salesStart: '5th January 2026',
            applicationClosure: '18th April 2026',
            selectedCandidatesList: '22nd April 2026',
            firstInstallmentDate: '24th April 2026',
            technicalOrientation: '26th April 2026',
            academicOrientation: '3rd May 2026',
            finalListAtDTU: '4th May 2026',
            classStart: '10th May 2026',
            campusModule: 'TBD (Early stages of the programme)'
        },
        feeStructure: {
            applicationFee: { label: 'Application Fee', amount: 'INR 2,000 + GST' },
            programFee: { label: 'Program Fee', amount: 'INR 1,50,000 + GST (Including Campus Immersion & accommodation charges)' },
            OverallFee: { label: 'Overall Program Fee', amount: 'INR 1,52,000 + GST'}
        },
        installments: [
            { installment: '1st Installment', dueDate: 'Within 7-10 days of offer letter (April 24, 2026)', amount: 'INR 50,000 + GST' },
            { installment: '2nd Installment', dueDate: '10th June 2026', amount: 'INR 50,000 + GST' },
            { installment: '3rd Installment', dueDate: '10th July 2026', amount: 'INR 50,000 + GST' }
        ],
        certification: {
            description: [
                'Certificate of Completion will be awarded to participants who successfully complete the program and satisfy the requisite attendance criteria.',
                'Certificate of Participation will be awarded to participants who are unable to clear the evaluation criteria but have the requisite attendance.',
                'No separate Transcript or Marksheet will be provided by DTU to participants.'
            ],
            issuedBy: 'Delhi Technological University (DTU, New Delhi)',
            bonus: 'Executive Alumni Status & Networking Access will also be granted to eligible participants.'
        },
        evaluation: {
            description: 'Evaluation methodology is at the discretion of the faculty. The methodology includes online exams, case analysis, class contribution and any other component as decided by the respective course faculties.',
            attendance: 'A minimum of 75% attendance is a prerequisite for the successful completion of this programme. Compulsory attendance for all examinations.',
            projects: 'The Programme may require participants to work on individual/group assignments and/or projects. The main objective of such assignments/projects will be to help the participants apply their conceptual learning in the Program to actual organizational decision scenarios. Participants will have to secure the minimum pass marks in the respective evaluation components.'
        },
        refundPolicy: [
            'Initial amount (except the application fee) is refundable only in case the Institute rejects the application.',
            'No refund will be given to participants once the Program starts.'
        ],
        importantPoints: [
            'Program launch dates as well as installment dates are open for change as per the requirement',
            'Boarding and Lodging during campus visits: AC accommodation will be provided on twin sharing basis in or around DTU Campus',
            'The Program will be offered through Direct to Desktop (D2D) mode',
            'Technical requirements: Access to live sessions over laptop or desktop with dedicated bandwidth of min 1 Mbps and noise-free surroundings',
            'The payment of the registration fee does not mean that you have earned the certification',
            'The Institute reserves every right to withhold the certification if the stipulated rules and regulations are not followed',
            'DTU does not provide placement assistance to Executive Education Candidates',
            'DTU will provide "DTU Executive Education" alumni status to all participants successfully completing the programme'
        ]
    },
    {
        id: 'renewable-energy',
        enroll: 'https://saarthi.dtu.ac.in/ctel/ctel_aprse/sourceCode/',
        title: 'Senior Management Program in Renewable Energy Strategy and Sustainable Leadership',
        shortTitle: 'Renewable Energy',
        subtitle: 'Strategic energy management and sustainable leadership for the future',
        description: 'Learn renewable energy technologies, sustainable energy management, and policy frameworks for a greener future.',
        duration: '6 Months',
        batch: 'Batch 01',
        startDate: new Date('2026-01-10'),
        mode: 'Online + 3-day Campus',
        cost: 'INR 1,50,000 + GST',
        applicationFee: 'INR 2,000 + GST',
        provider: 'DTU Centre for Executive Programmes',
        serviceProvider: 'DTU Centre for Executive Programmes',
        category: 'certificate',
        image: '/images/program/2.png',
        certificate: '/images/certificates/aprse.jpeg',
        status: 'Coming Soon',
        directors: [
            { name: 'Prof. M. Rizwan', designation: 'Department of Electrical Engineering, DTU', image: '/images/faculty/rizwan.jpg', href: "https://dtu.ac.in/modules/facilities/people/faculty/view.php?uname=rizwan"}
        ],
        faculty: [
            { name: 'Prof. M. Rizwan', designation: 'Department of Electrical Engineering, DTU', image: "/images/faculty/rizwan.jpg" }
        ],
        highlights: [
            'Certificate from DTU, an Institute of Eminence',
            'Learn from DTU faculty and industry experts',
            'AI and data analytics for energy optimization',
            '3-day Campus Visit at DTU Delhi',
            'Network with energy and sustainability professionals',
            'Comprehensive renewable energy frameworks'
        ],
        schedule: {
            totalHours: 80,
            liveHours: 67,
            campusHours: 13,
            tutorialHours: 'NA',
            projectMentorship: 'NA',
            campusImmersion: '3-day Campus Visit at the beginning of the course',
            timing: 'Frequency: Once in a week (Sunday, 9:00 AM - 12:00 PM IST)'
        },
        eligibility: "For Indian Participants: Graduates (10+2+3) or Diploma Holders (only 10+2+3) from a recognized university (UGC/AICTE/DEC/AIU/State Government) in any discipline. For International Participants: Graduation or equivalent degree from any recognized University or Institution in their respective country.",
        experience: 'Working Professionals with 5 years of work experience',
        targetAudience: [
            'Senior Managers and Heads of Energy or Sustainability Departments – responsible for designing and implementing renewable energy and sustainability strategies',
            'Compliance and Risk Officers – involved in regulatory compliance, energy policies, and risk assessment related to renewable energy projects',
            'Sustainability Professionals – managing environmental and energy impact initiatives',
            'Business Leaders and Executives – looking to integrate renewable energy and sustainability into strategic decision-making',
            'Corporate Strategy and Governance Leaders – interested in leveraging AI and analytics for energy management and sustainability reporting',
            'Consultants and Advisors – working on renewable energy, sustainability, or ESG projects across industries',
            'Board Members and C-Suite Executives – aiming to drive organizational change and leadership in sustainable energy practices'
        ],
        experienceLevel: '5–20+ years in corporate, energy, infrastructure, government, or non-profit sectors with exposure to energy management, sustainability, compliance, or strategic leadership.',
        objectives: [
            'The Senior Management Program in Renewable Energy Strategy and Sustainable Leadership is designed to equip senior executives with the knowledge and skills to strategically manage and lead renewable energy initiatives.',
            'Participants will gain expertise in renewable energy systems, sustainable management practices, and energy transition strategies, while learning to leverage AI and data analytics for energy optimization, performance monitoring, and ESG reporting.',
            'The program enables executives to formulate and implement sustainable energy projects, ensure compliance with national and international policies and ESG standards, drive cross-functional organizational change, and foster innovation in renewable energy technologies and corporate sustainability, thereby creating long-term value and impactful business outcomes.'
        ],
        modules: [
            {
                title: 'Module 1: Foundations of Renewable Energy & Sustainable Leadership',
                topics: [
                    'Week 1: Introduction to Renewable Energy & Energy Transition – Global energy scenario and trends, Conventional vs renewable energy sources, Drivers of energy transition, Challenges and opportunities in renewable energy adoption',
                    'Week 2: Principles of Sustainable Leadership – Leadership competencies for sustainability, ESG frameworks and corporate governance, Role of leaders in energy transition, Decision-making for sustainable outcomes',
                    'Week 3: Overview of Renewable Energy Technologies – Solar energy systems and photovoltaic technologies, Wind energy: onshore and offshore, Hydro and biomass energy systems, Energy storage and hybrid systems',
                    'Week 4: Policy, Regulations, and Compliance in Renewable Energy – National and international policies, Incentives, subsidies, and renewable energy certificates, Regulatory frameworks and compliance requirements, Green building and sustainability certifications'
                ],
                outcome: 'Understand renewable energy fundamentals, sustainable leadership principles, and regulatory frameworks.'
            },
            {
                title: 'Module 2: Renewable Energy Strategy & Planning',
                topics: [
                    'Week 5: Strategic Energy Management & Planning – Corporate energy strategy formulation, Energy audit and baseline assessment, Integration of renewables in organizational strategy, Long-term energy planning',
                    'Week 6: Energy Economics and Financial Modeling – Cost-benefit analysis of renewable projects, Project financing models and risk assessment, ROI calculations for renewable energy investments, Budgeting and financial planning',
                    'Week 7: Project Development and Implementation – Feasibility studies and site assessment, Technology selection and design considerations, Project lifecycle management, Procurement and vendor management',
                    'Week 8: Risk Management and ESG Integration – Identifying technical, financial, and regulatory risks, ESG alignment in project planning, Sustainability impact assessment, Mitigation strategies and contingency planning'
                ],
                outcome: 'Develop strategic planning skills for renewable energy projects, including financial modeling and risk management.'
            },
            {
                title: 'Module 3: AI & Analytics in Renewable Energy',
                topics: [
                    'Week 9: Introduction to AI and Big Data for Energy – Role of AI in renewable energy, Machine learning applications in energy forecasting, Predictive analytics for energy optimization, Big data in energy management',
                    'Week 10: AI-Driven Energy Management and Optimization – Smart grids and microgrids, Demand forecasting and load management, Energy efficiency optimization, AI-enabled monitoring systems',
                    'Week 11: Data Visualization and ESG Reporting – KPI definition and monitoring, Dashboards and reporting tools, ESG performance tracking, Visualization for decision-making',
                    'Week 12: Case Studies in AI-Enabled Renewable Energy – Global success stories, Lessons learned from AI integration, Challenges in implementation, Group discussion and analysis'
                ],
                outcome: 'Apply AI and data analytics for energy management, optimization, and ESG reporting.'
            },
            {
                title: 'Module 4: Sustainable Innovation & Leadership',
                topics: [
                    'Week 13: Innovation in Renewable Energy Technologies – Emerging technologies and R&D trends, Innovation frameworks for energy solutions, Case studies of successful innovations, Identifying business opportunities',
                    'Week 14: Corporate Strategy for Sustainable Energy – Aligning renewable energy initiatives with business goals, Strategic roadmap for energy transition, Policy and regulatory considerations in strategy, Stakeholder engagement',
                    'Week 15: Change Management in Energy Transition – Driving adoption across teams, Overcoming resistance to change, Communication strategies for stakeholders, Organizational readiness assessment',
                    'Week 16: Leadership for ESG and Sustainability – Ethical leadership practices, Driving culture change, Corporate responsibility and accountability, Leading sustainable initiatives'
                ],
                outcome: 'Master sustainable innovation, corporate strategy alignment, and change management for energy transition.'
            },
            {
                title: 'Module 5: Advanced Applications & Integration',
                topics: [
                    'Week 17: Smart Energy Solutions and Green Infrastructure – Microgrids and decentralized energy systems, Green buildings and energy-efficient operations, IoT applications in energy management, Case studies of smart energy integration',
                    'Week 18: Renewable Energy Project Financing & Investment – Funding models and investment strategies, Green bonds and PPP projects, Risk-return analysis, Investor engagement and reporting',
                    'Week 19: Performance Metrics and KPIs – Measuring efficiency and sustainability outcomes, ESG metrics and reporting standards, Benchmarking and continuous improvement, Tools for performance monitoring',
                    'Week 20: Cross-Functional Collaboration and Strategy Execution – Coordinating operations, finance, and HR teams, Aligning organizational functions with energy strategy, Execution frameworks and project monitoring, Communication and stakeholder management'
                ],
                outcome: 'Integrate advanced applications, financing strategies, and cross-functional collaboration for renewable energy projects.'
            },
            {
                title: 'Module 6: Capstone Project & Integration',
                topics: [
                    'Week 21: Project Planning & Data Collection – Defining project objectives and KPIs, Data collection methodologies, Stakeholder mapping, Project scoping',
                    'Week 22: AI-Driven Analytics & Strategy Formulation – Data analysis using AI tools, Deriving insights and forecasting outcomes, Strategy formulation based on analytics, Integration with corporate objectives',
                    'Week 23: Recommendations & Report Preparation – Developing actionable recommendations, Drafting project report, Presentation preparation, Peer review',
                    'Week 24: Capstone Project Presentation & Evaluation – Presentation to faculty and peers, Feedback and evaluation, Lessons learned and knowledge integration, Certificate award and networking'
                ],
                outcome: 'Apply learning through capstone project and build professional network.'
            }
        ],
        launchSchedule: {
            admissionOpening: 'TBD',
            applicationClosure: 'TBD',
            selectedCandidates: 'TBD',
            lastDateFeeSubmission: 'TBD',
            programOrientation: 'TBD',
            classStart: 'TBD',
            campusVisit: 'At the beginning of course (3 days)',
            programCompletion: 'TBD'
        },
        feeStructure: {
            applicationFee: { label: 'Application Fee', amount: 'INR 2,000 + GST' },
            programFee: { label: 'Program Fee', amount: 'INR 1,50,000 + GST (Including Campus Immersion & accommodation charges)' },
            OverallFee: { label: 'Overall Program Fee', amount: 'INR 1,52,000 + GST'}
        },
        installments: [
            { installment: 'Registration', amount: 'INR 2,000 + GST' },
            { installment: '1st Installment', amount: 'INR 50,000 + GST (Includes Campus fee + Study Material)' },
            { installment: '2nd Installment', amount: 'INR 50,000 + GST' },
            { installment: '3rd Installment', amount: 'INR 50,000 + GST' }
        ],
        selectionCriteria: [
            'Marks in Class X',
            'Marks in Class XII',
            'Marks in Graduation',
            'Statement of Purpose with work experience documents'
        ],
        admissionCriteria: [
            'Corporate Nominations from Multiple Corporates',
            'Application + credentials'
        ],
        programDelivery: 'The program will have 80 contact hours [6 months] with 3 days campus visit towards the beginning of the course (67 hours online + 13 hours in-campus)',
        certification: {
            description: [
                'Certificate of Successful Completion from DTU New Delhi (Those who clear both Midterm and End Term and maintain minimum 70% attendance)',
                'Certificate of Participation from DTU New Delhi (Those who fail to clear either the mid term or the end term but maintain the minimum requisite of 70% attendance)',
                'Those who do not maintain minimum 70% attendance on the overall basis will receive no certification from the Institute'
            ],
            issuedBy: 'Delhi Technological University (DTU, New Delhi)'
        },
        evaluation: {
            description: 'Evaluation methodology is at the discretion of the faculty. The methodology includes online exams, case analysis, class contribution and any other component as decided by the respective course faculties.',
            attendance: 'A minimum of 70% attendance is a prerequisite for the successful completion of this program.',
            projects: 'The program may require participants to work on individual/group assignments and/or projects. The main objective of such assignments/projects will be to help the participants apply their conceptual learning in the program to actual organizational decision scenarios.',
            passingCriteria: 'Participants will have to secure the minimum pass marks in the respective evaluation components. Participants who successfully complete the same and satisfy the requisite attendance criteria, will be awarded a certificate of completion. Participants who are unable to clear the evaluation criteria but have the requisite attendance will be awarded a Participation certificate.'
        },
        pedagogy: 'This curriculum is structured to provide a comprehensive learning experience through a blend of lectures, case studies, group discussions, and practical exercises. It is designed to equip senior executives and decision-makers with a deep understanding of renewable energy systems, sustainable management, energy transition strategies, and AI-driven analytics in a leadership context. The program emphasizes practical application, enabling participants to develop actionable strategies for implementing renewable energy initiatives, managing ESG and sustainability requirements, and driving organizational innovation. In addition, it fosters peer learning and networking opportunities, allowing participants to share insights, exchange best practices, and build valuable professional connections across industries.',
        refundPolicy: [
            'Requests for refund of fees on account of cancellation of enrolment shall be considered only if such requests are received prior to closure of registration or 21 days before the commencement date of program, whichever is earlier.',
            'In the event of valid requests for refund of fees are received, the first installment paid (joining fee) money shall be refunded after deducting a penalty of INR 5,000/- (Administrative Charges).',
            'In all other cases, no refund shall be made.'
        ],
        importantPoints: [
            'Boarding and Lodging: Campus stay organized by DTU, New Delhi on a double occupancy basis',
            'The program will be delivered through Direct-to-Device format',
            'Program launch dates as well as installment dates are open to change as per requirement',
            'Corporate Nominations from Multiple Corporates are accepted',
            'The payment of the registration fee does not mean that you have earned the certification',
            'The Institute reserves every right to withhold the certification if the stipulated rules and regulations are not followed'
        ]
    },
];

export const calendarEvents = programmes.map(p => ({
    id: p.id,
    title: p.title,
    startDate: p.startDate,
    duration: p.duration,
    status: p.status || 'Registration Open',
    link: `/programme/${p.id}`
}));

// Empanelled Companies
export const empanelledCompanies = [
    {
        id: 'jaro',
        name: 'JARO Education',
        description: 'Leading ed-tech company providing executive education and upskilling programs.',
        logo: '/images/companies/jaro.png'
    },
    {
        id: 'timespro',
        name: 'TimesPro',
        description: 'A Times Group venture offering higher education and professional learning solutions.',
        logo: '/images/companies/timespro.png'
    },
    {
        id: 'vcnow',
        name: 'VCNow',
        description: 'Virtual classroom platform for immersive online learning experiences.',
        logo: '/images/companies/vcnow.png'
    }
];
