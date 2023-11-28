'use client';
import React from 'react';
import Loggedin from '../Layouts/Loggedin';
import withauth from '@/helpers/withAuth';

const Dashboard: React.FC = () => {
  return (
    <Loggedin>
      <div className="dashboard text-black">
        <header className="bg-blue-500 p-4 text-white text-center">
          <h1 className="text-2xl font-semibold">Crop Management Dashboard</h1>
        </header>
        <div className="container mx-auto mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Metric Cards */}
            <div className="bg-white p-4 rounded-md shadow-md">
              <h2 className="text-xl font-semibold mb-2">Total Crops</h2>
              <p className="text-3xl font-bold">120</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-md">
              <h2 className="text-xl font-semibold mb-2">Harvested Crops</h2>
              <p className="text-3xl font-bold">80</p>
            </div>
            <div className="bg-white p-4 rounded-md shadow-md">
              <h2 className="text-xl font-semibold mb-2">Upcoming Tasks</h2>
              <p className="text-3xl font-bold">15</p>
            </div>

            {/* Information Card */}
            <div className="col-span-3 bg-white p-4 rounded-md shadow-md">
              <h2 className="text-xl font-semibold mb-2">Recent Updates</h2>
              <ul className="list-disc pl-6">
                <li>Planted 20 new crops.</li>
                <li>Harvested 10 crops this week.</li>
                <li>Upcoming task: Fertilize fields.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Loggedin>
  );
};

export default withauth(Dashboard);
