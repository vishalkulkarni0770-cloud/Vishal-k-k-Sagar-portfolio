export interface Course {
  code: string;
  title: string;
  credits: number;
  isCompleteOrActive: boolean;
  status: 'In Progress' | 'Completed' | 'Coming Soon';
  description?: string;
  skillsLearned?: string[];
  keyArtefacts?: string[];
  reflection?: string;
}

export interface Semester {
  semesterNumber: number;
  title: string;
  period: string;
  isCurrent: boolean;
  courses: Course[];
}

export interface Assignment {
  number: string;
  title: string;
  courseCode: string;
  status: 'Submitted' | 'In Progress' | 'Coming Soon';
  description: string;
  learningNote: string;
  documentUrl?: string;
  documentName?: string;
}

export interface Artefact {
  id: string;
  title: string;
  category: 'Framework' | 'Presentation' | 'Report' | 'Model' | 'Case Study';
  description: string;
  format: string;
  previewImage?: string;
  linkUrl?: string;
}

export interface ClassroomActivity {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  role: string;
  learning: string;
  dateTag: string;
}

export interface ModuleLearning {
  moduleNumber: number;
  moduleName: string;
  points: {
    concept: string;
    explanation: string;
    example: string;
    leadershipConnection: string;
  }[];
}

export interface PowerWord {
  id: string;
  wordOrSentence: string;
  context: string;
  personalSentence: string;
  strategicValue: string;
}

export interface RecommendedVideo {
  id: string;
  title: string;
  speaker: string;
  event: string;
  duration: string;
  url: string;
  imageUrl: string;
  oneLineTakeaway: string;
  extendedReflection: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  body: string[];
  keyTakeaways: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Classroom' | 'Campus' | 'Teamwork' | 'Artefacts';
  caption: string;
  context: string;
  date: string;
  imageUrl: string;
}

/* =========================================================================
   CORE PORTFOLIO DATA (VISHAL K K SAGAR - SB5111 Assignment 3)
   ========================================================================= */

export const personalProfile = {
  fullName: 'VISHAL K K SAGAR',
  programme: 'Master of Business Administration (MBA)',
  batch: 'Batch of 2026–2028',
  currentSemester: 'Semester 1',
  courseCode: 'SB5111',
  courseName: 'Business Communication',
  email: 'vishalkulkarni876@gmail.com',
  collegeEmailPlaceholder: 'vishalkksagar@mba.edu.in',
  linkedInUrl: 'https://www.linkedin.com/in/vishalkksagar',
  avatarImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  heroPortrait: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80',
  campusImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80',
  
  // The Umbrella Message: exactly 13 words (rule: 15 words or fewer)
  umbrellaMessage: 'Bridging strategic vision and audience-centred communication to lead impactful, high-trust business transformations.',

  // The Three Supporting Pillars for the Message House
  pillars: [
    {
      title: 'Strategic Analytical Rigor',
      subtitle: 'Data-driven decision making and structured business synthesis',
      description: 'Applying quantitative analysis, economic models, and disciplined strategic frameworks to dissect complex managerial ambiguity.',
    },
    {
      title: 'Audience-Centred Communication',
      subtitle: 'Barrett’s 5 questions, executive presence, and stakeholder alignment',
      description: 'Mastering rhetoric (Ethos, Pathos, Logos) and empathetic stakeholder mapping to convey complex corporate strategies with decisive clarity.',
    },
    {
      title: 'Ethical & Adaptive Leadership',
      subtitle: 'High-integrity execution with modern AI-era communicative competence',
      description: 'Combining human gravitas, constructive conflict navigation, and generative AI augmentation while safeguarding authentic leadership ethos.',
    },
  ],

  // About Me Profile: Exactly 185 words (complies with 150-250 words rule)
  aboutMeText: `I am a Semester 1 MBA student committed to combining analytical rigor with audience-centred communication to drive meaningful business impact. Prior to commencing my MBA, I completed my Bachelor’s degree with a focus on structured problem-solving and quantitative inquiry, complemented by practical exposure to project coordination, stakeholder engagement, and team-based operational initiatives.

Throughout my academic and professional journey, I have cultivated core competencies in strategic thinking, financial interpretation, market analysis, and interpersonal negotiation. I am deeply interested in corporate strategy, digital product transformation, and the evolving role of generative AI in executive decision-making. Outside the classroom, I enjoy participating in structured debates, analyzing leadership case studies—such as Steve Jobs’ communicative ethos—and mentoring peers in analytical communication.

My long-term career goal is to join a progressive strategy or management consulting practice, where I can help enterprises navigate complex operational shifts while building high-trust, collaborative organizational cultures. I believe true leadership requires not only clarity of intellect but also the humility to listen, adapt, and communicate with purpose.`,

  prepVideoIntro: {
    title: 'Executive PREP Introduction (60 Seconds)',
    format: 'PREP (Point · Reason · Example · Point)',
    point1: 'I am VISHAL K K SAGAR, an MBA candidate focused on driving strategy through audience-centred leadership communication.',
    reason: 'Modern business complexity demands leaders who can distill multifaceted operational data into credible, high-trust stakeholder action.',
    example: 'In our SB5111 Steve Jobs analysis and classroom debate simulations, I led cross-functional teams to resolve conflicting priorities by anchoring every argument in Barrett’s five audience questions.',
    point2: 'As I progress through my MBA journey, my goal is to equip organizations with strategic clarity, ethical gravitas, and decisive communicative execution.',
  },
};

