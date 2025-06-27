// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoute');
const cartRoutes = require('./routes/cartRoute'); 
const paymentRoutes = require('./routes/paymentRoute');
const orderRoutes = require('./routes/orderRoute');
const connectDB = require('./config/db');
dotenv.config();
const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true // Allow cookies to be sent
}));
app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API Running...');
});

app.use('/api/auth', userRoutes);
app.use('/api/cart', cartRoutes); 
app.use('/api/payment',paymentRoutes); 
app.use('/api/order', orderRoutes); 


const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  console.log('Database connected successfully');
}).catch(err => {
  console.error('Database connection failed:', err);
});
