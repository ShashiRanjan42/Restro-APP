import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  
  // Correctly get user info from Redux state
  const token = useSelector((state) => state.auth.token);
  const userInfo = token;
  console.log(token);
  // console.log(userInfo);
  
  // Logout function
  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action from authSlice
  };

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Logo Section */}
      <div className="logo text-2xl font-bold text-gray-800">
        <Link to="/">Foodio.</Link>
      </div>
      
      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-6 text-lg">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/order-online">Order Online</Link></li>
          <li><Link to="/reservation">Reservation</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </nav>
      
      {/* Action Buttons (Cart, Log In, Sign Up or User Icon, Logout) */}
      <div className="nav-actions flex space-x-4">
        {/* Cart Icon */}
        <Link to="/cart" className="text-2xl">🛒</Link>
        
        {/* Conditionally render Log In/Sign Up or User Icon/Logout */}
        {userInfo ? (
          <div className="flex items-center space-x-4">
            {/* User Icon */}
            <div className="user-icon text-2xl">👤</div>
            
            {/* Logout Button */}
            <button 
              onClick={handleLogout} 
              className="logout-btn bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          // If the user is not logged in, show Log In and Sign Up buttons
          <>
            <Link to="/login" className="login-btn bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition">
              Log In
            </Link>
            
            <Link to="/signup" className="signup-btn bg-red-100 text-red-500 py-2 px-4 rounded-lg hover:bg-red-200 transition">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
