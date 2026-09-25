import React from 'react';
import { useApp } from '../../context/AppContext';
import { Search, UserCheck, ShieldCheck, Sparkles, Building2, GraduationCap, Briefcase, User } from 'lucide-react';

export const MainGovHeader: React.FC = () => {
  const {
    t,
    userRole,
    setIsRoleModalOpen,
    searchQuery,
    setSearchQuery,
    searchCategory,
    setSearchCategory,
    setActiveNav
  } = useApp();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setActiveNav('skills');
    }
  };

  const getRoleBadge = () => {
    switch (userRole) {
      case 'gov_admin':
        return { label: 'State Admin', color: 'bg-red-800 text-white', icon: ShieldCheck };
      case 'district_officer':
        return { label: 'District Officer (Pune)', color: 'bg-blue-800 text-white', icon: Building2 };
      case 'training_institute':
        return { label: 'Govt ITI Pune', color: 'bg-emerald-800 text-white', icon: GraduationCap };
      case 'employer':
        return { label: 'Industry Employer', color: 'bg-purple-800 text-white', icon: Briefcase };
      case 'student':
        return { label: 'Candidate / Student', color: 'bg-cyan-800 text-white', icon: User };
      default:
        return { label: 'Public Portal', color: 'bg-slate-700 text-white', icon: UserCheck };
    }
  };

  const currentRoleInfo = getRoleBadge();
  const RoleIcon = currentRoleInfo.icon;

  return (
    <div className="bg-white border-b border-slate-300 py-3 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
        
        {/* Left: National & State Identity */}
        <div className="flex items-center gap-3 w-full lg:w-auto">
          {/* Ashoka Emblem SVG */}
          <div className="flex-shrink-0 w-12 h-14 flex items-center justify-center" title="National Emblem of India">
            <svg viewBox="0 0 100 120" className="w-12 h-14 text-slate-800" fill="currentColor">
              {/* Simplified Ashoka Pillar Emblem representation */}
              <circle cx="50" cy="18" r="8" fill="#1e293b" />
              <path d="M42 26 L58 26 L55 52 L45 52 Z" fill="#1e293b" />
              <path d="M35 34 Q50 30 65 34 L62 50 L38 50 Z" fill="#334155" />
              <path d="M26 40 Q50 36 74 40 L70 55 L30 55 Z" fill="#475569" />
              {/* Base abacus with Ashoka Chakra */}
              <rect x="25" y="58" width="50" height="10" rx="1" fill="#1e293b" />
              <circle cx="50" cy="63" r="4" fill="#ffffff" />
              <circle cx="50" cy="63" r="2" fill="#0A3A60" />
              {/* Stepped plinth */}
              <rect x="20" y="70" width="60" height="6" rx="1" fill="#475569" />
              <rect x="15" y="78" width="70" height="8" rx="1" fill="#1e293b" />
              <text x="50" y="100" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#0f172a" letterSpacing="0.5">
                सत्यमेव जयते
              </text>
            </svg>
          </div>

          <div className="border-l border-slate-300 pl-3">
            <div className="flex items-baseline gap-2">
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0A3A60] m-0">
                {t('appTitle')}
              </h1>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 px-1.5 py-0.5 border border-amber-200 rounded">
                GoM
              </span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-tight">
              {t('appSubtitle')}
            </p>
            <p className="text-[11px] text-slate-500 font-medium">
              {t('govOfMaharashtra')} · {t('appFullForm')}
            </p>
          </div>
        </div>

        {/* Center: Maharashtra Silhouette & State Motto */}
        <div className="hidden xl:flex items-center gap-3 px-4 py-1.5 bg-slate-50 rounded border border-slate-200">
          {/* Maharashtra Map Outline SVG */}
          <svg className="w-10 h-10 text-[#0A3A60] opacity-80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M 25 35 L 35 25 L 55 20 L 75 30 L 85 45 L 75 70 L 60 85 L 45 80 L 30 75 L 20 60 L 25 45 Z" fill="#e2e8f0" stroke="#0A3A60" />
            <circle cx="45" cy="55" r="3" fill="#D96B27" />
          </svg>
          <div className="text-left">
            <p className="text-xs font-semibold text-[#0A3A60] tracking-wide italic">
              "{t('motto')}"
            </p>
            <p className="text-[10px] text-slate-500">
              SIH Problem Statement 134 · Labour Intelligence
            </p>
          </div>
        </div>

        {/* Right: Search Bar & Role Switcher */}
        <div className="flex items-center gap-3 w-full lg:w-auto justify-end">
          {/* Functional Search */}
          <form onSubmit={handleSearchSubmit} className="flex items-center w-full sm:w-80 lg:w-72 border border-slate-300 rounded overflow-hidden shadow-xs focus-within:ring-2 focus-within:ring-[#0A3A60]">
            <select
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
              className="bg-slate-100 text-xs px-2 py-1.5 text-slate-700 border-r border-slate-300 outline-none cursor-pointer"
              aria-label="Search filter category"
            >
              <option value="all">All</option>
              <option value="skills">Skills</option>
              <option value="courses">Courses</option>
              <option value="districts">Districts</option>
              <option value="reports">Reports</option>
            </select>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('searchPlaceholder').slice(0, 32) + '...'}
              className="w-full text-xs px-2.5 py-1.5 outline-none text-slate-800 placeholder-slate-400"
            />
            <button
              type="submit"
              className="bg-[#0A3A60] hover:bg-[#072640] text-white px-3 py-1.5 transition-colors cursor-pointer"
              title={t('searchButton')}
              aria-label="Submit search"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Role Switcher Button */}
          <button
            type="button"
            onClick={() => setIsRoleModalOpen(true)}
            className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 px-2.5 py-1.5 rounded text-xs font-semibold cursor-pointer transition-colors shadow-2xs whitespace-nowrap"
            title="Switch Dashboard or Authenticate as Government, District, Institute, Employer, or Student"
          >
            <RoleIcon className="w-3.5 h-3.5 text-[#0A3A60]" />
            <span className="hidden sm:inline text-slate-600 font-normal">Role:</span>
            <span className={`text-[11px] px-1.5 py-0.5 rounded font-bold ${currentRoleInfo.color}`}>
              {currentRoleInfo.label}
            </span>
          </button>
        </div>

      </div>
    </div>
  );
};
