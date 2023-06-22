import React from 'react';
import './Header.css';
import logo from './nav-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='container nav_bg'>
    <div className='row'>
    <div className='col-10 mx-auto'>
      <nav className="navbar navbar-expand-lg">
        <div className="container-lg">
          <Link className="navbar-brand" to='/'><img src={logo} className='brand-logo' alt='home-image' /></Link>
          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav  ms-3 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" activeClassName="menu_active" exact to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClassName="menu_active" exact to='/product'>Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClassName="menu_active" exact to='/services'>Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClassName="menu_active" exact to='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </div>
      </div>
    </div>

  );
}

export default Header;