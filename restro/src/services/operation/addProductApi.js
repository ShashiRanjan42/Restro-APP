import { jwtDecode } from "jwt-decode"; // Ensure jwt-decode is installed
import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { addFood } from "../apis"; // Ensure this points to the correct API endpoint
import qs from "qs"; // Add this import

const { ADD_FOOD } = addFood;

export function addProductApi(formData) {
  return async (dispatch) => {
    const toastId = toast.loading("Adding Product...");
    try {
      console.log(formData);
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("You are not authorized to perform this action.");
      }

      // Verify if the token is valid by decoding (optional)
      try {
        jwtDecode(token);
      } catch (error) {
        throw new Error("Invalid token");
      }

      // Stringify the formData using qs
      const formDataString = qs.stringify(formData);

      // Make the API call with the token in Authorization header
      const response = await fetch(ADD_FOOD, {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${token}`, // Corrected header key
          'Content-Type': 'application/x-www-form-urlencoded' // Changed content type header
        },
        body: formDataString, // Send the stringified formData
      });

      // Parse the response as JSON
      const data = await response.json();

      if (!data.success) {
        throw new Error(data.msg || "Failed to add product");
      }

      toast.success("Product added successfully");
    } catch (error) {
      console.error("Error in adding product:", error);
      toast.error(error.message || "Failed to add product");
    } finally {
      toast.dismiss(toastId);
    }
  };
}

// import {jwtDecode} from "jwt-decode"; // Ensure jwt-decode is installed
// import { toast } from "react-hot-toast";
// import { apiConnector } from "../apiConnector";
// import { addFood } from "../apis"; // Ensure this points to the correct API endpoint

// const { ADD_FOOD } = addFood;
// export function addProductApi(formData) {
//     return async (dispatch) => {
//       const toastId = toast.loading("Adding Product...");
//       try {
//         const token = localStorage.getItem("token");
        
//         if (!token) {
//           throw new Error("You are not authorized to perform this action.");
//         }
  
//         const response = await fetch(`${ADD_FOOD}`, {
//           credentials: "include",  // This is for cookies, not required for token-based auth
//           method: "POST",
//           headers: {
//             'Authorization': `Bearer ${token}`,  // Send token in Authorization header
//           },
//           body: formData,

//         });
//         console.log(formData);
  
//         // Parse the response as JSON
//         const data = await response.json();
        
//         if (!data.success) {
//           throw new Error(data.msg || "Failed to add product");
//         }
  
//         toast.success("Product added successfully");
//       } catch (error) {
//         console.error("Error in adding product:", error);
//         toast.error(error.message || "Failed to add product");
//       } finally {
//         toast.dismiss(toastId);
//       }
//     };
//   }
  

// // import {jwtDecode} from "jwt-decode"; // Correct import syntax for jwt-decode
// // import { toast } from "react-hot-toast";
// // import { apiConnector } from "../apiConnector";
// // import { addFood } from "../apis"; // Ensure this points to the correct API endpoint

// // const { ADD_FOOD } = addFood;

// // export function addProductApi(formData) {
// //   return async (dispatch) => {
// //     const toastId = toast.loading("Adding Product...");
// //     try {
// //       const token = localStorage.getItem("token");
      
// //       if (!token) {
// //         throw new Error("You are not authorized to perform this action.");
// //       }

// //       // Verify if the token is valid by decoding (optional)
// //       try {
// //         jwtDecode(token);
// //       } catch (error) {
// //         throw new Error("Invalid token");
// //       }

// //       // Make the API call with the token in Authorization header
// //       const response = await fetch(`${ADD_FOOD}`, {
// //         method: "POST",
// //         headers: {
// //           'uthorization': `Bearer ${token}`,  // Send token in Authorization header
// //           // Include any other headers as necessary (e.g., Content-Type for formData if needed)
// //         },
// //         body: formData,
// //       });

// //       // Parse the response as JSON
// //       const data = await response.json();
      
// //       if (!data.success) {
// //         throw new Error(data.msg || "Failed to add product");
// //       }

// //       toast.success("Product added successfully");
// //     } catch (error) {
// //       console.error("Error in adding product:", error);
// //       toast.error(error.message || "Failed to add product");
// //     } finally {
// //       toast.dismiss(toastId);
// //     }
// //   };
// // }
