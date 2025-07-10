import { Routes, Route } from 'react-router-dom';
import MainLayout from './MainLayout';
import Home from '../pages/LandingPage';
import PropertiesListing from '../pages/PropertiesListing';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<PropertiesListing />} />
        {/* Add more routes here */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
