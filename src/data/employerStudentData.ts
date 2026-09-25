import { EmployerRequirement, StudentCareerPathway, NoticeUpdate } from '../types';

export const initialEmployerRequirements: EmployerRequirement[] = [
  {
    id: 'emp-req-101',
    companyName: 'KPIT Technologies / AutoTech Consortium',
    industrySector: 'Automotive & Embedded',
    jobRole: 'Data Analyst (Manufacturing Telemetry)',
    district: 'Pune',
    numberOfOpenings: 50,
    requiredSkills: ['SQL', 'Python', 'Power BI', 'Data Visualization', 'Statistical Analysis'],
    proficiencyLevel: 'Intermediate',
    minQualification: 'B.Sc. / Diploma / ITI (COPA)',
    minExperience: '0 - 2 Years',
    employmentType: 'Full-time',
    salaryRange: '₹3,50,000 - ₹5,50,000 P.A.',
    status: 'Verified',
    submissionDate: '23 Sep 2026',
    contactPerson: 'Kishore Patil, Talent Acquisition Head'
  },
  {
    id: 'emp-req-102',
    companyName: 'Persistent Systems Ltd.',
    industrySector: 'IT & Software',
    jobRole: 'Python / Cloud Developer',
    district: 'Pune',
    numberOfOpenings: 30,
    requiredSkills: ['Python', 'PostgreSQL', 'REST API', 'Docker', 'Linux Administration'],
    proficiencyLevel: 'Intermediate',
    minQualification: 'Diploma / Degree in CS/IT',
    minExperience: '1 - 3 Years',
    employmentType: 'Full-time',
    salaryRange: '₹4,50,000 - ₹7,00,000 P.A.',
    status: 'Incorporated into Curriculum',
    submissionDate: '18 Sep 2026',
    contactPerson: 'Pooja Kulkarni, HR Lead'
  },
  {
    id: 'emp-req-103',
    companyName: 'Tata Motors EV Division (Chakan)',
    industrySector: 'Automotive & EV',
    jobRole: 'EV Powertrain Assembly Technician',
    district: 'Pune',
    numberOfOpenings: 45,
    requiredSkills: ['EV Battery Management', 'High Voltage Safety Disconnect', 'CAN Bus Diagnosis', 'Wiring Harness Assembly'],
    proficiencyLevel: 'Intermediate',
    minQualification: 'ITI Electrician / Wireman / Motor Mechanic',
    minExperience: '0 - 1 Years',
    employmentType: 'Full-time',
    salaryRange: '₹2,80,000 - ₹4,20,000 P.A.',
    status: 'Verified',
    submissionDate: '16 Sep 2026',
    contactPerson: 'Ravindra Deshmukh, Plant Operations'
  },
  {
    id: 'emp-req-104',
    companyName: 'L&T Heavy Engineering',
    industrySector: 'Manufacturing',
    jobRole: 'Industrial Automation Specialist',
    district: 'Mumbai Suburban',
    numberOfOpenings: 20,
    requiredSkills: ['PLC Programming', 'SCADA', 'Sensor Interfacing', 'Pneumatics & Hydraulics'],
    proficiencyLevel: 'Advanced',
    minQualification: 'Diploma Electrical/Instrumentation / ITI',
    minExperience: '2 - 4 Years',
    employmentType: 'Full-time',
    salaryRange: '₹4,00,000 - ₹6,50,000 P.A.',
    status: 'Pending Review',
    submissionDate: '11 Sep 2026',
    contactPerson: 'Sanjay More, Technical Recruiter'
  },
  {
    id: 'emp-req-105',
    companyName: 'Bharat Forge Ltd. (Mundhwa)',
    industrySector: 'Forging & Capital Goods',
    jobRole: 'CNC / VMC Milling Machine Operator',
    district: 'Pune',
    numberOfOpenings: 35,
    requiredSkills: ['CNC Programming', 'VMC Setup', 'Dial Gauge Calibration', 'Blueprint Reading'],
    proficiencyLevel: 'Intermediate',
    minQualification: 'ITI Machinist / Turner / Fitter',
    minExperience: '1 - 2 Years',
    employmentType: 'Full-time',
    salaryRange: '₹2,60,000 - ₹3,80,000 P.A.',
    status: 'Verified',
    submissionDate: '04 Sep 2026',
    contactPerson: 'Anand Shinde, Works Manager'
  }
];

