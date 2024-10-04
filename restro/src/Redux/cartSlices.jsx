import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API URL for cart operations
const API_URL = 'http://localhost:4000/api/cart';

// Fetch cart items from the backend
export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return response.data.cart.items; // Backend returns the cart with items
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Add product to cart
export const addProductToCart = createAsyncThunk(
  'cart/addProductToCart',
  async ({ foodId, quantity }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_URL}/add`,
        { foodId, quantity },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      return response.data.cart.items; // Assuming the backend returns updated items array
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Update quantity in cart
export const updateQuantityInCart = createAsyncThunk(
  'cart/updateQuantityInCart',
  async ({ itemId, quantity }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${API_URL}/update`, 
        { foodId: itemId, quantity }, 
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      return { itemId, quantity }; // Return the updated itemId and quantity for direct state update
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Remove product from cart
export const removeProductFromCart = createAsyncThunk(
  'cart/removeProductFromCart',
  async (itemId, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/remove`, { foodId: itemId }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return itemId; // Return the itemId for direct removal from state
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Clear cart
export const clearCart = createAsyncThunk(
  'cart/clearCart',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/clear`, {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return []; // Clearing cart should return an empty array
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    status: null,
    error: null,
    payments: [],
  },
  reducers: {
    addPayments: (state, action) => {
      state.payments.push(action.payload); // Add new payment data to the payments array
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(addProductToCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addProductToCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload; // Update cart with new items from backend
      })
      .addCase(addProductToCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(updateQuantityInCart.fulfilled, (state, action) => {
        const { itemId, quantity } = action.payload;
        const item = state.items.find(i => i._id === itemId); // Find the item in the state
        if (item) {
          item.quantity = quantity; // Update the quantity directly in the state
        }
      })
      .addCase(removeProductFromCart.fulfilled, (state, action) => {
        const itemId = action.payload;
        state.items = state.items.filter(i => i._id !== itemId); // Remove the item directly from the state
      })
      .addCase(clearCart.fulfilled, (state) => {
        state.items = []; // Clear the cart in the state
      });
  },
});

export const {addPayments} = cartSlice.actions;

export default cartSlice.reducer;
