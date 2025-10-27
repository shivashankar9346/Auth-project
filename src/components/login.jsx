// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
import '../App.css'

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) return;
    login(username); 
    navigate('/dashboard'); 
  };

  return (
    <div className='login-body'>
      <form onSubmit={handleSubmit}>
        <div className='login-container'>
          <h2>Login</h2>
          <label>Username</label> 
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          /> <br />
          <label>Password</label> 
          <input type="password" placeholder="Enter password" />
          <button type="submit">Submit</button>
          <p><strong>Try : </strong> Username : Shiva | Password : 1234</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
