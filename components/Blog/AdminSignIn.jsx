"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/blog-css/adminlogin.css';
import { useRouter } from 'next/navigation';

const AdminSignIn = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isClient, setIsClient] = useState(false);
  const router = useRouter()

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const token = localStorage.getItem('admin-token');
      console.log(token);
      if (token) {
        axios.post('https://blog.phonology.io/api/admin/validate-token', {}, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
          .then(response => {
            console.log(response.data, "from signin");
            if (response.data.valid) {
              router.push('/admin-dashboard');
            } else {
              router.push('/admin-login');
            }
          })
          .catch(error => {
            console.log('Token validation failed', error);
          });
      }
    }
  }, [isClient]);

  const handleLogin = async (event) => {
    event.preventDefault();
    if (isClient) {
      try {
        const response = await axios.post('https://blog.phonology.io/api/admin/admin-login', { userName, password });
        if (response.status === 200) {
          localStorage.setItem('admin-token', response.data.accessToken);
          router.push('/admin-dashboard');
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          setMessage('Login failed: Invalid credentials');
          console.log(error);
        } else {
          setMessage('Login failed: Server error');
          console.log(error);
        }
      }
    }
  };

  if (!isClient) {
    return null; // or a loading spinner
  }

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
