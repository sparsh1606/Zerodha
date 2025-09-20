import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './landing/Navbar.jsx'
import HomePage from './landing/home/HomePage.jsx'
import Signup from './landing/signup/Signup.jsx'
import ProductsPage from './landing/products/ProductsPage.jsx'
import AboutPage from './landing/about/AboutPage.jsx'
import PricingPage from './landing/pricing/PricingPage.jsx'
import SupportPage from './landing/support/SupportPage.jsx'
import NotFound from './landing/NotFound.jsx'
import Footer from './landing/Footer.jsx'


createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/product" element={<ProductsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />  
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  
)
