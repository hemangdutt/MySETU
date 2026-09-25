import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { districtsData } from '../../data/districtsData';
import { ArrowLeft, Download, Building, Users, BookOpen, Wrench, GraduationCap, TrendingUp, CheckCircle, AlertTriangle, FileText } from 'lucide-react';

export const DistrictOfficerDashboard: React.FC = () => {
  const { selectedDistrict, setSelectedDistrict, setIsReportModalOpen, setActiveNav, setUserRole, language } = useApp();
  const [activeTab, setActiveTab] = useState<'overview' | 'demand' | 'gaps' | 'institutes' | 'recommendations'>('overview');
  const [trendRange, setTrendRange] = useState<'6M' | '1Y' | '3Y'>('1Y');

  const currentDist = districtsData.find((d) => d.id === selectedDistrict) || districtsData[0];

  const puneInstitutes = [
    { name: 'Government ITI Pune (Aundh)', trades: 24, intake: 1480, equipmentGap: 'Needs 5-Axis CNC & EV Lab', status: 'Priority Upgrade' },
    { name: 'Government ITI Haveli', trades: 16, intake: 820, equipmentGap: 'Needs PLC & SCADA Trainer kits', status: 'Moderate Review' },
    { name: 'Government ITI Pimpri-Chinchwad', trades: 20, intake: 1240, equipmentGap: 'Robotic Welding Simulator required', status: 'Priority Upgrade' },
    { name: 'Government ITI Bhor', trades: 10, intake: 460, equipmentGap: 'Basic Computer Lab modernization', status: 'Standard' },
    { name: 'Government ITI Baramati', trades: 18, intake: 980, equipmentGap: 'Solar PV & Microgrid wiring testbed', status: 'Pending Review' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 space-y-6">
      
      {/* Header bar matching Screenshot 3 */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white p-4 rounded border border-slate-300">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setUserRole('gov_admin');
              setActiveNav('labour');
            }}
            className="p-1.5 rounded border border-slate-300 hover:bg-slate-100 text-slate-700 cursor-pointer"
            title="Return to State Overview"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg sm:text-xl font-bold text-slate-900">
                {currentDist.nameEn} District ({currentDist.nameMr})
              </h1>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                District Officer View
              </span>
            </div>
            <p className="text-xs text-slate-600">
              Skill demand, supply and recommended training actions
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* District Quick Changer */}
          <select
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            className="bg-slate-50 border border-slate-300 text-xs px-2.5 py-1.5 rounded font-medium text-slate-800 outline-none cursor-pointer"
          >
            {districtsData.map((d) => (
              <option key={d.id} value={d.id}>
                {language === 'mr' ? d.nameMr : d.nameEn}
              </option>
            ))}
          </select>

          <button
            onClick={() => setIsReportModalOpen(true)}
            className="flex items-center gap-1.5 bg-[#0A3A60] hover:bg-[#072640] text-white px-3.5 py-1.5 rounded text-xs font-semibold cursor-pointer shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export District Report</span>
          </button>
        </div>
      </div>

      {/* District Banner Image & Metric Strip matching Screenshot 3 */}
      <div className="bg-white rounded border border-slate-300 overflow-hidden shadow-2xs">
        <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          
          {/* Visual Banner 4 cols */}
          <div className="md:col-span-4 relative bg-[#072640] min-h-[110px] flex items-center p-5 text-white">
            <div className="relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block">
                District Employment Cluster
              </span>
              <h2 className="text-xl font-bold text-white">
                {currentDist.nameEn} Industrial Zone
              </h2>
              <p className="text-xs text-slate-300 mt-1">
                Automotive Corridor (Chakan) & IT Corridor (Hinjawadi)
              </p>
            </div>
            {/* Background graphic */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg viewBox="0 0 200 100" className="w-full h-full object-cover">
                <path d="M0 100 L30 40 L60 80 L100 20 L140 70 L180 30 L200 100 Z" fill="#ffffff" />
              </svg>
            </div>
          </div>

          {/* Metric 1: Total Job Postings */}
          <div className="md:col-span-3 p-4 flex flex-col justify-between">
            <span className="text-xs text-slate-500 font-medium">Total Job Postings</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-bold text-slate-900 tabular-nums">
                {currentDist.jobPostings.toLocaleString('en-IN')}
              </span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                ↑ {currentDist.postingsGrowth}%
              </span>
            </div>
            <span className="text-[11px] text-slate-500 mt-1">verified web and industrial survey records</span>
          </div>

          {/* Metric 2: Top Sector */}
          <div className="md:col-span-3 p-4 flex flex-col justify-between">
            <span className="text-xs text-slate-500 font-medium">Top Industrial Sector</span>
            <div className="text-lg font-bold text-slate-900 mt-1">
              {currentDist.topSector}
            </div>
            <span className="text-[11px] text-slate-500 mt-1">leading new hiring requisitions</span>
          </div>

          {/* Metric 3: High Demand Skills */}
          <div className="md:col-span-2 p-4 flex flex-col justify-between">
            <span className="text-xs text-slate-500 font-medium">High Demand Skills</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-bold text-slate-900 tabular-nums">
                {currentDist.highDemandSkillsCount}
              </span>
              <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded">
                Growing
              </span>
            </div>
            <span className="text-[11px] text-slate-500 mt-1">priority technical domains</span>
          </div>

        </div>
      </div>

      {/* Navigation Tabs matching Screenshot 3 */}
      <div className="border-b border-slate-300 flex items-center space-x-1 text-xs font-semibold overflow-x-auto">
        {[
          { id: 'overview', label: 'Overview' },
          { id: 'demand', label: 'Demand Analysis' },
          { id: 'gaps', label: 'Skill Gaps' },
          { id: 'institutes', label: 'Training Institutes' },
          { id: 'recommendations', label: 'Recommendations' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={`px-4 py-2.5 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${
              activeTab === tab.id
                ? 'border-[#0A3A60] text-[#0A3A60] font-bold bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab 1: Overview matching Screenshot 3 */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Top In-Demand Roles (5 cols) matching Screenshot 3 */}
            <div className="lg:col-span-5 bg-white p-5 rounded border border-slate-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200">
                  <h2 className="text-sm font-bold text-slate-900">
                    Top In-Demand Roles
                  </h2>
                  <button
                    onClick={() => setActiveTab('demand')}
                    className="text-xs font-semibold text-[#0A3A60] hover:underline"
                  >
                    View All
                  </button>
                </div>

                <div className="space-y-3">
                  {currentDist.topRoles.map((role, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded border border-slate-200 bg-slate-50 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <div>
                          <h3 className="text-xs font-bold text-slate-900 leading-snug">
                            {role.role}
                          </h3>
                          <span className="text-[11px] text-slate-500 tabular-nums">
                            {role.postings.toLocaleString('en-IN')} postings
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-emerald-700 flex items-center gap-0.5">
                        ↑ {role.growth}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 text-right">
                <button
                  onClick={() => setActiveTab('demand')}
                  className="text-xs font-semibold text-[#0A3A60] hover:underline"
                >
                  Examine Detailed Requisition Log →
                </button>
              </div>
            </div>

            {/* Skill Demand Trend with 6M, 1Y, 3Y buttons (7 cols) matching Screenshot 3 */}
            <div className="lg:col-span-7 bg-white p-5 rounded border border-slate-300">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-200">
                <div>
                  <h2 className="text-sm font-bold text-slate-900">
                    Skill Demand Trend
                  </h2>
                  <p className="text-[11px] text-slate-500">
                    Monthly posting growth trajectories across leading technical skills
                  </p>
                </div>

                {/* Range switcher matching Screenshot 3 */}
                <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded border border-slate-300 text-xs font-bold">
                  {(['6M', '1Y', '3Y'] as const).map((r) => (
                    <button
                      key={r}
                      onClick={() => setTrendRange(r)}
                      className={`px-2.5 py-1 rounded cursor-pointer transition-colors ${
                        trendRange === r
                          ? 'bg-[#0A3A60] text-white shadow-2xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Trend Chart (Visual SVG graph) */}
              <div className="bg-slate-50 p-4 rounded border border-slate-200">
                <svg viewBox="0 0 500 200" className="w-full h-44">
                  {/* Grid Lines */}
                  <line x1="40" y1="20" x2="480" y2="20" stroke="#e2e8f0" strokeDasharray="3 3" />
                  <line x1="40" y1="70" x2="480" y2="70" stroke="#e2e8f0" strokeDasharray="3 3" />
                  <line x1="40" y1="120" x2="480" y2="120" stroke="#e2e8f0" strokeDasharray="3 3" />
                  <line x1="40" y1="170" x2="480" y2="170" stroke="#cbd5e1" />

                  {/* Y Axis labels */}
                  <text x="30" y="25" fontSize="9" fill="#94a3b8" textAnchor="end">15k</text>
                  <text x="30" y="75" fontSize="9" fill="#94a3b8" textAnchor="end">10k</text>
                  <text x="30" y="125" fontSize="9" fill="#94a3b8" textAnchor="end">5k</text>
                  <text x="30" y="175" fontSize="9" fill="#94a3b8" textAnchor="end">0</text>

                  {/* Line 1: Data Analysis (Purple #7c3aed) */}
                  <polyline
                    fill="none"
                    stroke="#7c3aed"
                    strokeWidth="2.5"
                    points="50,150 90,130 130,110 170,95 210,80 250,90 290,85 330,75 370,60 410,50 450,30"
                  />
                  {/* Line 2: EV Technology (Orange #ea580c) */}
                  <polyline
                    fill="none"
                    stroke="#ea580c"
                    strokeWidth="2"
                    points="50,170 90,160 130,150 170,140 210,135 250,120 290,125 330,115 370,105 410,95 450,90"
                  />
                  {/* Line 3: Industrial Automation (Amber #d97706) */}
                  <polyline
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="2"
                    points="50,165 90,150 130,145 170,130 210,120 250,140 290,130 330,120 370,110 410,85 450,75"
                  />
                  {/* Line 4: Cloud Computing (Blue #2563eb) */}
                  <polyline
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="2"
                    points="50,160 90,145 130,130 170,120 210,105 250,100 290,110 330,100 370,90 410,75 450,60"
                  />

                  {/* X Axis month labels */}
                  <text x="50" y="190" fontSize="9" fill="#64748b" textAnchor="middle">Jan</text>
                  <text x="130" y="190" fontSize="9" fill="#64748b" textAnchor="middle">Mar</text>
                  <text x="210" y="190" fontSize="9" fill="#64748b" textAnchor="middle">May</text>
                  <text x="290" y="190" fontSize="9" fill="#64748b" textAnchor="middle">Jul</text>
                  <text x="370" y="190" fontSize="9" fill="#64748b" textAnchor="middle">Sep</text>
                  <text x="450" y="190" fontSize="9" fill="#64748b" textAnchor="middle">Dec</text>
                </svg>

                {/* Legend matching Screenshot 3 */}
                <div className="flex flex-wrap items-center justify-center gap-4 text-xs mt-2 pt-2 border-t border-slate-200">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#7c3aed]" /> Data Analysis
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ea580c]" /> EV Technology
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#d97706]" /> Industrial Automation
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2563eb]" /> Cloud Computing
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Recommended Training Actions for Pune matching Screenshot 3 bottom strip */}
          <div className="bg-white p-5 rounded border border-slate-300">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200">
              <h2 className="text-sm font-bold text-slate-900">
                Recommended Training Actions for {currentDist.nameEn}
              </h2>
              <button
                onClick={() => setActiveTab('recommendations')}
                className="bg-[#0A3A60] hover:bg-[#072640] text-white px-3 py-1.5 rounded text-xs font-semibold cursor-pointer"
              >
                View Full Plan
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {/* Box 1 */}
              <div className="p-3.5 rounded border border-emerald-200 bg-emerald-50/50 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <Users className="w-4 h-4 text-emerald-700" />
                </div>
                <div>
                  <div className="text-xl font-bold text-emerald-900 tabular-nums">
                    +1,200
                  </div>
                  <p className="text-xs text-emerald-800 font-medium leading-snug mt-1">
                    Additional training seats required
                  </p>
                </div>
              </div>

              {/* Box 2 */}
              <div className="p-3.5 rounded border border-blue-200 bg-blue-50/50 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <BookOpen className="w-4 h-4 text-blue-700" />
                </div>
                <div>
                  <div className="text-xl font-bold text-blue-900 tabular-nums">
                    3
                  </div>
                  <p className="text-xs text-blue-800 font-medium leading-snug mt-1">
                    Courses to be updated urgently
                  </p>
                </div>
              </div>

              {/* Box 3 */}
              <div className="p-3.5 rounded border border-purple-200 bg-purple-50/50 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <FileText className="w-4 h-4 text-purple-700" />
                </div>
                <div>
                  <div className="text-xl font-bold text-purple-900 tabular-nums">
                    2
                  </div>
                  <p className="text-xs text-purple-800 font-medium leading-snug mt-1">
                    New courses recommended
                  </p>
                </div>
              </div>

              {/* Box 4 */}
              <div className="p-3.5 rounded border border-amber-200 bg-amber-50/50 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <Wrench className="w-4 h-4 text-amber-700" />
                </div>
                <div>
                  <div className="text-xl font-bold text-amber-900 tabular-nums">
                    12
                  </div>
                  <p className="text-xs text-amber-800 font-medium leading-snug mt-1">
                    Institutes need equipment upgrade
                  </p>
                </div>
              </div>

              {/* Box 5 */}
              <div className="p-3.5 rounded border border-red-200 bg-red-50/50 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <GraduationCap className="w-4 h-4 text-red-700" />
                </div>
                <div>
                  <div className="text-xl font-bold text-red-900 tabular-nums">
                    48
                  </div>
                  <p className="text-xs text-red-800 font-medium leading-snug mt-1">
                    Trainers need upskilling
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Demand Analysis */}
      {activeTab === 'demand' && (
        <div className="bg-white p-5 rounded border border-slate-300 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Detailed Occupation Demand Registry – {currentDist.nameEn}
              </h2>
              <p className="text-xs text-slate-500">
                Empirical hiring signals aggregated from MIDC clusters, Mahaswayam, and registered employers
              </p>
            </div>
            <span className="text-xs font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded border border-slate-300">
              Total Postings: {currentDist.jobPostings.toLocaleString('en-IN')}
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="gov-table text-xs">
              <thead>
                <tr>
                  <th>Job Title / Occupation</th>
                  <th>Industrial Sector</th>
                  <th>Active Postings</th>
                  <th>Annual Growth</th>
                  <th>Current District ITI Output</th>
                  <th>Supply Deficit</th>
                  <th>Action Needed</th>
                </tr>
              </thead>
              <tbody>
                {currentDist.topRoles.map((r, i) => (
                  <tr key={i}>
                    <td className="font-bold text-slate-900">{r.role}</td>
                    <td>{currentDist.topSector}</td>
                    <td className="tabular-nums">{r.postings.toLocaleString('en-IN')}</td>
                    <td className="text-emerald-700 font-bold">+{r.growth}%</td>
                    <td className="tabular-nums">{(r.postings * 0.6).toFixed(0)}</td>
                    <td className="text-red-700 font-bold">-{(r.postings * 0.4).toFixed(0)} seats</td>
                    <td>
                      <button
                        onClick={() => {
                          setUserRole('training_institute');
                          setActiveNav('curriculum');
                        }}
                        className="text-[11px] font-semibold text-[#0A3A60] hover:underline cursor-pointer"
                      >
                        Adjust ITI Quota →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 3: Training Institutes */}
      {activeTab === 'institutes' && (
        <div className="bg-white p-5 rounded border border-slate-300 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div>
              <h2 className="text-base font-bold text-slate-900">
                {currentDist.nameEn} District Training Institutes & Infrastructure Gaps
              </h2>
              <p className="text-xs text-slate-500">
                Monitoring 84 accredited government and private ITIs in the district
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="gov-table text-xs">
              <thead>
                <tr>
                  <th>Institute Name</th>
                  <th>Active Trades</th>
                  <th>Annual Sanctioned Intake</th>
                  <th>Identified Equipment & Lab Gaps</th>
                  <th>Inspection Priority</th>
                  <th>Admin Action</th>
                </tr>
              </thead>
              <tbody>
                {puneInstitutes.map((inst, idx) => (
                  <tr key={idx}>
                    <td className="font-bold text-slate-900">{inst.name}</td>
                    <td className="tabular-nums">{inst.trades}</td>
                    <td className="tabular-nums font-semibold">{inst.intake} seats</td>
                    <td className="text-amber-900 font-medium">{inst.equipmentGap}</td>
                    <td>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                        inst.status === 'Priority Upgrade'
                          ? 'bg-red-50 text-red-800 border-red-200'
                          : 'bg-slate-100 text-slate-800 border-slate-300'
                      }`}>
                        {inst.status}
                      </span>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          setUserRole('training_institute');
                          setActiveNav('curriculum');
                        }}
                        className="text-[11px] font-semibold text-[#0A3A60] hover:underline cursor-pointer"
                      >
                        Inspect Syllabus →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 4: Recommendations & Plan */}
      {activeTab === 'recommendations' && (
        <div className="bg-white p-5 rounded border border-slate-300 space-y-4">
          <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Formal District Skill Development Plan (DSDP) – {currentDist.nameEn}
              </h2>
              <p className="text-xs text-slate-500">
                Approved by District Skill Planning Committee (DSPC) under chairmanship of District Collector
              </p>
            </div>
            <button
              onClick={() => setIsReportModalOpen(true)}
              className="bg-[#0A3A60] text-white px-3 py-1.5 rounded text-xs font-semibold hover:bg-[#072640]"
            >
              Print DSDP Notification
            </button>
          </div>

          <div className="space-y-3">
            {currentDist.recommendedActions.map((act, i) => (
              <div key={i} className="p-3.5 bg-slate-50 rounded border border-slate-300 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h3 className="text-xs font-bold text-slate-900">Action Item {i + 1}</h3>
                  <p className="text-xs text-slate-700 mt-0.5">{act}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
