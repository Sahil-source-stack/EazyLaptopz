import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
  return (
    <>
      <div className='container-fluid'>
        <h1 className='error-head'>404 Error</h1>
        <h2 className='error-msg'>Sorry, page not found.</h2>
        <Link style={{textDecoration:'none'}} to='/home'>
          <button className='error-btn'> Go Back</button>
        </Link>

      </div>

    </>
  );
}

export default Error;