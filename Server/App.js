const express = require("express");
require('dotenv').config();
const cors=require("cors");
const database = require('../Server/Database/mongodb');
var cookieParser = require('cookie-parser')
// const bodyParser = require('body-parser');

const app=express();

const PORT = process.env.PORT||8000;
app.use(express.json());
app.use(express.urlencoded({limit: '16kb'}));
app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: true }));
database.connect();

const allowedOrigins = [
  "http://localhost:3000", 
  "https://restro-app-rust.vercel.app/"
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (e.g., mobile apps or CURL requests)
      if (!origin) {
        console.log("Request has no origin, allowing request");
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        console.log(`Allowing request from origin: ${origin}`);
        return callback(null, true); // Allow request
      } else {
        console.log(`Blocked by CORS: ${origin}`);
        return callback(new Error("Not allowed by CORS")); // Block request
      }
    },
    credentials: true, // Allow credentials (cookies, etc.) in CORS requests
  })
);

// Example error handling middleware
app.use((err, req, res, next) => {
  if (err.message === "Not allowed by CORS") {
    return res.status(403).json({ message: "CORS Error: Request blocked" });
  }
  next(err);
});


//setting up routes
const userRoute = require("./Router/userRouter");
app.use('/api',userRoute);
const addFood = require("./Router/addfoodRouter");
app.use('/api',addFood);
// const addFood = require("./Router/addfoodRouter");
// app.use('/api',getAllFood);
const cartRoute = require('./Router/CartRouter');
app.use('/api',cartRoute);
const OrderRoute = require('./Router/OrderRouter');
app.use('/api',OrderRoute);
const GetOrder = require('./Router/getOrderRouter');
app.use('/api',GetOrder);
const Payment = require('./Router/PaymentRoute');
app.use('/api',Payment);
app.listen(PORT,()=>{
    console.log(`App is listening at ${PORT}`);
});