export const semestersData: Semester[] = [
  {
    semesterNumber: 1,
    title: 'Semester 1: Foundations of Management & Communication',
    period: 'Autumn Term 2026',
    isCurrent: true,
    courses: [
      {
        code: 'SB5111',
        title: 'Business Communication',
        credits: 3,
        isCompleteOrActive: true,
        status: 'In Progress',
        description: 'Core leadership competency course covering audience-centred messaging, rhetoric, conflict communication, and digital presence.',
        skillsLearned: ['Barrett’s 5 Questions', 'Executive Presence', 'The 7 Cs', 'Conflict De-escalation', 'PREP Framework'],
        keyArtefacts: ['Assignment 1: Baseline Introduction', 'Assignment 2: Steve Jobs Case Study', 'Assignment 3: MBA Portfolio Website'],
        reflection: 'This course redefined my understanding of communication from a soft skill to an indispensable executive capability. Learning to map stakeholders before drafting a single word has fundamentally altered my approach to team leadership.',
      },
      {
        code: 'AC5101',
        title: 'Financial Accounting & Reporting Analysis',
        credits: 3,
        isCompleteOrActive: true,
        status: 'In Progress',
        description: 'Principles of financial reporting, balance sheet mechanics, cash flow analysis, and corporate statement evaluation.',
        skillsLearned: ['Ratio Analysis', 'GAAP Principles', 'Working Capital Assessment', 'Earnings Quality Auditing'],
        keyArtefacts: ['Corporate Financial Health Assessment', 'Quarterly Earnings Tear Sheet'],
        reflection: 'Developing fluency in the language of numbers is essential for any future strategist. Numbers provide the concrete foundation upon which strategic narratives are built.',
      },
      {
        code: 'EC5102',
        title: 'Managerial Economics & Market Dynamics',
        credits: 3,
        isCompleteOrActive: true,
        status: 'In Progress',
        description: 'Microeconomic decision theory, pricing mechanisms, game theory, and market structure dynamics.',
        skillsLearned: ['Elasticity Modelling', 'Nash Equilibrium', 'Monopoly vs Oligopoly Pricing', 'Marginal Cost Optimization'],
        keyArtefacts: ['Platform Pricing Dynamics Model', 'Industry Market Concentration Report'],
        reflection: 'Economics teaches you to see invisible incentives and counter-intuitive market reactions before deploying capital.',
      },
      {
        code: 'MK5103',
        title: 'Marketing Management & Customer Value',
        credits: 3,
        isCompleteOrActive: true,
        status: 'In Progress',
        description: 'Customer segmentation, positioning strategies, product lifecycle management, and omni-channel distribution.',
        skillsLearned: ['STP Framework', 'Customer Lifetime Value (CLV)', 'Brand Equity Architecture', 'Go-To-Market Planning'],
        keyArtefacts: ['D2C Brand Launch Playbook', 'Customer Persona & Journey Blueprint'],
        reflection: 'Marketing is fundamentally applied empathy: discovering what the customer actually values rather than what the firm prefers to sell.',
      },
      {
        code: 'OB5104',
        title: 'Organisational Behaviour & Leadership Dynamics',
        credits: 3,
        isCompleteOrActive: true,
        status: 'In Progress',
        description: 'Individual cognition, team psychological safety, organisational culture, power dynamics, and change management.',
        skillsLearned: ['Kotter’s 8-Step Change Model', 'Psychological Safety Diagnostic', 'Intrinsic Motivation Design', 'Negotiation Archetypes'],
        keyArtefacts: ['Cross-Cultural Team Dynamic Audit', 'Change Leadership Case Memo'],
        reflection: 'Aligning humans with diverse motivations is the hardest and most rewarding element of organizational leadership.',
      },
      {
        code: 'QM5105',
        title: 'Quantitative Methods & Business Statistics',
        credits: 3,
        isCompleteOrActive: true,
        status: 'In Progress',
        description: 'Probability distributions, hypothesis testing, linear regression, and data-informed decision trees.',
        skillsLearned: ['Hypothesis Testing', 'Multiple Regression Analysis', 'Monte Carlo Simulation', 'Variance Analysis'],
        keyArtefacts: ['Predictive Sales Regression Model', 'Risk Variance Simulation Workbook'],
        reflection: 'Statistical literacy prevents premature conclusions and equips managers to question claims with healthy analytical scepticism.',
      },
      {
        code: 'OM5106',
        title: 'Operations Management & Process Design',
        credits: 3,
        isCompleteOrActive: true,
        status: 'In Progress',
        description: 'Process mapping, bottleneck analysis, Lean Six Sigma methodologies, and inventory optimization models.',
        skillsLearned: ['Theory of Constraints', 'Little’s Law', 'EOQ Inventory Modelling', 'Value Stream Mapping'],
        keyArtefacts: ['Hospital Bottleneck Diagnostic Case', 'Lean Flow Simulation Report'],
        reflection: 'Operational excellence turns brilliant strategic ideas into consistent, scalable customer reality.',
      },
    ],
  },
  {
    semesterNumber: 2,
    title: 'Semester 2: Corporate Integration & Applied Strategy',
    period: 'Spring Term 2027',
    isCurrent: false,
    courses: [
      { code: 'FN5201', title: 'Corporate Finance & Valuation', credits: 3, isCompleteOrActive: false, status: 'Coming Soon' },
      { code: 'ST5202', title: 'Strategic Management & Competitive Advantage', credits: 3, isCompleteOrActive: false, status: 'Coming Soon' },
      { code: 'HR5203', title: 'Strategic Human Resource Management', credits: 3, isCompleteOrActive: false, status: 'Coming Soon' },
      { code: 'BA5204', title: 'Business Analytics & Predictive Machine Learning', credits: 3, isCompleteOrActive: false, status: 'Coming Soon' },
      { code: 'SC5205', title: 'Global Supply Chain & Logistics Strategy', credits: 3, isCompleteOrActive: false, status: 'Coming Soon' },
      { code: 'EL5206', title: 'Management Elective I (Consulting Practice)', credits: 3, isCompleteOrActive: false, status: 'Coming Soon' },
    ],
  },
  {
    semesterNumber: 3,
    title: 'Semester 3: Specialisation & Summer Internship Project',
    period: 'Autumn Term 2027',
    isCurrent: false,
    courses: [
      { code: 'IP5301', title: 'Summer Internship Capstone Project & Viva', credits: 6, isCompleteOrActive: false, status: 'Coming Soon' },
      { code: 'EL5302', title: 'Advanced Corporate Strategy & Mergers & Acquisitions', credits: 3, isCompleteOrActive: false, status: 'Coming Soon' },
      { code: 'EL5303', title: 'Digital Business Transformation & Platform Economics', credits: 3, isCompleteOrActive: false, status: 'Coming Soon' },
      { code: 'EL5304', title: 'Advanced Marketing Analytics & Brand Valuation', credits: 3, isCompleteOrActive: false, status: 'Coming Soon' },
      { code: 'EL5305', title: 'Leadership Communications in Crisis Situations', credits: 3, isCompleteOrActive: false, status: 'Coming Soon' },
    ],
  },
  {
    semesterNumber: 4,
    title: 'Semester 4: Global Leadership, Capstone & Ethics',
    period: 'Spring Term 2028',
    isCurrent: false,
    courses: [
      { code: 'IB5401', title: 'International Business & Global Geopolitics', credits: 3, isCompleteOrActive: false, status: 'Coming Soon' },
      { code: 'CG5402', title: 'Corporate Governance, Ethics & Public Policy', credits: 3, isCompleteOrActive: false, status: 'Coming Soon' },
      { code: 'CP5403', title: 'Executive Master Capstone Dissertation', credits: 6, isCompleteOrActive: false, status: 'Coming Soon' },
      { code: 'EL5404', title: 'Boardroom Simulations & Executive Negotiations', credits: 3, isCompleteOrActive: false, status: 'Coming Soon' },
    ],
  },
];

