// src/services/authApi.js
import { toast } from 'react-hot-toast';
import { setLoading, setToken, setUserInfo } from "../../Redux/authSlice";
import { apiConnector } from "../apiConnector";
import { endpoints } from '../apis';

const { SIGNUP_API, LOGIN_API } = endpoints;

// Signup API call
export function signUp(name, email, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));

    console.log(name);

    try {
      // Basic validation for empty fields
      if (!name || !email || !password) {
        throw new Error("Please fill in all the fields.");
      }

      const response = await apiConnector("POST", SIGNUP_API, {
        name,
        email,
        password,
      });

      // Log the API response for debugging purposes
      console.log("SIGNUP API RESPONSE:", response);

      // Check if signup was successful
      if (!response.data.success) {
        throw new Error(response.data.message || "Signup failed.");
      }

      // Show success message and redirect to login page
      toast.success("Signup Successful");
      navigate("/login");
    } catch (error) {
      // Handle errors and show appropriate messages
      console.log("SIGNUP API ERROR:", error.response?.data || error.message);

      if (error.message === "Please fill in all the fields.") {
        toast.error(error.message);
      } else if (error.response) {
        // Handle specific error responses
        if (error.response.status === 400) {
          toast.error("Invalid credentials. Please check your input.");
        } else {
          const errorMessage = error.response.data.message || "An error occurred during signup.";
          toast.error(errorMessage);
        }
      } else if (error.request) {
        toast.error("No response from the server. Please try again later.");
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    } finally {
      dispatch(setLoading(false));
      toast.dismiss(toastId);
    }
  };
}

// Login API call
export function login(email, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Logging in...");
    dispatch(setLoading(true));

    try {
      if (!email || !password) {
        throw new Error("Please provide both email and password.");
      }

      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      }, { withCredentials: true });

      if (!response.data.success) {
        throw new Error(response.data.message || "Login failed.");
      }

      // Save token and userInfo (including profile image)
      const { token, user } = response.data;
      dispatch(setToken(token));
      dispatch(setUserInfo(user));

      // Save to localStorage for persistence
      localStorage.setItem("token", token);
      localStorage.setItem("userInfo", JSON.stringify(user));

      toast.success("Login Successful");
      navigate("/");  // Redirect to a protected page
    } catch (error) {
      toast.error(error.response?.data.message || "Login failed.");
    } finally {
      dispatch(setLoading(false));
      toast.dismiss(toastId);
    }
  };
}
