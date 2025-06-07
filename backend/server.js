// backend/server.js
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoute');
const cartRoutes = require('./routes/cartRoute'); 
const connectDB = require('./config/db');
dotenv.config();
const app = express();
app.use(cors({
    origin: 'http://localhost:5173', // Adjust this to your frontend URL
    credentials: true // Allow cookies to be sent
}));
app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API Running...');
});

app.use('/api/auth', userRoutes);
app.use('/api/cart', cartRoutes); // Add cart routes 

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  console.log('Database connected successfully');
}).catch(err => {
  console.error('Database connection failed:', err);
});
