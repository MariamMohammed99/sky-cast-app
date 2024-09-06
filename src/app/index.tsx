import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingDisplayPage from '../pages/LandingDisplay';
import CityDashboardPage from '../pages/CityDashboard';
import TitleBar from '../common/components/TitleBar';
import { GlobalStyle } from './styled';
import { BG_DAY_COLOR } from '../common/constants';

const App: React.FC = () => {
  const [backgroundColor, setBackgroundColor] = useState<string>(BG_DAY_COLOR);
  return (
    <>
    <GlobalStyle backgroundColor={backgroundColor}/>
    <Router>
      <TitleBar />
      <Routes>
        <Route path="/" element={<LandingDisplayPage setBackgroundColor={setBackgroundColor}/>} />
        <Route path="/dashboard" element={<CityDashboardPage />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
