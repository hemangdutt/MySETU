import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { districtsData } from '../../data/districtsData';
import { MapPin, Calculator, Download, CheckCircle, AlertTriangle, Users, School, Wrench, GraduationCap } from 'lucide-react';

export const DistrictPlannerTool: React.FC = () => {
  const { selectedDistrict, setSelectedDistrict, setIsReportModalOpen, showNotification, language } = useApp();

  const currentDist = districtsData.find((d) => d.id === selectedDistrict) || districtsData[0];

  // Simulation state
  const [targetOccupation, setTargetOccupation] = useState('EV Technician');
  const [projectedDemand, setProjectedDemand] = useState<number>(1180);
  const [existingCapacity, setExistingCapacity] = useState<number>(420);
  const [simulatedInstituteCount, setSimulatedInstituteCount] = useState<number>(6);

  const capacityGap = Math.max(0, projectedDemand - existingCapacity);
  const trainersNeeded = Math.ceil(capacityGap / 25);
  const equipmentEstCapex = (capacityGap * 0.15).toFixed(1); // in Lakhs INR

  const handleGeneratePlan = () => {
    showNotification(`District Skill Development Plan generated for ${currentDist.nameEn} targeting ${targetOccupation}. Capacity expansion of +${capacityGap} seats queued for DSPC approval.`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 space-y-6">
      
      {/* Title */}
      <div className="bg-white p-5 rounded border border-slate-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-purple-800 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
              District Planning Tool
            </span>
            <span className="text-xs text-slate-500">· District Skill Development Committee (DSDC) Simulator</span>
          </div>
          <h1 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
            District Training Capacity Planning & Quota Allocation
          </h1>
          <p className="text-xs text-slate-600">
            Formulate empirical intake recommendations, lab infrastructure budgets, and trainer requirements
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsReportModalOpen(true)}
            className="bg-[#0A3A60] hover:bg-[#072640] text-white px-3.5 py-1.5 rounded text-xs font-semibold cursor-pointer shadow-xs flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export District Plan</span>
          </button>
        </div>
      </div>

      {/* Simulator Inputs & Calculations */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Inputs 5 cols */}
        <div className="lg:col-span-5 bg-white p-5 rounded border border-slate-300 space-y-4">
          <h2 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-200 flex items-center gap-2">
            <Calculator className="w-4 h-4 text-[#0A3A60]" />
            <span>Capacity Model Inputs</span>
          </h2>

          {/* District Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Target District
            </label>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded font-medium text-slate-800"
            >
              {districtsData.map((d) => (
                <option key={d.id} value={d.id}>
                  {language === 'mr' ? d.nameMr : d.nameEn}
                </option>
              ))}
            </select>
          </div>

          {/* Occupation */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Trade / Occupation
            </label>
            <select
              value={targetOccupation}
              onChange={(e) => {
                setTargetOccupation(e.target.value);
                if (e.target.value === 'EV Technician') {
                  setProjectedDemand(1180);
                  setExistingCapacity(420);
                } else if (e.target.value === 'Data Analyst') {
                  setProjectedDemand(2340);
                  setExistingCapacity(1480);
                } else if (e.target.value === 'Industrial Automation Specialist') {
                  setProjectedDemand(980);
                  setExistingCapacity(320);
                }
              }}
              className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded font-medium text-slate-800"
            >
              <option value="EV Technician">EV Technician (Automotive & Power)</option>
              <option value="Data Analyst">Data Analyst (IT/ITES & Manufacturing)</option>
              <option value="Industrial Automation Specialist">Industrial Automation Specialist (Manufacturing)</option>
              <option value="CNC Operator">CNC Operator (Capital Goods)</option>
            </select>
          </div>

          {/* Projected Demand Slider / Input */}
          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
              <span>Projected Annual Industry Demand</span>
              <span className="tabular-nums font-bold text-[#0A3A60]">{projectedDemand} candidates/yr</span>
            </div>
            <input
              type="range"
              min="200"
              max="5000"
              step="50"
              value={projectedDemand}
              onChange={(e) => setProjectedDemand(Number(e.target.value))}
              className="w-full accent-[#0A3A60] cursor-pointer"
            />
          </div>

          {/* Existing Capacity */}
          <div>
            <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
              <span>Existing Accredited Training Capacity</span>
              <span className="tabular-nums font-bold text-slate-800">{existingCapacity} seats</span>
            </div>
            <input
              type="range"
              min="100"
              max="3000"
              step="20"
              value={existingCapacity}
              onChange={(e) => setExistingCapacity(Number(e.target.value))}
              className="w-full accent-slate-600 cursor-pointer"
            />
          </div>

          {/* Affected ITIs */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Participating ITIs for Intake Expansion
            </label>
            <input
              type="number"
              min="1"
              max="30"
              value={simulatedInstituteCount}
              onChange={(e) => setSimulatedInstituteCount(Number(e.target.value))}
              className="w-full text-xs p-2 bg-white border border-slate-300 rounded"
            />
          </div>

          <button
            type="button"
            onClick={handleGeneratePlan}
            className="w-full bg-[#0A3A60] hover:bg-[#072640] text-white py-2.5 rounded text-xs font-bold cursor-pointer transition-colors shadow-xs"
          >
            Generate District Training Plan
          </button>
        </div>

        {/* Right Output Proposed Plan 7 cols */}
        <div className="lg:col-span-7 bg-white p-5 rounded border border-slate-300 flex flex-col justify-between space-y-4">
          <div>
            <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
              <div>
                <h2 className="text-sm font-bold text-slate-900">
                  Proposed District Training Plan: {currentDist.nameEn}
                </h2>
                <p className="text-xs text-slate-500">
                  Target: {targetOccupation} · Planning Horizon: FY 2026-27
                </p>
              </div>
              <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-300">
                Action Required
              </span>
            </div>

            {/* Key Calculated Gap Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
              <div className="p-3 bg-slate-50 rounded border border-slate-200">
                <span className="text-[10px] text-slate-500 block">Est. Demand:</span>
                <span className="text-base font-bold text-slate-900">{projectedDemand}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded border border-slate-200">
                <span className="text-[10px] text-slate-500 block">Current Capacity:</span>
                <span className="text-base font-bold text-slate-900">{existingCapacity}</span>
              </div>
              <div className="p-3 bg-red-50 rounded border border-red-200">
                <span className="text-[10px] text-red-700 font-semibold block">Capacity Deficit:</span>
                <span className="text-base font-bold text-red-700">+{capacityGap} seats</span>
              </div>
              <div className="p-3 bg-blue-50 rounded border border-blue-200">
                <span className="text-[10px] text-blue-700 font-semibold block">Capex Required:</span>
                <span className="text-base font-bold text-blue-900">₹{equipmentEstCapex} L</span>
              </div>
            </div>

            {/* Structured Administrative Action Items */}
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-slate-50 rounded border border-slate-300 flex items-start gap-3">
                <Users className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900">Seat Quota Expansion</h3>
                  <p className="text-slate-600 mt-0.5">
                    Increase annual intake by <strong className="text-slate-900 font-semibold">approximately {capacityGap} seats</strong> distributed across {simulatedInstituteCount} government ITIs in {currentDist.nameEn}.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded border border-slate-300 flex items-start gap-3">
                <GraduationCap className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900">Instructor Upskilling Protocol</h3>
                  <p className="text-slate-600 mt-0.5">
                    Mandate 4-week technical immersion for <strong className="text-slate-900 font-semibold">{trainersNeeded} vocational instructors</strong> at Centre of Excellence (Pimpri-Chinchwad / Tata Motors Academy).
                  </p>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded border border-slate-300 flex items-start gap-3">
                <Wrench className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900">Lab Equipment & Tooling Sanction</h3>
                  <p className="text-slate-600 mt-0.5">
                    Sanction state procurement for 4 EV diagnostic simulators, high-voltage battery test racks, and BMS diagnostic software under District Innovation Fund.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-200 flex justify-end gap-2">
            <button
              onClick={() => setIsReportModalOpen(true)}
              className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 px-3 py-1.5 rounded text-xs font-semibold cursor-pointer"
            >
              Print Scheme Docket
            </button>
            <button
              onClick={handleGeneratePlan}
              className="bg-[#D96B27] hover:bg-[#b85519] text-white px-4 py-1.5 rounded text-xs font-semibold cursor-pointer shadow-xs"
            >
              Submit to District Collector
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
