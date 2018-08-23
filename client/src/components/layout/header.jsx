import React from 'react';
import TopNavLogo from '../../images/Logo.png';

const Header = (props) => {
  return (
    <div className="top-navigation">
      <div className="nav-child" onClick={() => props.handleScroll("men")}>
        <h2>Men</h2>
      </div>
      <div>
        <img src={TopNavLogo} alt=""/>
      </div>
      <div className="nav-child" onClick={() => props.handleScroll("women")}>
        <h2>Women</h2>
      </div>
    </div>
  )
}

export default Header;