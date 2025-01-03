import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import Logo from "../images/brand-name-white.png";
import Logo1 from "../images/slatt-icon.png";
import Vids from "../Assets/animated-home.mp4";
import { createClient } from "contentful";

import Marquee from "react-fast-marquee";
// import Sounds from "../sounds.mp3";
import "../AnimBg.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import Gif from "../Assets/comnity.gif";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.play(); // Play the video
      video.loop = true; // Enable looping
      video.muted = true; // Mute the video for autoplay policies
    }
  }, []);

  useEffect(() => {
    AOS.init();
    // handlePlay()
  }, []);

  handlePlay()


  //   const showAlert = async () => {
  //     const { value: accept } = await Swal.fire({
  //       title: "Terms and conditions",
  //       input: "checkbox",
  //       inputValue: 1,
  //       allowOutsideClick: false,
  //       inputPlaceholder:
  //         "For our site to function properly you need to agree with our terms and conditions",
  //       confirmButtonText:
  //         "Continue&nbsp;<i className='fa fa-arrow-right'></i>",
  //       inputValidator: (result) => {
  //         return !result && "You need to agree with T&C";
  //       },
  //     });
  //     if (accept) {
  //       Swal.fire("You agreed with T&C :)");
  //     }
  //   };

  //   showAlert();
  // }, []);

 

  // const isValidEmail = (email) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // };

  // const SendEmails = (e) => {
  //   e.preventDefault();
  //   const email = inputRef.current.value;
  //   if (isValidEmail(email)) {
  //     axios
  //       .get(
  //         `https://sheetdb.io/api/v1/by3dj0u3ntdiz/search?email=${encodeURIComponent(
  //           email
  //         )}`
  //       )
  //       .then((response) => {
  //         if (response.data.length > 0) {
  //           Swal.fire({
  //             icon: "warning",
  //             text: "This email has already been used.",
  //           });
  //         } else {
  //           axios
  //             .post("https://sheetdb.io/api/v1/by3dj0u3ntdiz", { email })
  //             .then((response) => {
  //               Swal.fire({
  //                 icon: "success",
  //                 text: "Successfully subscribed Slatt!",
  //               });
  //               inputRef.current.value = "";
  //             })
  //             .catch((error) => {
  //               console.error("Error sending email:", error);
  //             });
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Error checking email:", error);
  //         Swal.fire({
  //           icon: "error",
  //           text: "An error occurred while checking email. Please try again.",
  //         });
  //       });
  //   } else {
  //     Swal.fire({ icon: "error", text: "Use a valid email Slatt!" });
  //   }
  // };

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
        console.log(entries);
        setScrollingText(entries.items);
      } catch (error) {
        console.log(error);
      }
    };
    getAllEntries();
  }, []);

  return (
    <div className="glitch">
      <div className="app-container">
        <div className="--secondlevel-parent container">
          <div>
            <div>
              <img width={100} className="" src={Logo1} alt="Brand-Name" />{" "}
              <br />
              <img width={200} className="" src={Logo} alt="Brand-Name" />
            </div>
            <div className="press-start cursor text-white mt-5">
              <span onClick={OpenMenus} className="starte text-with-glow">
                BOARD IN
              </span>
            </div>
            <div>
              <video ref={videoRef} width="220" height="140">
                <source src={Vids} type="video/mp4" />
              </video>
            </div>
            <div>
              <Marquee
                style={{ letterSpacing: "3px" }}
                className="text-white futs"
              >
                {scrollingText.map((item, index) => (
                  <span key={index}>{item.fields.scrollingtext} </span> // Assuming 'message' is the field you want to display
                ))}
              </Marquee>
            </div>
            <div className="mt-4">
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
            <div className="text-white text-center mt-3">
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
              <address className="text-white relative  futs text-center">
                &copy; SLATTLIFE 2024
              </address>
            </div>
            <div className="sounds">
              <i className="fas fa-volume-high text-white cursor"></i>
            </div>
            <div className="sounds">
              <span
                style={{ letterSpacing: "2px" }}
                className="cursor text-white futs"
              >
                Terms & Conditions / Privacy Policy
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
