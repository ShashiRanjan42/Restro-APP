import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlices'; // Make sure the path is correct
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer, // Add cart reducer to the store
    auth: authReducer,
  },
});

export default store;
