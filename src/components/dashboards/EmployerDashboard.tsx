import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { districtsData } from '../../data/districtsData';
import { Briefcase, Building, Plus, X, CheckCircle, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

export const EmployerDashboard: React.FC = () => {
  const { employerRequirements, addEmployerRequirement, selectedDistrict, language } = useApp();

  // Form State
  const [jobRole, setJobRole] = useState('');
  const [companyName, setCompanyName] = useState('Mahindra & Mahindra Ltd. (Auto Div)');
  const [industrySector, setIndustrySector] = useState('Automotive & EV');
  const [district, setDistrict] = useState(selectedDistrict || 'pune');
  const [openings, setOpenings] = useState('25');
  const [proficiency, setProficiency] = useState<'Beginner' | 'Intermediate' | 'Advanced'>('Intermediate');
  const [minQualification, setMinQualification] = useState('ITI / Diploma in Electrical / Mechanical');
  const [minExperience, setMinExperience] = useState('0 - 2 Years');
  const [employmentType, setEmploymentType] = useState<'Full-time' | 'Contractual' | 'Apprenticeship'>('Full-time');
  const [salaryRange, setSalaryRange] = useState('₹3,00,000 - ₹4,50,000 P.A.');
  const [contactPerson, setContactPerson] = useState('Deepak Joshi, Recruitment Lead');

  // Skill tags
  const [skills, setSkills] = useState<string[]>(['SQL', 'Python', 'Power BI', 'Data Visualization']);
  const [skillInput, setSkillInput] = useState('');
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleAddSkill = (e: React.KeyboardEvent | React.MouseEvent) => {
    if ('key' in e && e.key !== 'Enter') return;
    e.preventDefault();
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput('');
      setValidationError(null);
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter(s => s !== skillToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobRole.trim()) {
      setValidationError('Please enter the target Job Role title.');
      return;
    }
    if (skills.length === 0) {
      setValidationError('Please select at least one required skill.');
      return;
    }

    addEmployerRequirement({
      companyName,
      industrySector,
      jobRole,
      district,
      numberOfOpenings: parseInt(openings, 10) || 10,
      requiredSkills: skills,
      proficiencyLevel: proficiency,
      minQualification,
      minExperience,
      employmentType,
      salaryRange,
      contactPerson
    });

    // Reset fields
    setJobRole('');
    setValidationError(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 space-y-6">
      
      {/* Title Strip */}
      <div className="bg-white p-4 rounded border border-slate-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-purple-800 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
              Employer Portal
            </span>
            <span className="text-xs text-slate-500">· Industry Skill Requirement Submission & Curriculum Validation</span>
          </div>
          <h1 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
            Post Job Requirement
          </h1>
          <p className="text-xs text-slate-600">
            Help the Government of Maharashtra understand your skill needs to align ITI and polytechnic course intakes
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Form 7 cols matching Screenshot 5 */}
        <div className="lg:col-span-7 bg-white p-6 rounded border border-slate-300 shadow-2xs">
          <h2 className="text-sm font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
            Submit New Occupational Skill Requirement
          </h2>

          {validationError && (
            <div className="mb-4 p-3 bg-red-50 border border-red-300 rounded text-xs text-red-800 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>{validationError}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            
            {/* Job Role * */}
            <div>
              <label className="block font-semibold text-slate-800 mb-1">
                Job Role <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)}
                placeholder="e.g. Data Analyst, EV Battery Assembly Technician"
                className="w-full p-2.5 bg-white border border-slate-300 rounded outline-none focus:border-[#0A3A60] focus:ring-1 focus:ring-[#0A3A60]"
              />
            </div>

            {/* Grid 2 cols: Location & Sector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  Location / District <span className="text-red-600">*</span>
                </label>
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded outline-none font-medium text-slate-800 cursor-pointer"
                >
                  {districtsData.map((d) => (
                    <option key={d.id} value={d.id}>
                      {language === 'mr' ? d.nameMr : d.nameEn}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  Industry Sector <span className="text-red-600">*</span>
                </label>
                <select
                  value={industrySector}
                  onChange={(e) => setIndustrySector(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded outline-none font-medium text-slate-800 cursor-pointer"
                >
                  <option value="Automotive & EV">Automotive & EV</option>
                  <option value="IT & Software">IT & Software</option>
                  <option value="Manufacturing & Automation">Manufacturing & Automation</option>
                  <option value="Renewable Energy & Solar">Renewable Energy & Solar</option>
                  <option value="Pharma & Healthcare">Pharma & Healthcare</option>
                  <option value="Logistics & Warehousing">Logistics & Warehousing</option>
                </select>
              </div>
            </div>

            {/* Required Skills * matching Screenshot 5 */}
            <div>
              <label className="block font-semibold text-slate-800 mb-1">
                Required Skills <span className="text-red-600">*</span> (add multiple skills)
              </label>
              
              {/* Skill tags container */}
              <div className="flex flex-wrap items-center gap-1.5 p-2 bg-slate-50 border border-slate-300 rounded min-h-[44px]">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1 bg-[#ede9fe] text-[#5b21b6] border border-[#ddd6fe] px-2.5 py-1 rounded text-xs font-semibold"
                  >
                    <span>{skill}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(skill)}
                      className="text-[#6d28d9] hover:text-black cursor-pointer"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                
                <input
                  type="text"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyDown={handleAddSkill}
                  placeholder={skills.length === 0 ? "Type skill (e.g. Python) & press Enter" : "+ Add skill"}
                  className="flex-1 min-w-[120px] bg-transparent outline-none text-xs text-slate-800 placeholder-slate-400 py-1"
                />
              </div>
            </div>

            {/* Grid 2 cols: Proficiency Level & Number of Openings matching Screenshot 5 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  Proficiency Level
                </label>
                <select
                  value={proficiency}
                  onChange={(e) => setProficiency(e.target.value as typeof proficiency)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded outline-none font-medium text-slate-800 cursor-pointer"
                >
                  <option value="Beginner">Beginner (Apprentice / Fresh ITI)</option>
                  <option value="Intermediate">Intermediate (1-2 yrs experience)</option>
                  <option value="Advanced">Advanced (Supervisory / Specialist)</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  Number of Openings <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  required
                  min="1"
                  max="1000"
                  value={openings}
                  onChange={(e) => setOpenings(e.target.value)}
                  className="w-full p-2.5 bg-white border border-slate-300 rounded outline-none focus:border-[#0A3A60]"
                />
              </div>
            </div>

            {/* Minimum Qualification & CTC */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  Minimum Qualification
                </label>
                <input
                  type="text"
                  value={minQualification}
                  onChange={(e) => setMinQualification(e.target.value)}
                  className="w-full p-2.5 bg-white border border-slate-300 rounded outline-none focus:border-[#0A3A60]"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  Expected Salary Range
                </label>
                <input
                  type="text"
                  value={salaryRange}
                  onChange={(e) => setSalaryRange(e.target.value)}
                  className="w-full p-2.5 bg-white border border-slate-300 rounded outline-none focus:border-[#0A3A60]"
                />
              </div>
            </div>

            {/* Submit Button matching Screenshot 5 */}
            <div className="pt-2">
              <button
                type="submit"
                className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-6 py-2.5 rounded text-xs font-bold cursor-pointer transition-colors shadow-xs"
              >
                Submit Requirement
              </button>
            </div>

          </form>
        </div>

        {/* Right Recent Submissions 5 cols matching Screenshot 5 */}
        <div className="lg:col-span-5 bg-white p-6 rounded border border-slate-300 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200">
              <h2 className="text-sm font-bold text-slate-900">
                Recent Submissions & Validation Pipeline
              </h2>
              <span className="text-[11px] text-slate-500">
                {employerRequirements.length} Active
              </span>
            </div>

            <div className="space-y-3">
              {employerRequirements.map((req) => (
                <div
                  key={req.id}
                  className="p-3.5 rounded border border-slate-200 bg-slate-50 hover:bg-white hover:border-[#0A3A60] transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div>
                      <h3 className="text-xs font-bold text-slate-900 leading-snug">
                        {req.jobRole}
                      </h3>
                      <p className="text-[11px] text-slate-600">
                        {req.district} · {req.numberOfOpenings} openings · {req.submissionDate}
                      </p>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border shrink-0 ${
                      req.status === 'Verified'
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                        : req.status === 'Incorporated into Curriculum'
                        ? 'bg-purple-50 text-purple-800 border-purple-300'
                        : 'bg-amber-50 text-amber-800 border-amber-300'
                    }`}>
                      {req.status}
                    </span>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {req.requiredSkills.slice(0, 4).map((sk, i) => (
                      <span key={i} className="text-[10px] bg-slate-200/70 text-slate-700 px-1.5 py-0.2 rounded">
                        {sk}
                      </span>
                    ))}
                    {req.requiredSkills.length > 4 && (
                      <span className="text-[10px] text-slate-500">
                        +{req.requiredSkills.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-slate-200 bg-blue-50/70 p-3 rounded text-xs text-blue-900">
            <p className="font-semibold mb-0.5">Automated SSC Validation Process</p>
            <p className="text-[11px] text-blue-800">
              Submitted job openings are cross-verified by Maharashtra Sector Skill Councils and fed directly into the DVET Curriculum Revision Engine.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};
