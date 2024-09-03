import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingDisplayPage from '../pages/LandingDisplay';
import CityWeatherDashboardPage from '../pages/CityWeatherDashboard';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingDisplayPage />} />
        <Route path="/city/:cityName" element={<CityWeatherDashboardPage />} />
      </Routes>
    </Router>
  );
};

export default App;
