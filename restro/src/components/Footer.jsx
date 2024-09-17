import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center mb-4">
            <div className="bg-red-500 text-white rounded-full p-4">
              <span className="text-2xl font-bold">F</span>
            </div>
            <span className="ml-2 text-lg font-semibold">Foodio.</span>
          </div>
          <p className="text-center md:text-left mb-4">
            Viverra gravida morbi egestas facilisis tortor netus non duis tempor.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="https://x.com/i/flow/login" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
              <i className="fab fa-twitter text-white"></i>
            </a>
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
              <i className="fab fa-instagram text-white"></i>
            </a>
            <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
              <i className="fab fa-facebook-f text-white"></i>
            </a>
          </div>
        </div>

        {/* Page Links */}
        <div>
          <h3 className="text-lg font-semibold text-red-500 mb-4">Page</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Menu</a></li>
            <li><a href="#" className="hover:underline">Order Online</a></li>
            <li><a href="#" className="hover:underline">Catering</a></li>
            <li><a href="#" className="hover:underline">Reservation</a></li>
          </ul>
        </div>

        {/* Information Links */}
        <div>
          <h3 className="text-lg font-semibold text-red-500 mb-4">Information</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Testimonial</a></li>
            <li><a href="#" className="hover:underline">Event</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold text-red-500 mb-4">Get in touch</h3>
          <p className="mb-2">2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
          <p className="mb-2">abc@example.com</p>
          <p>+123 4567 8901</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8">
        <p>Copyright © 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
