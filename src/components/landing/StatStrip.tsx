import React from 'react';
import { useApp } from '../../context/AppContext';
import { Briefcase, Users, TrendingUp, BookOpen, School, MapPin } from 'lucide-react';

export const StatStrip: React.FC = () => {
  const { t, setActiveNav } = useApp();

  const stats = [
    {
      id: 'stat-postings',
      value: '12,34,567',
      label: t('kpiJobPostings'),
      growth: '↑ 28%',
      growthDesc: 'from previous year',
      icon: Briefcase,
      accentBg: 'bg-blue-50 text-blue-800 border-blue-200',
      iconBg: 'bg-blue-600 text-white',
      targetNav: 'labour'
    },
    {
      id: 'stat-skills',
      value: '342',
      label: t('kpiHighDemandSkills'),
      growth: '↑ 16%',
      growthDesc: 'across key sectors',
      icon: Users,
      accentBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      iconBg: 'bg-emerald-600 text-white',
      targetNav: 'skills'
    },
    {
      id: 'stat-gaps',
      value: '128',
      label: t('kpiSkillGaps'),
      growth: '↑ 32%',
      growthDesc: 'across districts',
      icon: TrendingUp,
      accentBg: 'bg-orange-50 text-orange-800 border-orange-200',
      iconBg: 'bg-orange-600 text-white',
      targetNav: 'curriculum'
    },
    {
      id: 'stat-courses',
      value: '64',
      label: t('kpiCoursesUpdate'),
      growth: '↑ 12%',
      growthDesc: 'based on demand mismatch',
      icon: BookOpen,
      accentBg: 'bg-purple-50 text-purple-800 border-purple-200',
      iconBg: 'bg-purple-600 text-white',
      targetNav: 'curriculum'
    },
    {
      id: 'stat-institutes',
      value: '1,240',
      label: t('kpiInstitutesMapped'),
      growth: '100%',
      growthDesc: 'across Maharashtra',
      icon: School,
      accentBg: 'bg-red-50 text-red-800 border-red-200',
      iconBg: 'bg-red-600 text-white',
      targetNav: 'institutes'
    },
    {
      id: 'stat-districts',
      value: '36',
      label: t('kpiDistrictPlans'),
      growth: 'Active',
      growthDesc: 'data-driven recommendations',
      icon: MapPin,
      accentBg: 'bg-amber-50 text-amber-800 border-amber-200',
      iconBg: 'bg-amber-600 text-white',
      targetNav: 'district_plan'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 -mt-6 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.id}
              onClick={() => setActiveNav(s.targetNav)}
              className={`p-3.5 rounded border ${s.accentBg} bg-white shadow-xs cursor-pointer hover:shadow-md transition-shadow flex flex-col justify-between`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`w-8 h-8 rounded flex items-center justify-center ${s.iconBg} shadow-2xs`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-bold text-slate-700 tabular-nums">
                  {s.growth}
                </span>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 tabular-nums">
                  {s.value}
                </div>
                <h2 className="text-xs font-semibold text-slate-800 leading-snug mt-1">
                  {s.label}
                </h2>
                <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">
                  {s.growthDesc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
