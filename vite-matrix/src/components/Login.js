import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import './LoginRegister.css';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '', rememberMe: false });
  const [error, setError] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Mock login validation
    if (form.username === 'testuser' && form.password === 'password') {
      if (form.rememberMe) {
        localStorage.setItem('rememberMe', JSON.stringify(form));
      }
      navigate('/');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    // Mock forgot password logic
    setMessage('Password reset link has been sent to your email.');
  };

  return (
    <div className="form-container">
      {showForgotPassword ? (
        <>
          <h2>Forgot Password</h2>
          <form onSubmit={handleForgotPasswordSubmit}>
            <div>
              <FaEnvelope />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {message && <p style={{ color: 'green' }}>{message}</p>}
            <button type="submit">Send Reset Link</button>
            <p>
              Remember your password? <span onClick={() => setShowForgotPassword(false)}>Login here</span>
            </p>
          </form>
        </>
      ) : (
        <>
          <h2>Login</h2>
          <form onSubmit={handleLoginSubmit}>
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
              <input
                type="checkbox"
                name="rememberMe"
                checked={form.rememberMe}
                onChange={handleChange}
              />
              <label>Remember Me</label>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Login</button>
            <p>
              Forgot your password? <span onClick={() => setShowForgotPassword(true)}>Reset it here</span>
            </p>
            <p>
              Don't have an account? <Link to="/register">Register here</Link>
            </p>
          </form>
        </>
      )}
    </div>
  );
};

export default Login;