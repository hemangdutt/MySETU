import { DistrictMetric } from '../types';

export const districtsData: DistrictMetric[] = [
  {
    id: 'pune',
    nameEn: 'Pune',
    nameMr: 'पुणे',
    division: 'Pune',
    jobPostings: 18420,
    postingsGrowth: 34,
    topSector: 'IT & Software',
    highDemandSkillsCount: 56,
    trainingCapacity: 14200,
    trainingSupply: 13000,
    capacityDeficit: 1200,
    institutesCount: 84,
    skillDemandLevel: 'Very High',
    topSkills: ['Data Analysis', 'EV Technology', 'Cloud Computing', 'Industrial Automation', 'Python'],
    topRoles: [
      { role: 'Data Analyst', postings: 2340, growth: 40 },
      { role: 'Software Developer', postings: 1980, growth: 32 },
      { role: 'EV Technician', postings: 1120, growth: 52 },
      { role: 'Industrial Automation Tech', postings: 980, growth: 38 },
      { role: 'Cloud Engineer', postings: 870, growth: 28 }
    ],
    trendMonthly: [
      { month: 'Jan', value: 4200 },
      { month: 'Feb', value: 5800 },
      { month: 'Mar', value: 6900 },
      { month: 'Apr', value: 8100 },
      { month: 'May', value: 9400 },
      { month: 'Jun', value: 10200 },
      { month: 'Jul', value: 11500 },
      { month: 'Aug', value: 12900 },
      { month: 'Sep', value: 14600 },
      { month: 'Oct', value: 16100 },
      { month: 'Nov', value: 17200 },
      { month: 'Dec', value: 18420 }
    ],
    recommendedActions: [
      '+1,200 Additional training seats required across IT and EV trades',
      '3 Courses require urgent curriculum review (COPA, Electrician, Machinist)',
      '2 New courses recommended (Battery Assembly Technician, Cloud Ops Associate)',
      '12 Institutes require CNC & EV diagnostic lab equipment upgrades',
      '48 Trainers require pedagogical upskilling in Python & PLC programming'
    ]
  },
  {
    id: 'mumbai_suburban',
    nameEn: 'Mumbai Suburban',
    nameMr: 'मुंबई उपनगर',
    division: 'Konkan',
    jobPostings: 32150,
    postingsGrowth: 26,
    topSector: 'Financial Services & IT',
    highDemandSkillsCount: 68,
    trainingCapacity: 18500,
    trainingSupply: 16900,
    capacityDeficit: 1600,
    institutesCount: 92,
    skillDemandLevel: 'Very High',
    topSkills: ['Financial Modeling', 'Full Stack Development', 'Data Engineering', 'Digital Marketing', 'Logistics Operations'],
    topRoles: [
      { role: 'Full Stack Engineer', postings: 3820, growth: 31 },
      { role: 'Financial Analyst', postings: 3100, growth: 24 },
      { role: 'Logistics Coordinator', postings: 1740, growth: 29 },
      { role: 'Data Engineer', postings: 1560, growth: 42 },
      { role: 'Cybersecurity Associate', postings: 920, growth: 45 }
    ],
    trendMonthly: [
      { month: 'Jan', value: 18000 },
      { month: 'Mar', value: 21500 },
      { month: 'Jun', value: 25400 },
      { month: 'Sep', value: 28900 },
      { month: 'Dec', value: 32150 }
    ],
    recommendedActions: [
      'Expand FinTech & Cybersecurity lab capacity across 14 suburban ITIs',
      'Review and modernise Logistics & Supply Chain diploma syllabus',
      'Mandate industry apprenticeships with BKC & SEEPZ corporate partners'
    ]
  },
  {
    id: 'nashik',
    nameEn: 'Nashik',
    nameMr: 'नाशिक',
    division: 'Nashik',
    jobPostings: 9840,
    postingsGrowth: 38,
    topSector: 'Automotive & Aerospace',
    highDemandSkillsCount: 42,
    trainingCapacity: 7200,
    trainingSupply: 6400,
    capacityDeficit: 800,
    institutesCount: 54,
    skillDemandLevel: 'High',
    topSkills: ['CNC Programming', 'Aerospace Quality Inspection', 'Solar Inverter Maintenance', 'PLC/SCADA', 'AutoCAD'],
    topRoles: [
      { role: 'CNC Operator', postings: 1450, growth: 35 },
      { role: 'Quality Control Inspector', postings: 1120, growth: 29 },
      { role: 'Solar Plant Technician', postings: 890, growth: 62 },
      { role: 'Tool & Die Maker', postings: 780, growth: 22 },
      { role: 'Production Supervisor', postings: 650, growth: 18 }
    ],
    trendMonthly: [
      { month: 'Jan', value: 4500 },
      { month: 'Jun', value: 6800 },
      { month: 'Dec', value: 9840 }
    ],
    recommendedActions: [
      'Upgrade Satpur and Ambad ITIs with 5-axis CNC machining simulators',
      'Validate aerospace component manufacturing standards with HAL Nashik',
      'Initiate 400 new seats in Renewable Energy & Solar PV Installation'
    ]
  },
  {
    id: 'nagpur',
    nameEn: 'Nagpur',
    nameMr: 'नागपूर',
    division: 'Nagpur',
    jobPostings: 11300,
    postingsGrowth: 30,
    topSector: 'Logistics & Multimodal Transport',
    highDemandSkillsCount: 48,
    trainingCapacity: 8600,
    trainingSupply: 7800,
    capacityDeficit: 800,
    institutesCount: 62,
    skillDemandLevel: 'High',
    topSkills: ['Warehouse Automation', 'Cold Chain Management', 'Heavy Machinery Operation', 'Industrial IoT', 'Electric Wiring'],
    topRoles: [
      { role: 'Warehouse Operations Manager', postings: 1650, growth: 44 },
      { role: 'MIHAN Aviation Technician', postings: 980, growth: 36 },
      { role: 'Heavy Vehicle Electrician', postings: 890, growth: 40 },
      { role: 'Inventory Specialist', postings: 760, growth: 25 },
      { role: 'GIS Mapping Specialist', postings: 540, growth: 32 }
    ],
    trendMonthly: [
      { month: 'Jan', value: 6100 },
      { month: 'Jun', value: 8500 },
      { month: 'Dec', value: 11300 }
    ],
    recommendedActions: [
      'Scale MIHAN Cargo & MRO training programs in collaboration with Boeing/Air India',
      'Deploy modern material handling simulation bays in Hingna ITI',
      'Introduce smart warehousing curriculum across Vidarbha institutes'
    ]
  },
  {
    id: 'chhatrapati_sambhajinagar',
    nameEn: 'Chhatrapati Sambhajinagar (Aurangabad)',
    nameMr: 'छत्रपती संभाजीनगर (औरंगाबाद)',
    division: 'Chhatrapati Sambhajinagar',
    jobPostings: 8400,
    postingsGrowth: 35,
    topSector: 'Auto Components & Pharma',
    highDemandSkillsCount: 39,
    trainingCapacity: 6100,
    trainingSupply: 5400,
    capacityDeficit: 700,
    institutesCount: 48,
    skillDemandLevel: 'High',
    topSkills: ['Pharma QC Chromatography', 'Auto Component Assembly', 'Welding Robotics', 'GMP Compliance', 'Industrial Safety'],
    topRoles: [
      { role: 'Pharma QC Associate', postings: 1210, growth: 39 },
      { role: 'Robotic Welder', postings: 980, growth: 48 },
      { role: 'Machinist', postings: 840, growth: 25 },
      { role: 'Packaging Technician', postings: 720, growth: 31 },
      { role: 'EHS Officer', postings: 530, growth: 20 }
    ],
    trendMonthly: [
      { month: 'Jan', value: 4300 },
      { month: 'Jun', value: 6200 },
      { month: 'Dec', value: 8400 }
    ],
    recommendedActions: [
      'Partner with Shendra-Bidkin AURIC smart city industrial park for dual-training',
      'Establish cleanroom training facility for pharmaceutical manufacturing at Chikalthana ITI'
    ]
  },
  {
    id: 'kolhapur',
    nameEn: 'Kolhapur',
    nameMr: 'कोल्हापूर',
    division: 'Pune',
    jobPostings: 5600,
    postingsGrowth: 28,
    topSector: 'Foundry & Heavy Engineering',
    highDemandSkillsCount: 31,
    trainingCapacity: 4800,
    trainingSupply: 4200,
    capacityDeficit: 600,
    institutesCount: 38,
    skillDemandLevel: 'Moderate',
    topSkills: ['Foundry Metallurgical Testing', 'Pattern Making', 'Precision Casting', 'CNC Milling', 'Green Sand Molding'],
    topRoles: [
      { role: 'Foundry Technician', postings: 950, growth: 33 },
      { role: 'Pattern Maker', postings: 680, growth: 22 },
      { role: 'CNC Milling Operator', postings: 620, growth: 27 },
      { role: 'Metallurgical Lab Assistant', postings: 490, growth: 30 }
    ],
    trendMonthly: [
      { month: 'Jan', value: 3100 },
      { month: 'Jun', value: 4200 },
      { month: 'Dec', value: 5600 }
    ],
    recommendedActions: [
      'Modernize foundry safety and induction furnace simulator training at Shiroli ITI',
      'Provide energy audit and green foundry certification modules'
    ]
  },
  {
    id: 'solapur',
    nameEn: 'Solapur',
    nameMr: 'सोलापूर',
    division: 'Pune',
    jobPostings: 4300,
    postingsGrowth: 22,
    topSector: 'Textiles & Garment Manufacturing',
    highDemandSkillsCount: 26,
    trainingCapacity: 4100,
    trainingSupply: 3700,
    capacityDeficit: 400,
    institutesCount: 32,
    skillDemandLevel: 'Moderate',
    topSkills: ['Computerized Jacquard Weaving', 'Industrial Sewing', 'Textile Quality Testing', 'Garment CAD/CAM'],
    topRoles: [
      { role: 'Jacquard Loom Technician', postings: 810, growth: 25 },
      { role: 'Apparel Quality Checker', postings: 640, growth: 19 },
      { role: 'Pattern Master', postings: 520, growth: 21 }
    ],
    trendMonthly: [
      { month: 'Jan', value: 2400 },
      { month: 'Jun', value: 3300 },
      { month: 'Dec', value: 4300 }
    ],
    recommendedActions: [
      'Upgrade textile cluster machinery with electronic jacquard controllers',
      'Introduce export-oriented apparel manufacturing certification'
    ]
  },
  {
    id: 'thane',
    nameEn: 'Thane',
    nameMr: 'ठाणे',
    division: 'Konkan',
    jobPostings: 14200,
    postingsGrowth: 27,
    topSector: 'Specialty Chemicals & Engineering',
    highDemandSkillsCount: 45,
    trainingCapacity: 11200,
    trainingSupply: 10400,
    capacityDeficit: 800,
    institutesCount: 52,
    skillDemandLevel: 'High',
    topSkills: ['Chemical Plant Operations', 'Process Safety Management', 'SCADA Controls', 'Piping Drafting'],
    topRoles: [
      { role: 'Chemical Plant Operator', postings: 1820, growth: 30 },
      { role: 'Instrumentation Technician', postings: 1420, growth: 26 },
      { role: 'Industrial Fire & Safety Officer', postings: 980, growth: 34 }
    ],
    trendMonthly: [
      { month: 'Jan', value: 8900 },
      { month: 'Jun', value: 11400 },
      { month: 'Dec', value: 14200 }
    ],
    recommendedActions: [
      'Expand hazmat handling and industrial effluent plant simulation modules in Wagle Estate ITI'
    ]
  }
];

export const maharashtraSummary = {
  totalJobPostingsAnalysed: 1234567,
  highDemandSkillsCount: 342,
  skillGapsIdentified: 128,
  coursesToBeUpdated: 64,
  trainingInstitutesMapped: 1240,
  districtPlansGenerated: 36,
  totalCapacityStatewide: 385000,
  currentEnrollment: 312000,
  annualDeficit: 73000
};
