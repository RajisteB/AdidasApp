import React from 'react';
import Logo from '../../images/Logo.png';
import SideShot from '../../images/quartershot02.jpg'

const WomensHero = () => {
  let bannerStyle = {
    backgroundImage: "url(" + SideShot +")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  }

  return (
    <div className="womens-hero-container">
      <img src={Logo} alt=""/>
      <div className="medium-line"></div>
      <div className="img-container" style={bannerStyle}>
        <div className="overlay"></div>
      </div>
      <div className="medium-line"></div>
    </div>
  );
}

export default WomensHero;