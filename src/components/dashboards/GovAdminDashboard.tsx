import React from 'react';
import { useApp } from '../../context/AppContext';
import { districtsData } from '../../data/districtsData';
import { topSkillsStatewide, sectorDemandVsSupply, skillGapBreakdown, stateRecommendedActions } from '../../data/skillsData';
import { ShieldCheck, Filter, Download, ArrowUpRight, CheckCircle2, AlertTriangle, BookOpen, Layers, MapPin, Building, ChevronRight } from 'lucide-react';

export const GovAdminDashboard: React.FC = () => {
  const {
    selectedDistrict,
    setSelectedDistrict,
    selectedSector,
    setSelectedSector,
    selectedTimeRange,
    setSelectedTimeRange,
    setIsReportModalOpen,
    setActiveNav,
    setUserRole,
    language
  } = useApp();

  const currentDist = districtsData.find((d) => d.id === selectedDistrict) || districtsData[0];

  const handleDrilldownDistrict = (distId: string) => {
    setSelectedDistrict(distId);
    setUserRole('district_officer');
    setActiveNav('district_plan');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 space-y-6">
      
      {/* Top Banner / Filter Strip matching Screenshot 2 */}
      <div className="bg-white p-4 rounded border border-slate-300 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-red-800 bg-red-50 px-2 py-0.5 rounded border border-red-200">
              State Government Administration
            </span>
            <span className="text-xs text-slate-500">· Directorate of Vocational Education & Training</span>
          </div>
          <h1 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
            Labour Market Intelligence for a Skilled Maharashtra
          </h1>
          <p className="text-xs text-slate-600">
            From real-world demand to actionable training plans across 36 districts
          </p>
        </div>

        {/* Global Administrative Filters */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          {/* District selector */}
          <div className="flex items-center gap-1 bg-slate-50 border border-slate-300 rounded px-2.5 py-1.5">
            <MapPin className="w-3.5 h-3.5 text-slate-500" />
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="bg-transparent text-slate-800 font-medium outline-none cursor-pointer"
            >
              <option value="all">Statewide (All Districts)</option>
              {districtsData.map((d) => (
                <option key={d.id} value={d.id}>
                  {language === 'mr' ? d.nameMr : d.nameEn}
                </option>
              ))}
            </select>
          </div>

          {/* Sector selector */}
          <div className="flex items-center gap-1 bg-slate-50 border border-slate-300 rounded px-2.5 py-1.5">
            <Filter className="w-3.5 h-3.5 text-slate-500" />
            <select
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
              className="bg-transparent text-slate-800 font-medium outline-none cursor-pointer"
            >
              <option value="All Sectors">All Sectors</option>
              <option value="IT & Software">IT & Software</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Automotive & EV">Automotive & EV</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Construction">Construction</option>
            </select>
          </div>

          {/* Time Period */}
          <div className="bg-slate-50 border border-slate-300 rounded px-2.5 py-1.5 font-medium text-slate-800">
            <select
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}
              className="bg-transparent outline-none cursor-pointer"
            >
              <option value="Last 1 Year">Last 1 Year</option>
              <option value="Last 6 Months">Last 6 Months</option>
              <option value="Last 3 Years">Last 3 Years</option>
            </select>
          </div>

          {/* Export Report Button */}
          <button
            onClick={() => setIsReportModalOpen(true)}
            className="flex items-center gap-1.5 bg-[#0A3A60] hover:bg-[#072640] text-white px-3 py-1.5 rounded font-semibold cursor-pointer shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export State Report</span>
          </button>
        </div>
      </div>

      {/* 4 Top KPI Cards matching Screenshot 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* KPI 1 */}
        <div className="bg-white p-4 rounded border border-slate-300 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
            <span className="font-semibold">Total Job Postings Analysed</span>
            <span className="text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
              ↑ 28%
            </span>
          </div>
          <div className="text-2xl font-bold text-slate-900 tabular-nums">
            1,24,532
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            from online job portals, surveys, and industry clusters
          </p>
        </div>

        {/* KPI 2 */}
        <div className="bg-white p-4 rounded border border-slate-300 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
            <span className="font-semibold">High Demand Skills</span>
            <span className="text-blue-700 font-bold bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
              ↑ 16%
            </span>
          </div>
          <div className="text-2xl font-bold text-slate-900 tabular-nums">
            342
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            skills with fast accelerating industry requisition
          </p>
        </div>

        {/* KPI 3 */}
        <div className="bg-white p-4 rounded border border-slate-300 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
            <span className="font-semibold">Skill Gaps Identified</span>
            <span className="text-orange-700 font-bold bg-orange-50 px-1.5 py-0.5 rounded border border-orange-200">
              ↑ 32%
            </span>
          </div>
          <div className="text-2xl font-bold text-slate-900 tabular-nums">
            128
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            across districts and technical sectors
          </p>
        </div>

        {/* KPI 4 */}
        <div className="bg-white p-4 rounded border border-slate-300 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
            <span className="font-semibold">Courses to be Updated</span>
            <span className="text-red-700 font-bold bg-red-50 px-1.5 py-0.5 rounded border border-red-200">
              ↑ 12%
            </span>
          </div>
          <div className="text-2xl font-bold text-slate-900 tabular-nums">
            64
          </div>
          <p className="text-[11px] text-slate-500 mt-1">
            based on demand mismatch and outdated modules
          </p>
        </div>
      </div>

      {/* Main Section: Skill Demand Heatmap & Top In-Demand Skills matching Screenshot 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Heatmap 7 cols */}
        <div className="lg:col-span-7 bg-white p-5 rounded border border-slate-300">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200">
            <div>
              <h2 className="text-sm font-bold text-slate-900">
                Skill Demand Heatmap – Maharashtra
              </h2>
              <p className="text-xs text-slate-500">
                Top in-demand skills by district. Click district node to examine local plan.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-slate-600">
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-[#1e3a8a] rounded-xs" /> Very High</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-[#3b82f6] rounded-xs" /> High</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-[#93c5fd] rounded-xs" /> Moderate</span>
            </div>
          </div>

          {/* Interactive Heatmap Representation */}
          <div className="p-4 bg-slate-50 rounded border border-slate-200 flex flex-col items-center">
            <div className="w-full flex justify-between items-center text-xs mb-2">
              <span className="font-semibold text-slate-700">Currently Focused:</span>
              <button
                onClick={() => handleDrilldownDistrict(currentDist.id)}
                className="text-xs font-bold text-[#0A3A60] hover:underline flex items-center gap-1"
              >
                <span>Drill down into {currentDist.nameEn}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Quick District Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full mt-2">
              {districtsData.map((d) => (
                <div
                  key={d.id}
                  onClick={() => setSelectedDistrict(d.id)}
                  className={`p-2 rounded border cursor-pointer transition-all text-xs ${
                    selectedDistrict === d.id
                      ? 'border-[#0A3A60] bg-blue-100/60 font-bold'
                      : 'border-slate-300 bg-white hover:bg-slate-50 text-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span>{d.nameEn}</span>
                    <span className={`w-2 h-2 rounded-full ${d.skillDemandLevel === 'Very High' ? 'bg-[#1e3a8a]' : d.skillDemandLevel === 'High' ? 'bg-[#3b82f6]' : 'bg-[#93c5fd]'}`} />
                  </div>
                  <div className="text-[10px] text-slate-500">
                    {d.jobPostings.toLocaleString('en-IN')} postings
                  </div>
                </div>
              ))}
            </div>

            {/* District Popover Box */}
            <div className="mt-4 p-3 bg-white border border-blue-200 rounded w-full shadow-2xs">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-bold text-[#0A3A60] text-sm">{currentDist.nameEn} Cluster</span>
                <span className="text-emerald-700 font-semibold">+{currentDist.postingsGrowth}% YoY Growth</span>
              </div>
              <p className="text-xs text-slate-700">
                <strong>Dominant Sector:</strong> {currentDist.topSector} · <strong>Top Skills:</strong> {currentDist.topSkills.join(', ')}
              </p>
            </div>
          </div>
        </div>

        {/* Top In-Demand Skills 5 cols matching Screenshot 2 */}
        <div className="lg:col-span-5 bg-white p-5 rounded border border-slate-300 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200">
              <h2 className="text-sm font-bold text-slate-900">
                Top In-Demand Skills (Statewide)
              </h2>
              <button
                onClick={() => setActiveNav('skills')}
                className="text-xs font-semibold text-[#0A3A60] hover:underline"
              >
                View All
              </button>
            </div>

            <div className="space-y-3.5">
              {topSkillsStatewide.slice(0, 5).map((skill, idx) => {
                const maxVol = topSkillsStatewide[0].demandVolume;
                const pct = (skill.demandVolume / maxVol) * 100;
                return (
                  <div key={skill.id} className="text-xs">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="w-5 font-bold text-slate-400 tabular-nums">
                          {idx + 1}
                        </span>
                        <span className="font-semibold text-slate-900">
                          {skill.name}
                        </span>
                      </div>
                      <span className="tabular-nums font-bold text-slate-700">
                        {skill.demandVolume.toLocaleString('en-IN')}
                      </span>
                    </div>
                    {/* Visual Progress Bar in Purple/Blue tone from reference */}
                    <div className="w-full bg-slate-100 rounded-xs h-2.5 overflow-hidden">
                      <div
                        className="bg-[#6366f1] h-full rounded-xs transition-all duration-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
            <span className="text-slate-600">Normalized via DVET Skill Taxonomy</span>
            <button
              onClick={() => setActiveNav('skills')}
              className="text-[#0A3A60] font-semibold hover:underline"
            >
              Analyze Skill Trends →
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Row matching Screenshot 2:
          1. Demand vs Training Supply
          2. Skill Gap Overview (Donut chart)
          3. Recommended Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Demand vs Supply Chart (4 cols) */}
        <div className="lg:col-span-4 bg-white p-5 rounded border border-slate-300">
          <div className="mb-3 pb-2 border-b border-slate-200">
            <h2 className="text-sm font-bold text-slate-900">
              Demand vs Training Supply
            </h2>
            <div className="flex items-center gap-4 text-[11px] text-slate-600 mt-1">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-xs bg-[#6366f1]" /> Industry Demand
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-xs bg-[#60a5fa]" /> Training Supply
              </span>
            </div>
          </div>

          <div className="space-y-3.5 pt-2">
            {sectorDemandVsSupply.map((s, idx) => (
              <div key={idx} className="text-xs">
                <div className="flex justify-between font-semibold text-slate-800 mb-1">
                  <span>{s.sector}</span>
                  <span className="text-red-700 text-[11px]">
                    Deficit: -{(s.deficit / 1000).toFixed(1)}k
                  </span>
                </div>
                {/* Dual bar */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-500 w-12">Demand:</span>
                    <div className="w-full bg-slate-100 h-2 rounded-xs overflow-hidden">
                      <div className="bg-[#6366f1] h-full" style={{ width: `${(s.industryDemand / 25000) * 100}%` }} />
                    </div>
                    <span className="text-[10px] w-8 text-right font-semibold">
                      {(s.industryDemand / 1000).toFixed(0)}k
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-500 w-12">Supply:</span>
                    <div className="w-full bg-slate-100 h-2 rounded-xs overflow-hidden">
                      <div className="bg-[#60a5fa] h-full" style={{ width: `${(s.trainingSupply / 25000) * 100}%` }} />
                    </div>
                    <span className="text-[10px] w-8 text-right font-semibold">
                      {(s.trainingSupply / 1000).toFixed(0)}k
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Gap Overview Donut (4 cols) */}
        <div className="lg:col-span-4 bg-white p-5 rounded border border-slate-300 flex flex-col justify-between">
          <div>
            <div className="mb-3 pb-2 border-b border-slate-200">
              <h2 className="text-sm font-bold text-slate-900">
                Skill Gap Overview
              </h2>
              <p className="text-xs text-slate-500">128 identified skill gaps categorised by severity</p>
            </div>

            {/* Visual Donut representation */}
            <div className="flex items-center justify-center my-4">
              <div className="relative w-36 h-36 rounded-full border-8 border-slate-100 flex items-center justify-center shadow-inner" style={{
                background: 'conic-gradient(#DC2626 0% 22%, #EA580C 22% 58%, #D97706 58% 88%, #16A34A 88% 100%)'
              }}>
                <div className="w-24 h-24 rounded-full bg-white flex flex-col items-center justify-center shadow-xs">
                  <span className="text-xl font-bold text-slate-900">128</span>
                  <span className="text-[10px] text-slate-500 font-semibold uppercase">Skill Gaps</span>
                </div>
              </div>
            </div>

            {/* Legend items */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              {skillGapBreakdown.map((gap, i) => (
                <div key={i} className="flex items-center gap-1.5 p-1.5 rounded bg-slate-50 border border-slate-200">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: gap.color }} />
                  <span className="font-semibold text-slate-800">{gap.severity}:</span>
                  <span className="tabular-nums text-slate-600 font-bold ml-auto">
                    {gap.count} ({gap.percentage}%)
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 text-center">
            <button
              onClick={() => setActiveNav('curriculum')}
              className="text-xs font-semibold text-[#0A3A60] hover:underline"
            >
              Inspect Gap Diagnostic Matrix →
            </button>
          </div>
        </div>

        {/* Recommended Actions (4 cols) matching Screenshot 2 */}
        <div className="lg:col-span-4 bg-white p-5 rounded border border-slate-300 flex flex-col justify-between">
          <div>
            <div className="mb-3 pb-2 border-b border-slate-200 flex items-center justify-between">
              <h2 className="text-sm font-bold text-slate-900">
                Recommended Actions
              </h2>
              <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300">
                Policy Pipeline
              </span>
            </div>

            <div className="space-y-2.5">
              {stateRecommendedActions.map((rec) => (
                <div
                  key={rec.id}
                  onClick={() => {
                    if (rec.id === 1) setActiveNav('curriculum');
                    else if (rec.id === 3) setActiveNav('district_plan');
                    else setActiveNav('institutes');
                  }}
                  className="p-2.5 rounded border border-slate-200 bg-slate-50 hover:bg-white hover:border-[#0A3A60] cursor-pointer transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-slate-900">
                      {rec.action}
                    </span>
                    <span className="text-[10px] uppercase font-semibold text-slate-500 bg-white px-1.5 py-0.2 rounded border border-slate-200">
                      {rec.tag}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    {rec.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200">
            <button
              onClick={() => setActiveNav('district_plan')}
              className="w-full bg-[#0A3A60] hover:bg-[#072640] text-white py-2 rounded text-xs font-bold transition-colors cursor-pointer text-center"
            >
              Generate State Skill Training Plan
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
