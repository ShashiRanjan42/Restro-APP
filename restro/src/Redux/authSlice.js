// src/Redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  userInfo: (() => {
    try {
      const storedUserInfo = localStorage.getItem("userInfo");
      return storedUserInfo ? JSON.parse(storedUserInfo) : null; // Safely return null if storedUserInfo is undefined
    } catch (error) {
      console.error("Error parsing userInfo from localStorage", error);
      return null;
    }
  })(),
  loading: false,
};


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      localStorage.setItem("token", action.payload); // Save token to localStorage
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload;
      try {
        localStorage.setItem("userInfo", JSON.stringify(action.payload)); // Save userInfo to localStorage
      } catch (error) {
        console.error("Error saving userInfo to localStorage", error);
      }
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    logout(state) {
      state.token = null;
      state.userInfo = null;
      localStorage.removeItem("token"); // Remove token from localStorage
      localStorage.removeItem("userInfo"); // Remove userInfo from localStorage
    },
  },
});

export const { setToken, setUserInfo, setLoading, logout } = authSlice.actions;
export default authSlice.reducer;