export const studentCareerPathways: StudentCareerPathway[] = [
  {
    id: 'pathway-data-analyst',
    roleTitle: 'Data Analyst',
    sector: 'IT & Software',
    demandStatus: 'High Demand',
    avgSalaryRange: '₹6 - 10 LPA',
    growthPct: 40,
    keySkills: ['SQL Database Queries', 'Python Data Processing', 'Power BI Dashboards', 'Statistical Modeling'],
    justification: 'Recommended because Data Analyst demand in Pune has surged by 40% (2,340 active verified postings) across manufacturing and IT clusters.',
    recommendedCourses: [
      {
        id: 'c-da-1',
        title: 'Data Analytics with Python & SQL',
        duration: '3 months',
        rating: 4.8,
        demandBadge: 'High Demand',
        institutesAvailable: 18,
        certifyingBody: 'Maharashtra State Board of Vocational Education (MSBVE)'
      },
      {
        id: 'c-da-2',
        title: 'Business Intelligence & Power BI Masterclass',
        duration: '2 months',
        rating: 4.7,
        demandBadge: 'High Demand',
        institutesAvailable: 24,
        certifyingBody: 'NSDC / IT-ITeS Sector Skill Council'
      }
    ]
  },
  {
    id: 'pathway-software-developer',
    roleTitle: 'Software Developer',
    sector: 'IT & Software',
    demandStatus: 'High Demand',
    avgSalaryRange: '₹7 - 12 LPA',
    growthPct: 32,
    keySkills: ['Full Stack Web', 'REST APIs', 'PostgreSQL', 'Git Version Control', 'Cloud Deployment'],
    justification: 'Over 1,980 openings posted across Pune Hinjawadi and Magarpatta tech parks requiring modern API development skills.',
    recommendedCourses: [
      {
        id: 'c-sw-1',
        title: 'Full Stack Web Development & Microservices',
        duration: '6 months',
        rating: 4.9,
        demandBadge: 'High Demand',
        institutesAvailable: 32,
        certifyingBody: 'DVET Maharashtra Centre of Excellence'
      }
    ]
  },
  {
    id: 'pathway-ev-technician',
    roleTitle: 'EV Technician',
    sector: 'Automotive & EV',
    demandStatus: 'Growing Fast',
    avgSalaryRange: '₹3 - 6 LPA',
    growthPct: 52,
    keySkills: ['EV Battery Diagnostics', 'BMS Wiring', 'Electric Motor Testing', 'High-Voltage Safety Disconnect'],
    justification: 'Fastest growing trade in Maharashtra (+52% YoY). Chakan and Talegaon auto corridor added 1,120 new technical requisitions.',
    recommendedCourses: [
      {
        id: 'c-ev-1',
        title: 'EV Technology Fundamentals & Battery Maintenance',
        duration: '3 months',
        rating: 4.7,
        demandBadge: 'Growing Fast',
        institutesAvailable: 14,
        certifyingBody: 'Automotive Skills Development Council (ASDC)'
      }
    ]
  },
  {
    id: 'pathway-industrial-automation',
    roleTitle: 'Industrial Automation Specialist',
    sector: 'Manufacturing',
    demandStatus: 'High Demand',
    avgSalaryRange: '₹4 - 8 LPA',
    growthPct: 38,
    keySkills: ['PLC Ladder Logic (Siemens/Allen Bradley)', 'SCADA Integration', 'Robotic Arm Maintenance', 'Sensor Wiring'],
    justification: 'Over 980 plant postings in Bhosari and Pimpri-Chinchwad manufacturing zones seeking certified automation technicians.',
    recommendedCourses: [
      {
        id: 'c-ia-1',
        title: 'Industrial Automation Basics & PLC Programming',
        duration: '4 months',
        rating: 4.6,
        demandBadge: 'High Demand',
        institutesAvailable: 16,
        certifyingBody: 'Capital Goods Skill Council'
      }
    ]
  }
];

