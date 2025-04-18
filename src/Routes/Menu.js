import React, { useEffect, useState } from "react";
import Login from "./LoginForm/Login";
import AOS from "aos";
import About from "../Assets/menu/about.PNG";
import Contact from "../Assets/menu/contact.png";
import Shop from "../Assets/menu/shop.png";
import Advert from "../Assets/menu/advert.png";
import Forums from "../Assets/menu/forums.png";
import ChatChill from "../Assets/menu/chat&chill.PNG";
import Community from "../Assets/menu/communityy.gif";
import Media from "../Assets/menu/media.gif";
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { createClient } from "contentful";

const Menu = () => {
  const Navigate = useNavigate("/");
  // INITIATE AOS ON COMPONENT
  useEffect(() => {
    AOS.init();
  }, []);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const CloseLoginModal = () => setShowLoginModal(false);
  // prompting all icons
  const [scrollingText, setScrollingText] = useState([]);
  const client = createClient({
    space: "q2ho18w4i1sf",
    accessToken: "thM3Zua3i_RWhRQ4DQBHhfOQl56zNuXWTQJ0XSo1viY",
  });
  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const entries = await client.getEntries({
          content_type: "menuSplashScreen",
        });
        setScrollingText(entries.items);
        //  console.log(entries.items);
      } catch (error) {
        console.log(error);
      }
    };
    getAllEntries();
  }, [client]);

  return (
    <div>
      <div className="app-containerMenu">
        <div className="--secondlevel-parent">
          <div className="container mt-3">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8 menu_parent">
                <div style={{ width: "16em", height: "1em", position: "relative", bottom: "-20px", }}>
                  <Marquee
                    style={{ letterSpacing: "3px" }}
                    className="text-white futs"
                  >
                    {scrollingText.map((item, index) => (
                      <span className="mb-3" key={index}>{item.fields.menuAlert} </span> // Assuming 'message' is the field you want to display
                    ))}
                  </Marquee>
                </div>
                <div
                  className="fixers"
                  style={{
                    width: "100%",
                    height: "25em",
                    backgroundColor: "black",
                    borderRadius: "5px",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      background: "#545454",
                      position: "absolute",
                      top: "0px",
                      padding: "0.5em",
                      borderRadius: "7px",
                    }}
                  >
                    <small className="text-white text-uppercase brandFont cursor">
                      Slattlife
                    </small>
                  </div>
                  <div>
                    <div className="container">
                      <div className="row text-center text-uppercase ">
                        <div className="col-6 col-md-3 ">
                          <div>
                            <img
                              onClick={() => Navigate("/about")}
                              src={About}
                              width={50}
                              alt="Icon 1"
                              className="icon-img img-fluid cursor levitating-image"
                            />
                            <br />
                            <span
                              onClick={() => Navigate("/about")}
                              className="menuTexts cursor text-white"
                            >
                              About
                            </span>
                          </div>
                        </div>
                        <div className="col-6 col-md-3">
                          <div>
                            <img
                              onClick={() => Navigate("/contact")}
                              src={Contact}
                              width={70}
                              alt="Icon 2"
                              className="icon-img img-fluid levitating-image"
                            />
                            <br />
                            <span
                              onClick={() => Navigate("/contact")}
                              className="menuTexts text-white "
                            >
                              Contact
                            </span>
                          </div>
                        </div>
                        <div className="col-6 col-md-3">
                          <div>
                            <img
                              onClick={() => Navigate("/shop")}
                              src={Shop}
                              width={70}
                              alt="Icon 3"
                              className="icon-img img-fluid cursor levitating-image"
                            />
                            <br />
                            <span
                              onClick={() => Navigate("/shop")}
                              className="menuTexts cursor text-white"
                            >
                              Shop
                            </span>
                          </div>
                        </div>
                        <div className="col-6 col-md-3">
                          <div>
                            <img
                              style={{ border: "6px solid orange", borderTopLeftRadius: "10px", borderBottomRightRadius: "10px" }}
                              onClick={() => Navigate("/media")}
                              src={Media}
                              alt="Icon 4"
                              className="icon-img img-fluid cursor responsive-icon "
                            />
                            <br />
                            <span
                              onClick={() => Navigate("/media")}
                              className="menuTexts media_text cursor text-white"
                            >
                              Media
                            </span>
                          </div>
                        </div>
                      </div>
                      {/*second row for the ocons */}
                      <div className="row text-center text-uppercase ">
                        <div className="col-6 col-md-3">
                          <img
                            onClick={() => Navigate("/forums")}
                            src={Forums}
                            width={70}
                            alt="Icon 5"
                            className="icon-img img-fluid levitating-image"
                          />
                          <br />
                          <span
                            onClick={() => Navigate("/forums")}
                            className="menuTexts cursor text-white"
                          >
                            Forums
                          </span>
                        </div>
                        <div className="col-6 col-md-3">
                          <img
                            onClick={() => alert("coming soon!")}
                            src={ChatChill}
                            width={70}
                            alt="Icon 6"
                            className="icon-img img-fluid cursor levitating-image"
                          />
                          <br />
                          <span className="menuTexts cursor text-white">
                            Chat & Chill
                          </span>
                        </div>
                        <div className="col-6 col-md-3">
                          <img
                            onClick={() => Navigate("/community")}
                            src={Community}
                            width={140}
                            alt="Icon 7"
                            className="icon-img img-fluid cursor "
                          />
                          <br />
                          <span
                            onClick={() => Navigate("/community")}
                            className="menuTexts cursor text-white mt-5"
                          >
                            Community
                          </span>
                        </div>
                        <div className="col-6 col-md-3">
                          <img
                            onClick={() => Navigate("/advert")}
                            src={Advert}
                            width={70}
                            alt="Icon 4"
                            className="icon-img img-fluid cursor levitating-image"
                          />
                          <br />
                          <span
                            onClick={() => Navigate("/advert")}
                            className="menuTexts cursor text-white "
                          >
                            Advert
                          </span>
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
