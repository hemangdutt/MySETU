import React from 'react';
import { useApp } from '../../context/AppContext';
import { UserRole } from '../../types';
import { X, ShieldCheck, Building2, GraduationCap, Briefcase, User, Globe, Check } from 'lucide-react';

export const RoleSelectorModal: React.FC = () => {
  const { isRoleModalOpen, setIsRoleModalOpen, userRole, setUserRole, setActiveNav, showNotification } = useApp();

  if (!isRoleModalOpen) return null;

  const roles: {
    id: UserRole;
    titleEn: string;
    titleMr: string;
    desc: string;
    targetNav: string;
    icon: React.ComponentType<{ className?: string }>;
    accentColor: string;
  }[] = [
    {
      id: 'public',
      titleEn: 'Public Information Portal',
      titleMr: 'सार्वजनिक माहिती पोर्टल',
      desc: 'Official public portal with Maharashtra state overview, key services, gazettes, and statewide indicators.',
      targetNav: 'home',
      icon: Globe,
      accentColor: 'border-slate-400 bg-slate-50 text-slate-800'
    },
    {
      id: 'gov_admin',
      titleEn: 'State Government Administrator',
      titleMr: 'राज्य शासन प्रशासक',
      desc: 'Statewide dashboard with district heatmaps, supply vs demand ratios, curriculum revision queues, and policy actions.',
      targetNav: 'labour',
      icon: ShieldCheck,
      accentColor: 'border-red-500 bg-red-50 text-red-900'
    },
    {
      id: 'district_officer',
      titleEn: 'District Skill Development Officer (Pune)',
      titleMr: 'जिल्हा कौशल्य विकास अधिकारी (पुणे)',
      desc: 'District-level analytics, training capacity deficits, institute equipment needs, and localized training planning.',
      targetNav: 'district_plan',
      icon: Building2,
      accentColor: 'border-blue-500 bg-blue-50 text-blue-900'
    },
    {
      id: 'training_institute',
      titleEn: 'Training Institute Principal / Faculty (Govt ITI Pune)',
      titleMr: 'प्रशिक्षण संस्था प्राचार्य / शिक्षक (शासकीय आयटीआय पुणे)',
      desc: 'Course syllabus alignment engine, COPA curriculum breakdown, industry demand comparison, and revision proposal submission.',
      targetNav: 'curriculum',
      icon: GraduationCap,
      accentColor: 'border-emerald-500 bg-emerald-50 text-emerald-900'
    },
    {
      id: 'employer',
      titleEn: 'Industry Employer / Recruiter',
      titleMr: 'उद्योग नियोक्ता / भरती अधिकारी',
      desc: 'Post emerging job skill requirements, validate training curriculums, and verify apprentice pipelines.',
      targetNav: 'industry',
      icon: Briefcase,
      accentColor: 'border-purple-500 bg-purple-50 text-purple-900'
    },
    {
      id: 'student',
      titleEn: 'Student / Career Seeker',
      titleMr: 'विद्यार्थी / नोकरी शोधणारा उमेदवार',
      desc: 'Explore demand-backed career pathways, verified salary benchmarks, recommended courses, and nearby accredited ITIs.',
      targetNav: 'skills',
      icon: User,
      accentColor: 'border-cyan-500 bg-cyan-50 text-cyan-900'
    }
  ];

  const handleSelectRole = (role: UserRole, targetNav: string, title: string) => {
    setUserRole(role);
    setActiveNav(targetNav);
    setIsRoleModalOpen(false);
    showNotification(`Switched workspace to: ${title}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded border border-slate-400 w-full max-w-3xl shadow-xl overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="bg-[#0A3A60] text-white px-6 py-4 flex items-center justify-between border-b-2 border-[#D96B27]">
          <div>
            <h2 className="text-base font-bold tracking-wide">
              Select User Role / Portal Access
            </h2>
            <p className="text-xs text-slate-300">
              MySETU Maharashtra Multi-Stakeholder Workspace Routing
            </p>
          </div>
          <button
            onClick={() => setIsRoleModalOpen(false)}
            className="text-slate-300 hover:text-white p-1 rounded hover:bg-[#072640] cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          <p className="text-xs text-slate-600 mb-4">
            Choose a persona below to experience the tailored administrative workflows, role-specific views, and actionable tools built for the Government of Maharashtra.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {roles.map((r) => {
              const Icon = r.icon;
              const isCurrent = userRole === r.id;
              return (
                <div
                  key={r.id}
                  onClick={() => handleSelectRole(r.id, r.targetNav, r.titleEn)}
                  className={`p-3.5 border rounded cursor-pointer transition-all flex flex-col justify-between ${
                    isCurrent
                      ? 'border-[#0A3A60] bg-blue-50/70 ring-2 ring-[#0A3A60]'
                      : 'border-slate-300 hover:border-slate-400 hover:bg-slate-50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className={`p-1.5 rounded ${r.accentColor}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-xs font-bold text-slate-900 leading-tight">
                          {r.titleEn}
                        </h3>
                      </div>
                      {isCurrent && (
                        <span className="flex items-center gap-1 text-[10px] font-bold text-[#0A3A60] bg-blue-100 px-1.5 py-0.5 rounded border border-blue-300 shrink-0">
                          <Check className="w-3 h-3" /> Active
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-600 leading-normal pl-8">
                      {r.desc}
                    </p>
                  </div>
                  
                  <div className="mt-3 pt-2 border-t border-slate-200 flex justify-end">
                    <button
                      type="button"
                      className="text-[11px] font-semibold text-[#0A3A60] hover:underline cursor-pointer"
                    >
                      Access Workspace →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 p-3 bg-amber-50 border border-amber-300 rounded text-[11px] text-amber-900 flex items-center justify-between">
            <span>
              <strong>Note:</strong> Role switching is fully unlocked for demonstration. In production, access is governed via Parichay (Single Sign-On for Government) and OTP-based mobile authentication.
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