export const latestUpdatesData: NoticeUpdate[] = [
  {
    id: 'up-1',
    date: '15 Sep 2026',
    titleEn: 'New report on EV sector skill demand in Pune and Nashik released by DVET State Directorate',
    titleMr: 'पुणे व नाशिकमधील ईव्ही क्षेत्रातील कौशल्य मागणी अहवाल DVET राज्य संचालनालयाकडून प्रसिद्ध',
    department: 'Directorate of Vocational Education & Training',
    category: 'Report',
    isNew: true
  },
  {
    id: 'up-2',
    date: '12 Sep 2026',
    titleEn: 'Guidelines for curriculum revision in IT/ITES sector trades (COPA) approved by State Technical Board',
    titleMr: 'आयटी/आयटीईएस क्षेत्रातील अभ्यासक्रम दुरुस्ती (COPA) मार्गदर्शक तत्त्वे राज्य तांत्रिक मंडळाकडून मंजूर',
    department: 'Curriculum Review Committee',
    category: 'Curriculum'
  },
  {
    id: 'up-3',
    date: '08 Sep 2026',
    titleEn: 'District skill demand dashboards now updated with Q2 2026 Periodic Labour Survey & Employer Validation inputs',
    titleMr: 'जिल्हा कौशल्य मागणी डॅशबोर्ड आता Q2 2026 श्रम सर्वेक्षण आणि नियोक्त्यांच्या माहितीसह अद्यतनित',
    department: 'State Labour Market Intelligence Unit',
    category: 'Gazette'
  },
  {
    id: 'up-4',
    date: '02 Sep 2026',
    titleEn: 'Consultation meeting with industry stakeholders scheduled for October 2026 at Sahyadri Guest House, Mumbai',
    titleMr: 'सहाद्री अतिथीगृह, मुंबई येथे ऑक्टोबर २०२६ मध्ये उद्योग भागधारकांशी सल्लामसलत बैठक आयोजित',
    department: 'Skill, Employment & Innovation Dept',
    category: 'Notification'
  }
];

export const importantGovLinks = [
  { titleEn: 'Maharashtra Skill Development Policy', titleMr: 'महाराष्ट्र कौशल्य विकास धोरण', url: 'https://www.maharashtra.gov.in' },
  { titleEn: 'Mahaswayam Portal (Maha Rojgar & Training)', titleMr: 'महास्वयं पोर्टल (महा रोजगार व प्रशिक्षण)', url: 'https://mahaswayam.gov.in' },
  { titleEn: 'National Skill Development Corporation (NSDC)', titleMr: 'राष्ट्रीय कौशल्य विकास महामंडळ (NSDC)', url: 'https://nsdcindia.org' },
  { titleEn: 'Sector Skill Councils of India (SSCs)', titleMr: 'सेक्टर स्किल काउन्सिल्स ऑफ इंडिया', url: 'https://www.skillindia.gov.in' },
  { titleEn: 'Skill India Digital Hub', titleMr: 'स्किल इंडिया डिजिटल हब', url: 'https://www.skillindiadigital.gov.in' },
  { titleEn: 'Labour & Employment Department, GoM', titleMr: 'कामगार व रोजगार विभाग, महाराष्ट्र शासन', url: 'https://labour.maharashtra.gov.in' },
  { titleEn: 'Official Reports & Statistical Bulletins', titleMr: 'अधिकृत अहवाल आणि सांख्यिकी बुलेटिन', url: '#reports' }
];
