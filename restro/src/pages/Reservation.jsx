import React, { useState } from 'react';

const Reservation = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    partySize: '',
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation made for ${formData.name}!`);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Section - Image */}
        <div className="md:w-1/2">
          <img
            src="Restro_table.jpg"
            alt="Restaurant Table"
            className="object-cover h-full w-full"
          />
        </div>

        {/* Right Section - Reservation Form */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-center mb-4">Reserve a Table</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Date */}
            <div>
              <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            {/* Time */}
            <div>
              <label htmlFor="time" className="block text-gray-700 font-semibold mb-2">Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            {/* Party Size */}
            <div>
              <label htmlFor="partySize" className="block text-gray-700 font-semibold mb-2">Party Size</label>
              <input
                type="number"
                name="partySize"
                value={formData.partySize}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter the size of your party"
                min="1"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
            >
              Reserve Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
