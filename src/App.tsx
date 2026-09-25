import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { TopGovBar } from './components/common/TopGovBar';
import { MainGovHeader } from './components/common/MainGovHeader';
import { GovNav } from './components/common/GovNav';
import { GovFooter } from './components/common/GovFooter';
import { RoleSelectorModal } from './components/common/RoleSelectorModal';
import { NlpSkillExtractorModal } from './components/common/NlpSkillExtractorModal';
import { ReportExportModal } from './components/common/ReportExportModal';

// Landing Page Sections
import { HeroSection } from './components/landing/HeroSection';
import { StatStrip } from './components/landing/StatStrip';
import { KeyServicesSection } from './components/landing/KeyServicesSection';
import { StateMapOverview } from './components/landing/StateMapOverview';
import { LatestUpdatesSection } from './components/landing/LatestUpdatesSection';

// Dashboards & Engines
import { GovAdminDashboard } from './components/dashboards/GovAdminDashboard';
import { DistrictOfficerDashboard } from './components/dashboards/DistrictOfficerDashboard';
import { TrainingInstituteDashboard } from './components/dashboards/TrainingInstituteDashboard';
import { EmployerDashboard } from './components/dashboards/EmployerDashboard';
import { StudentDashboard } from './components/dashboards/StudentDashboard';
import { CurriculumAlignmentEngine } from './components/dashboards/CurriculumAlignmentEngine';
import { DistrictPlannerTool } from './components/dashboards/DistrictPlannerTool';
import { ReportsPage } from './components/dashboards/ReportsPage';
import { CheckCircle2, X } from 'lucide-react';

const MainLayout: React.FC = () => {
  const {
    activeNav,
    userRole,
    textSize,
    notification,
    clearNotification,
    setIsNlpModalOpen
  } = useApp();

  // Handle active view routing
  const renderContent = () => {
    // If specific navigation clicked
    if (activeNav === 'labour') {
      return <GovAdminDashboard />;
    }
    if (activeNav === 'skills') {
      return <StudentDashboard />;
    }
    if (activeNav === 'institutes') {
      return <TrainingInstituteDashboard />;
    }
    if (activeNav === 'curriculum') {
      return <CurriculumAlignmentEngine />;
    }
    if (activeNav === 'district_plan') {
      return <DistrictPlannerTool />;
    }
    if (activeNav === 'industry') {
      return <EmployerDashboard />;
    }
    if (activeNav === 'reports') {
      return <ReportsPage />;
    }
    if (activeNav === 'nlp_extractor') {
      // Trigger modal and show admin engine
      setIsNlpModalOpen(true);
      return <CurriculumAlignmentEngine />;
    }

    // Default 'home' view based on authenticated user role
    if (userRole === 'gov_admin') {
      return <GovAdminDashboard />;
    }
    if (userRole === 'district_officer') {
      return <DistrictOfficerDashboard />;
    }
    if (userRole === 'training_institute') {
      return <TrainingInstituteDashboard />;
    }
    if (userRole === 'employer') {
      return <EmployerDashboard />;
    }
    if (userRole === 'student') {
      return <StudentDashboard />;
    }

    // Public Portal Landing Page
    return (
      <div className="space-y-6 pb-6">
        <HeroSection />
        <StatStrip />
        <KeyServicesSection />
        <StateMapOverview />
        <LatestUpdatesSection />
      </div>
    );
  };

  // Dynamic root font scale based on accessibility button (A-, A, A+)
  const getTextSizeClass = () => {
    if (textSize === 'sm') return 'text-[13px]';
    if (textSize === 'lg') return 'text-[17px]';
    return 'text-[15px]';
  };

  return (
    <div className={`min-h-screen flex flex-col bg-[#F4F6F9] ${getTextSizeClass()}`}>
      
      {/* 1. Government Utility Bar */}
      <TopGovBar />

      {/* 2. Official Identity Header */}
      <MainGovHeader />

      {/* 3. Primary Navigation */}
      <GovNav />

      {/* State Notification Banner */}
      {notification && (
        <div className="bg-[#0A3A60] text-white py-2 px-4 border-b-2 border-amber-400 text-xs shadow-md transition-all">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
              <span>{notification}</span>
            </div>
            <button
              onClick={clearNotification}
              className="text-slate-300 hover:text-white p-0.5 cursor-pointer"
              aria-label="Dismiss notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* 4. Main Content Area with Skip Target */}
      <main id="main-content" className="flex-1 focus:outline-none">
        {renderContent()}
      </main>

      {/* 5. Government Footer */}
      <GovFooter />

      {/* Modals & Dialogs */}
      <RoleSelectorModal />
      <NlpSkillExtractorModal />
      <ReportExportModal />

    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
};

export default App;
