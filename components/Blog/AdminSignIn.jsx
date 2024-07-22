import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/blog-css/adminlogin.css';
import { useNavigate } from 'react-router-dom';

const AdminSignIn = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('admin-token');
    console.log(token)
    if (token) {
      axios.post('https://blog.phonology.io/api/admin/validate-token', {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => {
          console.log(response.data,"from signin")
          if (response.data.valid) {
            navigate('/admin-dashboard');
          }else{
            navigate('/admin-login');
        }
        })
        .catch(error => {
          console.log('Token validation failed', error);
        });
    }
  }, [navigate]);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://blog.phonology.io/api/admin/admin-login', { userName, password });
      if (response.status === 200) {
        localStorage.setItem('admin-token', response.data.accessToken);
        navigate('/admin-dashboard');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setMessage('Login failed: Invalid credentials');
        console.log(error)
      } else {
        setMessage('Login failed: Server error');
        console.log(error)
      }
    }
  };

  return (
    <div className="login-container">
      <div className='blog-desc'>
        <h2>Phonology Blogs.</h2>
      </div>
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Welcome, Admin.</h2>
        <input
          type="text"
          placeholder="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Continue</button>
        {message && <p className="login-message">{message}</p>}
        <p><a href='/' id='go-to-home'>phonology.io</a></p>

      </form>
    </div>
  );
};

export default AdminSignIn;
