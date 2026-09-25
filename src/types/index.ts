export type UserRole = 
  | 'public' 
  | 'gov_admin' 
  | 'district_officer' 
  | 'training_institute' 
  | 'employer' 
  | 'student';

export type Language = 'en' | 'mr';

export type TextSize = 'sm' | 'base' | 'lg';

export interface DistrictMetric {
  id: string;
  nameEn: string;
  nameMr: string;
  division: string;
  jobPostings: number;
  postingsGrowth: number;
  topSector: string;
  highDemandSkillsCount: number;
  trainingCapacity: number;
  trainingSupply: number;
  capacityDeficit: number;
  institutesCount: number;
  topSkills: string[];
  topRoles: { role: string; postings: number; growth: number }[];
  skillDemandLevel: 'Very High' | 'High' | 'Moderate' | 'Low';
  trendMonthly: { month: string; value: number }[];
  recommendedActions: string[];
}

export interface SkillItem {
  id: string;
  name: string;
  sector: string;
  demandVolume: number;
  growthPct: number;
  trainingAvailability: 'Low' | 'Moderate' | 'Adequate';
  gapSeverity: 'Critical' | 'High' | 'Moderate' | 'Low';
  validationCount: number;
  canonicalTerms: string[];
}

export interface CourseAlignment {
  id: string;
  code: string;
  title: string;
  sector: string;
  durationMonths: number;
  nsfqLevel: number;
  currentAlignmentPct: number;
  status: 'Needs Update' | 'Under Review' | 'Aligned' | 'Critical Revision';
  annualEnrollment: number;
  instituteCount: number;
  coveredSkills: { name: string; status: 'Covered' | 'Partially Covered'; hours: number }[];
  missingSkills: { name: string; status: 'Missing'; industryDemandPct: number; suggestedModule: string; recommendedHours: number }[];
  recommendedChanges: {
    title: string;
    action: 'add' | 'modify' | 'deprecate';
    details: string;
    hours: number;
    evidenceSource: string;
  }[];
}

export interface EmployerRequirement {
  id: string;
  companyName: string;
  industrySector: string;
  jobRole: string;
  district: string;
  numberOfOpenings: number;
  requiredSkills: string[];
  proficiencyLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  minQualification: string;
  minExperience: string;
  employmentType: 'Full-time' | 'Contractual' | 'Apprenticeship';
  salaryRange: string;
  status: 'Pending Review' | 'Verified' | 'Incorporated into Curriculum';
  submissionDate: string;
  contactPerson: string;
}

export interface StudentCareerPathway {
  id: string;
  roleTitle: string;
  sector: string;
  demandStatus: 'High Demand' | 'Growing Fast' | 'Moderate Demand';
  avgSalaryRange: string;
  growthPct: number;
  keySkills: string[];
  recommendedCourses: {
    id: string;
    title: string;
    duration: string;
    rating: number;
    demandBadge: 'High Demand' | 'Growing Fast';
    institutesAvailable: number;
    certifyingBody: string;
  }[];
  justification: string;
}

export interface NoticeUpdate {
  id: string;
  date: string;
  titleEn: string;
  titleMr: string;
  department: string;
  category: 'Gazette' | 'Report' | 'Curriculum' | 'Notification';
  isNew?: boolean;
  linkUrl?: string;
}
