// const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URL = "http://localhost:4000";

// AUTH ENDPOINTS
export const endpoints = {
  SIGNUP_API: BASE_URL + "/api/register",
  LOGIN_API: BASE_URL + "/api/login",
}


//ORDER ENDPOINTS
export const orderFood ={
  ORDER_FOOD: BASE_URL+"/api/orderFood",
  UPDATE_FOOD: BASE_URL+"/api/updateOrderStatus",
  CANCEL_FOOD: BASE_URL+"/api/cancelOrder/:orderId"
}
//ADD FOOD ENDPOINTS
export const addFood ={
  ADD_FOOD: BASE_URL+"/api/addfood",
  // REMOVE_FOOD: BASE_URL+"/api/"${/:id}
  GET_ALL_FOOD : BASE_URL + "/api/getAllFood",
  DELETE_FOOD : BASE_URL + "/api"
}


//GET ORDER ENDPOINTS
export const getorder={
  GET_ADMIN_ORDER: BASE_URL+"/api/admin/getOrders",
  GET_ORDER: BASE_URL+"/api/getOrders"
}

// CART ENDPOINT
export const addRemove={
  ADD :BASE_URL+"/api/add",
  REMOVE :BASE_URL+"/api/remove"
}

//PAYMENT
export const payment={
  // CAP_PAY:BASE_URL+"/api/create-payment-intent",
  // VER_PAY:BASE_URL+"/api/post-payment"
  CAP_PAY:BASE_URL+"/api/create-payment",
  VER_PAY:BASE_URL+"/api/success-transaction"
}