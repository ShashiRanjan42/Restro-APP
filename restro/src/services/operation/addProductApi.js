import {jwtDecode} from "jwt-decode"; // Ensure jwt-decode is installed
import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { addFood } from "../apis"; // Ensure this points to the correct API endpoint

const { ADD_FOOD } = addFood;

export function addProductApi(formData) {
    return async (dispatch) => {
        const toastId = toast.loading("Adding Product...");
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                throw new Error("You are not authorized to perform this action.");
            }

            const decodedToken = jwtDecode(token); // Correct decoding
            const role = decodedToken.role; // Extracting role
            console.log("Role:", role);

            if (role !== 'admin') {
                throw new Error("You do not have the necessary permissions to add a product.");
            }

            const response = await apiConnector("POST", ADD_FOOD, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            });

            console.log(response);

            if (!response.data.msg) {
                throw new Error(response.data.msg || "Failed to add product");
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
