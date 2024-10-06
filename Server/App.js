const express = require("express");
require('dotenv').config();
const cors = require("cors");
const database = require('../Server/Database/mongodb');
var cookieParser = require('cookie-parser')

const app = express();

const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(express.urlencoded({ limit: '16kb' }));
app.use(cookieParser());
database.connect();

const corsOptions = {
  origin: 'https://restro-app-rust.vercel.app',
  credentials: true,
  optionSuccessStatus: 200
}

app.use(cors(corsOptions));

// Setting up routes
const userRoute = require("./Router/userRouter");
app.use('/api/users', userRoute);

const addFood = require("./Router/addfoodRouter");
app.use('/api/foods', addFood);

const cartRoute = require('./Router/CartRouter');
app.use('/api/carts', cartRoute);

const OrderRoute = require('./Router/OrderRouter');
app.use('/api/orders', OrderRoute);

const GetOrder = require('./Router/getOrderRouter');
app.use('/api/getorders', GetOrder);

const Payment = require('./Router/PaymentRoute');
app.use('/api/payments', Payment);

app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});