export const courseOverviewSB5111 = {
  courseCode: 'SB5111',
  title: 'Business Communication',
  term: 'Semester 1 MBA',
  credits: 3,
  evaluationWeight: '30% of Total Coursework',
  officialObjectives: [
    'Establish executive presence, personal ethos, and professional gravitas in collegiate and corporate environments (Hewlett, Aristotle).',
    'Execute audience-centred stakeholder analysis using Barrett’s five questions to craft tailored, persuasive business messages.',
    'Master the 7 Cs of business communication (Clear, Concise, Concrete, Correct, Coherent, Complete, Courteous) across digital, oral, and written media.',
    'Navigate difficult conversations, conflict resolution, and feedback loops through interest-based negotiation and emotional intelligence.',
    'Harness AI-era communication tools strategically while preserving human authenticity, critical inquiry, and ethical boundaries.',
  ],
  modules: [
    {
      number: 1,
      name: 'Communication as a Leadership Competency',
      focus: 'Ethos, credibility, executive presence, Hewlett’s gravitas, Conger’s persuasion architecture.',
      deliverables: 'Self-assessment baseline, PREP video intro, Message House construction.',
    },
    {
      number: 2,
      name: 'Audience-Centred Communication and Stakeholder Mapping',
      focus: 'Barrett’s 5 audience questions, stakeholder quadrant matrix, tailoring information density to executive vs technical audiences.',
      deliverables: 'Stakeholder mapping memos, executive summary rewrites.',
    },
    {
      number: 3,
      name: 'Persuasion and Influence',
      focus: 'Aristotle’s rhetoric (Ethos, Pathos, Logos), Cialdini’s principles of persuasion, narrative framing, Steve Jobs case study.',
      deliverables: 'Rhetorical case analysis, persuasive pitch deck presentation.',
    },
    {
      number: 4,
      name: 'Difficult Conversations and Conflict Communication',
      focus: 'Crucial conversations, non-violent communication, the Ladder of Inference, de-escalating team resistance.',
      deliverables: 'Roleplay debate transcript, reflective feedback journal.',
    },
    {
      number: 5,
      name: 'Communication in the AI Era',
      focus: 'Prompt engineering for executive drafts, critical fact-checking, avoiding homogenised prose, preserving distinctive leadership voice.',
      deliverables: 'Assignment 3 personal portfolio website, AI-assisted communications audit.',
    },
  ],
};

export const assignmentsSB5111: Assignment[] = [
  {
    number: 'Assignment 1',
    title: 'Executive Baseline & PREP Introduction',
    courseCode: 'SB5111',
    status: 'Submitted',
    description: 'A structured evaluation of personal communication strengths, nervous habit identification, and a 60-second video introduction using the PREP format (Point, Reason, Example, Point).',
    learningNote: 'Learned that intentional pauses project far more executive authority than frantic verbal fillers when answering unscripted prompts.',
    documentUrl: '#',
    documentName: 'VishalKKSagar_Assignment1_Baseline.pdf',
  },
  {
    number: 'Assignment 2',
    title: 'Leadership Communication Analysis: The Steve Jobs Case Study',
    courseCode: 'SB5111',
    status: 'Submitted',
    description: 'A detailed rhetorical breakdown of Steve Jobs’ 2005 Stanford Commencement Address and the 2007 iPhone product launch, mapping the balance of Ethos, Pathos, and Logos against Barrett’s audience framework.',
    learningNote: 'Understood that Steve Jobs succeeded not by displaying technological complexity, but by translating technical feats into human emotional outcomes through effortless narrative contrast.',
    documentUrl: '#',
    documentName: 'VishalKKSagar_Assignment2_SteveJobsCase.pdf',
  },
  {
    number: 'Assignment 3',
    title: 'Build Your Own Website: My MBA Portfolio and Communication Journey',
    courseCode: 'SB5111',
    status: 'Submitted',
    description: 'Designing, architecting, and launching a comprehensive digital portfolio embodying the 7 Cs, Message House, Barrett’s 5 questions, and transparent experiential learning reflections across all 4 MBA semesters.',
    learningNote: 'Discovered that website architecture is the ultimate test of business communication: without you in the room to explain yourself, every font, card, and sentence must stand on its own merits.',
    documentUrl: '/assets/aistudio/Assignment3_Build_Your_Own_Website.docx_2897e707.pdf',
    documentName: 'Assignment3_Build_Your_Own_Website.pdf',
  },
];

export const artefactsData: Artefact[] = [
  {
    id: 'art-1',
    title: 'The Message House Architecture Blueprint',
    category: 'Framework',
    description: 'An executive template aligning a 15-word umbrella message with three distinct operational pillars for boardroom presentations.',
    format: 'Executive PDF & Slide Matrix',
    linkUrl: '#',
  },
  {
    id: 'art-2',
    title: 'Barrett’s Five Questions Stakeholder Diagnostic Grid',
    category: 'Framework',
    description: 'An analytical quadrant matrix evaluating stakeholder knowledge, emotional resistance, and required post-meeting action.',
    format: 'Spreadsheet Model & Executive Summary',
    linkUrl: '#',
  },
  {
    id: 'art-3',
    title: 'Steve Jobs 2005 Stanford Address: Rhetorical Triangle Map',
    category: 'Case Study',
    description: 'A visual diagram charting the deliberate oscillation between vulnerability (Pathos) and philosophical conviction (Ethos).',
    format: 'Analytical Report & Infographic',
    linkUrl: '#',
  },
  {
    id: 'art-4',
    title: 'The 7 Cs Self-Audit Matrix for Corporate Memos',
    category: 'Model',
    description: 'A scoring protocol to audit business emails and memos for conciseness, concrete data points, and courteous tone.',
    format: 'Interactive Diagnostic Sheet',
    linkUrl: '#',
  },
];

export const classroomActivitiesData: ClassroomActivity[] = [
  {
    id: 'act-1',
    name: 'Just a Minute (JAM)',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    description: 'A fast-paced impromptu speaking challenge requiring 60 seconds of uninterrupted discourse without hesitation, deviation, or repetition.',
    role: 'Speaker on "The Paradox of Choice in Digital Consumer Platforms"',
    learning: 'Learned the power of silence: pausing for two seconds to structure a thought is received as executive gravitas, whereas "um" and "uh" instantly erode credibility.',
    dateTag: 'Week 2 · Classroom Experiential',
  },
  {
    id: 'act-2',
    name: 'Executive Group Discussion',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    description: 'A simulated corporate committee discussion resolving capital reallocation during an unforeseen macro-economic supply disruption.',
    role: 'Moderator & Discussion Synthesiser',
    learning: 'The most influential person in a discussion is rarely the loudest speaker; it is the participant who listens actively and bridges divergent viewpoints into actionable consensus.',
    dateTag: 'Week 4 · Peer Simulation',
  },
  {
    id: 'act-3',
    name: 'Parliamentary Debate',
    imageUrl: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=800&q=80',
    description: 'Structured motion debate: "Resolved: Generative AI tools will diminish original critical thinking in business analysis."',
    role: 'Second Speaker for the Opposition Bench',
    learning: 'Discovered how to concede non-essential points graciously while tenaciously defending the core premise using empirical industry evidence.',
    dateTag: 'Week 6 · Rhetoric Lab',
  },
  {
    id: 'act-4',
    name: 'Crisis Press Conference',
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    description: 'A simulated high-stakes media interrogation following a hypothetical consumer data security breach.',
    role: 'Chief Communications Officer / Company Spokesperson',
    learning: 'Trust is lost in seconds if a spokesperson attempts to dodge direct questions. Sincere empathy, concrete remedial steps, and transparent accountability are non-negotiable.',
    dateTag: 'Week 7 · Live Simulation',
  },
  {
    id: 'act-5',
    name: '60-Second Investor Pitch',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    description: 'Pitching an innovative cold-chain agritech venture proposal to simulated venture capital partners using PREP structure.',
    role: 'Co-Founder & Lead Pitcher',
    learning: 'If you cannot communicate your value proposition in a single sentence, you do not understand your business model well enough.',
    dateTag: 'Week 8 · Venture Lab',
  },
  {
    id: 'act-6',
    name: 'Table Topics (Extempore Speaking)',
    imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80',
    description: 'Randomized prompts drawn from a hat, challenging students to formulate a coherent three-part point of view within ten seconds.',
    role: 'Participant responding to "Leadership is an Action, Not a Title"',
    learning: 'Anchoring spontaneous thoughts in a familiar three-act structure (Past Context, Present Dilemma, Future Prescription) prevents wandering.',
    dateTag: 'Week 9 · Impromptu Clinic',
  },
  {
    id: 'act-7',
    name: 'Power Word Relay',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    description: 'A rapid vocabulary drill replacing passive corporate cliches with precise, action-oriented leadership verbs in real time.',
    role: 'Team Captain (Group Theta)',
    learning: 'Language shapes thought. Replacing "we need to talk about" with "let us align on" immediately changes the emotional stakes of the room.',
    dateTag: 'Week 10 · Vocabulary Clinic',
  },
];

