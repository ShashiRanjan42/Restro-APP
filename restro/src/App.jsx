import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import Menu from './pages/Menu';
import AboutUs from './pages/AboutUs';
import OrderOnline from './pages/OrderOnline';
import Reservation from './pages/Reservation';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/privateRoute.jsx'; // Import the PrivateRoute component
import "./App.css";
import AddProduct from './pages/addProduct.jsx';

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
          <Route path="/order-online" element={<PrivateRoute element={OrderOnline} />} />
          <Route path="/reservation" element={<PrivateRoute element={Reservation} />} />
          <Route path="/cart" element={<PrivateRoute element={Cart} />} />
          <Route path="/addProduct" element={<PrivateRoute element={AddProduct} />} />

          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/addProduct" element={<AddProduct />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
