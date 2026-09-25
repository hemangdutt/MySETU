import React from 'react';
import { useApp } from '../../context/AppContext';
import { Search, BookOpen, Layers, MapPin, Building, GraduationCap, ArrowRight } from 'lucide-react';

export const KeyServicesSection: React.FC = () => {
  const { t, setActiveNav } = useApp();

  const services = [
    {
      id: 'service-labour',
      title: t('serviceLabourTitle'),
      desc: t('serviceLabourDesc'),
      icon: Search,
      targetNav: 'labour',
      color: 'text-blue-700 bg-blue-50 border-blue-200'
    },
    {
      id: 'service-gap',
      title: t('serviceGapTitle'),
      desc: t('serviceGapDesc'),
      icon: Layers,
      targetNav: 'curriculum',
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200'
    },
    {
      id: 'service-curriculum',
      title: t('serviceCurriculumTitle'),
      desc: t('serviceCurriculumDesc'),
      icon: BookOpen,
      targetNav: 'curriculum',
      color: 'text-amber-700 bg-amber-50 border-amber-200'
    },
    {
      id: 'service-district',
      title: t('serviceDistrictTitle'),
      desc: t('serviceDistrictDesc'),
      icon: MapPin,
      targetNav: 'district_plan',
      color: 'text-purple-700 bg-purple-50 border-purple-200'
    },
    {
      id: 'service-industry',
      title: t('serviceIndustryTitle'),
      desc: t('serviceIndustryDesc'),
      icon: Building,
      targetNav: 'industry',
      color: 'text-indigo-700 bg-indigo-50 border-indigo-200'
    },
    {
      id: 'service-career',
      title: t('serviceCareerTitle'),
      desc: t('serviceCareerDesc'),
      icon: GraduationCap,
      targetNav: 'skills',
      color: 'text-rose-700 bg-rose-50 border-rose-200'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 mt-10">
      <div className="flex items-center justify-between mb-4 border-b border-slate-300 pb-2">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
            <span className="w-1.5 h-4 bg-[#0A3A60] rounded-xs" />
            {t('keyServicesTitle')}
          </h2>
          <p className="text-xs text-slate-600 mt-0.5">
            {t('keyServicesSubtitle')}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.id}
              onClick={() => setActiveNav(s.targetNav)}
              className="p-4 rounded border border-slate-300 bg-white hover:border-[#0A3A60] hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded border ${s.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] text-slate-400 group-hover:text-[#0A3A60] transition-colors flex items-center gap-1 font-semibold">
                    Access Portal <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#0A3A60] transition-colors mb-1.5">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Verified DVET Schema</span>
                <span className="text-[#0A3A60] font-semibold">Proceed →</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