export const keyLearningsData: ModuleLearning[] = [
  {
    moduleNumber: 1,
    moduleName: 'Communication as a Leadership Competency',
    points: [
      {
        concept: 'Executive Presence is Learned, Not Inherent',
        explanation: 'Sylvia Ann Hewlett’s research illustrates that executive presence comprises gravitas (how you act), communication (how you speak), and appearance (how you present). Gravitas is the single largest component (67%).',
        example: 'During our first mock presentations, I noticed that slowing my cadence by 15% and holding eye contact with a single listener per idea instantly eliminated nervous fidgeting.',
        leadershipConnection: 'Credibility (Ethos) is built before you open your mouth through posture, preparation, and deliberate stillness under questioning.',
      },
      {
        concept: 'Conger’s Four Steps of Persuasion',
        explanation: 'Persuasion is not selling or browbeating; it is establishing credibility, framing common ground, providing vivid evidence, and connecting emotionally.',
        example: 'When advocating for our team’s project direction, framing the proposal around shared grading criteria rather than personal preference unified our group instantly.',
        leadershipConnection: 'Effective leaders do not impose their will; they articulate a reality that others recognize as mutually advantageous.',
      },
      {
        concept: 'The Message House Discipline',
        explanation: 'Any executive briefing must fit within an umbrella message of 15 words or fewer, substantiated by exactly three distinct pillars.',
        example: 'Condensing our complex organizational behaviour term paper into a single 13-word thesis forced us to prune 40% of superfluous arguments.',
        leadershipConnection: 'If a leader cannot state their core direction in 15 words, the organization cannot execute it consistently.',
      },
    ],
  },
  {
    moduleNumber: 2,
    moduleName: 'Audience-Centred Communication & Stakeholder Mapping',
    points: [
      {
        concept: 'Barrett’s Five Audience Questions',
        explanation: 'Before typing a sentence, ask: (1) Who are they? (2) What do they already know? (3) What do they need? (4) How will they react? (5) What should they do next?',
        example: 'When drafting emails to faculty regarding assignment clarifications, explicitly stating "What I need" in the second sentence reduced back-and-forth threads to one exchange.',
        leadershipConnection: 'Audience-centredness is the operational definition of leadership empathy.',
      },
      {
        concept: 'Stakeholder Influence vs Interest Matrix',
        explanation: 'High-power, high-interest stakeholders require close management; high-power, low-interest need satisfaction; low-power, high-interest need transparent communication.',
        example: 'Mapping our MBA group members based on their subject strengths helped us assign deliverables without unnecessary friction.',
        leadershipConnection: 'Treating all stakeholders identically is an inefficient misallocation of leadership attention.',
      },
      {
        concept: 'The 7 Cs of Business Communication',
        explanation: 'Clear, Concise, Concrete, Correct, Coherent, Complete, and Courteous communication ensures zero ambiguity in high-velocity teams.',
        example: 'Rewriting a 300-word team status memo into an 85-word bulleted brief improved task turnaround time by 50% across our project cohort.',
        leadershipConnection: 'Respect for another person’s cognitive bandwidth is the highest form of professional courtesy.',
      },
    ],
  },
  {
    moduleNumber: 3,
    moduleName: 'Persuasion and Influence',
    points: [
      {
        concept: 'Aristotle’s Rhetorical Triangle (Ethos, Pathos, Logos)',
        explanation: 'Persuasion requires an unshakeable balance between the character of the speaker (Ethos), emotional resonance with the listener (Pathos), and logical proof (Logos).',
        example: 'In the Steve Jobs Stanford speech analysis, Jobs established Pathos through his adoption story before introducing the Logos of his life philosophy.',
        leadershipConnection: 'Data without narrative leaves listeners cold; narrative without data leaves them sceptical.',
      },
      {
        concept: 'Cialdini’s Principle of Social Proof and Scarcity',
        explanation: 'Decision makers are deeply influenced by peer adoption and the fear of missing decisive windows of opportunity.',
        example: 'Highlighting that three top-tier consulting firms had adopted a specific organizational framework made our case study proposal far more compelling to our peer evaluators.',
        leadershipConnection: 'Legitimising proposals with recognized external precedents lowers stakeholder risk perception.',
      },
      {
        concept: 'The PREP Framework for Spontaneous Speaking',
        explanation: 'Structuring extempore remarks into Point, Reason, Example, and Point prevents rambling and guarantees a punchy closing takeaway.',
        example: 'Using PREP during classroom cold-calls gave me immediate composure, allowing me to deliver cogent 45-second insights without stammering.',
        leadershipConnection: 'The PREP habit ensures that even spontaneous executive comments sound intentional and well-considered.',
      },
    ],
  },
  {
    moduleNumber: 4,
    moduleName: 'Difficult Conversations and Conflict Communication',
    points: [
      {
        concept: 'Separating the Problem from the Person',
        explanation: 'Fisher & Ury’s Getting to Yes principle: hard on the problem, soft on the people. Address structural misalignments without attacking personal intent.',
        example: 'When a teammate missed an assignment milestone, focusing the conversation on the bottlenecked file submission rather than their commitment led to an immediate collaborative fix.',
        leadershipConnection: 'Psychological safety is built when colleagues know criticism is directed at work outputs, not personal worth.',
      },
      {
        concept: 'The Ladder of Inference (Chris Argyris)',
        explanation: 'Humans observe data, select data, add meaning, make assumptions, draw conclusions, and adopt beliefs. Conflict happens when people argue at the top of the ladder.',
        example: 'In our debate simulation, grounding disagreements back down to the baseline observable data eliminated 80% of emotional tension.',
        leadershipConnection: 'Wise leaders ask, "What observable data led you to that conclusion?" instead of counter-arguing opinions.',
      },
      {
        concept: 'The Power of the Non-Defensive Inquiry',
        explanation: 'When confronted with critical feedback, responding with curiosity ("Help me understand what you saw") disarms aggression and surfaces actionable truths.',
        example: 'Receiving peer critique on my pacing during JAM, I asked for specific timestamps where I rushed, which yielded practical breathing targets.',
        leadershipConnection: 'A leader who cannot absorb candid feedback without defensiveness creates an environment of polite deception.',
      },
    ],
  },
  {
    moduleNumber: 5,
    moduleName: 'Communication in the AI Era',
    points: [
      {
        concept: 'Human Gravitas in the Age of Automated Text',
        explanation: 'As generative AI commoditises standard business writing, true executive differentiation shifts toward authentic human voice, contextual discernment, and moral courage.',
        example: 'Using AI to draft an initial project outline was helpful, but injecting personal classroom stories and moral reflections is what made the assignment resonate.',
        leadershipConnection: 'AI can generate plausible text, but it cannot take ethical responsibility for the decisions that text recommends.',
      },
      {
        concept: 'The Critical Editor Mindset (Zero AI Slop)',
        explanation: 'AI models default to generic buzzwords, symmetrical lists, and hollow metaphors. Executives must ruthlessly prune AI-generated drafts for brevity and truth.',
        example: 'Auditing an AI-assisted marketing summary revealed three invented market share percentages, reinforcing the non-negotiable rule of human verification.',
        leadershipConnection: 'Ethical leadership requires vetting every factual claim before affixing your signature to it.',
      },
      {
        concept: 'Prompting as Audience Specification',
        explanation: 'Crafting effective prompts is identical to applying Barrett’s audience questions: defining the persona, knowledge baseline, tone constraints, and desired output action.',
        example: 'Framing prompts with explicit executive role constraints yielded 300% more insightful strategic summaries than generic prompts.',
        leadershipConnection: 'Prompt engineering is fundamentally an advanced application of audience-centred communication principles.',
      },
    ],
  },
];

