
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Stripe secret key
const Cart = require('../Model/AddCart'); // Cart model
const Food = require('../Model/food'); // Food model
const Order = require('../Model/Order'); // Order model

const createPaymentIntent = async (req, res) => {
  const userId = req.user.userId;  // Get user ID from the authenticated user

  try {
    // Fetch the user's cart
    const cart = await Cart.findOne({ userId }).populate('items.foodId');

    if (!cart) {
      return res.status(404).json({ success: false, msg: 'Cart not found' });
    }

    // Calculate the total price from the cart items
    let totalPrice = 0;
    cart.items.forEach(item => {
      totalPrice += item.foodId.price * item.quantity;
    });

    if (totalPrice <= 0) {
      return res.status(400).json({ success: false, msg: 'Cart is empty' });
    }

    // Create a Stripe payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(totalPrice * 100), // Convert to cents (if in USD)
      currency: 'usd',  // Adjust the currency as per your requirement
      automatic_payment_methods: {
        enabled: true,  // Enable automatic payment methods like card
      },
    });

    // Send back the client secret to the frontend
    res.status(200).json({
      success: true,
      clientSecret: paymentIntent.client_secret,
      PaymentIntentId:paymentIntent.id,
      totalPrice: totalPrice
    });
  } catch (error) {
    console.error('Payment Intent Error:', error.message);
    res.status(500).json({ success: false, msg: 'Payment failed', error: error.message });
  }
};

// After successful payment, clear the cart and create an order
const handlePostPayment = async (req, res) => {
  const { paymentIntentId } = req.body;
  const userId = req.user.userId;

  try {
    // Verify the payment status (optional but recommended)
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    
    // if (paymentIntent.status !== 'succeeded') {
    //   return res.status(400).json({ success: false, msg: 'Payment not completed' });
    // }

    // Fetch the user's cart
    const cart = await Cart.findOne({ userId }).populate('items.foodId');

    if (!cart) {
      return res.status(404).json({ success: false, msg: 'Cart not found' });
    }

    // Create an order in the database
    const newOrder = new Order({
      userId: userId,
      items: cart.items.map(item => ({
        foodId: item.foodId._id,
        quantity: item.quantity,
        price: item.foodId.price
      })),
      totalPrice: paymentIntent.amount / 100,  // Convert back to the original amount (USD)
      status: 'paid',
      paymentIntentId: paymentIntent.id
    });

    await newOrder.save();

    // Clear the user's cart after the order is created
    await Cart.findOneAndDelete({ userId });

    res.status(200).json({ success: true, msg: 'Payment successful, order placed', order: newOrder });
  } catch (error) {
    console.error('Post Payment Error:', error.message);
    res.status(500).json({ success: false, msg: 'Payment processing failed', error: error.message });
  }
};

module.exports = { createPaymentIntent, handlePostPayment };
