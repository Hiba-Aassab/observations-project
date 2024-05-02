import React, { useEffect } from 'react';
import { Routes, Route,useNavigate } from 'react-router-dom';
import prismadb from "./lib/prismaDB"

import AdminPageLogin from './components/adminLogin/AdminPageLogin';
import EmployeePageLogin from './components/employeeLogin/EmployeePageLogin';
import ObservationPage from './components/Observation/ObservationPage';
import Listedobservation from './components/Observation liste/Listedobservation';

function populateDatabase() {
  // Example data for Zone and User tables
  const zone = [
    { name: 'Zone A', leaderFullName: 'Asmaa asmaa', eNumberLeader: 'E001' },
    { name: 'Zone B', leaderFullName: 'ghita farah', eNumberLeader: 'E002' }
  ];

  const user = [
    {email: 'admin@example.com',password:'admin1234',isAdmin: true },
    {email: 'employee@example.com', password:'employee1234', isAdmin: false}
  ];

  // Populate Zone table
  zone.forEach(async zone => {
    await prismadb.zone.create({
      data: zone
    });
  });

  // Populate User table
  user.forEach(async user => {
    await prismadb.user.create({
      data: user
    });
  });
}

function App() {

  const navigate = useNavigate();

  useEffect(() => {
              async function setupDatabase() {
                      // Populate the database when the component mounts
                      await populateDatabase();
                      // Navigate to the Admin page after populating the database
                      navigate('/');
              }

              setupDatabase();

              // Cleanup function
              return () => {
                      prismadb.$disconnect();
              };

}, [navigate]);

    return (
        <div className="App">
        <Routes>
          <Route path="/" element={<AdminPageLogin />} />
          <Route path="Employee" element={<EmployeePageLogin />} />
          <Route path="ObservationPage" element={<ObservationPage/>}/>
          <Route path="Listedobservation" element={<Listedobservation/>}/>
        </Routes>
      </div>
    );
}

export default App;