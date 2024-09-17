// Home.js
import React, { useState } from 'react';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const foodItems = {
    all: [
      { image: 'Pizza.jpg', name: 'Pizza', description: 'Delicious cheese pizza with extra toppings',price :'120' },
      { image: 'hamburger.jpg', name: 'Burger', description: 'Juicy beef burger with fresh vegetables',price :'110' },
    ],
    dinner: [
      { image: 'Biryani.jpg', name: 'Biryani', description: 'Grilled steak with garlic butter sauce',price :'100' },
      { image: 'pasta.jpg', name: 'Pasta', description: 'Italian pasta with creamy alfredo sauce',price :'120' },
    ],
    lunch: [
      { image: 'hamburger.jpg', name: 'Chicken Wrap', description: 'Healthy chicken wrap with fresh salad',price :'150' },
      { image: 'hamburger.jpg', name: 'Tacos', description: 'Mexican-style tacos with a spicy kick',price :'75' },
    ],
    dessert: [
      { image: 'Cake.jpg', name: 'Chocolate Cake', description: 'Rich chocolate cake with fudge',price :'50' },
      { image: 'hamburger.jpg', name: 'Ice Cream', description: 'Vanilla ice cream with sprinkles',price :'20' },
    ],
    drink: [
      { image: 'hamburger.jpg', name: 'Smoothie', description: 'Fresh berry smoothie',price :'110' },
      { image: 'hamburger.jpg', name: 'Lemonade', description: 'Refreshing homemade lemonade',price :'100' },
    ],
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category === activeCategory ? null : category);
  };

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
      <div className="food-cards-container align-middle">
        {activeCategory && (
          <div className="flex flex-wrap  gap-6 justify-center align-middle">
            {foodItems[activeCategory].map((food, index) => (
              <Card 
                key={index}
                food = {food}
                // image={food.image}
                // name={food.name}
                // description={food.description}
                // price={food.price}
              />
            ))}
          </div>
        )}
      </div>

      
    </section>
  );
};

export default Menu;
