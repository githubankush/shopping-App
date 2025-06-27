import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import { CartProvider } from './context/CartContext';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster position="top center" reverseOrder={false} />
    <AuthProvider>
    <CartProvider>
    <BrowserRouter>
       <App />
    </BrowserRouter>
    </CartProvider>
    </AuthProvider>

  </StrictMode>,
)
