// Home.js
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { fetchFood } from '../services/operation/fetchFood';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await fetchFood();
        // console.log("Date Response",response);
        const data = response.foodItems;
        setFoodItems(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchFoodData();
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  // console.log(foodItems);

  return (
    <section className="home flex flex-col min-h-screen flex-grow">
      <h1 className="text-4xl font-bold text-center text-gray-700 tracking-wide my-2">
        Our Popular Menu
      </h1>

      <div className="menu-categories flex justify-center space-x-4 my-6">
        <button className="menu-btn" onClick={() => handleCategoryClick('all')}>All Category</button>
        <button className="menu-btn" onClick={() => handleCategoryClick('dinner')}>Dinner</button>
        <button className="menu-btn" onClick={() => handleCategoryClick('lunch')}>Lunch</button>
        <button className="menu-btn" onClick={() => handleCategoryClick('dessert')}>Dessert</button>
        <button className="menu-btn" onClick={() => handleCategoryClick('drink')}>Drink</button>
      </div>

      {/* Dropdown for showing food cards */}
      <div className="food-cards-container align-middle p-6">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div className="flex flex-wrap  gap-6 justify-center align-middle">
            {activeCategory === 'all' ? (
              foodItems.map((food, index) => (
                <Card 
                  key={index}
                  food = {food}
                />
              ))
            ) : (
              foodItems.filter((food) => food.category.toLowerCase() === activeCategory.toLowerCase()).map((food, index) => (
                <Card 
                  key={index}
                  food = {food}
                />
              ))
            )}
          </div>
        )}
      </div>

      
    </section>
  );
};

export default Menu;
