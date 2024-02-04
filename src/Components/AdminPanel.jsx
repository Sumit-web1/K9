import React, { useEffect, useState } from 'react';
import '../Style/Admin.css'

const AdminPanel = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from the backend API
    fetch('http://localhost:5000/api/users') // Update with your actual backend URL
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // User Registration Date
  const formatDateString = (dateString) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  return (
    <div className='adminPanel'>
      <h1>Admin Panel</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rank</th>
            <th>Affiliate</th>
            <th>Earning</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className='userCard'>
              <td>{user.Name}</td>
              <td>{user.rank}</td>
              <td>{user.affiliateMembers}</td>
              <td>₹{user.earning}</td>
              <td>{formatDateString(user.registrationDate)}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
