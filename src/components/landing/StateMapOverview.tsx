import React from 'react';
import { useApp } from '../../context/AppContext';
import { districtsData } from '../../data/districtsData';
import { topSkillsStatewide } from '../../data/skillsData';
import { MapPin, TrendingUp, Building, ArrowRight } from 'lucide-react';

export const StateMapOverview: React.FC = () => {
  const { selectedDistrict, setSelectedDistrict, setActiveNav, language, setUserRole } = useApp();

  const currentDist = districtsData.find((d) => d.id === selectedDistrict) || districtsData[0];

  const handleOpenDistrictDashboard = (districtId: string) => {
    setSelectedDistrict(districtId);
    setUserRole('district_officer');
    setActiveNav('district_plan');
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left 7 cols: Interactive District Heatmap */}
        <div className="lg:col-span-7 bg-white p-5 rounded border border-slate-300">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4 pb-2 border-b border-slate-200">
            <div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#0A3A60]" />
                Skill Demand Heatmap – Maharashtra
              </h2>
              <p className="text-xs text-slate-500">
                District-wise industry requisition density and technical skill concentration
              </p>
            </div>
            
            {/* Legend */}
            <div className="flex items-center gap-3 text-[11px] text-slate-600 bg-slate-50 px-2.5 py-1 rounded border border-slate-200">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-xs bg-[#1e3a8a]" /> Very High
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-xs bg-[#3b82f6]" /> High
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-xs bg-[#93c5fd]" /> Moderate
              </span>
            </div>
          </div>

          {/* SVG Map of Maharashtra with Clickable District Regions */}
          <div className="relative bg-slate-50 rounded border border-slate-200 p-4 flex flex-col items-center">
            <svg viewBox="0 0 700 480" className="w-full max-h-[380px]" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.05))' }}>
              
              {/* Outer boundary silhouette of Maharashtra */}
              <path
                d="M 120 180 L 160 120 L 220 90 L 320 80 L 440 60 L 580 40 L 660 70 L 680 140 L 650 180 L 590 220 L 530 250 L 480 320 L 410 390 L 320 420 L 250 440 L 200 410 L 170 330 L 120 280 Z"
                fill="#f1f5f9"
                stroke="#cbd5e1"
                strokeWidth="2"
              />

              {/* District Polygons / Nodes */}
              {/* 1. Mumbai / Konkan */}
              <g
                className="cursor-pointer transition-transform hover:opacity-90"
                onClick={() => setSelectedDistrict('mumbai_suburban')}
              >
                <path
                  d="M 130 240 L 165 235 L 170 270 L 140 280 Z"
                  fill={selectedDistrict === 'mumbai_suburban' ? '#D96B27' : '#1e3a8a'}
                  stroke="#ffffff"
                  strokeWidth="2"
                />
                <text x="148" y="260" fontSize="10" fill="#ffffff" fontWeight="bold" textAnchor="middle">
                  Mumbai
                </text>
              </g>

              {/* 2. Thane */}
              <g
                className="cursor-pointer transition-transform hover:opacity-90"
                onClick={() => setSelectedDistrict('thane')}
              >
                <path
                  d="M 165 210 L 210 200 L 200 240 L 165 235 Z"
                  fill={selectedDistrict === 'thane' ? '#D96B27' : '#3b82f6'}
                  stroke="#ffffff"
                  strokeWidth="2"
                />
                <text x="185" y="222" fontSize="9.5" fill="#ffffff" fontWeight="bold" textAnchor="middle">
                  Thane
                </text>
              </g>

              {/* 3. Pune (Highlighted) */}
              <g
                className="cursor-pointer transition-transform hover:opacity-90"
                onClick={() => setSelectedDistrict('pune')}
              >
                <path
                  d="M 200 240 L 270 230 L 290 300 L 220 320 L 180 290 Z"
                  fill={selectedDistrict === 'pune' ? '#D96B27' : '#1e3a8a'}
                  stroke="#ffffff"
                  strokeWidth="2"
                />
                <circle cx="235" cy="275" r="4" fill="#fbbf24" stroke="#ffffff" strokeWidth="1.5" />
                <text x="240" y="265" fontSize="12" fill="#ffffff" fontWeight="bold">
                  ★ Pune
                </text>
              </g>

              {/* 4. Nashik */}
              <g
                className="cursor-pointer transition-transform hover:opacity-90"
                onClick={() => setSelectedDistrict('nashik')}
              >
                <path
                  d="M 210 140 L 300 130 L 290 190 L 210 200 Z"
                  fill={selectedDistrict === 'nashik' ? '#D96B27' : '#3b82f6'}
                  stroke="#ffffff"
                  strokeWidth="2"
                />
                <text x="250" y="165" fontSize="10.5" fill="#ffffff" fontWeight="bold" textAnchor="middle">
                  Nashik
                </text>
              </g>

              {/* 5. Chhatrapati Sambhajinagar (Aurangabad) */}
              <g
                className="cursor-pointer transition-transform hover:opacity-90"
                onClick={() => setSelectedDistrict('chhatrapati_sambhajinagar')}
              >
                <path
                  d="M 300 130 L 380 140 L 370 210 L 290 200 Z"
                  fill={selectedDistrict === 'chhatrapati_sambhajinagar' ? '#D96B27' : '#3b82f6'}
                  stroke="#ffffff"
                  strokeWidth="2"
                />
                <text x="335" y="170" fontSize="10" fill="#ffffff" fontWeight="bold" textAnchor="middle">
                  Sambhajinagar
                </text>
              </g>

              {/* 6. Kolhapur */}
              <g
                className="cursor-pointer transition-transform hover:opacity-90"
                onClick={() => setSelectedDistrict('kolhapur')}
              >
                <path
                  d="M 200 370 L 260 360 L 245 420 L 190 410 Z"
                  fill={selectedDistrict === 'kolhapur' ? '#D96B27' : '#93c5fd'}
                  stroke="#ffffff"
                  strokeWidth="2"
                />
                <text x="225" y="390" fontSize="9.5" fill="#1e293b" fontWeight="bold" textAnchor="middle">
                  Kolhapur
                </text>
              </g>

              {/* 7. Solapur */}
              <g
                className="cursor-pointer transition-transform hover:opacity-90"
                onClick={() => setSelectedDistrict('solapur')}
              >
                <path
                  d="M 290 300 L 370 300 L 350 380 L 270 360 Z"
                  fill={selectedDistrict === 'solapur' ? '#D96B27' : '#93c5fd'}
                  stroke="#ffffff"
                  strokeWidth="2"
                />
                <text x="320" y="335" fontSize="10" fill="#1e293b" fontWeight="bold" textAnchor="middle">
                  Solapur
                </text>
              </g>

              {/* 8. Nagpur */}
              <g
                className="cursor-pointer transition-transform hover:opacity-90"
                onClick={() => setSelectedDistrict('nagpur')}
              >
                <path
                  d="M 520 80 L 620 70 L 600 140 L 510 130 Z"
                  fill={selectedDistrict === 'nagpur' ? '#D96B27' : '#3b82f6'}
                  stroke="#ffffff"
                  strokeWidth="2"
                />
                <text x="560" y="110" fontSize="11" fill="#ffffff" fontWeight="bold" textAnchor="middle">
                  Nagpur
                </text>
              </g>

              {/* 9. Amravati */}
              <g className="cursor-pointer" onClick={() => setSelectedDistrict('nagpur')}>
                <path d="M 430 90 L 510 80 L 500 140 L 420 150 Z" fill="#93c5fd" stroke="#ffffff" strokeWidth="2" />
                <text x="460" y="120" fontSize="9" fill="#1e293b" textAnchor="middle">Amravati</text>
              </g>

              {/* 10. Nanded */}
              <g className="cursor-pointer" onClick={() => setSelectedDistrict('solapur')}>
                <path d="M 380 220 L 470 230 L 450 300 L 370 290 Z" fill="#93c5fd" stroke="#ffffff" strokeWidth="2" />
                <text x="420" y="260" fontSize="9.5" fill="#1e293b" textAnchor="middle">Nanded</text>
              </g>
            </svg>

            {/* Quick District Selector Strip */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 mt-3 pt-3 border-t border-slate-200 w-full">
              <span className="text-xs text-slate-500 font-semibold mr-1">Select District:</span>
              {districtsData.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setSelectedDistrict(d.id)}
                  className={`text-xs px-2.5 py-1 rounded cursor-pointer transition-colors font-medium ${
                    selectedDistrict === d.id
                      ? 'bg-[#0A3A60] text-white font-bold'
                      : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {language === 'mr' ? d.nameMr : d.nameEn}
                </button>
              ))}
            </div>
          </div>

          {/* Selected District Callout Box */}
          <div className="mt-4 p-4 bg-blue-50/80 rounded border border-blue-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-[#0A3A60]">
                  {language === 'mr' ? currentDist.nameMr : currentDist.nameEn} District
                </span>
                <span className="text-[10px] font-bold uppercase bg-blue-200 text-blue-900 px-1.5 py-0.5 rounded">
                  {currentDist.skillDemandLevel} Demand
                </span>
              </div>
              <p className="text-xs text-slate-700 mt-1">
                Top Skills: <strong>{currentDist.topSkills.join(' · ')}</strong>
              </p>
            </div>
            
            <button
              onClick={() => handleOpenDistrictDashboard(currentDist.id)}
              className="bg-[#0A3A60] hover:bg-[#072640] text-white px-3.5 py-1.5 rounded text-xs font-semibold cursor-pointer shrink-0 flex items-center gap-1"
            >
              <span>Open {currentDist.nameEn} Plan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right 5 cols: Top In-Demand Skills (Statewide) matching Screenshot 2 */}
        <div className="lg:col-span-5 bg-white p-5 rounded border border-slate-300 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200">
              <h2 className="text-sm sm:text-base font-bold text-slate-900">
                Top In-Demand Skills (Statewide)
              </h2>
              <button
                onClick={() => setActiveNav('skills')}
                className="text-xs font-semibold text-[#0A3A60] hover:underline cursor-pointer"
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
                    {/* Visual Bar matching Screenshot 2 */}
                    <div className="w-full bg-slate-100 rounded-xs h-2.5 overflow-hidden">
                      <div
                        className="bg-[#0A3A60] h-full rounded-xs transition-all duration-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 bg-slate-50 p-3 rounded text-xs text-slate-700">
            <div className="flex items-center justify-between mb-1 font-semibold text-slate-900">
              <span>District Training Supply Deficit</span>
              <span className="text-red-700 tabular-nums font-bold">-73,000 Seats/Yr</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-snug">
              Based on comparison of 12.3 Lakh active job requisitions against 3.85 Lakh ITI/Polytechnic intake capacity across Maharashtra.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
