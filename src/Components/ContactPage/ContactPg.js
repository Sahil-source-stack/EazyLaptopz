import React, { useState } from 'react';
import './ContactPg.css';

const ContactPg = () => {
  const [data, setData] = useState ({
    fname: '',
    number: '',
    email: '',
    msg: '',
  });
  const InputEvent = (event) =>{
    const {name, value} = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]:value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for shopping from our website. We will get back to you soon.');

  };
  return (
    <>
    <div className='my-3'>
    <h1 id='form-heading' className='text-center'>Connect-With-Us</h1>
    </div>
    <div className='container contact-div'>
    <div className='row'>
    <div className='col-md-6 col-10 mx-auto'>
    <form className='form-area' onSubmit={formSubmit}>
    <div className="mb-3">
      <label for="exampleFormControlInput1" className="form-label">Full Name</label>
      <input type="text" className="form-control" id="exampleFormControlInput1" 
      name='fname'
      value={data.fname}
      onChange={InputEvent}
      placeholder="enter your name"/>
    </div>
    <div className="mb-3">
      <label for="exampleFormControlInput1" className="form-label">Mob-Num</label>
      <input type="number" className="form-control" id="exampleFormControlInput1" 
      name='number'
      value={data.number}
      onChange={InputEvent}
      placeholder="enter your 10 digit phone number" />
    </div>
    <div className="mb-3">
      <label for="exampleFormControlInput1" className="form-label">Email Address</label>
      <input type="email" className="form-control" id="exampleFormControlInput1" 
      name='email'
      value={data.email}
      onChange={InputEvent}
      placeholder="name@example.com" />
    </div>
    <div className="mb-3">
      <label for="exampleFormControlTextarea1" className="form-label">Product Description</label>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
        name='msg'
        value={data.msg}
        onChange={InputEvent}
      ></textarea>
    </div>
    <div className="col-12 text-center">
      <button className="btn btn-primary" type="submit">SUBMIT</button>
    </div>
    </form>
    </div>
    </div>
    </div>
    </>
    
  );
}

export default ContactPg;