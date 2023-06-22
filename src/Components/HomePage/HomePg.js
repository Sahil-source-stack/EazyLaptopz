import React from 'react';
import './HomePg.css';
import Button from 'react-bootstrap/Button';
import web from './brandImg.gif';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

const HomePg = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Eazy Laptopz'], 
      startDelay: 300,
      typeSpeed: 120,
      backSpeed: 120,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
    <section className='header'>
      <div className='container-fluid mt-4'>
      <div className='row'>
      <div className='col-10 mx-auto'>
      <div className='row'>
      <div id='tagline' className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
      <h1 className='h1'>Elevate Your Journey <br/> With A Single Click ! <br/> 
      <span className='brand-name' ref={el}></span></h1>
      <h2 id='h2' className='my-3'>We are the team of highly skilled developer who provides high quality products & services.</h2>
      <div className='mt-3'>
      <Link exact to='/product'>
      <Button className='btn' variant="outline-primary">Get Started</Button>
      </Link>
      </div>
      </div>
      <div className='col-lg-6 order-1 order-lg-2 brand-img'>
      <img src={web} className='image-fluid' alt='home-image' />
      </div>
      </div>
      </div>
      </div>
      </div>
    </section>
    </div>

  );
}

export default HomePg;
