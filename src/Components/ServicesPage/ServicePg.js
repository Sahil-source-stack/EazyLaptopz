import React, { useEffect, useState } from 'react';
import QuizContent from './QuizContent';
import ProductDetail from './ProductDetail';
import axios from 'axios';

const ServicePg = () => {
  const [QuizOpen, setQuizOpen] = useState (true);
  const [Details, setDetails] = useState({
    'price': 0,
    'processor': '',
    'category': ''

  });

  const fetchProduct = async () => {
    try{
      console.log('started');
      const response = await axios.get(`https://easy-qqgy.onrender.com/api/products/filter-products?category=${Details.category}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.data){
        console.log(response.data);
      }
    }catch(error){
      console.log(error);
    }
  };

  useEffect(() => {
    if (QuizOpen === false){
      fetchProduct();
    }

  }, [QuizOpen]);

  console.log(Details);

  return (
  <>
  <div className='container-fluid'>
  {
    QuizOpen ? <QuizContent QuizOpen = {QuizOpen} setQuizOpen = {setQuizOpen} setDetails={setDetails}/> :

    <ProductDetail/>
  }
  </div>


  </>
  );
}

export default ServicePg;