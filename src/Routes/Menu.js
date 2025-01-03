import React, { useEffect, useState } from "react";

// import Logo from "../images/brand-name-white.png";
// import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Login from "./LoginForm/Login";
import AOS from "aos";
import { useNavigate } from "react-router-dom";
// IMPORTING ALL NAVIGATION ICONS
import About from "../Assets/menu/about.PNG";
import Contact from "../Assets/menu/contact.png";
import Shop from "../Assets/menu/shop.png";
import Advert from "../Assets/menu/advert.png";
import Forums from "../Assets/menu/forums.png";
import ChatChill from "../Assets/menu/chat&chill.PNG";
import Community from "../Assets/menu/communities.png";
import Media from "../Assets/menu/media.gif";

const Menu = () => {
  const Navigate = useNavigate("/");
  // INITIATE AOS ON COMPONENT
  useEffect(() => {
    AOS.init();
  }, []);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const CloseLoginModal = () => setShowLoginModal(false);
  // const navigate = useNavigate();

  // prompting all icons

  return (
    <div>
      <div className="app-containerMenu">
        <div className="--secondlevel-parent">
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <div
                className="fixers"
                  style={{
                    width: "100%",
                    height: "29em",
                    backgroundColor: "grey",
                    borderRadius: "5px",
                    position: "relative",
                    paddingTop: "5em",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "4em",
                      background: "#545454",
                      position: "absolute",
                      top: "0px",
                      padding: "1em",
                    }}
                  >
                    <span className="text-white text-uppercase brandFont">
                      Slattlife
                    </span>
                  </div>
                  <div>
                    <div className="container mt-2">
                      <div className="row text-center menuPeople text-uppercase ">
                        <div className="col-6 col-md-3 ">
                          <div>
                            <img
                              src={About}
                              width={70}
                              alt="Icon 1"
                              className="icon-img img-fluid"
                            />
                            <br />
                            <span className="menuTexts">About</span>
                          </div>
                        </div>
                        <div className="col-6 col-md-3">
                          <div>
                            <img
                              src={Contact}
                              width={70}
                              alt="Icon 2"
                              className="icon-img img-fluid"
                            />
                            <br />
                            <span className="menuTexts">Contact</span>
                          </div>
                        </div>
                        <div className="col-6 col-md-3">
                          <div>
                            <img
                              src={Shop}
                              width={70}
                              alt="Icon 3"
                              className="icon-img img-fluid"
                            />
                            <br />
                            <span className="menuTexts">Shop</span>
                          </div>
                        </div>
                        <div className="col-6 col-md-3">
                          <div>
                            <img
                              src={Media}
                              width={250}
                              alt="Icon 4"
                              className="icon-img img-fluid"
                              style={{
                                position: "absolute",
                                bottom: "21em",
                                left: "32em",
                              }}
                            />
                            <br />
                            <span className="menuTexts"></span>
                          </div>
                        </div>
                      </div>
                      <div className="row text-center text-uppercase">
                        <div className="col-6 col-md-3">
                          <img
                            src={Forums}
                            width={70}
                            alt="Icon 5"
                            className="icon-img img-fluid"
                          />
                          <br />
                          <span className="menuTexts">Forums</span>
                        </div>
                        <div className="col-6 col-md-3">
                          <img
                            src={ChatChill}
                            width={70}
                            alt="Icon 6"
                            className="icon-img img-fluid"
                          />
                          <br />
                          <span className="menuTexts">Chat & Chill</span>
                        </div>
                        <div className="col-6 col-md-3">
                          <img
                            src={Community}
                            width={70}
                            alt="Icon 7"
                            className="icon-img img-fluid"
                          />
                          <br />
                          <span className="menuTexts">Community</span>
                        </div>
                        <div className="col-6 col-md-3">
                          <img
                            src={Advert}
                            width={70}
                            alt="Icon 4"
                            className="icon-img img-fluid"
                          />
                          <br />
                          <span className="menuTexts">Advert</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2"></div>
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
