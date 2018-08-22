import React from 'react';
import Logo from '../../images/Logo.png';
import CutOffShot from '../../images/cutoffshot.jpg';
import DoubleWhite from '../../images/doublewhite.jpg';

const MensHero = () => {

  return (
    <div className="mens-hero-container">
      <img src={Logo} alt=""/>
      <div className="medium-line"></div>
      <div className="images-container">
        <img src={DoubleWhite} alt="" id="left-img"/>
        <h1>Forever Sport</h1>
        <img src={CutOffShot} alt="" id="right-img"/>
      </div>
      <div className="medium-line"></div>
    </div>
  );
}

export default MensHero;