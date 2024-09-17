const express = require('express');
const router = express.Router();
const { createPaymentIntent, handlePostPayment } = require('../Controller/paymentController');
const authenticateToken = require('../Middleware/auth');

// Route to create payment intent
router.post('/create-payment-intent', authenticateToken, createPaymentIntent);

// Route to handle post-payment logic (order creation, clearing cart)
router.post('/post-payment', authenticateToken, handlePostPayment);

module.exports = router;

