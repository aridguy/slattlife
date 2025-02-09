import React, { useRef } from "react";
import emailjs from "@emailjs/browser"; // Ensure this package is installed
import Swal from "sweetalert2"; // SweetAlert2 for success message
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const Navigate = useNavigate("/")
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    emailjs
      .sendForm(
        "service_pq38hfj", // Replace with your EmailJS Service ID
        "template_0pirnuw", // Replace with your EmailJS Template ID
        form.current,
        "rFsHqt2ep9GFL13MM" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          Swal.fire({
            title: "Message Sent!",
            text: "Thank you for reaching out to us.",
            icon: "success",
          }).then(() => {
            form.current.reset(); // Reset the form after successful submission
          });
        },
        (error) => {
          console.error("Error sending email:", error.text);
          Swal.fire({
            title: "Error!",
            text: "Failed to send your message. Please try again later.",
            icon: "error",
          });
        }
      );
  };

  const formStyles = {
    backgroundColor: "black",
    color: "white",
    borderColor: "white",
    // width: "100%"
  };

  return (
    <div className="app-container">
      <div className="--secondlevel-parent">
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <h1 className="mb-3 text-white">Contact Us</h1>
              <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                  <div className="mt-3">

                    <input
                      placeholder="name / nickname"
                      style={formStyles}
                      type="text"
                      className="inputs"
                      id="your-name"
                      name="your_name" // Match EmailJS variable
                      required
                    />
                  </div>
                  <div className="mt-3">

                    <input
                      placeholder="email"
                      style={formStyles}
                      type="email"
                      className="inputs "
                      id="your-email"
                      name="your_email" // Match EmailJS variable
                      required
                    />
                  </div>

                  <div className="mt-3">

                    <textarea
                      placeholder="some messages"
                      style={{ height: "12em" }}
                      className="inputs text-white"
                      id="your-message"
                      name="message" // Match EmailJS variable
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="text-white btn btn-dark w-100 btn-outline-secondary inputs"
                      data-mdb-ripple-init
                      data-mdb-ripple-color="dark"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
        <div className="d-flex gap-5">
          <a style={{ color: "#dd4b39" }} href="#!" role="button">
            <i class="fab fa-google fa-lg"></i>
          </a>
          <a style={{ color: "#ac2bac" }} href="#!" role="button">
            <i class="fab fa-instagram fa-lg"></i>
          </a>
        </div>
        <div>
          <button style={{ border: "none" }} className="text-white" onClick={() => { Navigate("/menu") }}> <i className="fas fa-arrow-left-long"></i> back</button>
        </div>
      </div>

      {/*<footer className="page-footer">
        <span>&copy; 2024 Slattlife</span>
        <a href="https://slattlife.com/" target="_blank" rel="noreferrer">
          Visit our website
        </a>
      </footer>*/}
    </div>
  );
};

export default Contact;
