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
const checkoutRoutes = require('./routes/checkoutRoute');
const connectDB = require('./config/db');
const adminRoutes = require('./routes/adminRoutes');
const productRoutes = require("./routes/productRoutes");
dotenv.config();
const app = express();
app.use(cors({
    origin: 'https://shopping-app-iy47.vercel.app/',
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
app.use('/api/checkout', checkoutRoutes);
app.use('/api/product', productRoutes);
// Admin routes
app.use('/api/admin', adminRoutes);
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  console.log('Database connected successfully');
}).catch(err => {
  console.error('Database connection failed:', err);
});
