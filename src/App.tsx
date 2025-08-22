import { useState } from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AutomationPage from './pages/AutomationPage';
import AnalyticsPage from './pages/AnalyticsPage';
import ScriptsPage from './pages/ScriptsPage';
import SettingsPage from './pages/SettingsPage';



// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'automation':
        return <AutomationPage />;
      case 'scripts':
        return <ScriptsPage />;
      case 'analytics':
        return <AnalyticsPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex">
        <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
        <main className="flex-1 min-h-screen">
          {renderPage()}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;