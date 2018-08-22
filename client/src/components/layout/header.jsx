import React from 'react';
import TopNavLogo from '../../images/Logo.png';

const Header = () => {
  return (
    <div className="top-navigation">
      <div className="nav-child">
        <h2>Men</h2>
      </div>
      <div>
        <img src={TopNavLogo} alt=""/>
      </div>
      <div className="nav-child">
        <h2>Women</h2>
      </div>
    </div>
  )
}

export default Header;