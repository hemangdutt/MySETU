import { SkillItem } from '../types';

export const topSkillsStatewide: SkillItem[] = [
  {
    id: 'skill-python',
    name: 'Python Programming',
    sector: 'IT & Software',
    demandVolume: 12450,
    growthPct: 36,
    trainingAvailability: 'Low',
    gapSeverity: 'Critical',
    validationCount: 142,
    canonicalTerms: ['python', 'python 3', 'python programming', 'django/flask', 'python scripting']
  },
  {
    id: 'skill-industrial-automation',
    name: 'Industrial Automation & PLC',
    sector: 'Manufacturing',
    demandVolume: 11320,
    growthPct: 42,
    trainingAvailability: 'Low',
    gapSeverity: 'Critical',
    validationCount: 118,
    canonicalTerms: ['plc programming', 'scada', 'industrial automation', 'hmi', 'siemens s7', 'allen bradley']
  },
  {
    id: 'skill-data-analysis',
    name: 'Data Analysis & SQL',
    sector: 'IT & Software',
    demandVolume: 9870,
    growthPct: 38,
    trainingAvailability: 'Low',
    gapSeverity: 'Critical',
    validationCount: 165,
    canonicalTerms: ['data analysis', 'sql', 'power bi', 'excel modeling', 'tableau', 'business intelligence']
  },
  {
    id: 'skill-cnc',
    name: 'CNC / VMC Machine Operation',
    sector: 'Manufacturing',
    demandVolume: 8560,
    growthPct: 24,
    trainingAvailability: 'Moderate',
    gapSeverity: 'High',
    validationCount: 89,
    canonicalTerms: ['cnc turning', 'vmc programming', 'g-code', 'fanuc controller', 'cnc operation']
  },
  {
    id: 'skill-ev',
    name: 'EV Powertrain & Battery Tech',
    sector: 'Automotive & EV',
    demandVolume: 7910,
    growthPct: 58,
    trainingAvailability: 'Low',
    gapSeverity: 'Critical',
    validationCount: 94,
    canonicalTerms: ['ev battery management', 'bms', 'electric vehicle diagnosis', 'ev motor winding', 'high voltage safety']
  },
  {
    id: 'skill-cloud',
    name: 'Cloud Computing & DevOps',
    sector: 'IT & Software',
    demandVolume: 6420,
    growthPct: 32,
    trainingAvailability: 'Low',
    gapSeverity: 'High',
    validationCount: 78,
    canonicalTerms: ['aws', 'azure', 'docker', 'kubernetes', 'linux administration', 'cloud computing']
  },
  {
    id: 'skill-solar',
    name: 'Solar PV & Rooftop Microgrid',
    sector: 'Renewable Energy',
    demandVolume: 5890,
    growthPct: 47,
    trainingAvailability: 'Moderate',
    gapSeverity: 'Moderate',
    validationCount: 62,
    canonicalTerms: ['solar pv installer', 'solar inverter wiring', 'grid-tie solar', 'rooftop solar commissioning']
  },
  {
    id: 'skill-welding-robotics',
    name: 'Robotic & TIG/MIG Welding',
    sector: 'Automotive & Manufacturing',
    demandVolume: 5120,
    growthPct: 29,
    trainingAvailability: 'Moderate',
    gapSeverity: 'High',
    validationCount: 71,
    canonicalTerms: ['robotic welding', 'tig welding', 'mig welding', '6g welding certification']
  }
];

export const sectorDemandVsSupply = [
  { sector: 'IT & Software', industryDemand: 22400, trainingSupply: 14200, deficit: 8200 },
  { sector: 'Manufacturing', industryDemand: 18200, trainingSupply: 10400, deficit: 7800 },
  { sector: 'Automotive & EV', industryDemand: 24800, trainingSupply: 12600, deficit: 12200 },
  { sector: 'Healthcare & Pharma', industryDemand: 17500, trainingSupply: 9800, deficit: 7700 },
  { sector: 'Construction & Infra', industryDemand: 17200, trainingSupply: 12100, deficit: 5100 }
];

export const skillGapBreakdown = [
  { severity: 'Critical', count: 28, percentage: 22, color: '#DC2626', desc: 'Missing in curriculum or 0 accredited training seats in district' },
  { severity: 'High', count: 46, percentage: 36, color: '#EA580C', desc: 'Over 50% capacity deficit compared to local postings' },
  { severity: 'Moderate', count: 38, percentage: 30, color: '#D97706', desc: 'Theory covered, lacking practical lab/equipment hours' },
  { severity: 'Low', count: 16, percentage: 12, color: '#16A34A', desc: 'Capacity matches demand within ±10% margin' }
];

export const stateRecommendedActions = [
  { id: 1, action: 'Update 64 existing courses', tag: 'Curriculum', desc: 'Revise ITI trade syllabi to incorporate emerging digital tools & Python/SQL modules.' },
  { id: 2, action: 'Launch 17 new courses', tag: 'New Trades', desc: 'Introduce EV Powertrain Diagnostics and Industrial Robotics across Tier-1 ITIs.' },
  { id: 3, action: 'Increase training capacity in 8 districts', tag: 'Capacity', desc: 'Add 12,400 technical seats across Pune, Nashik, Aurangabad, Nagpur, and Thane.' },
  { id: 4, action: 'Upgrade equipment in 24 institutes', tag: 'Infrastructure', desc: 'Procure 5-axis CNC machining simulators and EV battery test rigs under State Capex.' },
  { id: 5, action: 'Upskill 312 trainers', tag: 'Faculty', desc: 'Conduct 4-week industry immersion training with Tata Motors, L&T, and Infosys for instructors.' }
];
