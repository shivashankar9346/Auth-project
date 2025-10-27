
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
import '../App.css'

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="navbar">
      <h1>AuthSim</h1>
      <div className='nav-items'>
        <NavLink to="/">Home</NavLink>
        {!user && <NavLink to="/login">Login</NavLink>}
        {user && <NavLink to="/dashboard">Dashboard</NavLink>}
        {user && <button id="logout-btn" onClick={handleLogout}>Logout</button>}
        {user && <p id='navbar-id'>👋{user.username}</p>}
      </div>
    </div>
  );
};

export default Navbar;
