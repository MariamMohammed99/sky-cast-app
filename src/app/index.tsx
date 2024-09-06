import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingDisplayPage from '../pages/LandingDisplay';
import CityDashboardPage from '../pages/CityDashboard';
import TitleBar from '../common/components/TitleBar';
import { GlobalStyle } from './styled';
import { BG_DAY_COLOR, WRONG_URL_ERROR_MESSAGE } from '../common/constants';
import ErrorNotification from '../common/components/ErrorNotification';
import ConnectionStatusWrapper from '../common/components/ConnectionWrapper';

const App: React.FC = () => {
  const [backgroundColor, setBackgroundColor] = useState<string>(BG_DAY_COLOR);
  return (
    <>
      <GlobalStyle backgroundColor={backgroundColor} />
      <Router>
        <ConnectionStatusWrapper>
          <>
        <TitleBar />
        <Routes>
          <Route path="/" element={<LandingDisplayPage setBackgroundColor={setBackgroundColor} />} />
          <Route path="/dashboard" element={<CityDashboardPage />} />
          <Route path="*" element={<ErrorNotification customizedError={WRONG_URL_ERROR_MESSAGE} />} />
        </Routes>
        </>
        </ConnectionStatusWrapper>
      </Router>
    </>
  );
};

export default App;
