import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <>
    <div className='col-md-4 col-10 mx-auto' >
    <div className="card text-center">
    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
    <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">We provide the best innovative laptop products to you.</p>
    <Link to='/services' className="btn btn-primary">Explore</Link>
    </div>
    </div>
    </div>
    </>
  );
}

export default Card;