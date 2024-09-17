import React from 'react';

const Home = () => {
  return (
    <section className="home flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-pink-100">
      
      {/* Section 1: Best Restaurant Intro */}
      <section className="flex justify-between items-center w-full px-5 py-10 max-w-7xl ml-5">
        {/* Left Side - Text Section */}
        <div className="flex-1 space-y-6 ml-5">
          <h1 className="text-6xl font-bold text-gray-900 leading-tight">
            Best Restaurant <br /> In <span className="text-red-500">Town.</span>
          </h1>
          <p className="text-lg text-gray-700">We provide the best food in town, with home delivery and dine-in services.</p>
          <div className="flex space-x-4 ml-40">
            <button className="bg-red-500 text-white py-3 px-10 rounded-lg hover:bg-red-600 transition">
              Order now
            </button>
            <button className="bg-red-100 text-red-500 py-3 px-6 rounded-lg hover:bg-red-200 transition">
              Reservation
            </button>
          </div>
        </div>

        {/* Right Side - Image Section */}
        <div className="relative flex justify-center items-center ml-70">
         <img
          src="My-restro.jpg" // Replace with the actual image URL
           alt="Spaghetti Dish"
           className="w-[28rem] h-[28rem] rounded-full object-cover shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
           />


          {/* <img
            src="https://via.placeholder.com/100" // Replace with actual lettuce image URL
            alt="Lettuce decoration"
            className="absolute top-0 left-0 w-24 h-auto"
          /> */}
          {/* <img
            src="https://via.placeholder.com/100" // Replace with actual lettuce image URL
            alt="Lettuce decoration"
            className="absolute bottom-0 right-0 w-24 h-auto"
          /> */}
        </div>
      </section>

      {/* Section 2: Best Selling Dishes */}
      <section className="flex flex-col items-center py-10 from-pink-100 to-green-100 w-full mt-40">
  <h2 className="text-5xl font-bold text-gray-900 mb-20">Best Selling Dishes</h2>
  
  {/* Dish 1 - Image on Left, Text on Right */}
  <div className="flex items-center justify-between space-x-8 max-w-7xl mb-12">
    <div className="flex-1">
      <img
        src="hamburger.jpg" // Replace with actual dish image
        alt="Dish 1"
        className="w-85 h-56 object-cover rounded-full shadow-lg"
      />
    </div>
    <div className="flex-1 space-y-4">
      <h3 className="text-3xl font-semibold text-gray-800">Hamburger</h3>
      <p className="text-lg text-gray-600">Description of Dish 1, highlighting the taste, ingredients, and uniqueness of the dish.</p>
      <div className="flex space-x-4">
        <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition">
          Order now
        </button>
        <button className="bg-red-100 text-red-500 py-2 px-6 rounded-lg hover:bg-red-200 transition">
          Add to cart
        </button>
      </div>
    </div>
  </div>

  {/* Dish 2 - Text on Left, Image on Right */}
  <div className="flex items-center justify-between max-w-7xl mb-12 flex-row-reverse">
    <div className="flex-1 ml-52">
      <img
        src="pasta.jpg" // Replace with actual dish image
        alt="dish-2"
        className="w-64 h-64 object-cover rounded-full shadow-lg"
      />
    </div>
    <div className="flex-1 space-y-8">
      <h3 className="text-3xl font-semibold text-gray-800">Pasta</h3>
      <p className="text-lg text-gray-600">Description of Dish 2, highlighting the taste, ingredients, and uniqueness of the dish.</p>
      <div className="flex space-x-4">
        <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition">
          Order now
        </button>
        <button className="bg-red-100 text-red-500 py-2 px-6 rounded-lg hover:bg-red-200 transition">
          Add to cart
        </button>
      </div>
    </div>
  </div>

  {/* Dish 3 - Image on Left, Text on Right */}
  <div className="flex items-center justify-between space-x-8 max-w-7xl">
    <div className="flex-1">
      <img
        src="Pizza.jpg" // Replace with actual dish image
        alt="Dish 3"
        className="w-72 h-72 object-cover rounded-full shadow-lg"
      />
    </div>
    <div className="flex-1 space-y-4">
      <h3 className="text-3xl font-semibold text-gray-800">Paneer Pizza</h3>
      <p className="text-lg text-gray-600">Description of Dish 3, highlighting the taste, ingredients, and uniqueness of the dish.</p>
      <div className="flex space-x-4">
        <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition">
          Order now
        </button>
        <button className="bg-red-100 text-red-500 py-2 px-6 rounded-lg hover:bg-red-200 transition">
          Add to cart
        </button>
      </div>
    </div>
  </div>

</section>


      {/* Section 3: Chef Quality */}
      <section className="flex justify-between items-center w-full px-12 py-12 max-w-7xl mx-auto mr-4 ">
        {/* Left Side - Text Section */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">Meet Our Chef</h2>
          <p className="text-lg text-gray-700">Our chef is an expert in gourmet dishes, ensuring you have the best dining experience.</p>
        </div>

        {/* Right Side - Chef Image */}
        <div className="relative flex justify-center items-center ml-20 mr-40">
            <img
             src="chef.jpg" // Replace with your actual chef image
             alt="Chef"
             className="w-96 h-96 rounded-full object-cover shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </div>

      </section>

      {/* Section 4: Hungry Section */}
      <section className="flex justify-between items-center w-full px-auto py-auto  mx-auto my-auto bg-gradient-to-b from-pink-100 to-pink-200">
        {/* Left Side - Image Section */}
        <div className="relative flex justify-center items-center ml-40 mr-40 py-10">
            <img
             src="dish.jpg" // Replace with your actual hungry image
             alt="dish"
             className="w-96 h-96 rounded-full object-cover shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </div>

        {/* Right Side - Text Section */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">Feeling Hungry?</h2>
          <p className="text-lg text-gray-700">Get your food delivered or reserve a table now!</p>
          <div className="mr-40">
            <button className="bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition">
              Order now
            </button>
            <button className="bg-red-100 text-red-500 py-3 px-6 rounded-lg hover:bg-red-200 transition">
              Reservation
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
