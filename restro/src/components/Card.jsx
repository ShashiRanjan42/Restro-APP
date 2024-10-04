import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../Redux/cartSlices';
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Card = ({ food }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAddToCart = () => {
    // Check if the user is logged in (check for token)
    if (!token) {
      toast.error('Please log in to add items to the cart.');
      return navigate('/login'); // Redirect to login if no token
    }

    // Check if the item is already in the cart
    const isItemInCart = cartItems.some(item => item.foodId === food._id);

    if (isItemInCart) {
      toast.error('Item is already in the cart!'); // Show error toast if the item is already in the cart
    } else {
      // Dispatch action to add the product to the cart
      dispatch(addProductToCart({ foodId: food._id, quantity: 1 }));
      toast.success('Item added to cart successfully!'); // Show success toast
    }
  };

  return (
    <>
      {/* Add the Toaster at the top level of your app or component */}
      <Toaster /> {/* This is required to show the toast notifications */}

      <div className="w-full sm:w-80 bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
        {/* Image Section */}
        <img
          src={food.imageUrl}
          alt={food.name}
          className="w-full h-48 object-cover"
        />

        {/* Text Section */}
        <div className="p-6">
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">
            {food.name}
          </h2>
          <p className="text-gray-600 text-center mb-4">{food.description}</p>

          {/* Price and Add to Cart Button */}
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold text-gray-800">₹{food.price}</p>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none transition"
              onClick={handleAddToCart} // Add to Cart functionality
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
