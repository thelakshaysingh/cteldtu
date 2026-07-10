export const programmes = [
    {
        id: 'advanced-certificate-program-in-artificial-intelligence',
        enroll: 'https://saarthi.dtu.ac.in/ctel/ctel_apai/sourceCode/',
        enquireLink: 'https://timespro.com/executive-education/dtu-advanced-certificate-program-in-artificial-intelligence?utm_source=Institute&utm_campaign=DTU_ACPAI_01_Institute_P-01880',
        title: 'Advanced Certificate Program in Artificial Intelligence',
        shortTitle: 'AI Programme',
        subtitle: 'Master AI fundamentals and advanced techniques',
        description: 'A comprehensive programme on machine learning, deep learning, and AI applications for industry professionals.',
        duration: '6 Months',
        batch: 'Batch 01',
        mode: 'Online + 1-day Campus',
        cost: 'INR 1,10,000 + GST',
        applicationFee: 'INR 2,000 + GST',
        provider: 'Times Edutech and Events Limited (TimesPro)',
        serviceProvider: 'Times Edutech and Events Limited (TimesPro)',
        category: 'certificate',
        image: '/images/program/1.png',
        certificate: '/images/certificates/ai.jpeg',
        status: 'Live',
        applicationDeadline: '30th May, 2026',
        directors: [
            { name: 'Prof. S Indu', designation: 'Dean – Digital Education, Delhi Technological University', image: "/images/faculty/indu.jpg" },
            { name: 'Prof. Neeraj Sharma', designation: 'Adjunct Professor, Delhi Technological University', image: "/images/faculty/neeraj.png" }

        ],
        faculty: [
            { name: 'Dr. Dhirendra Kumar ', designation: 'Department of Applied Mathematics, DTU', image: "/images/faculty/dhirendra.jpg" },
            { name: 'Dr. Kavinder Singh', designation: 'Department of Computer Science & Engineering, DTU', image: "/images/faculty/kavinder.jpeg" },
            { name: 'Dr. Trasha Gupta', designation: 'Department of Applied Mathematics, DTU', image: "/images/faculty/trasha.jpg" }
        ],
        highlights: [
            'Certificate from DTU, an Institute of Eminence',
            'Learn from DTU faculty and industry experts',
            'Hands-on projects with real-world datasets',
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
            'The Advanced Certificate Program in Artificial Intelligence is a comprehensive course that provides participants with a foundational understanding of artificial intelligence, AI tools, algorithms, and their industrial applications.',
            'The course will equip participants with the knowledge and practical skills necessary to proficiently apply machine learning techniques to tackle complex problems across diverse domains such as sales and marketing, medical diagnostics, to sports analytics.',
            'The course is thoughtfully crafted with a fine balance between theory and practice, with a special focus on learners from non-CS backgrounds.',
            'Contemporary industry case studies and practice sessions have been curated to provide hands-on experience of applying advanced machine learning techniques, that are used by leading tech and non-tech companies (e.g., Google, Amazon, Coca-Cola, Flipkart, think tanks, Civil and Mechanical Engineering firms, Power companies, Government agencies, etc.).'
        ],
        keyLearningOutcomes: [
            'Understand and apply machine learning tools, algorithms, and their industrial applications',
            'Build and deploy ML models for classification, regression, clustering & more',
            'Implement neural networks, CNNs, RNNs, LSTMs from scratch',
            'Work with advanced techniques like Generative AI, GANs, VAEs, and GNNs',
            'Apply AI solutions to real-world cases across healthcare, e-commerce,finance, manufacturing, and beyond',
            'Evaluate, optimise, and compare multiple ML approaches',
            'Design AI systems end-to-end using Python, TensorFlow, PyTorch & otherindustry libraries'
        ],
        modules: [
            {
                title: 'Module 1: AI Literacy & Industry Context',
                topics: [
                    'AI Foundations & Industry Reality: Introduction to Artificial Intelligence, Machine Learning, and Deep Learning (AI vs ML vs DL)',
                    'AI myths vs Reality',
                    'Real-world AI System',
                    'Common reasons for AI project failures; Ethical, regulatory, and operational considerations'
                ],
                outcome: 'Master AI foundations, understand industry reality, and ethics.'
            },
            {
                title: 'Module 2: Python & Data Thinking for AI',
                topics: [
                    'Python programming for Machine Learning: Python syntax and control flow; functions; Python as a data/ML tool',
                    'NumPy for vectorized computation: Arrays, vectorized computation, dot product, matrix operations; data as vectors and matrices',
                    'Pandas for dataset handling: Data Frames; indexing and filtering; missing values; feature selection; dataset preparation',
                    'Data Visualization: Scatter plots, histograms, loss curves, confusion matrices for model understanding',
                    'Guided Practice: End-to-end data loading, cleaning, visualization, and train–test split; building reusable ML data pipelines'
                ],
                outcome: 'Master Python, NumPy, Pandas, and data visualization for AI.'
            },
            {
                title: 'Module 3: Mathematical Foundations for AI/ML',
                topics: [
                    'Linear Algebra for ML: Vectors and Matrices, Vector Space and Subspace, System of Linear Equations, The Concept of Rank and Independent Vectors, Inner Product Space, Norms, Positive Definite Matrix, Matrix factorization (EVD, SVD, QR, LR, etc.), Projection and Orthogonality',
                    'Probability and Statistics for Data science: Random Variables, Distribution and Density Functions, Conditional Probability, Bayes Theorem, Joint Distribution, Concept of Independence Covariance, and Correlation, Introductory Statistical Inference (Likelihood, MAP, etc.), Concept of Entropy, Mutual Information, and KL Divergence',
                    'Optimization: Function and Derivatives, Gradient Descent, Stochastic Gradient Descents, Convex Optimization, Formulation and Optimality Conditions, ADAM Optimizer',
                    'Hands-on Demo 1: Linear Algebra using NumPy',
                    'Optimization with Practical ML Applications'
                ],
                outcome: 'Master linear algebra, probability, statistics, and optimization for ML.'
            },
            {
                title: 'Module 4: Regression Methods',
                topics: [
                    'Basics of Machine Learning Flow: Supervised vs unsupervised learning; regression vs classification; ML workflow',
                    'Simple and Multiple Linear regression',
                    'Hands-on Demo 2: SLR/MLR',
                    'Least squares approach',
                    'Moving beyond Linearity: Non-linear regression',
                    'Hands-on Demo 3: NLR',
                    'Model Selection, Regularization and Bias-Variance Trade-off'
                ],
                outcome: 'Apply regression methods for predictive modeling.'
            },
            {
                title: 'Module 5: Classification Methods',
                topics: [
                    'Motivation and Introduction to Classification Problems',
                    'Logistic Regression: Logistic Regression, Hands-on Demo 4: Logistic Regression',
                    'Decision Tree: Introduction to Decision Trees, Random Forests, Bagging, and Boosting, Hands-on Demo 5: Random Forests, Interpretability of Machine Learning Models',
                    'Hyperplanes: Concept of Hyperplane Classifier',
                    'SVM: Support Vector Machines, Kernel SVM, Hands-on Demo 6: SVM, Multi-Class Classifiers',
                    'Clustering: Clustering Methods: k-Means and hierarchical clustering, Hands-on Demo 7: Clustering',
                    'Evaluation & Error Analysis: Regression/classification metrics; ROC/PR curves; error analysis; business metric mapping'
                ],
                outcome: 'Master classification algorithms and their applications.'
            },
            {
                title: 'Module 6: Deep Learning',
                topics: [
                    'Neural Networks: Neurons, activations, feedforward networks, backpropagation intuition, Forward/backward pass; training intuition; linking math to learning, Vanishing/exploding gradients; dropout; batch normalization; early stopping; ANN-based classification; evaluation and interpretation; Overfitting, instability, debugging strategies, deployment readiness thinking, Hands-on Demo 8: ANN',
                    'Convolutional Neural Networks: Fundamentals of Convolution; filters; pooling; spatial feature learning, Convolutional Neural Network Architecture; CNN layer stacks; hierarchical features; parameter efficiency, Feature maps; Grad-CAM; trust and explainability, Hands-on Demo 9: CNN training, evaluation, and interpretability analysis',
                    'Recurrent Neural Networks/LSTM: Introduction to Time Series and Sequential Data; temporal dependency, Introduction to Language Modeling and NLP, Recurrent Neural Network, LSTM & GRU, NLP Applications: Text summarization; captioning; sequence-to-sequence intuition, Hands-on demo 10'
                ],
                outcome: 'Design and implement deep learning models including ANNs, CNNs, and RNNs.'
            },
            {
                title: 'Module 7: Advanced AI & Emerging Techniques',
                topics: [
                    'Generative AI: Autoencoders, VAEs, GANs; synthetic data; interpretation and risks',
                    'Graph Neural Networks: Graph data; message passing; applications in recommendation and networks'
                ],
                outcome: 'Master advanced AI techniques like Generative AI and Graph Neural Networks.'
            },
            {
                title: 'Module 8: Capstone Project (Self-Paced)',
                topics: [
                    'Industry AI Project: Independent project (e.g., recommender or decision-support system); problem framing, modeling, evaluation, interpretation'
                ],
                outcome: 'Apply AI skills to a real-world industry project from end-to-end.'
            }
        ],
        assignments: [
            'Sentiment Analysis using Logistic Regression',
            'Comparative performance: Decision Trees vs Random Forest vs XGBoost to identify and reduce customer attrition',
            'Image Classification with SVM (FashionMNIST)',
            'Build Neural Networks from scratch',
            'CNN interpretability using Grad-CAM',
            'Image & video captioning with LSTMs',
            'Variational Autoencoder on MNIST',
            'GAN development for synthetic image generation'
        ],
        capstoneProject: 'Build a recommender system using CNN, LSTM, GNN or hybrid AI pipelines',
        pedagogy: "It's a mix of classroom teaching, live examples, peer discussions, quizzes, assessments and context based case studies. Each lecture is accompanied by a hands-on demo session along with a student project. There will be doubt clearance and discussion sessions during and after the programme as well.",
        feeStructure: {
            applicationFee: { label: 'Application Fee', amount: 'INR 2,000 + GST' },
            programFee: { label: 'Program Fee', amount: 'INR 1,10,000 + GST' }
        },
        installments: [
            { installment: 'Application Fee', dueDate: 'At the time of Application', amount: 'INR 2,000 + GST' },
            { installment: '1st Installment', dueDate: 'Within one week of offer rollout', amount: 'INR 37,000 + GST' },
            { installment: '2nd Installment', dueDate: 'By 6th October, 2026', amount: 'INR 37,000 + GST' },
            { installment: '3rd Installment', dueDate: 'By 6th November, 2026', amount: 'INR 36,000 + GST' }
        ],
        programDelivery: 'Direct-to-Device (D2D) interactive live classes',
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
                'Issued by Delhi Technological University (DTU, New Delhi)',
                'Certificate of Completion: For learners scoring 75% or above',
                'Certificate of Participation: For learners scoring below 75% but with 75% attendance',
                'No certificate for learners with less than 75% attendance'
            ],
            issuedBy: 'Delhi Technological University (DTU, New Delhi)'
        },
        evaluation: {
            description: 'MCQ based evaluation (Mid term & End term exam)',
            attendance: 'Minimum 75% marks and 75% attendance required for certification',
            projects: 'The Programme includes hands-on demo sessions, student projects for each module, and a final course project.'
        },
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
        brochure: 'https://drive.google.com/file/d/1aOBRMYjKkREuH71-8F89jxfqwcHWM7QL/view?usp=sharing',
        enquireLink: 'https://learn.vcnow.in/l/dtu-leadership-programme-in-csr-esg-corporate-sustainability/?utm_source=Google&utm_campaign=DTU-CSR-ESG-CS-Search&utm_adgroup=CSR&utm_content=csr-program_ad01&utm_term=esg%20certification&utm_source=google&utm_medium=cpc&utm_campaign=DTU-CSR-ESG-CS-Search&hsa_acc=5757883842&hsa_cam=23502813720&hsa_grp=191999421069&hsa_ad=794773280364&hsa_src=g&hsa_tgt=kwd-386303726332&hsa_kw=esg%20certification&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gad_campaignid=23502813720&gbraid=0AAAAADO5Pap8C7qPOS5PQMqI3bRQPMxIH&gclid=Cj0KCQjw1ZjOBhCmARIsADDuFTCm0EUHohtslAliwXNd_Kt88HSsnJq6D3WNwI_As_J9PuiNJqFGmPwaAhfcEALw_wcB',
        contactText: 'For further details, please contact the Program Manager, <strong>Ms. Shivani Sharma</strong>, at <strong>shivani.sharma@vcnowvcr.com</strong> or call him at <strong>9219078715</strong>.',
        title: 'Leadership Program in CSR, ESG & Corporate Sustainability',
        shortTitle: 'CSR & ESG',
        subtitle: 'Strategic leadership for sustainable business transformation',
        description: 'Build ESG-compliant business models, learn from industry leaders, and drive sustainable business transformation.',
        duration: '6 Months',
        batch: 'Batch 01',
        mode: 'Online + 3-day Campus',
        cost: 'INR 1,60,000 + GST',
        applicationFee: 'INR 2,000 + GST',
        provider: 'Unified Collaboration Services LLP (VCNow)',
        serviceProvider: 'Unified Collaboration Services LLP (VCNow)',
        category: 'certificate',
        image: '/images/program/3.png',
        certificate: '/images/certificates/csr.jpeg',
        status: 'Live',
        applicationDeadline: '05th July, 2026',
        directors: [
            { name: 'Prof. Amit Mookerjee', designation: 'USME, Delhi Technological University', image: "/images/faculty/amit.jpg" },
            { name: 'Prof. Neeraj Sharma', designation: 'Adjunct Professor, Delhi Technological University', image: "/images/faculty/neeraj.png" }
        ],
        programfaculty: [
            'Dr. Amandeep Kaur, Faculty member USME , DTU',
            'Dr. Anurag Chaturvedi, Faculty member USME , DTU',
            'Dr. Agyeya Tripathi, Deputy Director – Consulting, Agents for Impact; Auditor, Social Audit Network India and UK; ESG and sustainability advisor with experience in India, Europe, Africa and Asia',
            'Ms. Nisha Dhingra, Company Secretary ONGC Videsh Ltd (OVL) and Director and Co. Secy, ONGC Videsh Rovula (OVRL)',
            'Prof. Dr. Rajiv Arora, Adjunct Professor USME DTU; Retd Additional Secy, Ministry of Commerce',
            'Dr. Ritika Chopra, Faculty member USME , DTU', 'Mr. Sameet Gambhir, Co-Chair Corporate Affairs committee of PHDCCI, Member of National Committee on Regulatory Affairs of CII, Sr. Vice President and Group Head Legal, Uflex',
            'Mr. Shivam Sharma,CS, CA', 'Prof. Surinder S Sur,Adjunct Professor USME DTU',
            'Dr. Varsha Sahgal, Faculty Member USME DTU',
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
            timing: 'Sunday, 10:00 AM - 01:00 PM IST (Once a week for 3 hours)'
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
                    'Evolution of CSR & ESG | Triple Bottom Line & Stakeholder Capitalism',
                    'Corporate Responsibility in the SDG Era | Ethics, Governance & Accountability',
                    "Leadership's Role in Building Sustainable Enterprises | Responsible Decision-Making",
                    'CSR & ESG Trends in Emerging Economies | Business Case for Sustainability'
                ],
                outcome: 'Understand the foundations of CSR and ESG frameworks, and develop responsible business leadership skills.'
            },
            {
                title: 'Module 2: Legal, Regulatory & Global ESG Frameworks',
                topics: [
                    "Companies Act (Section 135), CSR Rules & SEBI's BRSR Requirements",
                    'Global ESG Disclosure Frameworks: GRI, SASB, TCFD, CDP, UNGC, TNFD',
                    'Voluntary Sustainability Standards: ISO 26000, Fairtrade, FSC | ESG Litigation Risk',
                    'Governance Best Practices | Corporate Accountability & Reporting Mandates'
                ],
                outcome: 'Master legal and regulatory frameworks for CSR and ESG compliance at national and global levels.'
            },
            {
                title: 'Module 3: Strategic CSR Design, Stakeholder Engagement & Social Impact',
                topics: [
                    'Community Need Assessment | Impact Gap Analysis & Theory of Change',
                    'Stakeholder Mapping, Engagement & CSR-PPP Frameworks',
                    'Designing High-Impact CSR Programs (Urban & Rural Focus) | Partnering with NGOs',
                    'Social ROI, Impact Assessment, & Outcome Tracking'
                ],
                outcome: 'Design high-impact CSR programs with effective stakeholder engagement and social impact measurement.'
            },
            {
                title: 'Module 4: ESG Metrics, Reporting & Digital Innovation',
                topics: [
                    'ESG KPIs, Materiality Mapping & Dashboard Design',
                    'Integrated Sustainability Reporting (GRI, SASB, TCFD, BRSR)',
                    'ESG Ratings, Greenwashing Prevention & Benchmarking (MSCI, Sustainalytics)',
                    'Technology in ESG: Blockchain, AI, and IoT for Compliance & Traceability'
                ],
                outcome: 'Master ESG metrics, reporting frameworks, and leverage digital innovation for compliance.'
            },
            {
                title: 'Module 5: Climate Change, Resource Management & Sustainable Finance',
                topics: [
                    'Net Zero, Carbon Neutrality & Science-Based Targets (SBTi)',
                    'Resource Efficiency, Circular Economy & Decarbonization Strategies',
                    'Renewable Energy Projects, Nature-Positive Business Models & TNFD',
                    'Green Bonds, Climate Finance, ESG Risk in Financial Reporting & Sustainable Investing'
                ],
                outcome: 'Understand climate change strategies, resource management, and sustainable finance mechanisms.'
            },
            {
                title: 'Module 6: Global ESG Leadership, Collaboration & Capstone',
                topics: [
                    'Cross-sector Collaboration: PPPs, UNDP, World Bank, IFC Models',
                    'ESG-Aligned Supply Chains | Global Benchmarking | Case Studies (Infosys, Tesla, Mahindra)',
                    'Innovation in Sustainability: Smart ESG Systems, Bioplastics, CleanTech',
                    'Strategic ESG Communication, Storytelling for Impact & Capstone Project Preparation & 3-Day Campus Immersion (Networking with Industry Leaders, Practitioners, and DTU Faculty)'

                ],
                outcome: 'Apply learning through executive strategy lab and network with industry professionals.'
            }
        ],
        pedagogy: "The classes for this Program will be delivered through LIVE lectures using Direct to Device (D2D) Technology facilitated by VCNow. The pedagogy comprises of case studies, interactive sessions, quizzes, mid-term and end-term examinations, class participation, project work and group-based presentations, in-class exercises imparted by DTU's faculty to help participants gain knowledge, understanding and hands-on skills to immediately apply their learning in the workplace. Additionally, participants opting for a Certificate of Completion will be assigned project work and presentations that will be evaluated by the faculty in addition to providing individual feedback.",
        launchSchedule: {
            applicationClosure: '05th July 2026',
            academicOrientation: '19th July 2026',
            classStart: '26th July 2026',
        },
        feeStructure: {
            applicationFee: { label: 'Application Fee', amount: 'INR 2,000 + GST' },
            programFee: { label: 'Program Fee', amount: 'INR 1,60,000 + GST' }
        },
        installments: [
            { installment: '1st Installment', dueDate: 'Within 7-10 days of offer letter acceptance', amount: 'INR 55,000 + GST' },
            { installment: '2nd Installment', dueDate: 'On or before 10th September 2026', amount: 'INR 55,000 + GST' },
            { installment: '3rd Installment', dueDate: 'On or before 10th November 2026', amount: 'INR 50,000 + GST' }
        ],
        certification: {
            description: [
                'Participants who successfully complete the programme and satisfy the requisite attendance criteria, will be awarded a certficate of completion. Participants who are unable to clear the evaluation criteria but have the requisite attendance will be awarded a Participation certficate. Digital Education Alumni Status & Networking Access will also be granted to eligible participants.'
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
        brochure: 'https://drive.google.com/file/d/1guClmh5sz3OJhPldpb1AA7ccIMpr3tP8/view?usp=sharing',
        enquireLink: 'https://learn.vcnow.in/l/dtu-advanced-programme-renewable-sustainable-energy-management/?utm_source=Google&utm_campaign=DTU-Renewable-Sustainable-Search&utm_adgroup=Energy&utm_content=energy-course_ad01&utm_term=renewable%20energy%20management&utm_source=google&utm_medium=cpc&utm_campaign=DTU-Renewable-Sustainable-Search&hsa_acc=5757883842&hsa_cam=23533594450&hsa_grp=189665752261&hsa_ad=795949771373&hsa_src=g&hsa_tgt=kwd-296293607696&hsa_kw=renewable%20energy%20management&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gad_campaignid=23533594450&gbraid=0AAAAADO5PapwreXRZVntDtAH1iv1Qb2P2&gclid=Cj0KCQjw1ZjOBhCmARIsADDuFTAYqpiDtDFLc8V3xfo94c_IBiyziyfqxvuYJm9Q1Cx5gq29Ytfwa4saAuc3EALw_wcB',
        contactText: 'For further details, please contact the Program Manager, <strong>Ms. Shivani Sharma</strong>, at <strong>shivani.sharma@vcnowvcr.com</strong> or call him at <strong>9219078715</strong>.',
        title: 'Advanced Programme in Renewable & Sustainable Energy Management',
        shortTitle: 'Renewable Energy',
        subtitle: 'Strategic energy management and sustainable leadership for the future',
        description: 'Learn renewable energy technologies, sustainable energy management, and policy frameworks for a greener future.',
        duration: '6 Months',
        batch: 'Batch 01',
        mode: 'Online + 3-day Campus',
        cost: 'INR 1,60,000 + GST',
        applicationFee: 'INR 2,000 + GST',
        provider: 'Unified Collaboration Services LLP (VCNow)',
        serviceProvider: 'Unified Collaboration Services LLP (VCNow)',
        category: 'certificate',
        image: '/images/program/2.png',
        certificate: '/images/certificates/aprse.jpeg',
        status: 'Live',
        applicationDeadline: '30th June, 2026',
        directors: [
            { name: 'Prof. M. Rizwan', designation: 'Department of Electrical Engineering, DTU', image: '/images/faculty/rizwan.jpg' },
            { name: 'Prof. Neeraj Sharma', designation: 'Adjunct Professor, Delhi Technological University', image: '/images/faculty/neeraj.png' }
        ],
        programfaculty: [
            'Prof. Bhim Singh, IIT Delhi (IITD); Power Electronics, Power Quality, Renewable Energy Systems',
            'Prof. Sukumar Mishra, Director IIT Dhanbad (ISM); Power System Engineering, Intelligent Techniques for Control of Power Systems, Power Quality Studies, Renewable Energy',
            'Prof. Santanu Kumar Mishra, IIT Delhi; EV Charging Infrastructure, Renewable Energy, Power Converter Design',
            'Prof. M. Rihan, Director General NISE; Solar Energy Systems, Renewable Energy Policy & Deployment',
            'Dr. Rajesh Katyal, Director General NIWE, Chennai; Wind Energy, Energy Assessment, Renewable Resource Evaluation, Sustainable Development',
            'Dr. S. K. Tyagi, IIT Delhi (IITD); Heat Transfer, Thermodynamic Studies of Solar & Thermal Energy Systems, Energy Conservation, Energy & Exergy Analysis',
            'Prof. S. N. Singh, IIT Kanpur / Director IIT Gwalior; Power Systems, Smart Grid, Power System Stability, AI Applications in Power Systems, Power Quality, Wind & Solar Forecasting',
            'Prof. S. C. Srivastava, IIT Kanpur (IITK); Power System Operation, Smart Grid Technologies',
            'Prof. Madhusudan Singh, Director IIT Bhagalpur; Power Electronics & Motor Drives, Renewable Energy Integration, Control Systems, Power Quality',
            'Prof. M. Rizwan, DTU Delhi; Power Engineering, Renewable Energy Systems, Building Energy Management, Smart Grid, AI Applications in Power Engineering',
            'Dr. Gopal Sarangi, TERI SAS Delhi; Energy Policy, Sustainability, Power & Energy Governance'
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
            campusImmersion: '3 days during the early stages of the programme',
            timing: 'Once in a week (Sunday, 09:30 AM - 12:30 PM IST)'
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
            applicationClosure: '30th June 2026',
            academicOrientation: '12th July 2026',
            classStart: '19th July 2026',
        },
        feeStructure: {
            applicationFee: { label: 'Application Fee', amount: 'INR 2,000 + GST' },
            programFee: { label: 'Program Fee', amount: 'INR 1,60,000 + GST' }
        },
        installments: [
            { installment: '1st Installment', dueDate: 'Within 7-10 days of offer letter acceptance', amount: 'INR 55,000 + GST' },
            { installment: '2nd Installment', dueDate: 'On or before 10th September 2026', amount: 'INR 55,000 + GST' },
            { installment: '3rd Installment', dueDate: 'On or before 10th November 2026', amount: 'INR 50,000 + GST' }
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
