import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUs from '../pages/AboutUs'
import Childrens from '../pages/Childrens'
import ContactUs from '../pages/ContactUs'
import FAQ from '../pages/FAQ'
import Home from '../pages/Home'
import Login from '../pages/Login'
import MenDetails from '../pages/MenDetails'
import Mens from '../pages/Mens'
import ShoppingCart from '../pages/ShoppingCart'
import Womens from '../pages/Womens'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={ <Home/>} />
            <Route path="/mens" element={ <Mens/>} />
            <Route path="/mens/:id" element={ <MenDetails/>} />
           
            <Route path="/womens" element={ <Womens/>} />
            <Route path="/children" element={ <Childrens/>} />
            <Route path="/about" element={ <AboutUs/>} />
            <Route path="/contact" element={ <ContactUs/>} />
            <Route path="/faq" element={ <FAQ/>} />
            <Route path="/shoppingcart" element={ <PrivateRoute><ShoppingCart/></PrivateRoute>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes