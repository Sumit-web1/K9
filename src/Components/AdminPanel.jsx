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

  return (
    <div className='adminPanel'>
      <h1>Admin Panel</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile Number</th>
            <th>Affiliate</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className='userCard'>
              <td>{user.Name}</td>
              <td>{user.phone}</td>
              <td>0</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