export const powerWordsData: PowerWord[] = [
  {
    id: 'pw-1',
    wordOrSentence: '“Let us align on the core objective before delving into the operational details.”',
    context: 'Meeting Alignment & Agenda Setting',
    personalSentence: 'Whenever our study group begins debating conflicting slide layouts, I intervene: “Let us align on the core objective before delving into the operational details.”',
    strategicValue: 'Prevents bikeshedding (arguing over trivia) and anchors executive focus on strategic intent.',
  },
  {
    id: 'pw-2',
    wordOrSentence: 'Synthesise (Verb)',
    context: 'Data Distillation & Consensus Building',
    personalSentence: 'Rather than cataloguing twenty disparate peer comments, my responsibility as team lead was to synthesise the underlying thematic consensus for faculty review.',
    strategicValue: 'Elevates a discussion from passive note-taking to high-level strategic integration.',
  },
  {
    id: 'pw-3',
    wordOrSentence: 'Audience-Centric Framing',
    context: 'Presentation Design & Stakeholder Strategy',
    personalSentence: 'We discarded our technical architecture slide in favour of an audience-centric framing that answered the CFO’s primary query regarding capital efficiency.',
    strategicValue: 'Refocuses communication from what the speaker wants to say to what the listener needs to decide.',
  },
  {
    id: 'pw-4',
    wordOrSentence: 'Constructive Dissent',
    context: 'Team Decision-Making & Psychological Safety',
    personalSentence: 'To prevent groupthink before finalising our strategy recommendation, I explicitly invited constructive dissent on our core market size assumptions.',
    strategicValue: 'Legitimises disagreement as a valuable risk mitigation tool rather than an interpersonal challenge.',
  },
  {
    id: 'pw-5',
    wordOrSentence: 'Executive Gravitas',
    context: 'Demeanour, Pacing & Authentic Authority',
    personalSentence: 'Maintaining calm eye contact and embracing a two-second pause under intense professor questioning demonstrated genuine executive gravitas.',
    strategicValue: 'Signals self-control, intellectual poise, and confidence without resorting to arrogance or bluster.',
  },
];

export const recommendedVideosData: RecommendedVideo[] = [
  {
    id: 'vid-1',
    title: 'How Great Leaders Inspire Action',
    speaker: 'Simon Sinek',
    event: 'TEDxPugetSound',
    duration: '18 min',
    url: 'https://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action',
    imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    oneLineTakeaway: 'People do not buy what you do; they buy why you do it—inspiring leadership communicates from the inside out.',
    extendedReflection: 'Sinek’s Golden Circle (Why, How, What) aligns directly with Aristotle’s Ethos and Pathos. Leaders who lead with purpose create biological loyalty in the limbic brain before appealing to the neocortex with rational features.',
  },
  {
    id: 'vid-2',
    title: 'How to Build (and Rebuild) Trust',
    speaker: 'Frances Frei',
    event: 'TED2018',
    duration: '15 min',
    url: 'https://www.ted.com/talks/frances_frei_how_to_build_and_rebuild_trust',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    oneLineTakeaway: 'Trust is built upon three pillars—authenticity, rigorous logic, and genuine empathy—and crumbles if any one of the three wavers.',
    extendedReflection: 'Frei’s insight on the "empathy wobble" is profound for MBA students: when you are distracted by your own phone or ego in a meeting, listeners immediately sense you do not care about them, causing trust to collapse.',
  },
  {
    id: 'vid-3',
    title: 'How to Speak So That People Want to Listen',
    speaker: 'Julian Treasure',
    event: 'TEDGlobal',
    duration: '10 min',
    url: 'https://www.ted.com/talks/julian_treasure_how_to_speak_so_that_people_want_to_listen',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    oneLineTakeaway: 'Authentic speech rests on HAIL—Honesty, Authenticity, Integrity, and Love—supported by mastering vocal register, timbre, and purposeful silence.',
    extendedReflection: 'Treasure taught me that the voice is an instrument. Understanding that lower vocal registers project calm confidence while rushing higher frequencies communicates panic has permanently influenced my boardroom presentation style.',
  },
  {
    id: 'vid-4',
    title: 'The Best Stats You’ve Ever Seen',
    speaker: 'Hans Rosling',
    event: 'TED2006',
    duration: '20 min',
    url: 'https://www.ted.com/talks/hans_rosling_the_best_stats_you_ve_ever_seen',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    oneLineTakeaway: 'Data is not an inert spreadsheet; animated with passion, context, and clear human stakes, statistics illuminate world progress.',
    extendedReflection: 'Rosling proved that quantitative rigor (Logos) does not have to be dull. By turning bubbles and charts into an animated story of human survival, he transformed cold data into an urgent, unforgettable moral narrative.',
  },
  {
    id: 'vid-5',
    title: 'Stanford Commencement Address (2005)',
    speaker: 'Steve Jobs',
    event: 'Stanford University',
    duration: '15 min',
    url: 'https://www.youtube.com/watch?v=UF8uR6Z6KLc',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    oneLineTakeaway: 'You cannot connect the dots looking forward; you can only connect them looking backwards, so you must trust your inner compass.',
    extendedReflection: 'As analysed in our Assignment 2, Jobs demonstrated the pinnacle of audience-centred humility. Rather than bragging about commercial triumphs, he offered three deeply personal stories of failure, love, and mortality.',
  },
];

