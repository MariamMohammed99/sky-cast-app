import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingDisplayPage from '../pages/LandingDisplay';
import CityWeatherDashboardPage from '../pages/CityWeatherDashboard';
import TitleBar from '../common/components/TitleBar';

const App: React.FC = () => {
  return (
    <Router>
      <TitleBar />
      <Routes>
        <Route path="/" element={<LandingDisplayPage />} />
        <Route path="/city/:cityName" element={<CityWeatherDashboardPage />} />
      </Routes>
    </Router>
  );
};

export default App;
