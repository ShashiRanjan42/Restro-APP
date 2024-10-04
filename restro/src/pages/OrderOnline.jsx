// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// // import { clearCart } from '../Redux/cartSlices'; // Ensure you have this action in your cartSlice

// const OrderOnline = () => {
//   const { cartItems, totalPrice } = useSelector((state) => state.cart); // Access the cart details from Redux store
//   const dispatch = useDispatch();

//   const handlePlaceOrder = () => {
//     // Handle order placement logic
//     console.log('Order placed:', cartItems, totalPrice);
//     dispatch(clearCart());
//     alert('Order placed successfully!');
//   };

//   return (
//     <div className="min-h-screen bg-pink-50 p-8">
//       <h1 className="text-4xl font-bold text-center text-gray-700 mb-8">Place Your Order</h1>

//       {cartItems.length === 0 ? (
//         <p className="text-center text-xl text-gray-500">Your cart is empty.</p>
//       ) : (
//         <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
//           <h2 className="text-3xl font-semibold text-pink-600 mb-6">Order Summary</h2>

//           <ul className="mb-6 space-y-4">
//             {cartItems.map((item, index) => (
//               <li key={index} className="flex justify-between items-center bg-pink-50 p-4 rounded-lg shadow-sm">
//                 <div className="flex-1">
//                   <h3 className="text-xl font-bold text-pink-700">{item.name}</h3>
//                   <p className="text-gray-600">Quantity: {item.quantity}</p>
//                   <p className="text-gray-600">Price: ₹{item.price}</p>
//                   <p className="text-gray-700">Total: ₹{item.quantity * item.price}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>

//           <div className="text-right text-gray-700 text-2xl font-semibold mb-6">
//             Total Price: ₹{totalPrice}
//           </div>

//           <div className="text-center">
//             <button
//               onClick={handlePlaceOrder}
//               className="bg-red-500 hover:bg-pink-300 text-white font-bold py-3 px-6 rounded-lg shadow-md transition transform hover:scale-105"
//             >
//               Place Order
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderOnline;


// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { clearCart, getCartItems } from '../Redux/cartSlices'; // Ensure you have this action in your cartSlice

// const OrderOnline = () => {
//   const { cartItems, totalPrice } = useSelector((state) => state.cart); // Access the cart details from Redux store
//   const dispatch = useDispatch();

//   React.useEffect(() => {
//     dispatch(getCartItems());
//   }, [dispatch]);

//   const handlePlaceOrder = () => {
//     // Handle order placement logic
//     console.log('Order placed:', cartItems, totalPrice);
//     dispatch(clearCart());
//     alert('Order placed successfully!');
//   };

//   return (
//     <div className="min-h-screen bg-pink-50 p-8">
//       <h1 className="text-4xl font-bold text-center text-gray-700 mb-8">Place Your Order</h1>

//       {cartItems.length === 0 ? (
//         <p className="text-center text-xl text-gray-500">Your cart is empty.</p>
//       ) : (
//         <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
//           <h2 className="text-3xl font-semibold text-pink-600 mb-6">Order Summary</h2>

//           <ul className="mb-6 space-y-4">
//             {cartItems.map((item, index) => (
//               <li key={index} className="flex justify-between items-center bg-pink-50 p-4 rounded-lg shadow-sm">
//                 <div className="flex-1">
//                   <h3 className="text-xl font-bold text-pink-700">{item.name}</h3>
//                   <p className="text-gray-600">Quantity: {item.quantity}</p>
//                   <p className="text-gray-600">Price: ₹{item.price}</p>
//                   <p className="text-gray-700">Total: ₹{item.quantity * item.price}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>

//           <div className="text-right text-gray-700 text-2xl font-semibold mb-6">
//             Total Price: ₹{totalPrice}
//           </div>

//           <div className="text-center">
//             <button
//               onClick={handlePlaceOrder}
//               className="bg-red-500 hover:bg-pink-300 text-white font-bold py-3 px-6 rounded-lg shadow-md transition transform hover:scale-105"
//             >
//               Place Order
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderOnline;

import React from 'react'

function OrderOnline() {
  return (
    <div>
      Hi
    </div>
  )
}

export default OrderOnline
