import React, { useEffect } from 'react';
import { useState } from 'react';
import './cssfornav.css';
import { Link } from 'react-router-dom';
import menu from '../image/home/icons/menu-icon.png';
import Closeseller from '../image/home/Vector.png';
import Closeseller2 from '../image/home/CloseSeller 2.png';

const Navbarr = () => {

  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
    <div className="logo">
      <img src={Closeseller2} alt="" className='logo-0' />
      <img src={Closeseller} alt="" className='logo-02' />
    </div>

    <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
    onClick={() => setIsMobile(false)}
    >
      <Link to={'/'} className='home'>
      <li>Home</li>
      </Link>
      <Link to={'/closesellerTv'} className='seller-tv'>
      <li>CloseSeller Tv</li>
      </Link>
      <Link to={'/closesellerPrint'} className='seller-print'>
      <li>CloseSeller Print</li>
      </Link>
      <Link to={'/webService'} className='web-services'>
      <li>Web Service</li>
      </Link>
      <Link to={'/contact'} className='contacts'>
      <li>Contact</li>
      </Link>
    </ul>

    <button className="mobile-menu-icon"
    onClick={() => setIsMobile(!isMobile)}
    >
      {isMobile ? (
         <img src={menu} alt="" className='' />
      ) :(
        <img src={menu} alt="" className='' />
      )}
    </button>
  </nav>
  )
}

export default Navbarr