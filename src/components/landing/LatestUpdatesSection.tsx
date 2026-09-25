import React from 'react';
import { useApp } from '../../context/AppContext';
import { latestUpdatesData, importantGovLinks } from '../../data/employerStudentData';
import { Bell, ExternalLink, Calendar, ArrowRight } from 'lucide-react';

export const LatestUpdatesSection: React.FC = () => {
  const { t, language, setIsReportModalOpen } = useApp();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left 8 cols: Latest Updates & Circulars */}
        <div className="lg:col-span-8 bg-white p-5 rounded border border-slate-300">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200">
            <h2 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
              <Bell className="w-4 h-4 text-[#D96B27]" />
              {t('latestUpdatesTitle')}
            </h2>
            <button
              onClick={() => setIsReportModalOpen(true)}
              className="text-xs font-semibold text-[#0A3A60] hover:underline cursor-pointer flex items-center gap-1"
            >
              <span>{t('viewAllUpdates')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="divide-y divide-slate-200">
            {latestUpdatesData.map((item) => (
              <div
                key={item.id}
                onClick={() => setIsReportModalOpen(true)}
                className="py-3 flex items-start gap-4 hover:bg-slate-50 px-2 rounded cursor-pointer transition-colors"
              >
                {/* Date Badge */}
                <div className="shrink-0 bg-slate-100 text-slate-800 border border-slate-300 rounded px-2.5 py-1.5 text-center w-20">
                  <div className="text-xs font-bold leading-none font-mono">
                    {item.date.slice(0, 2)}
                  </div>
                  <div className="text-[10px] text-slate-600 font-semibold uppercase mt-0.5">
                    {item.date.slice(3, 6)}
                  </div>
                  <div className="text-[9px] text-slate-500 font-mono">
                    {item.date.slice(7)}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                      {item.category}
                    </span>
                    {item.isNew && (
                      <span className="text-[10px] font-bold text-white bg-red-600 px-1.5 py-0.5 rounded animate-pulse">
                        New
                      </span>
                    )}
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug hover:text-[#0A3A60]">
                    {language === 'mr' ? item.titleMr : item.titleEn}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1">
                    {item.department}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right 4 cols: Important Government Links */}
        <div className="lg:col-span-4 bg-white p-5 rounded border border-slate-300 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200">
              <h2 className="text-sm sm:text-base font-bold text-slate-900">
                {t('importantLinksTitle')}
              </h2>
            </div>

            <ul className="space-y-2 text-xs list-none p-0 m-0">
              {importantGovLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded hover:bg-slate-100 border border-slate-200 text-slate-800 transition-colors group"
                  >
                    <span className="font-medium group-hover:text-[#0A3A60]">
                      {language === 'mr' ? link.titleMr : link.titleEn}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0A3A60] shrink-0 ml-2" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Grievance & Helpdesk card */}
          <div className="mt-5 p-3.5 bg-blue-50 border border-blue-200 rounded text-xs text-blue-950">
            <h4 className="font-bold mb-1">State Skill Helpdesk (Toll Free)</h4>
            <p className="text-[11px] text-blue-800">
              For ITI admissions, industry apprenticeship tie-ups, and curriculum suggestions:
            </p>
            <p className="font-mono font-bold text-sm text-[#0A3A60] mt-1">
              1800 120 8040 / 022-22620603
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
