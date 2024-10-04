import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartItems, clearCart, removeProductFromCart, updateQuantityInCart, addPayments } from '../Redux/cartSlices';
import { payment } from '../services/apis';
import {jwtDecode} from "jwt-decode"; // Corrected import for jwtDecode
// Razorpay is injected through script, no need to import
const { CAP_PAY, VER_PAY } = payment;

const Cart = () => {
  const dispatch = useDispatch();

  // Fetch cart state from redux
  const { items: cartItems = [], status, error } = useSelector((state) => state.cart);

  // Fetch cart items when the component mounts
  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  const [paymentData, setPaymentData] = useState(null);

  // Handle quantity updates
  const handleUpdateQuantity = (itemId, quantity) => {
    if (quantity < 1) return;
    dispatch(updateQuantityInCart({ itemId, quantity }));
  };

  // Handle item removal from cart
  const handleRemoveFromCart = (itemId) => {
    dispatch(removeProductFromCart(itemId));
  };

  // Handle clear cart action
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Handle checkout with Razorpay integration
  const handleCheckout = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Create a payment on CAP_PAY endpoint
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

      const response = await fetch(CAP_PAY, {
        method: 'POST',
        body: JSON.stringify({
          amount: cartItems.reduce((acc, item) => acc + (item.foodId ? item.foodId.price * item.quantity : 0), 0) * 100,
          currency: 'INR',
          receipt: 'receiptID',
        }),
        headers: {
          'Authorization': `Bearer ${token}`, // Corrected header key
          'Content-Type': 'application/json' // Correct content type
        },
      });

      const order = await response.json();
      if (!response.ok) {
        throw new Error('Failed to create order.');
      }

      // Step 2: Initialize Razorpay
      const options = {
        key: 'rzp_test_t4LUM04KXw6wHc', // Replace with your Razorpay Key ID
        amount: cartItems.reduce((acc, item) => acc + (item.foodId ? item.foodId.price * item.quantity : 0), 0) * 100,
        currency: 'INR',
        name: 'Foodio',
        description: 'Test Transaction',
        image: '/logo.png',
        order_id: order.id,
        handler: async (response) => {
          // Step 3: Verify payment on VER_PAY endpoint
          const validateRes = await fetch(VER_PAY, {
            method: 'POST',
            body: JSON.stringify(response),
            headers: {
              'Authorization': `Bearer ${token}`, // Corrected header key
              'Content-Type': 'application/json' // Correct content type
            },
          });
          const jsonRes = await validateRes.json();

          if (jsonRes.msg === 'success') {
            const updatedPaymentData = {
              token: localStorage.getItem('token'),
              amount: order.amount / 100,
              orderId: jsonRes.orderId,
              paymentId: jsonRes.paymentId,
            };

            // console.log(updatedPaymentData);

            // Update payment data in the state
            setPaymentData(updatedPaymentData);

            // Dispatch the payment data to Redux store
            dispatch(addPayments(updatedPaymentData));

            dispatch(handleClearCart);

            // Reset paymentData after dispatch
            setPaymentData(null);
          } else {
            alert('Payment verification failed!');
          }
        },
        prefill: {
          name: 'Web Dev Matrix',
          email: 'webdevmatrix@example.com',
          contact: '9000000000',
        },
        notes: {
          address: 'Razorpay Corporate Office',
        },
        theme: {
          color: '#FD8B51',
        },
      };

      const rzp1 = new window.Razorpay(options);

      // Handle payment failure
      rzp1.on('payment.failed', (response) => {
        alert(`Payment failed: ${response.error.description}`);
      });

      // Open Razorpay payment modal
      rzp1.open();
    } catch (error) {
      console.error('Error during payment:', error);
    }
  };

  // Handle loading and error states
  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="cart-container bg-gray-100 py-8 px-4 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-xl">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items mb-6 space-y-6 mx-auto w-[95%]">
            {cartItems.map((item, index) => (
              <li 
                key={index} 
                className="flex justify-between items-center mb-4 border-b pb-4 bg-white shadow-lg p-4 rounded-lg transition duration-300 hover:scale-105"
              >
                <div className="left-component flex-1 flex items-center">
                  {item.foodId ? (
                    <>
                      <img
                        src={item.foodId.imageUrl}
                        alt={item.foodId.name}
                        className="w-32 h-32 object-cover rounded-lg mr-4"
                      />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.foodId.name}</h3>
                        <p className="text-gray-700 mb-2"> {item.foodId.description}</p>
                        <p className="text-gray-700">Price: ₹{item.foodId.price}</p>
                      </div>
                    </>
                  ) : (
                    <p className="text-red-500">Product details unavailable</p>
                  )}
                </div>

                <div className="right-component flex flex-col items-end space-y-4 pr-3">
                  <div className="flex items-center space-x-2">
                    <button
                      className="bg-pink-500 text-white py-1 px-3 rounded-lg hover:bg-pink-600 transition"
                      onClick={() => handleUpdateQuantity(item._id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold">{item.quantity}</span>
                    <button
                      className="bg-pink-500 text-white py-1 px-3 rounded-lg hover:bg-pink-600 transition"
                      onClick={() => handleUpdateQuantity(item._id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <p className="text-gray-700">
                    Total: ₹{item.foodId ? item.foodId.price * item.quantity : 'N/A'}
                  </p>
                  <button
                    className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition"
                    onClick={() => handleRemoveFromCart(item._id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-summary bg-white shadow-lg rounded-lg p-6 mx-auto w-[95%]">
            <h3 className="text-2xl font-bold mb-4">Cart Summary</h3>
            <p className="text-lg">Total Items: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}</p>
            <p className="text-lg mb-4">
              Total Price: ₹{cartItems.reduce((acc, item) => acc + (item.foodId ? item.foodId.price * item.quantity : 0), 0)}
            </p>
            <button
              className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition mt-4 ml-4"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
