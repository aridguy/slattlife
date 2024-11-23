import React, { useEffect, useRef } from "react";
import "../App.css";
import Logo from "../images/brand-name-white.png";
import Logo1 from "../images/slatt-icon.png";

// import Marquee from "react-fast-marquee";
// import Sounds from "../sounds.mp3";
import "../AnimBg.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import Gif from "../Assets/comnity.gif";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  // useEffect(() => {
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

  const inputRef = useRef(null);
  useEffect(() => {
    const placeholderTexts = ["Signup for our newsletter"];
    let currentIndex = 0;
    let currentText = "";
    let currentTextIndex = 0;
    let typingInterval;

    const typePlaceholder = () => {
      if (currentTextIndex < placeholderTexts[currentIndex].length) {
        currentText += placeholderTexts[currentIndex][currentTextIndex++];
        if (inputRef.current) {
          inputRef.current.placeholder = currentText;
        }
      } else {
        clearInterval(typingInterval);
        currentText = "";
        currentTextIndex = 0;
        currentIndex = (currentIndex + 1) % placeholderTexts.length;
        setTimeout(() => {
          typingInterval = setInterval(typePlaceholder, 100);
        }, 1500);
      }
    };

    typingInterval = setInterval(typePlaceholder, 100);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

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

  const OpenMenus = () => navigate("/menu");

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
            <div>scrolling message</div>
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
              <span style={{letterSpacing: "2px"}} className="cursor text-white futs">Terms & Conditions / Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
