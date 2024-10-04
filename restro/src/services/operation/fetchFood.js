import { toast } from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { addFood } from "../apis";

// Destructure the GET_ALL_FOOD and DELETE_FOOD endpoints from addFood
const { GET_ALL_FOOD, DELETE_FOOD } = addFood;

export const fetchFood = async () => {
  try {
    // Make the API call to fetch food items
    const response = await apiConnector("GET", GET_ALL_FOOD);
    // console.log(response.data);
    const data = response.data; // await the json response
    // console.log("Fetch Food Response:", data);

    return data;
  } catch (err) {
    console.error("FETCH FOOD API ERROR:", err);
    toast.error("Food fetching failed");
    throw err;
  }
};


export const deleteFood = async (id) => {
  try {
    // Make the API call to delete the food item
    const response = await apiConnector("DELETE", `${DELETE_FOOD}/${id}`);
    const data = await response.json();
    console.log("Delete Food Response:", data);

    return id;
  } catch (err) {
    console.error("DELETE FOOD API ERROR:", err);
    toast.error("Food deletion failed");
    throw err;
  }
};