// src/controllers/foodcontroller.js
const Food = require('../Model/food');
const { validationResult } = require('express-validator');

// Add a new food item
const addNewFood = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      msg: 'Validation error',
      errors: errors.array(),
    });
  }

  try {
    const { name, description, price, category, imageUrl } = req.body;

    const newFood = new Food({
      name,
      description,
      price,
      category,
      imageUrl,
    });

    const savedFood = await newFood.save();
    res.status(201).json({ msg: 'Food item added successfully', savedFood });
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
};

// Delete a food item by ID
const deleteFood = async (req, res) => {
  const { id } = req.params;

  try {
    const foodItem = await Food.findById(id);
    if (!foodItem) {
      return res.status(404).json({ success: false, msg: 'Food item not found' });
    }

    await Food.findByIdAndDelete(id);
    res.status(200).json({ success: true, msg: 'Food item deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, msg: 'Server error', error: error.message });
  }
};

module.exports = {
  addNewFood,
  deleteFood,
};
