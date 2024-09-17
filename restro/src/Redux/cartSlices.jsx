import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0, // Price in rupees
  },
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(item => item.name === action.payload.name);
      if (itemIndex !== -1) {
        state.cartItems[itemIndex].quantity += 1;
        state.cartItems[itemIndex].totalPrice = state.cartItems[itemIndex].quantity * action.payload.price;
      } else {
        state.cartItems.push({ 
          ...action.payload, 
          quantity: 1, 
          totalPrice: action.payload.price 
        });
      }
      state.totalQuantity += 1;
      // Correctly calculate the total price for the entire cart
      state.totalPrice = state.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    decrementQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(item => item.name === action.payload.name);
      if (itemIndex !== -1) {
        if (state.cartItems[itemIndex].quantity > 1) {
          state.cartItems[itemIndex].quantity -= 1;
          state.cartItems[itemIndex].totalPrice = state.cartItems[itemIndex].quantity * action.payload.price;
          state.totalQuantity -= 1;
        } else {
          state.totalQuantity -= state.cartItems[itemIndex].quantity;
          state.cartItems.splice(itemIndex, 1);
        }
        // Correctly calculate the total price after decrement
        state.totalPrice = state.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
      }
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(item => item.name === action.payload.name);
      if (itemIndex !== -1) {
        const item = state.cartItems[itemIndex];
        state.totalQuantity -= item.quantity;
        state.cartItems.splice(itemIndex, 1);
      }
      // Recalculate total price after removal
      state.totalPrice = state.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, decrementQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
