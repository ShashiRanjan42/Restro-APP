import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-8">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h1>

        {/* Contact Form & Info Section */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-8 flex-1">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-600 font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full h-32 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex-1 space-y-6">
            <div className="bg-white shadow-md rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Information</h2>
              <p className="text-gray-600">
                We're here to answer any questions you may have. Reach out to us and we'll get back to you as soon as possible!
              </p>
              <div className="mt-6">
                <p className="text-gray-800 font-medium">Address:</p>
                <p className="text-gray-600">1234 Foodio Street, NIT AGARTALA, CA 92705</p>
              </div>
              <div className="mt-4">
                <p className="text-gray-800 font-medium">Phone:</p>
                <p className="text-gray-600">+1 (123) 456-7890</p>
              </div>
              <div className="mt-4">
                <p className="text-gray-800 font-medium">Email:</p>
                <p className="text-gray-600">infofoodio@gmail.com</p>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="bg-white shadow-md rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Location</h2>
              <div className="overflow-hidden rounded-lg shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d115297.93337347488!2d91.27939!3d23.83605!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f27cf226a9a3%3A0xaec350b8a02a940d!2sNIT%20Agartala!5e0!3m2!1sen!2sin!4v1694425567842!5m2!1sen!2sin"
                width="100%"
                height="250"
                allowFullScreen=""
                loading="lazy"
                title="NIT Agartala Location"
              ></iframe>

              </div>
            </div>

            {/* Social Media Links */}
            {/* <div className="flex justify-center space-x-4 mt-6">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition">
                <i className="fab fa-facebook-f text-white"></i>
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition">
                <i className="fab fa-twitter text-white"></i>
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition">
                <i className="fab fa-instagram text-white"></i>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
