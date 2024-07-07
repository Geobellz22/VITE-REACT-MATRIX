// src/components/Register.js

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import './LoginRegister.css';

const Register = () => {
  const [form, setForm] = useState({
    fullName: '',
    username: '',
    email: '',
    retypeEmail: '',
    password: '',
    retypePassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [is2FA, setIs2FA] = useState(false); // To handle 2FA step
  const [token, setToken] = useState(''); // To handle 2FA token input
  const [generatedToken] = useState('123456'); // Mock token for 2FA
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    if (form.email !== form.retypeEmail) {
      setError('Emails do not match');
      return false;
    }
    if (form.password !== form.retypePassword) {
      setError('Passwords do not match');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    // Mock registration logic
    setSuccess('Registration successful! Please check your email for verification.');
    setIs2FA(true); // Move to 2FA step
    setError('');
  };

  const handle2FASubmit = (e) => {
    e.preventDefault();
    if (token === generatedToken) {
      setSuccess('2FA verification successful! Redirecting to login...');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } else {
      setError('Invalid 2FA token');
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      {is2FA ? (
        <form onSubmit={handle2FASubmit}>
          <div>
            <FaLock />
            <input
              type="text"
              name="token"
              placeholder="Enter 2FA Token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              required
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}
          <button type="submit">Verify</button>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <FaUser />
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <FaUser />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <FaEnvelope />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <FaEnvelope />
            <input
              type="email"
              name="retypeEmail"
              placeholder="Retype Email"
              value={form.retypeEmail}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <FaLock />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <FaLock />
            <input
              type="password"
              name="retypePassword"
              placeholder="Retype Password"
              value={form.retypePassword}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}
          <button type="submit">Register</button>
          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </form>
      )}
    </div>
  );
};

export default Register;
