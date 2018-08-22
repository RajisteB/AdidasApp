import React from 'react';
import BlackLogo from '../../images/logowhite.jpg';

const Footer = () => {
  return (
    <div className="footer">
      <img src={BlackLogo} alt=""/>
      <ul>
        <li className="title">Company</li>
        <li>About</li>
        <li>History</li>
        <li>Corporate</li>
        <li>Careers</li>
        <li>Sustainability</li>
        <li>Affiliates</li>
        <li>Students</li>
        <li>Mobile Apps</li>
      </ul>
      <ul>
        <li className="title">Support</li>
        <li>Help</li>
        <li>Order Tracker</li>
        <li>Returns & Refunds</li>
        <li>Sizing</li>
        <li>Site Map</li>
      </ul>
      <ul>
        <li className="title">Shop</li>
        <li>Store Locater</li>
        <li>Adidas Men</li>
        <li>Adidas Women</li>
        <li>Adidas Kids</li>
        <li>Adidas Originals</li>
        <li>Adidas Athletics</li>
        <li>Adidas Skateboarding</li>
      </ul>
      <ul>
        <li className="title">Privacy</li>
        <li>Privacy & Security</li>
        <li>Runtastic Privacy</li>
        <li>Statement</li>
        <li>Terms & Conditions</li>
      </ul>
      <ul>
        <li className="title">Gift Cards</li>
        <li>Email a Gift Card</li>
        <li>Ship a Gift Card</li>
        <li>Check Balance</li>
      </ul>
    </div>
  );
}

export default Footer;