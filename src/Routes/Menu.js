import React, { useEffect, useState } from "react";
// import IconMedia from "../Assets/video-camera-dynamic-premium.png";
// import Community from "../Assets/comnity.gif";
// import About from "../Assets/question-block-red.gif";
// import Shop from "../Assets/shop.png";
// import Contact from "../Assets/contactus.png";
// import Forum from "../Assets/forums.png";
// import Advert from "../Assets/mic-dynamic-premium.png";
// import Marquee from "react-fast-marquee";
// import ChatChill from "../Assets/chat&chill.png";
import Logo from "../images/brand-name-white.png";
// import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Login from "./LoginForm/Login";
import AOS from "aos";

// import "./Menu.css"; // Assuming you have a separate CSS file for styling

const Menu = () => {
  // INITIATE AOS ON COMPONENT
  useEffect(() => {
    AOS.init();
  }, []);
  const [showLoginModal, setShowLoginModal] = useState(false);
 
  const CloseLoginModal = () => setShowLoginModal(false);
  // const navigate = useNavigate();
 

  // prompting all icons
  const handleComeLater = () => {
    Swal.fire({
      title: "Hey Slatt?",
      text: "Check back later?",
      icon: "error",
    });
  };

  const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ];

  return (
    <div>
      <div className="app-container">
        <section>
          <img
            width="180xp"
            src={Logo}
            alt="Brand-Name"
            className="mt-5 pt-3"
          />
        </section>
        <div className="container mt-5">
          <div className="container">
          <div className="image-grid container">
            {images.map((src, index) => (
              <img onClick={handleComeLater} key={index} src={src} alt={`Placeholder ${index + 1}`} className="menu" />
            ))}
          </div>
          </div>
        </div>
      </div>

      {showLoginModal && (
        <div className="modalMainParent bg-animation">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <div
                  data-aos-duration="600"
                  data-aos="zoom-in"
                  className="modalBox p-3"
                >
                  <b className="text-info text-black display-5 fw-bolder text-center">
                    Login
                  </b>
                  <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 mt-5">
                      <Login />
                    </div>
                    <div className="col-md-2"></div>
                  </div>
                </div>
                <div
                  onClick={CloseLoginModal}
                  className="text-center mt-3 text-white closeModalLogin"
                >
                  X
                </div>
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
