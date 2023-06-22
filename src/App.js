import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomePg from './Components/HomePage/HomePg';
import ProductPg from './Components/ProductPage/ProductPg';
import ServicePg from './Components/ServicesPage/ServicePg';
import ContactPg from './Components/ContactPage/ContactPg';
import Error from './Components/Error';


const App = () => {
  return (
    <>
    <Header/>
    <Routes>
    <Route exact path='/' element={<HomePg/>}/>
    <Route exact path='/home' element={<HomePg />} />
    <Route exact path='/product' element={<ProductPg/>} />
    <Route exact path='/services' element={<ServicePg/>} />
    <Route exact path='/contact' element={<ContactPg/>} />
    <Route path='*' element={<Error/>} />
    <Route render={() => <Navigate to="/" />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;