export const blogPostsData: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'my-first-jam-the-three-second-pause',
    title: 'My First JAM: Learning the Power of the Three-Second Pause',
    date: '24 October 2026',
    readTime: '4 min read',
    category: 'Classroom Reflection',
    excerpt: 'Standing before forty MBA peers with a ticking stopwatch taught me that the hardest thing in public speaking is not knowing what to say, but having the courage to pause.',
    body: [
      'The premise was deceptively simple: walk to the front of the amphitheatre, pick an unvetted topic from a bowl, and speak for precisely sixty seconds without hesitation, repetition, or grammatical deviation. In corporate corridors, this is called extempore communication; in SB5111, it is known as Just a Minute (JAM).',
      'My topic was "The Paradox of Choice in Digital Consumer Platforms". As the timer started, my immediate instinct was to flood the room with words. I wanted to prevent any silence from creeping into the space between my sentences. Within twenty-five seconds, I was breathless, my arguments were meandering, and I had used the word "fundamentally" three times in a single sentence.',
      'That was the moment our Business Communication professor caught my eye and signalled a downward palm. I stopped. I took a deep, audible breath. For three full seconds—which felt like an eternity—the classroom was silent.',
      'And then something remarkable happened: the room leaned in. The silence did not signal confusion; it signalled control. By collecting my thoughts and opening my next sentence with a deliberate, low cadence, I regained authority over my own ideas.',
      'In management, we often confuse velocity with substance. We blurt out half-baked thoughts in meetings because we are terrified that silence will be interpreted as ignorance. But true executive gravitas is comfortable with the pause. The pause gives your listener time to absorb what you have said, and gives your mind time to choose the exact right word.',
    ],
    keyTakeaways: [
      'Filler words ("um", "like", "you know") are emergency brakes pulled by an anxious brain; replacing them with a silent pause projects composure.',
      'Listeners do not remember the volume of words spoken; they remember the clarity of the central conclusion.',
      'Executive pacing is slower than conversational pacing because complex business concepts require cognitive breathing room.',
    ],
  },
  {
    slug: 'what-steve-jobs-taught-me-about-audience-framing',
    id: 'post-2',
    title: 'What Steve Jobs Taught Me About Audience Framing and Cognitive Ease',
    date: '18 October 2026',
    readTime: '5 min read',
    category: 'Rhetoric & Leadership',
    excerpt: 'Deconstructing the 2005 Stanford Commencement Address revealed why the world’s most celebrated tech CEO never relied on technical jargon to change the world.',
    body: [
      'When tackling Assignment 2 for SB5111, my initial hypothesis was that Steve Jobs’ legendary persuasion stemmed from charismatic showmanship. But as I transcribed his 2005 Stanford Commencement Address sentence by sentence, a very different truth emerged: his genius lay in radical narrative restraint.',
      'Jobs spoke to graduating seniors at a momentous crossroad in their lives. He did not talk about NeXTSTEP operating systems, Pixar rendering farms, or supply chain margins. Instead, he organized his entire speech around a clean rule-of-three: "Today I want to tell you three stories from my life. That’s it. No big deal. Just three stories."',
      'Think about the psychological relief that sentence created in the listener. By setting clear cognitive guardrails, he eliminated audience anxiety. Listeners knew exactly where they were in the journey at every step.',
      'Furthermore, Jobs inverted traditional corporate ethos. Instead of projecting infallible perfection, he began with failure: dropping out of Reed College, sleeping on the floor of friends’ rooms, and later being fired from the very company he founded. By establishing vulnerability early (Pathos), he earned the moral right to deliver his closing exhortation: "Stay Hungry. Stay Foolish."',
      'For future MBA leaders, the lesson is clear: your audience does not care how smart you are until they know how much you understand their condition. True leadership communication does not overwhelm; it clarifies.',
    ],
    keyTakeaways: [
      'The rule of three is not an aesthetic trick; it matches the human working memory capacity under cognitive load.',
      'Vulnerability and admitting past failure creates authentic ethos far faster than listing accolades.',
      'Always signpost your address so your audience never has to wonder how long the meeting will last.',
    ],
  },
  {
    slug: 'one-sentence-that-lost-someones-trust',
    id: 'post-3',
    title: 'One Sentence That Lost Someone’s Trust — And the Anatomy of an Apology',
    date: '10 October 2026',
    readTime: '4 min read',
    category: 'Conflict & Ethics',
    excerpt: 'An uncomfortable reflection on how a defensive email during a high-stress undergraduate project fractured a professional relationship, and how SB5111 taught me to repair it.',
    body: [
      'Three years ago, during an intense capstone competition, our team faced a tight 11:59 PM submission deadline. A teammate who was responsible for our financial charts submitted them twenty minutes late due to a software crash, forcing our submission into a penalty window.',
      'In a flash of frustration, I sent an email to our joint thread: "If you had respected the team’s timeline like the rest of us did, we wouldn’t be facing a deduction right now."',
      'It took less than five seconds to type, but the damage lasted for months. That single sentence violated every principle of constructive communication. It attacked the person’s character rather than addressing the procedural failure. It assumed malicious negligence rather than technical misfortune. Most critically, it used accusatory language that immediately pushed my colleague into defensive hostility.',
      'In Module 4 of Business Communication—Difficult Conversations and Conflict Communication—we studied Chris Argyris’ Ladder of Inference and Frances Frei’s Trust Triangle. I realised that I had leapt from a single observable fact (a late file) all the way to a moral indictment of their work ethic.',
      'Real leaders do not weaponise mistakes to prove their own superiority. They de-escalate. They ask, "What occurred, and how can we support the fix?" Learning how to issue a sincere, non-defensive apology—acknowledging impact rather than just intent—was the most humbling lesson of this semester.',
    ],
    keyTakeaways: [
      'Never send an emotionally charged email in the immediate aftermath of a crisis; mandate a thirty-minute cooling period.',
      'Separate the human being from the operational breakdown (Fisher & Ury).',
      'An apology that includes the word "if" or "but" is not an apology; it is a veiled justification.',
    ],
  },
  {
    slug: 'why-i-chose-an-mba',
    id: 'post-4',
    title: 'Why I Chose an MBA: From Tactical Execution to Strategic Stewardship',
    date: '02 October 2026',
    readTime: '5 min read',
    category: 'Personal Career Journey',
    excerpt: 'Moving beyond individual contribution to understand how finance, marketing, operations, and human psychology converge to build enduring enterprises.',
    body: [
      'Before entering business school, I measured professional success by the speed and accuracy of my personal output. If a task was assigned, I executed it diligently. But as I took on larger cross-functional projects, I encountered a recurring frustration: brilliant tactical execution cannot rescue a flawed strategic premise.',
      'I realised that modern enterprises do not suffer from a shortage of effort; they suffer from a shortage of coherence. Marketing teams optimize campaigns for metrics that finance warns are unprofitable. Operations builds capacity for products that customer research shows are already obsolescent. And leadership teams struggle to articulate a unifying purpose that transcends quarterly earnings.',
      'I chose to pursue an MBA to master the holistic architecture of enterprise. I wanted to understand how balance sheet mechanics inform corporate growth, how managerial economics uncovers hidden incentives, and how organizational behaviour shapes culture.',
      'Most importantly, I wanted to learn how to communicate. Without business communication, strategic ideas remain trapped in spreadsheets. It is the connective tissue that transforms individual capability into collective movement.',
      'As I complete Semester 1, I view this degree not as a credential to be collected, but as an apprenticeship in stewardship. The responsibility of business is to allocate human and financial capital toward problems that genuinely matter.',
    ],
    keyTakeaways: [
      'Individual contribution scales linearly; strategic leadership and communication scale exponentially.',
      'A great manager must speak the languages of finance, marketing, and engineering with equal fluency.',
      'An MBA is ultimately a lesson in perspective: learning to see the whole system before adjusting the parts.',
    ],
  },
];

