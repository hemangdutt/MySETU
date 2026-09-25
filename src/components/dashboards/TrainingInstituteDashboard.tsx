import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { coursesData } from '../../data/coursesData';
import { Check, X, AlertTriangle, Download, Plus, BookOpen, FileCheck, Send, CheckCircle2, ChevronRight, Layers } from 'lucide-react';

export const TrainingInstituteDashboard: React.FC = () => {
  const { showNotification, setIsReportModalOpen } = useApp();
  const [selectedCourseId, setSelectedCourseId] = useState<string>('course-copa');
  const [activeSubTab, setActiveSubTab] = useState<'comparison' | 'changes' | 'demand' | 'placement'>('comparison');
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);
  const [proposalNotes, setProposalNotes] = useState('');

  const currentCourse = coursesData.find((c) => c.id === selectedCourseId) || coursesData[0];

  const handleProposalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProposalModalOpen(false);
    showNotification(`Curriculum revision proposal for ${currentCourse.title} submitted to State DVET Technical Committee. Reference: REV-${Date.now().toString().slice(-4)}`);
    setProposalNotes('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 space-y-6">
      
      {/* Header bar matching Screenshot 4 */}
      <div className="bg-white p-4 rounded border border-slate-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Training Institute View
            </span>
            <span className="text-xs text-slate-500">· Government ITI Pune (Aundh) · Code: ITI-PUN-001</span>
          </div>
          <h1 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
            Course Analysis & Curriculum Alignment
          </h1>
          <p className="text-xs text-slate-600">
            See how your courses align with current industry demand and emerging technical requirements
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Course Dropdown matching Screenshot 4 */}
          <select
            value={selectedCourseId}
            onChange={(e) => setSelectedCourseId(e.target.value)}
            className="bg-slate-50 border border-slate-300 text-xs px-3 py-2 rounded font-medium text-slate-800 outline-none cursor-pointer"
          >
            {coursesData.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title} ({c.code})
              </option>
            ))}
          </select>

          <button
            onClick={() => showNotification('Course proposal form unlocked for academic year 2026-27.')}
            className="flex items-center gap-1 bg-[#0A3A60] hover:bg-[#072640] text-white px-3 py-2 rounded text-xs font-semibold cursor-pointer shadow-xs whitespace-nowrap"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Course</span>
          </button>
        </div>
      </div>

      {/* Main Course Analysis Card matching Screenshot 4 */}
      <div className="bg-white rounded border border-slate-300 overflow-hidden shadow-2xs">
        
        {/* Top Alignment Banner */}
        <div className="p-5 border-b border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-50">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                {currentCourse.code} · NSQF Level {currentCourse.nsfqLevel}
              </span>
              <span className="text-xs text-slate-500">Duration: {currentCourse.durationMonths} Months</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
              {currentCourse.title}
            </h2>
            <p className="text-xs text-slate-600">
              Statewide Annual Enrollment: {currentCourse.annualEnrollment.toLocaleString('en-IN')} students across {currentCourse.instituteCount} ITIs
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-3xl font-extrabold text-red-600 tabular-nums leading-none">
                {currentCourse.currentAlignmentPct}%
              </div>
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide">
                Industry Alignment
              </span>
            </div>

            <div className="shrink-0">
              <span className="text-xs font-bold text-red-800 bg-red-100 border border-red-300 px-2.5 py-1 rounded inline-block">
                Needs Update
              </span>
            </div>
          </div>
        </div>

        {/* Sub-tabs matching Screenshot 4: Skill Comparison | Recommended Changes | Industry Demand | Placement Trends */}
        <div className="border-b border-slate-200 px-5 flex items-center space-x-2 text-xs font-semibold overflow-x-auto bg-white">
          {[
            { id: 'comparison', label: 'Skill Comparison' },
            { id: 'changes', label: 'Recommended Changes' },
            { id: 'demand', label: 'Industry Evidence' },
            { id: 'placement', label: 'Placement Trends' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id as typeof activeSubTab)}
              className={`py-3 px-3 border-b-2 cursor-pointer transition-colors whitespace-nowrap ${
                activeSubTab === tab.id
                  ? 'border-[#0A3A60] text-[#0A3A60] font-bold'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* SubTab 1: Skill Comparison matching Screenshot 4 */}
        {activeSubTab === 'comparison' && (
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Left Column: Skills Covered in Current Curriculum */}
              <div className="border border-slate-300 rounded p-4 bg-slate-50/50">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 pb-2 border-b border-slate-200">
                  Skills Covered in Current Curriculum
                </h3>
                <div className="space-y-2">
                  {currentCourse.coveredSkills.map((sk, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 bg-white rounded border border-slate-200 flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </span>
                        <span className="font-semibold text-slate-800">{sk.name}</span>
                      </div>
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Covered ({sk.hours}h)
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Skills Required by Industry (Top) - Marked Missing */}
              <div className="border border-slate-300 rounded p-4 bg-red-50/30">
                <h3 className="text-xs font-bold uppercase tracking-wider text-red-900 mb-3 pb-2 border-b border-red-200">
                  Skills Required by Industry (Top Gaps)
                </h3>
                <div className="space-y-2">
                  {currentCourse.missingSkills.map((sk, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 bg-white rounded border border-red-200 flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0">
                          <AlertTriangle className="w-3.5 h-3.5" />
                        </span>
                        <div>
                          <span className="font-bold text-slate-900">{sk.name}</span>
                          <span className="block text-[10px] text-slate-500">
                            Required by {sk.industryDemandPct}% of recent job postings
                          </span>
                        </div>
                      </div>
                      <span className="text-[11px] font-bold text-red-800 bg-red-50 px-2 py-0.5 rounded border border-red-300">
                        Missing
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Status Legend matching Screenshot 4 */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200 text-xs">
              <div className="flex items-center gap-4 text-slate-600">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-3 h-3 rounded-xs bg-emerald-600" /> Covered
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-3 h-3 rounded-xs bg-amber-500" /> Partially Covered
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-3 h-3 rounded-xs bg-red-600" /> Missing
                </span>
              </div>

              {/* Action Buttons matching Screenshot 4 */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveSubTab('changes')}
                  className="bg-[#0A3A60] hover:bg-[#072640] text-white px-4 py-2 rounded text-xs font-semibold cursor-pointer shadow-xs transition-colors"
                >
                  View Suggested Curriculum
                </button>
                <button
                  type="button"
                  onClick={() => setIsReportModalOpen(true)}
                  className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 px-4 py-2 rounded text-xs font-semibold cursor-pointer transition-colors"
                >
                  Download Report
                </button>
                <button
                  type="button"
                  onClick={() => setIsProposalModalOpen(true)}
                  className="bg-[#D96B27] hover:bg-[#b55519] text-white px-4 py-2 rounded text-xs font-semibold cursor-pointer shadow-xs transition-colors"
                >
                  Submit Revision Proposal
                </button>
              </div>
            </div>

          </div>
        )}

        {/* SubTab 2: Recommended Changes */}
        {activeSubTab === 'changes' && (
          <div className="p-6 space-y-4">
            <div className="border-b border-slate-200 pb-3">
              <h3 className="text-sm font-bold text-slate-900">
                Suggested Modular Curriculum Changes for {currentCourse.title}
              </h3>
              <p className="text-xs text-slate-500">
                Generated via automated comparison of {currentCourse.title} DGT CTS syllabus against 4,320 validated employer requisitions
              </p>
            </div>

            <div className="space-y-3">
              {currentCourse.recommendedChanges.map((change, idx) => (
                <div key={idx} className="p-4 rounded border border-slate-300 bg-slate-50 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${
                        change.action === 'add'
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                          : change.action === 'deprecate'
                          ? 'bg-red-50 text-red-800 border-red-300'
                          : 'bg-blue-50 text-blue-800 border-blue-300'
                      }`}>
                        {change.action === 'add' ? '+ Add Module' : change.action === 'deprecate' ? '- Deprecate' : 'Modify Syllabus'}
                      </span>
                      <h4 className="text-xs font-bold text-slate-900">{change.title}</h4>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">{change.details}</p>
                    <p className="text-[11px] text-slate-500 italic">Evidence: {change.evidenceSource}</p>
                  </div>
                  <div className="shrink-0 text-right text-xs font-bold text-slate-700">
                    {change.hours > 0 ? `+${change.hours} Hours` : `${change.hours} Hours`}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setIsProposalModalOpen(true)}
                className="bg-[#D96B27] hover:bg-[#b55519] text-white px-4 py-2 rounded text-xs font-semibold cursor-pointer shadow-xs"
              >
                Forward Changes to State Technical Review Committee →
              </button>
            </div>
          </div>
        )}

        {/* SubTab 3: Industry Demand & Placement */}
        {(activeSubTab === 'demand' || activeSubTab === 'placement') && (
          <div className="p-6 space-y-4">
            <h3 className="text-sm font-bold text-slate-900">
              Placement Outcomes & Industry Hiring Verification
            </h3>
            <p className="text-xs text-slate-600">
              Placement records from Pune district ITIs for {currentCourse.title} indicate an average starting salary of ₹2.4 LPA for conventional COPA graduates, versus ₹4.2 LPA for candidates possessing additional Python and SQL certifications.
            </p>

            <table className="gov-table text-xs">
              <thead>
                <tr>
                  <th>Academic Cohort</th>
                  <th>Total Enrolled</th>
                  <th>Apprenticeship Placements</th>
                  <th>Placement Rate</th>
                  <th>Avg CTC</th>
                  <th>Chief Recruiter Domains</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">2024-2025</td>
                  <td className="font-mono">1,480</td>
                  <td className="font-mono">980</td>
                  <td className="text-amber-700 font-bold">66%</td>
                  <td className="font-mono">₹2.4 LPA</td>
                  <td>Data Entry, Back-Office BPO, Government Clerk Typist</td>
                </tr>
                <tr>
                  <td className="font-bold">2025-2026 (Projected with Python/SQL)</td>
                  <td className="font-mono">1,600</td>
                  <td className="font-mono">1,420</td>
                  <td className="text-emerald-700 font-bold">88%</td>
                  <td className="font-mono">₹4.2 LPA</td>
                  <td>Junior Data Analyst, MIS Executive, ERP Coordinator</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

      </div>

      {/* Revision Proposal Modal */}
      {isProposalModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white rounded border border-slate-400 w-full max-w-lg shadow-2xl p-6">
            <h3 className="text-base font-bold text-slate-900 mb-1">
              Submit Formal Curriculum Revision Proposal
            </h3>
            <p className="text-xs text-slate-600 mb-4">
              To: Directorate of Vocational Education & Training, Government of Maharashtra (DVET)
            </p>

            <form onSubmit={handleProposalSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Target Trade Course
                </label>
                <input
                  type="text"
                  disabled
                  value={`${currentCourse.title} (${currentCourse.code})`}
                  className="w-full text-xs p-2 bg-slate-100 border border-slate-300 rounded font-medium text-slate-700"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Justification & Industry Testimonial Reference *
                </label>
                <textarea
                  rows={4}
                  required
                  value={proposalNotes}
                  onChange={(e) => setProposalNotes(e.target.value)}
                  placeholder="Summarize the localized employer requests and training capacity adjustments..."
                  className="w-full text-xs p-2.5 border border-slate-300 rounded outline-none focus:ring-2 focus:ring-[#0A3A60]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsProposalModalOpen(false)}
                  className="px-3 py-1.5 border border-slate-300 text-xs rounded hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-[#0A3A60] hover:bg-[#072640] text-white text-xs font-semibold rounded cursor-pointer"
                >
                  Submit to Board
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
