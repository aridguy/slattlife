import React, { useState, useEffect } from "react";

import Logo1 from "../images/slatt-icon.png";

const ShopNav = () => {
  const [index, setIndex] = useState(0);
  const messages = [
    "Sale alert: up to 60% off now on. T&Cs apply",
    "Don't miss out! Up to 60% off on selected items",
    "Hurry! Limited time sale: up to 60% off today",
    " Enjoy FREE STANDARD DELIVERY on orders over £300",
  ];
  useEffect(() => {
    // Function to change text every 5 seconds
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 5000);

    // Clean-up function to clear interval on component unmount
    return () => clearInterval(interval);
  }); // Empty dependency array ensures effect runs only once on mount
  return (
    <div>
      <section className="bg-dark text-white">
        <div className="container">
          <span className="text-fade">{messages[index]}</span>
        </div>
      </section>
      <nav className="bg-black pt-4 py-4">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="logo-section">
                <img
                  src={Logo1}
                  height="50"
                  alt="MDB Logo"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col text-center">
              <div className="pages-section">
                <ul className="page-parent d-flex gap-5 text-white">
                  <li className="cursor">Home</li>
                  <li className="cursor">About</li>
                  <li className="cursor">Contact</li>
                 
                </ul>
              </div>
            </div>
            <div className="col text-center">
              <div className="d-flex gap-4">
                <i className="bi bi-instagram cursor text-white"></i>
                <i className="bi bi-snapchat cursor text-white"></i>
                <i className="bi bi-youtube cursor text-white"></i>
                <i className="bi bi-tiktok cursor text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ShopNav;