export const galleryData: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Just a Minute (JAM) Session Delivery',
    category: 'Classroom',
    caption: 'Embracing the three-second pause during our impromptu speaking exercise in the SB5111 communications amphitheatre.',
    context: 'SB5111 Module 1 Experiential Lab',
    date: 'October 2026',
    imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'gal-2',
    title: 'Cross-Functional Teamwork Strategy Session',
    category: 'Teamwork',
    caption: 'Synthesising our corporate finance and market segmentation model with my study group peers.',
    context: 'Study Group Theta · Semester 1',
    date: 'October 2026',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'gal-3',
    title: 'Campus Central Quad & Library Steps',
    category: 'Campus',
    caption: 'The vibrant autumn courtyard between management lecture halls where peer debates continue after class.',
    context: 'MBA Campus Grounds',
    date: 'September 2026',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'gal-4',
    title: 'Steve Jobs Case Presentation & Rhetorical Breakdown',
    category: 'Classroom',
    caption: 'Presenting the Ethos-Pathos-Logos tension analysis of the 2005 Stanford speech on the digital whiteboard.',
    context: 'Assignment 2 Showcase',
    date: 'October 2026',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'gal-5',
    title: 'Venture Pitch Preparation & Peer Feedback',
    category: 'Artefacts',
    caption: 'Iterating on the 60-second PREP elevator pitch deck with peer critique before final simulation delivery.',
    context: 'Entrepreneurship & Communication Lab',
    date: 'October 2026',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'gal-6',
    title: 'Management Conclave & Guest Lecture Series',
    category: 'Campus',
    caption: 'Attending an executive leadership seminar on AI ethics in corporate governance with visiting industry partners.',
    context: 'MBA Distinguished Speaker Series',
    date: 'September 2026',
    imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1000&q=80',
  },
];

export const acknowledgementData = {
  professorTitle: 'Professor of Business Communication',
  courseCode: 'SB5111',
  note: 'I would like to extend my sincere gratitude to my Professor of Business Communication, whose encouragement and high standards inspired me to build and publish the very first website of my life. By challenging us to treat our digital presence as a living testament to our ethos, executive presence, and audience empathy, this course has transformed the way I communicate with peers, mentors, and future colleagues. Thank you for opening the door to this lifelong learning journey.',
};
