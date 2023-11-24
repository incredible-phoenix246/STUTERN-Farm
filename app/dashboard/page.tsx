// pages/dashboard.tsx
import React from 'react';
import Loggedin from '../Layouts/Loggedin';

const Dashboard: React.FC = () => {
  // Dummy data for demonstration
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    // Add more properties as needed
  };

  return (
    <Loggedin>
      <div>
        <h1>Welcome to Your Dashboard, {user.firstName}!</h1>
        <div>
          <p>
            Name: {user.firstName} {user.lastName}
          </p>
          <p>Email: {user.email}</p>
          {/* Add more information or components as needed */}
        </div>
      </div>
    </Loggedin>
  );
};

export default Dashboard;
