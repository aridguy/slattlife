import React, { useEffect, useState } from "react";
import "../App.css";
import Logo from "../images/brand-name-white.png";
import Logo1 from "../images/slatt-icon.png";
import { createClient } from "contentful";
import Marquee from "react-fast-marquee";
import "../AnimBg.css";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import InstallPrompt from "../InstallPrompt";
import Community from "../Assets/menu/communityy.gif"

function App() {
  const navigate = useNavigate();
  // TO UPDATE THE SCROLLING TEXT
  const OpenMenus = () => navigate("/menu");
  const [scrollingText, setScrollingText] = useState([]);
  const client = createClient({
    space: "q2ho18w4i1sf",
    accessToken: "fxp-pdOyuEnp2mYpY3ujUC0GfbaV4q3hyELwukdZD90",
  });
  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const entries = await client.getEntries({
          content_type: "scrollingMessage",
        });
        // console.log(entries);
        setScrollingText(entries.items);
      } catch (error) {
        console.log(error);
      }
    };
    getAllEntries();
  }, [client]);
  const BoardIn = " >BOARD IN<";

  return (
    <div className="glitch">
      <div className="app-container">
        <div className="--secondlevel-parent container">
          <div>
            <div>
              <img width="43%" className="mb-5 rotate dLogo rotate-3d" src={Logo1} alt="Brand-Name" />{" "}
              <br />
              <img width={350} className="slatlifeTxt " src={Logo} alt="Brand-Name" />
            </div>
            <div className="press-start cursor text-white mt-2">
              <span onClick={OpenMenus} className=" text-with-glow">
                {BoardIn}
              </span>
              <InstallPrompt />
            </div>
            <div>
              <img
                onClick={() => navigate("/community")}
                src={Community}
                width={200}
                alt="Icon 7"
                className="icon-img img-fluid cursor homeCom"
              />
            </div>
            {
              // scroliing messages
              <div>
                <Marquee
                  style={{ letterSpacing: "3px" }}
                  className="text-white futs"
                >
                  {scrollingText.map((item, index) => (
                    <span className="mb-3" key={index}>{item.fields.scrollingtext} </span> // Assuming 'message' is the field you want to display
                  ))}
                </Marquee>
              </div>
            }
            {
              // news letter place
              <div className="news-letter-box">
                <input
                  placeholder="subscribe to get updates"
                  style={{ color: "white" }}
                  className="inputs"
                />{" "}
                <br />
                <button style={{ width: "10em" }} className="btn btn-secondary">
                  Send
                </button>
              </div>
            }
           
              <div className="medias-social">
                <a href="https://youtube.com/@slattlife01?si=U5M16G2ih9CKTIus">
                  <i className="fab fa-youtube cursor"></i>
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href="https://www.instagram.com/insta.slattlife?igsh=aTVub2g2YTRnZGM5">
                  <i className="fab fa-instagram"></i>
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href="https://snapchat.com/t/oBmBMCyH">
                  <i className="fab fa-snapchat"></i>
                </a>
                <br />

                <address className="text-white press-start-font relative text-center">
                &copy; SLATTLIFE 2024
              </address>
              </div>
            <div className="sound">
              <span
                style={{ letterSpacing: "2px" }}
                className="cursor text-white futs"
              >
                Terms & Conditions / Privacy Policy
              </span>
            </div>
            <div className="sounds">
              <i className="fas fa-volume-high text-white cursor volume"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
