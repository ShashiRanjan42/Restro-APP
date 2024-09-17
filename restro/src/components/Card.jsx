import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/cartSlices'; // Make sure the path is correct

const Card = ({ food }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full sm:w-80 bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
      {/* Image Section */}
      <img
        src={food.image}
        alt={food.name}
        className="w-full h-48 object-cover"
      />

      {/* Text Section */}
      <div className="p-6">
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">
          {food.name}
        </h2>
        <p className="text-gray-600 text-center mb-4">
          {food.description}
        </p>

        {/* Rating Section */}
        <div className="flex justify-center mb-4">
          <span className="text-red-500">
            ★★★★★ {/* You can replace this with dynamic rating logic */}
          </span>
        </div>

        {/* Price and Add to Cart Button */}
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold text-gray-800">₹{food.price}</p>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none transition"
            onClick={() => dispatch(addToCart(food))} // Add to Cart functionality
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
