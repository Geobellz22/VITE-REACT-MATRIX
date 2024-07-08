import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import OrderHistory from './components/OrderHistory';
import OrderTracking from './components/OrderTracking';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <nav>
            <Link to="/">Home</Link> | 
            <Link to="/login">Login</Link> | 
            <Link to="/register">Register</Link> | 
            <Link to="/profile">Profile</Link> | 
            <Link to="/products">Products</Link> | 
            <Link to="/cart">Cart</Link> | 
            <Link to="/order-history">Order History</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/order-tracking/:orderId" element={<OrderTracking />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;