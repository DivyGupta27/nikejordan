import React from 'react'
import Navbar from './components/Navbar'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Mens from './components/Mens';
import Womens from './components/Womens';
import Kids from './components/Kids';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Payment from './components/Payment';
import Errorpage from './components/Errorpage';
import PaymentSuccess from './components/PaymentSuccess';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/mens' element={<Mens/>}/>
      <Route path='/womens' element={<Womens/>}/>
      <Route path='/kids' element={<Kids/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/payment' element={<Payment/>}/>
      <Route path='*' element={<Errorpage/>}/>
      <Route path='/success' element={<PaymentSuccess/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App