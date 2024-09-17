import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart, addToCart, decrementQuantity } from '../Redux/cartSlices'; // Import `decrementQuantity`

const Cart = () => {
  const { cartItems, totalQuantity, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // const cartData = {
  //   cartItems,
  //   totalQuantity,
  //   totalPrice
  // }

  

  return (
    <section className="cart-container bg-gray-100 py-8 px-4 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-xl">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items mb-6 space-y-6 ml-5 mr-5">
            {cartItems.map((item, index) => (
              <li 
                key={index} 
                className="flex justify-between items-center mb-4 border-b pb-4 bg-white shadow-lg p-4 rounded-lg transition duration-300 hover:scale-105"
              >
                {/* Left component: Dish image and description */}
                <div className="left-component flex-1 flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-700 mb-2">Description: {item.description}</p>
                    <p className="text-gray-700">Price: ₹{item.price}</p>
                  </div>
                </div>

                {/* Right component: Price and order actions */}
                <div className="right-component flex flex-col items-end space-y-4">
                  <div className="flex items-center space-x-2">
                    {/* Decrement button */}
                    <button
                      className="bg-pink-500 text-white py-1 px-3 rounded-lg hover:bg-pink-600 transition"
                      onClick={() => dispatch(decrementQuantity(item))}
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold">{item.quantity}</span>
                    {/* Increment button */}
                    <button
                      className="bg-pink-500 text-white py-1 px-3 rounded-lg hover:bg-pink-600 transition"
                      onClick={() => dispatch(addToCart(item))}
                    >
                      +
                    </button>
                  </div>
                  <p className="text-gray-700">Total: ₹{item.totalPrice}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-summary bg-white shadow-lg rounded-lg p-6 ml-5 mr-5">
            <h3 className="text-2xl font-bold mb-4">Cart Summary</h3>
            <p className="text-lg">Total Items: {totalQuantity}</p>
            <p className="text-lg mb-4">Total Price: ₹{totalPrice}</p>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition mt-4"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
