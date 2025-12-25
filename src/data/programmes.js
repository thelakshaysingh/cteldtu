export const programmes = [
    {
        id: 'ai',
        title: 'Advanced Program in Artificial Intelligence',
        shortTitle: 'AI Programme',
        subtitle: 'Master AI fundamentals and advanced techniques',
        description: 'A comprehensive programme on machine learning, deep learning, and AI applications for industry professionals.',
        duration: '6 Months',
        batch: 'Batch 01',
        startDate: new Date('2026-03-28'),
        applicationDeadline: '15th March 2026',
        mode: 'Online + 3-day Campus',
        cost: 'INR 1,50,000 + GST',
        applicationFee: 'INR 2,000 + GST',
        provider: 'TimesPro',
        serviceProvider: 'DTU Centre for Executive Programmes',
        category: 'certificate',
        image: '/images/program/1.png',
        directors: [
            { name: 'Prof. S Indu', designation: 'Dean Digital Education, Delhi Technological University' },
            { name: 'Prof. Neeraj Sharma', designation: 'Adjunct Professor, Delhi Technological University' }
        ],
        faculty: [
            { name: 'Dr. Kavinder Singh', designation: 'Department of Computer Science & Engineering, DTU'},
            { name: 'Dr. Trasha Gupta', designation: 'Department of Applied Mathematics, DTU' }
        ],
        highlights: [
            'Certificate from DTU, an Institute of Eminence',
            'Learn from DTU faculty and industry experts',
            'Hands-on projects with real-world datasets',
            'Campus immersion at DTU Delhi',
            'Network with AI professionals and peers',
            'Comprehensive learning resources and support'
        ],
        schedule: {
            totalHours: 120,
            liveHours: 60,
            assignmentHours: 40,
            capstoneHours: 20,
            campusImmersion: '3-day Campus Immersion at DTU Delhi',
            masterclasses: '10 hours of Industry Masterclasses',
            timing: 'Saturday & Sunday, 10:00 AM - 1:00 PM IST'
        },
        eligibility: "Bachelor's degree in Engineering, Computer Science, Mathematics, Statistics, or related quantitative fields. Basic knowledge of programming (Python preferred) and fundamental mathematics is required.",
        objectives: [
            'The Certificate Program in Artificial Intelligence is a comprehensive course that provides participants with a foundational understanding of artificial intelligence, AI tools, algorithms, and their industrial applications.',
            'The course will equip participants with the knowledge and practical skills necessary to proficiently apply machine learning techniques to tackle complex problems across diverse domains such as sales and marketing, medical diagnostics, to sports analytics.',
            'The course is thoughtfully crafted with a fine balance between theory and practice, with a special focus on learners from non-CS backgrounds.',
            'Contemporary industry case studies and practice sessions have been curated to provide hands-on experience of applying advanced machine learning techniques, that are used by leading tech and non-tech companies (e.g., Google, Amazon, Coca-Cola, Flipkart, think tanks, Civil and Mechanical Engineering firms, Power companies, Government agencies, etc.).'
        ],
        modules: [
            { title: '1. Introduction to Artificial Intelligence', topics: ['History and evolution of AI', 'Types of AI: Narrow, General, and Super AI', 'AI applications across industries'] },
            { title: '2. Python for AI', topics: ['Python basics and data structures', 'NumPy and Pandas', 'Data visualization with Matplotlib'] },
            { title: '3. Machine Learning Fundamentals', topics: ['Supervised vs Unsupervised Learning', 'Regression and Classification', 'Model evaluation and validation'] },
            { title: '4. Deep Learning', topics: ['Neural network architectures', 'CNNs and RNNs', 'Transfer learning'] },
            { title: '5. Natural Language Processing', topics: ['Text preprocessing', 'Sentiment analysis', 'Language models'] },
            { title: '6. AI in Practice', topics: ['Industry case studies', 'Capstone project', 'Future of AI'] }
        ],
        feeStructure: {
            applicationFee: { label: 'Application Fee', amount: 'INR 2,000 + GST' },
            programFee: { label: 'Program Fee', amount: 'INR 1,50,000 + GST' },
            totalFee: { label: 'Total Program Fee', amount: 'INR 1,50,000 + GST' }
        },
        installments: [
            { installment: '1st Installment', dueDate: 'Within 7-10 days of offer letter', amount: '₹ 50,000 + GST' },
            { installment: '2nd Installment', dueDate: '30 days after 1st', amount: '₹ 50,000 + GST' },
            { installment: '3rd Installment', dueDate: '30 days after 2nd', amount: '₹ 50,000 + GST' }
        ],
        certification: {
            description: [
                'Certificate of Completion will be awarded to participants who successfully complete the program and satisfy the requisite attendance criteria.',
                'Certificate of Participation will be awarded to participants who are unable to clear the evaluation criteria but have the requisite attendance.',
                'No separate Transcript or Marksheet will be provided by DTU to participants.'
            ],
            issuedBy: 'Delhi Technological University',
            bonus: 'Executive Alumni Status & Networking Access will also be granted to eligible participants.'
        },
        evaluation: {
            description: 'Evaluation methodology includes online exams, case analysis, class contribution and any other component as decided by the respective course faculties.',
            attendance: 'A minimum of 75% attendance is a prerequisite for the successful completion of this programme.',
            projects: 'The Programme may require participants to work on individual/group assignments and/or projects. The main objective of such assignments/projects will be to help the participants apply their conceptual learning in the Program to actual organizational decision scenarios.'
        },
        pedagogy: 'The classes for this Program will be delivered through LIVE lectures using Direct to Device (D2D) Technology. The pedagogy comprises of case studies, interactive sessions, quizzes, mid-term and end-term examinations, class participation, project work and group-based presentations, in-class exercises imparted by DTU faculty to help participants gain knowledge, understanding and hands-on skills to immediately apply their learning in the workplace.',
        refundPolicy: [
            'Initial amount (except the application fee) is refundable only in case the Institute rejects the application.',
            'No refund will be given to participants once the Program starts.'
        ],
        importantPoints: [
            'Boarding and Lodging during campus visits: AC accommodation will be provided on twin sharing basis in or around DTU Campus.',
            'The payment of the registration fee does not mean that you have earned the degree/certification.',
            'The Institute reserves every right to withhold the degree/certification if the stipulated rules and regulations are not followed.',
            'DTU does not provide placement assistance to Executive Education Candidates.',
            'DTU will provide "DTU Executive Education" alumni status to all participants successfully completing the programme.'
        ],
        tools: ['Python', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'Jupyter', 'Scikit-learn', 'OpenCV']
    },
    {
        id: 'csr-esg',
        title: 'Leadership Program in CSR, ESG & Corporate Sustainability',
        shortTitle: 'CSR & ESG',
        subtitle: 'Strategic leadership for sustainable business transformation',
        description: 'Build ESG-compliant business models, learn from industry leaders, and drive sustainable business transformation.',
        duration: '6 Months',
        batch: 'Batch 01',
        startDate: new Date('2026-05-10'),
        applicationDeadline: '18th April 2026',
        mode: 'Online + 3-day Campus',
        cost: 'INR 1,50,000 + GST',
        applicationFee: 'INR 2,000 + GST',
        provider: 'VCNow',
        serviceProvider: 'UCS LLP (VCNow)',
        category: 'certificate',
        image: '/images/program/3.png',
        directors: [
            { name: 'Prof. Amit Mookerjee', designation: 'Delhi Technological University' },
            { name: 'Prof. Neeraj Sharma', designation: 'Delhi Technological University' }
        ],
        faculty: [
            { name: 'Dr. Kavinder Singh', designation: 'Department of Computer Science & Engineering, DTU'},
            { name: 'Dr. Trasha Gupta', designation: 'Department of Applied Mathematics, DTU' }
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
            campusImmersion: '3-day Campus Immersion at DTU Delhi',
            timing: 'Sunday, 9:00 AM - 12:10 PM IST'
        },
        eligibility: "For Indian Participants: Graduates (10+2+3) or Diploma Holders from a recognized university (UGC/AICTE/DEC/AIU/State Government) in any discipline. For International Participants: Graduation or equivalent degree from any recognized University or Institution in their respective country.",
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
                title: 'Module 3: ESG Strategy, Implementation & Execution',
                topics: [
                    'Designing Corporate ESG Strategy | Stakeholder Mapping & Materiality Assessment',
                    'Environmental: Climate Risk, Carbon Footprint & Net-Zero Pathways',
                    'Social: Diversity, Supply Chain Ethics, Community Impact & Human Rights',
                    'Governance: Board Oversight, Executive Accountability & Anti-Corruption'
                ],
                outcome: 'Design and implement comprehensive ESG strategies for organizations.'
            },
            {
                title: 'Module 4: ESG Performance Measurement, Reporting & Communication',
                topics: [
                    'ESG Metrics, Data Collection & Performance Dashboards',
                    'Preparing Integrated Reports: GRI, SASB, BRSR Frameworks',
                    'ESG Ratings, Benchmarks & Investor Relations',
                    'Communicating ESG to Internal & External Stakeholders'
                ],
                outcome: 'Master ESG performance measurement, reporting frameworks, and stakeholder communication.'
            },
            {
                title: 'Module 5: Sustainable Finance, Green Investments & Emerging Trends',
                topics: [
                    'Green Bonds, ESG Funds & Sustainable Investment Strategies',
                    'Climate Finance, Carbon Markets & Carbon Credits',
                    'Tech-Enabled ESG: AI, Blockchain & Big Data in Sustainability',
                    'Future Trends: Biodiversity, Circular Economy & Climate Adaptation'
                ],
                outcome: 'Understand sustainable finance mechanisms and emerging ESG trends.'
            },
            {
                title: 'Module 6: Capstone Project & Campus Immersion',
                topics: [
                    '3-day Campus Immersion at DTU Delhi',
                    'Industry Expert Sessions & Case Study Presentations',
                    'Capstone Project: Develop ESG Strategy for Your Organization',
                    'Networking with CSR/ESG Professionals & Alumni'
                ],
                outcome: 'Apply learning through a capstone project and network with industry professionals.'
            }
        ],
        launchSchedule: {
            salesStart: '5th January 2026',
            applicationClosure: '18th April 2026',
            selectedCandidatesList: '22nd April 2026',
            technicalOrientation: '26th April 2026',
            academicOrientation: '3rd May 2026',
            classStart: '10th May 2026',
            campusModule: 'TBD (Early stages)'
        },
        feeStructure: {
            applicationFee: { label: 'Application Fee', amount: 'INR 2,000 + GST' },
            programFee: { label: 'Program Fee', amount: 'INR 1,35,500 + GST' },
            studyMaterial: { label: 'Study Material Fee', amount: 'INR 10,000 + GST' },
            campusVisit: { label: 'Campus Visit Fee', amount: 'INR 15,000 + GST' },
            totalFee: { label: 'Total Fee (excluding app fee)', amount: 'INR 1,50,000 + GST' }
        },
        installments: [
            { installment: '1st Installment', dueDate: 'Within 7-10 days of offer letter', amount: '₹ 50,000 + GST' },
            { installment: '2nd Installment', dueDate: '10th June 2026', amount: '₹ 50,000 + GST' },
            { installment: '3rd Installment', dueDate: '10th July 2026', amount: '₹ 50,000 + GST (Incl. Campus Fees)' }
        ],
        certification: {
            description: [
                'Certificate of Completion will be awarded to participants who successfully complete the program and satisfy the requisite attendance criteria.',
                'Certificate of Participation will be awarded to participants who are unable to clear the evaluation criteria but have the requisite attendance.',
                'No separate Transcript or Marksheet will be provided by DTU to participants.'
            ],
            issuedBy: 'Delhi Technological University',
            bonus: 'Executive Alumni Status & Networking Access will also be granted to eligible participants.'
        },
        evaluation: {
            description: 'Evaluation methodology includes online exams, case analysis, class contribution and any other component as decided by the respective course faculties.',
            attendance: 'A minimum of 75% attendance is a prerequisite for the successful completion of this programme.',
            projects: 'The Programme may require participants to work on individual/group assignments and/or projects. The main objective of such assignments/projects will be to help the participants apply their conceptual learning in the Program to actual organizational decision scenarios.'
        },
        pedagogy: 'The classes for this Program will be delivered through LIVE lectures using Direct to Device (D2D) Technology. The pedagogy comprises of case studies, interactive sessions, quizzes, mid-term and end-term examinations, class participation, project work and group-based presentations, in-class exercises imparted by DTU faculty to help participants gain knowledge, understanding and hands-on skills to immediately apply their learning in the workplace.',
        refundPolicy: [
            'Initial amount (except the application fee) is refundable only in case the Institute rejects the application.',
            'No refund will be given to participants once the Program starts.'
        ],
        importantPoints: [
            'Boarding and Lodging during campus visits: AC accommodation will be provided on twin sharing basis in or around DTU Campus.',
            'The payment of the registration fee does not mean that you have earned the degree/certification.',
            'The Institute reserves every right to withhold the degree/certification if the stipulated rules and regulations are not followed.',
            'DTU does not provide placement assistance to Executive Education Candidates.',
            'DTU will provide "DTU Executive Education" alumni status to all participants successfully completing the programme.'
        ]
    },
    {
        id: 'renewable-energy',
        title: 'Senior Management Program in Renewable Energy Strategy and Sustainable Leadership',
        shortTitle: 'Renewable Energy',
        subtitle: 'Strategic energy management and sustainable leadership for the future',
        description: 'Learn renewable energy technologies, sustainable energy management, and policy frameworks for a greener future.',
        duration: '6 Months',
        batch: 'Batch 01',
        startDate: new Date('2026-01-10'),
        applicationDeadline: 'TBD',
        mode: 'Online + 3-day Campus',
        cost: 'INR 1,50,000 + GST',
        applicationFee: 'INR 2,000 + GST',
        provider: 'DTU',
        serviceProvider: 'DTU Centre for Executive Programmes',
        category: 'certificate',
        image: '/images/program/2.png',
        status: 'Coming Soon',
        directors: [
            { name: 'Prof. M. Rizwan', designation: 'Delhi Technological University' }
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
            campusImmersion: '3-day Campus Visit at the beginning of the course',
            timing: 'Sunday, 9:00 AM - 12:00 PM IST'
        },
        eligibility: "For Indian Participants: Graduates (10+2+3) or Diploma Holders from a recognized university (UGC/AICTE/DEC/AIU/State Government) in any discipline. For International Participants: Graduation or equivalent degree from any recognized University or Institution in their respective country.",
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
                    'Week 1: Introduction to Renewable Energy & Energy Transition',
                    'Week 2: Principles of Sustainable Leadership',
                    'Week 3: Overview of Renewable Energy Technologies',
                    'Week 4: Policy, Regulations, and Compliance in Renewable Energy'
                ],
                outcome: 'Understand renewable energy fundamentals, sustainable leadership, and regulatory frameworks.'
            },
            {
                title: 'Module 2: Renewable Energy Strategy & Planning',
                topics: [
                    'Strategic Planning for Renewable Energy Projects',
                    'Resource Assessment and Site Selection',
                    'Financial Modeling and Investment Analysis',
                    'Risk Assessment and Mitigation Strategies'
                ],
                outcome: 'Develop strategic planning skills for renewable energy projects.'
            },
            {
                title: 'Module 3: Renewable Energy Technologies Deep Dive',
                topics: [
                    'Solar Energy Systems: PV and Thermal Technologies',
                    'Wind Energy: Onshore and Offshore Systems',
                    'Hydroelectric and Ocean Energy',
                    'Emerging Technologies: Hydrogen, Biomass, and Geothermal'
                ],
                outcome: 'Gain deep expertise in various renewable energy technologies.'
            },
            {
                title: 'Module 4: AI & Data Analytics in Energy Management',
                topics: [
                    'AI Applications in Energy Optimization',
                    'Predictive Maintenance and Performance Monitoring',
                    'Smart Grids and Energy Storage Solutions',
                    'Data-Driven Decision Making for Sustainability'
                ],
                outcome: 'Apply AI and data analytics for energy management and optimization.'
            },
            {
                title: 'Module 5: ESG, Sustainability Reporting & Compliance',
                topics: [
                    'ESG Standards and Sustainability Frameworks',
                    'Carbon Footprint Measurement and Reduction',
                    'Climate Risk Assessment and Disclosure',
                    'Stakeholder Engagement and Communication'
                ],
                outcome: 'Master ESG compliance, sustainability reporting, and stakeholder engagement.'
            },
            {
                title: 'Module 6: Capstone Project & Campus Immersion',
                topics: [
                    '3-day Campus Visit at DTU Delhi',
                    'Industry Expert Sessions and Site Visits',
                    'Capstone Project: Develop Renewable Energy Strategy',
                    'Networking with Energy Professionals and Alumni'
                ],
                outcome: 'Apply learning through capstone project and build professional network.'
            }
        ],
        launchSchedule: {
            admissionOpening: 'TBD',
            applicationClosure: 'TBD',
            selectedCandidates: 'TBD',
            programOrientation: 'TBD',
            classStart: 'TBD',
            campusVisit: 'At the beginning of course (3 days)',
            programCompletion: 'TBD'
        },
        feeStructure: {
            applicationFee: { label: 'Application Fee', amount: 'INR 2,000 + GST' },
            programFee: { label: 'Program Fee', amount: 'INR 1,50,000 + GST' },
            includes: 'Campus visit charges + Study material',
            totalFee: { label: 'Total Program Fee', amount: 'INR 1,50,000 + GST' }
        },
        installments: [
            { installment: '1st Installment', amount: '₹ 50,000 + GST (Includes Campus fee + Study Material)' },
            { installment: '2nd Installment', amount: '₹ 50,000 + GST' },
            { installment: '3rd Installment', amount: '₹ 50,000 + GST' }
        ],
        batchSize: {
            minimum: 30,
            maximum: 100
        },
        selectionCriteria: [
            'Marks in Class X',
            'Marks in Class XII',
            'Marks in Graduation',
            'Statement of Purpose with work experience documents'
        ],
        certification: {
            description: [
                'Certificate of Successful Completion from DTU New Delhi (Those who clear both Midterm and End Term and maintain minimum 70% attendance)',
                'Certificate of Participation from DTU New Delhi (Those who fail to clear either the mid term or the end term but maintain minimum 70% attendance)',
                'Those who do not maintain minimum 70% attendance will receive no certification from the Institute'
            ],
            issuedBy: 'Delhi Technological University'
        },
        evaluation: {
            description: 'Evaluation methodology is at the discretion of the faculty. The methodology includes online exams, case analysis, class contribution and any other component as decided by the respective course faculties.',
            attendance: 'A minimum of 70% attendance is a prerequisite for the successful completion of this program.',
            projects: 'The program may require participants to work on individual/group assignments and/or projects. The main objective of such assignments/projects will be to help the participants apply their conceptual learning in the program to actual organizational decision scenarios.'
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
    }
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
