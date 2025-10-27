import React from 'react';
import useAuth from './useAuth';

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) return <p>Please log in to access the dashboard</p>;

  return (
    <div className=" dashboard-container">
      <h1>Welcome Back, {user.username}!</h1>
      <p>
        You are now logged in. This page is <strong>protected</strong> and only accessible to authenticated users.
      </p>
      <div className="profile-summary">
        <h3>Profile Summary</h3>
        <p>Username: <strong>{user.username}</strong></p>
        <p>Role: Student</p>
        <p>Status: Active</p>
      </div>
    </div>
  );
};

export default Dashboard;
