import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Home, BarChart3, TrendingUp, School, BookOpen, MapPin, Building, FileSpreadsheet, Cpu, Menu, X } from 'lucide-react';

export const GovNav: React.FC = () => {
  const { activeNav, setActiveNav, t, userRole, setIsRoleModalOpen } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: t('navHome'), icon: Home },
    { id: 'labour', label: t('navLabourInsights'), icon: BarChart3 },
    { id: 'skills', label: t('navSkillDemand'), icon: TrendingUp },
    { id: 'institutes', label: t('navTrainingInstitutes'), icon: School },
    { id: 'curriculum', label: t('navCurriculum'), icon: BookOpen },
    { id: 'district_plan', label: t('navDistrictPlanning'), icon: MapPin },
    { id: 'industry', label: t('navIndustry'), icon: Building },
    { id: 'reports', label: t('navReports'), icon: FileSpreadsheet },
    { id: 'nlp_extractor', label: t('navNlpExtractor'), icon: Cpu, badge: 'NLP Engine' }
  ];

  const handleNavClick = (id: string) => {
    setActiveNav(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-[#0A3A60] text-white border-b-2 border-[#D96B27] select-none sticky top-0 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between">
          <ul className="flex items-center space-x-0.5 text-xs font-medium list-none m-0 p-0 overflow-x-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeNav === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-1.5 px-3 py-3 whitespace-nowrap cursor-pointer transition-colors border-b-2 ${
                      isActive
                        ? 'bg-[#072640] border-[#D96B27] text-white font-semibold'
                        : 'border-transparent text-slate-100 hover:bg-[#0d4a7a] hover:text-white'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 opacity-90" />
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-400/40 px-1 py-0.2 rounded ml-0.5">
                        {item.badge}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Quick Dashboard Switch Tag */}
          <div className="flex items-center gap-2 text-xs py-1">
            <span className="text-slate-300 text-[11px] hidden xl:inline">Role View:</span>
            <button
              onClick={() => setIsRoleModalOpen(true)}
              className="text-[11px] bg-[#072640] hover:bg-[#0e3b61] text-amber-300 border border-amber-500/40 px-2 py-1 rounded cursor-pointer font-medium"
            >
              {userRole === 'gov_admin' && 'State Admin Mode'}
              {userRole === 'district_officer' && 'District Mode (Pune)'}
              {userRole === 'training_institute' && 'ITI Mode (Pune)'}
              {userRole === 'employer' && 'Employer Mode'}
              {userRole === 'student' && 'Student Mode'}
              {userRole === 'public' && 'Public Portal'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Header */}
        <div className="flex lg:hidden items-center justify-between py-2.5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">
              {navItems.find((i) => i.id === activeNav)?.label || 'Navigation'}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded hover:bg-[#0d4a7a] text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-2 border-t border-[#0e4b7b] bg-[#072640]">
            <ul className="flex flex-col space-y-1 text-xs list-none p-0 m-0">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeNav === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center gap-2 w-full px-3 py-2 text-left ${
                        isActive
                          ? 'bg-[#0f4a7c] text-white font-semibold border-l-4 border-[#D96B27]'
                          : 'text-slate-200 hover:bg-[#0c395e]'
                      }`}
                    >
                      <Icon className="w-4 h-4 text-amber-400" />
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1 rounded ml-auto">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

      </div>
    </nav>
  );
};
