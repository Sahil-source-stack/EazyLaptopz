import React from 'react';
import './Footer.css';
import { FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer mt-5'>
    <div className='container-fluid'>
    <div className='row'>
    <p id='p'>
    Copyright &copy; All Rights Reserved. 
    <br/>
    <Link className='mail-icon' to='/contact'>
    <FaEnvelope /></Link> eazy.laptopz@gmail.com 
    </p>
    </div>
    </div>    
    </div>
  )
}

export default Footer;