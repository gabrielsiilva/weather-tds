import { Route, Routes as ReactRoutes } from 'react-router-dom';
import CityWeather from './pages/CityWeather';

import Home from './pages/Home';

const Routes = (): JSX.Element => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/weather-info" element={<CityWeather />} />
    </ReactRoutes>
  );
};

export default Routes;
