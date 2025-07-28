import React, { useState } from 'react';
import type { Team } from './types';
import { TEAMS } from './constants';
import Header from './components/Header';
import TeamSelector from './components/TeamSelector';
import FileUploadCard from './components/FileUploadCard';
import PasswordProtect from './components/PasswordProtect';

function App() {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleTeamSelect = (team: Team) => {
    setSelectedTeam(team);
  };

  const handleBack = () => {
    setSelectedTeam(null);
  };

  if (!isAuthenticated) {
    return <PasswordProtect onAuthenticated={setIsAuthenticated} />;
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-start p-4 font-sans antialiased">
      <Header />
      <main className="w-full max-w-4xl mx-auto flex-grow flex items-center justify-center transition-opacity duration-500">
        {!selectedTeam ? (
          <TeamSelector teams={TEAMS} onSelect={handleTeamSelect} />
        ) : (
          <FileUploadCard team={selectedTeam} onBack={handleBack} />
        )}
      </main>
      <footer className="text-center py-4 text-slate-500 text-sm">
        <p>Copyright © {new Date().getFullYear()} BigQuery Uploads Inc. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
