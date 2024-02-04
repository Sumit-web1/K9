import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import BottomNav from './Components/BottomNav';
import Dashboard from './Components/Dashboard';
import Autopool from './Components/Autopool';
import ReferalLink from './Components/ReferalLink';
import Wallet from './Components/Wallet';
// import Profile from './Components/Profile';
import AdminPanel from './Components/AdminPanel';



function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  // List of routes where BottomNav should be displayed
  const includedRoutes = ['/home', '/autopool', '/referalLink', '/wallet']; // Add more routes as needed

  return (
    <div>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Dashboard />} />
        <Route path='/autopool' element={<Autopool/>} />
        <Route path='/referalLink' element={<ReferalLink/>} />
        <Route path='/wallet' element={<Wallet/>} />

        <Route path='/profile' element={<AdminPanel/>} />
      </Routes>

      {/* Conditionally render BottomNav */}
      {includedRoutes.includes(location.pathname) && <BottomNav/>}
    </div>
  );
}

export default App;
