import { CourseAlignment } from '../types';

export const coursesData: CourseAlignment[] = [
  {
    id: 'course-copa',
    code: 'CTS-014',
    title: 'Computer Operator & Programming Assistant (COPA)',
    sector: 'IT & ITES',
    durationMonths: 12,
    nsfqLevel: 4,
    currentAlignmentPct: 42,
    status: 'Needs Update',
    annualEnrollment: 18450,
    instituteCount: 312,
    coveredSkills: [
      { name: 'Basic Computer Fundamentals & DOS', status: 'Covered', hours: 40 },
      { name: 'MS Office (Word, Excel, PowerPoint)', status: 'Covered', hours: 120 },
      { name: 'Computer Typing (English & Marathi)', status: 'Covered', hours: 60 },
      { name: 'Internet Basics, Browsing & Emailing', status: 'Covered', hours: 40 },
      { name: 'HTML & CSS Basics', status: 'Covered', hours: 60 },
      { name: 'VBA Scripting & Basic Accounting (Tally)', status: 'Partially Covered', hours: 80 }
    ],
    missingSkills: [
      { name: 'Python Programming (Syntax, Pandas, Requests)', status: 'Missing', industryDemandPct: 82, suggestedModule: 'Module 7: Applied Python for Data Operations', recommendedHours: 80 },
      { name: 'SQL & Relational Database Management', status: 'Missing', industryDemandPct: 78, suggestedModule: 'Module 8: Relational Database & SQL Queries', recommendedHours: 60 },
      { name: 'Power BI & Interactive Dashboards', status: 'Missing', industryDemandPct: 69, suggestedModule: 'Module 9: Business Intelligence & Reporting', recommendedHours: 50 },
      { name: 'Data Visualization & Cleaning Principles', status: 'Missing', industryDemandPct: 64, suggestedModule: 'Module 10: Data Cleaning & Visual Communication', recommendedHours: 40 },
      { name: 'Basic Statistics for Business Reporting', status: 'Missing', industryDemandPct: 56, suggestedModule: 'Module 11: Statistical Summaries & KPI Metrics', recommendedHours: 30 }
    ],
    recommendedChanges: [
      {
        title: 'Introduce Python for Data Operations',
        action: 'add',
        details: 'Replace 60 hours of legacy DOS & outdated Visual Basic exercises with hands-on Python data manipulation (Pandas, CSV handling).',
        hours: 80,
        evidenceSource: 'Based on 4,320 entry-level IT postings in Pune and Mumbai Suburban citing Python as mandatory.'
      },
      {
        title: 'Integrate PostgreSQL & MySQL Practical Labs',
        action: 'add',
        details: 'Mandate 60 hours of SQL query writing, schema normalization, and data extraction labs.',
        hours: 60,
        evidenceSource: 'Identified in 78% of Maharashtra IT/ITES junior analyst requirements submitted by 42 employers.'
      },
      {
        title: 'Include Power BI & Data Storytelling',
        action: 'add',
        details: 'Add 50 hours dedicated to building interactive MIS dashboards and executive reports.',
        hours: 50,
        evidenceSource: 'Demand surge of +38% year-on-year for MIS coordinators in Maharashtra district offices and logistics firms.'
      },
      {
        title: 'Deprecate Legacy DOS & FoxPro References',
        action: 'deprecate',
        details: 'Completely eliminate deprecated command-line utilities and legacy database engines from examination bank.',
        hours: -40,
        evidenceSource: 'DGT Curriculum Review Committee 2026 guidelines.'
      }
    ]
  },
  {
    id: 'course-electrician',
    code: 'CTS-018',
    title: 'Electrician Trade (CTS)',
    sector: 'Power & Automotive',
    durationMonths: 24,
    nsfqLevel: 5,
    currentAlignmentPct: 58,
    status: 'Needs Update',
    annualEnrollment: 24800,
    instituteCount: 420,
    coveredSkills: [
      { name: 'Domestic Wiring & Safety Earthing', status: 'Covered', hours: 140 },
      { name: 'Single & 3-Phase AC Motor Control', status: 'Covered', hours: 180 },
      { name: 'Transformer Testing & Maintenance', status: 'Covered', hours: 120 },
      { name: 'Measuring Instruments (Multimeter, Megger)', status: 'Covered', hours: 80 },
      { name: 'Overhead Transmission Line Basics', status: 'Covered', hours: 100 }
    ],
    missingSkills: [
      { name: 'EV Powertrain & High Voltage Battery Safety', status: 'Missing', industryDemandPct: 74, suggestedModule: 'Specialization: EV High Voltage Systems (Orange Cables & Inverters)', recommendedHours: 90 },
      { name: 'Solar PV Grid-Tie Inverter Commissioning', status: 'Missing', industryDemandPct: 68, suggestedModule: 'Renewable Power: Microgrid & Net Metering Connections', recommendedHours: 70 },
      { name: 'VFD (Variable Frequency Drive) Troubleshooting', status: 'Missing', industryDemandPct: 62, suggestedModule: 'Industrial Motor Speed Control via Modern VFDs', recommendedHours: 50 }
    ],
    recommendedChanges: [
      {
        title: 'Add EV Battery Management & Charging Station Maintenance',
        action: 'add',
        details: 'Include 90 practical hours on AC Type-2/DC Fast Charger commissioning, battery thermal management, and HV safety disconnect protocols.',
        hours: 90,
        evidenceSource: 'Automotive Sector Skill Council (ASDC) & MIDC Chakan manufacturing cluster survey.'
      },
      {
        title: 'Expand Rooftop Solar & Net-Metering Module',
        action: 'modify',
        details: 'Update standard DC wiring to incorporate hybrid solar-battery inverter synchronization according to MSEDCL norms.',
        hours: 40,
        evidenceSource: 'Maharashtra State Energy Development Agency (MEDA) demand forecast.'
      }
    ]
  },
  {
    id: 'course-machinist',
    code: 'CTS-032',
    title: 'Machinist & Tool Room Trade',
    sector: 'Capital Goods & Auto',
    durationMonths: 24,
    nsfqLevel: 5,
    currentAlignmentPct: 64,
    status: 'Under Review',
    annualEnrollment: 11200,
    instituteCount: 180,
    coveredSkills: [
      { name: 'Conventional Lathe Operations', status: 'Covered', hours: 220 },
      { name: 'Milling & Shaper Machine Operation', status: 'Covered', hours: 200 },
      { name: 'Basic CNC Turning Principles', status: 'Partially Covered', hours: 120 },
      { name: 'Engineering Drawing & Blueprint Reading', status: 'Covered', hours: 100 }
    ],
    missingSkills: [
      { name: '5-Axis CNC / VMC Programming (CAM Software)', status: 'Missing', industryDemandPct: 84, suggestedModule: 'Advanced CNC Milling & CAD/CAM Toolpath Generation', recommendedHours: 110 },
      { name: 'Coordinate Measuring Machine (CMM) Inspection', status: 'Missing', industryDemandPct: 71, suggestedModule: 'Metrology & CMM Digital Surface Quality Verification', recommendedHours: 60 }
    ],
    recommendedChanges: [
      {
        title: 'Mandate Mastercam / Fusion 360 Toolpath Training',
        action: 'add',
        details: 'Shift from manual G-code typing to digital CAM toolpath generation and collision simulation.',
        hours: 80,
        evidenceSource: 'Validated by 38 precision engineering units across Bhosari, Waluj, and Ambad industrial areas.'
      }
    ]
  }
];
