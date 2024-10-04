import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/authSlice';
import {jwtDecode} from 'jwt-decode'; // Correct import

const Header = () => {
  const dispatch = useDispatch();
  
  // Get token from Redux state
  const token = useSelector((state) => state.auth.token);
  let userRole = null;
  let userName = null;

  if (token) {
    try {
      // Decode the token and extract the role and name
      const decodedToken = jwtDecode(token);
      userRole = decodedToken.role;
      userName = decodedToken.name;
    } catch (error) {
      console.error("Invalid token");
    }
  }
  
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
        {
          userRole === "user" ? (
            <ul className="flex space-x-6 text-lg">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              {/* <li><Link to="/order-online">Order Online</Link></li> */}
              <li><Link to="/reservation">Reservation</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          ) : userRole === "admin" ? (
            <ul className="flex space-x-6 text-lg">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Product</Link></li>
              <li><Link to="/addProduct">Add Product</Link></li>
            </ul>
          ) : 
          (<ul className="flex space-x-6 text-lg">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              {/* <li><Link to="/order-online">Order Online</Link></li> */}
              <li><Link to="/reservation">Reservation</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          )
        }
      </nav>
      
      {/* Action Buttons (Cart, Log In, Sign Up or User Icon, Logout) */}
      <div className="nav-actions flex space-x-4">
        {/* Conditionally render Cart Icon only for non-admin users */}
        {userRole === "user" && (
          <Link to="/cart" className="text-2xl">🛒</Link>
        )}
        
        {/* Conditionally render Log In/Sign Up or User Icon/Logout */}
        {token ? (
          <div className="flex items-center space-x-4">
            {/* User Icon and Name */}
            <div className='flex items-center space-x-2'>
              <div className="user-icon text-2xl">👤</div>
              <div className="font-bold text-gray-800">{userName}</div>
            </div>
            
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
