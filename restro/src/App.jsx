import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import Menu from './pages/Menu';
import AboutUs from './pages/AboutUs';
import Reservation from './pages/Reservation';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import { PrivateRoute, PrivateRouteAdmin, NormalRoute } from './components/privateRoute.jsx';
import "./App.css";
import AddProduct from './pages/addProduct.jsx';
import PageNotFound from './pages/PageNotFound'; // Import PageNotFound component

function App() {
  return (
    <div className="flex flex-col min-h-screen flex-grow">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about-us" element={<AboutUs />} />
          
          {/* Protected Routes using PrivateRoute */}
          <Route path="/reservation" element={<PrivateRoute element={Reservation} />} />
          <Route path="/cart" element={<PrivateRoute element={Cart} />} />
          <Route path="/addProduct" element={<PrivateRouteAdmin element={AddProduct} />} />

          <Route path="/contact-us" element={<ContactUs />} />
          
          {/* Normal Routes: Prevent logged-in users from accessing login/signup */}
          <Route path="/login" element={<NormalRoute element={Login} />} />
          <Route path="/signup" element={<NormalRoute element={Signup} />} />

          {/* Wildcard route for handling 404 */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
