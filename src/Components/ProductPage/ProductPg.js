import React from 'react';
import './ProductPg.css';
import Card from '../Card/Card';
import CardData from '../Card/CardData';


const ProductPg = () => {
  return (
    <>
      <div className='my-5'>
        <h1 className='product-heading'>Our Genuine Products</h1>
      </div>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row gy-4'>
              {
                CardData.map((val, ind) => {
                  return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPg;