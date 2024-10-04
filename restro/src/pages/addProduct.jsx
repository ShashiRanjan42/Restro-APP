import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addProductApi } from '../services/operation/addProductApi';
import axios from 'axios';

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Dinner',
    imageUrl: '',
  });

  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [uploading, setUploading] = useState(false);
  
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      console.error('No file selected or file is invalid');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("All fields are required.");
      return;
    }

    setUploading(true);

    try {
      const imageFormData = new FormData();
      imageFormData.append('file', image);
      imageFormData.append('upload_preset', 'RestroApp');

      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/de2iu0vhr/image/upload',
        imageFormData
      );

      const imageUrl = response.data.secure_url;

      const productData = {
        ...formData,
        imageUrl,
      };

      console.log("Product Data", productData);

      dispatch(addProductApi(productData));

      // Reset form fields after submission
      setFormData({
        name: '',
        description: '',
        price: '',
        category: 'Dinner',
        imageUrl: '',
      });
      setImage(null);
      setImagePreview('');
      setUploading(false);

      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = ''; // Reset file input to 'No file chosen'
      }
    } catch (error) {
      console.error("Error uploading the image:", error);
      setUploading(false);
    }
  };

  return (
    <div className="flex justify-center items-center p-8">
      <div className="w-1/2">
        <div className="bg-[#F2EED7] p-6 rounded-lg space-y-4">
          <h1 className="text-2xl font-bold text-orange-600 text-center">Add Products</h1>
          <div>
            <label className="block font-bold text-sm mb-2">Product Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="input-field w-full p-2 rounded"
              placeholder="Enter product name..."
            />
          </div>
          <div>
            <label className="block font-bold text-sm mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="input-field w-full p-2 rounded"
              placeholder="Enter Description"
            />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block font-bold text-sm mb-2">Price (₹)</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="input-field w-full p-2 rounded"
                placeholder="Enter price"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-bold mb-2">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="Dinner">Dinner</option>
                <option value="Lunch">Lunch</option>
                <option value="Dessert">Dessert</option>
                <option value="Drink">Drink</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef} // Attach the reference to input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
            />
          </div>
          <div className='flex flex-col items-center space-y-4'>
            {imagePreview && (
              <img src={imagePreview} alt="Product Preview" className="w-32 h-32 object-cover rounded-lg" />
            )}
            <button
              type="submit"
              className={`bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition focus:outline-none ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={uploading}
              onClick={handleSubmit}
            >
              {uploading ? 'Uploading...' : 'Add Product'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;
