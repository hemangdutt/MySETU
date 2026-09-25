import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { districtsData } from '../../data/districtsData';
import { studentCareerPathways } from '../../data/employerStudentData';
import { Search, MapPin, Star, Clock, GraduationCap, Briefcase, CheckCircle2, ArrowRight, BookOpen, ExternalLink } from 'lucide-react';

export const StudentDashboard: React.FC = () => {
  const { selectedDistrict, setSelectedDistrict, language, showNotification } = useApp();
  const [careerSearch, setCareerSearch] = useState('');
  const [selectedPathwayId, setSelectedPathwayId] = useState<string>('pathway-data-analyst');

  const currentDist = districtsData.find((d) => d.id === selectedDistrict) || districtsData[0];

  const filteredPathways = studentCareerPathways.filter((p) =>
    p.roleTitle.toLowerCase().includes(careerSearch.toLowerCase()) ||
    p.keySkills.some(s => s.toLowerCase().includes(careerSearch.toLowerCase()))
  );

  const activePathway = studentCareerPathways.find((p) => p.id === selectedPathwayId) || studentCareerPathways[0];

  const handleApplyCourse = (courseTitle: string) => {
    showNotification(`Application initiated for "${courseTitle}". Redirecting to Mahaswayam admission portal.`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 space-y-6">
      
      {/* Title & Search Strip matching Screenshot 6 */}
      <div className="bg-white p-5 rounded border border-slate-300 shadow-2xs space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">
            Student & Youth Portal
          </span>
          <span className="text-xs text-slate-500">· Labour Market Aligned Vocational Career Guidance</span>
        </div>
        
        <h1 className="text-lg sm:text-xl font-bold text-slate-900">
          Your Career Pathway
        </h1>
        <p className="text-xs text-slate-600">
          Discover in-demand skills and courses based on real job market data and localized Maharashtra hiring trends
        </p>

        {/* Search & Location Bar matching Screenshot 6 */}
        <div className="flex flex-col sm:flex-row items-stretch gap-3 pt-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={careerSearch}
              onChange={(e) => setCareerSearch(e.target.value)}
              placeholder="Search for a career (e.g. Data Analyst, EV Technician, Automation Specialist)..."
              className="w-full text-xs pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-300 rounded outline-none focus:border-[#0A3A60]"
            />
          </div>

          <div className="flex items-center gap-2 bg-slate-50 border border-slate-300 rounded px-3 py-2 text-xs">
            <MapPin className="w-3.5 h-3.5 text-slate-500" />
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="bg-transparent font-medium text-slate-800 outline-none cursor-pointer"
            >
              {districtsData.map((d) => (
                <option key={d.id} value={d.id}>
                  {language === 'mr' ? d.nameMr : d.nameEn}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Top Career Paths in Selected District matching Screenshot 6 */}
      <div className="bg-white p-5 rounded border border-slate-300">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200">
          <h2 className="text-sm font-bold text-slate-900">
            Top Career Paths in {currentDist.nameEn}
          </h2>
          <span className="text-xs text-[#0A3A60] font-semibold cursor-pointer hover:underline">
            View All ({filteredPathways.length})
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredPathways.map((path) => (
            <div
              key={path.id}
              onClick={() => setSelectedPathwayId(path.id)}
              className={`p-4 rounded border cursor-pointer transition-all flex flex-col justify-between ${
                selectedPathwayId === path.id
                  ? 'border-[#0A3A60] bg-blue-50/60 ring-2 ring-[#0A3A60]/40'
                  : 'border-slate-300 bg-white hover:border-slate-400 hover:shadow-xs'
              }`}
            >
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-2">
                  {path.roleTitle}
                </h3>
                
                {/* Demand pill matching Screenshot 6 */}
                <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded border mb-3 ${
                  path.demandStatus === 'High Demand'
                    ? 'bg-amber-50 text-amber-900 border-amber-300'
                    : 'bg-emerald-50 text-emerald-900 border-emerald-300'
                }`}>
                  {path.demandStatus}
                </span>

                <div className="text-xs text-slate-500">
                  Avg. Salary
                </div>
                <div className="text-sm font-bold text-slate-900">
                  {path.avgSalaryRange}
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] font-semibold text-[#0A3A60]">
                <span>Explore Roadmap</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Courses for You matching Screenshot 6 */}
      <div className="bg-white p-5 rounded border border-slate-300">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200">
          <div>
            <h2 className="text-sm font-bold text-slate-900">
              Recommended Courses for You
            </h2>
            <p className="text-xs text-slate-500">
              Curated based on active job requisitions for {activePathway.roleTitle} in {currentDist.nameEn}
            </p>
          </div>
          <span className="text-xs text-[#0A3A60] font-semibold cursor-pointer hover:underline">
            View All Courses
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activePathway.recommendedCourses.map((course) => (
            <div
              key={course.id}
              className="p-4 rounded border border-slate-300 bg-slate-50/50 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-10 h-10 rounded bg-[#0A3A60] text-white flex items-center justify-center shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 leading-snug">
                      {course.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {course.certifyingBody}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-600 my-2">
                  <span className="flex items-center gap-1 text-amber-700 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>{course.rating}</span>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{course.duration}</span>
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                    course.demandBadge === 'High Demand'
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                      : 'bg-blue-50 text-blue-800 border-blue-300'
                  }`}>
                    {course.demandBadge}
                  </span>
                  <span className="text-[10px] text-slate-500">
                    {course.institutesAvailable} ITIs in District
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">Zero Tuition for SC/ST/OBC</span>
                <button
                  type="button"
                  onClick={() => handleApplyCourse(course.title)}
                  className="bg-[#0A3A60] hover:bg-[#072640] text-white px-3 py-1.5 rounded text-xs font-semibold cursor-pointer shadow-xs transition-colors"
                >
                  Apply via Mahaswayam
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Data Reason / Transparency Box */}
        <div className="mt-5 p-3.5 bg-blue-50 border border-blue-200 rounded text-xs text-blue-950">
          <p className="font-bold mb-1">
            Why is this pathway recommended?
          </p>
          <p className="text-xs text-blue-900 leading-relaxed">
            {activePathway.justification}
          </p>
        </div>
      </div>

    </div>
  );
};
