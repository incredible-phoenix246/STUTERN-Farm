'use client';

// WeatherComponent.tsx
import React from 'react';
import Loggedin from '../Layouts/Loggedin';
import CurrentWeatherScreen from './weatherun';
import ChangeLocationScreen from './changed';

const WeatherComponent: React.FC = () => {
  return (
    <Loggedin>
      <div className="flex">
        <div className="w-1/2 p-4">
          <CurrentWeatherScreen />
        </div>
        <div className="w-1/2 p-4">
          <ChangeLocationScreen />
        </div>
      </div>
    </Loggedin>
  );
};

export default WeatherComponent;
