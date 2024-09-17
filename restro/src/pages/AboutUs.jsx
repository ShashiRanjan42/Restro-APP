import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Page Header */}
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          About Us
        </h1>
        
        {/* Restaurant Description */}
        <section className="bg-white shadow-md rounded-lg overflow-hidden mb-12 p-8">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4 text-center">
            Welcome to Foodio
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Foodio is a contemporary restaurant offering a diverse menu that blends the finest ingredients with creative flair. Our mission is to provide an exceptional dining experience by combining high-quality food, impeccable service, and a warm ambiance. Whether you’re here for a casual lunch or a special occasion, we strive to make every meal memorable.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            Established in 2015, Foodio has been serving the community for over a decade with passion, dedication, and a commitment to excellence. Our menu features a variety of dishes, from classic comfort food to innovative new creations, ensuring that there’s something for everyone to enjoy.
          </p>
        </section>

        {/* Owner Description */}
        <section className="bg-white shadow-md rounded-lg overflow-hidden p-8 flex flex-col md:flex-row items-center md:items-start">
          <img
            src="dp of utsav.jpeg"
            alt="Owner"
            className="w-64 h-64 object-cover rounded-full shadow-lg mb-6 md:mb-0 md:mr-8"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold text-gray-700 mb-2">
              Meet the Owner
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Utsav Raj, the visionary behind Foodio, has always been passionate about food and hospitality. With over 10 years of experience in the culinary world, Raj has worked with some of the best chefs and restaurants globally. His dream was to create a place where food lovers can come together to enjoy delicious, thoughtfully prepared meals in a welcoming environment.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              "Foodio is not just a restaurant; it’s a place where we celebrate flavors, culture, and community. We believe in using fresh, locally sourced ingredients and preparing everything from scratch, ensuring that each dish is bursting with authentic flavors and crafted with love."
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
