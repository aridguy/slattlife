import React, { useEffect, useRef } from "react";
import "../App.css";
import Logo from "../images/brand-name-white.png";

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
        <img className="landing-image" src={Logo} alt="Brand-Name" />
      </div>
      <div className="press-start cursor text-white mt-5">
        <span onClick={OpenMenus} className="starte text-with-glow">BOARD IN</span>
      </div>
      <div className="--input-container">
        <div className="text-center footOfHome">
          <div className="text-white mt-2">
            <a href="https://youtube.com/@slattlife01?si=U5M16G2ih9CKTIus">
              <i className="fab fa-youtube cursor"></i>
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://www.instagram.com/slattlife.c0m?igsh=cTBvZHlhd2lyMTZn&utm_source=qr">
              <i className="fab fa-instagram cursor"></i>
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://www.tiktok.com/@slattlife.com?is_from_webapp=1&sender_device=pc">
              <i className="fab fa-tiktok cursor"></i>
            </a>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="audio-container">
                  <audio autoPlay loop={true}>
                    <source src="/sound.mp3" type="audio/mp3" />
                  </audio>
                </div>
                <address className="text-white relative copyrights bottom-40 futs text-center">
                  &copy; SLATTLIFE 2024
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
      </div>
    </div>
  );
}

export default App;
