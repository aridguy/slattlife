import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Swal from "sweetalert2";

const Contact = () => {
  const [state, handleSubmit, reset] = useForm("myyrvrjp");

  useEffect(() => {
    if (state.succeeded) {
      Swal.fire({
        title: "Good job Slatt!",
        text: "Thanks for reaching out",
        icon: "success"
      }).then(() => {
        reset();
      });
    }
  }, [state.succeeded, reset]);

  return (
    <div>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1 className="mb-3">Contact Us</h1>
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label
                    htmlFor="your-name"
                    className="form-label "
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="your-name"
                    name="your-name"
                    required
                  />
                  <ValidationError 
                    prefix="Name" 
                    field="your-name"
                    errors={state.errors}
                  />
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="your-surname"
                    className="form-label "
                  >
                    Your Surname
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="your-surname"
                    name="your-surname"
                    required
                  />
                  <ValidationError 
                    prefix="Surname" 
                    field="your-surname"
                    errors={state.errors}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="your-email" className="form-label ">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="your-email"
                    name="your-email"
                    required
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="your-email"
                    errors={state.errors}
                  />
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="your-subject"
                    className="form-label"
                  >
                    Your Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="your-subject"
                    name="your-subject"
                  />
                  <ValidationError
                    prefix="Subject"
                    field="your-subject"
                    errors={state.errors}
                  />
                </div>
                <div className="col-12">
                  <label
                    htmlFor="your-message"
                    className="form-label"
                  >
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    id="your-message"
                    name="your-message"
                    rows="5"
                    required
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="your-message"
                    errors={state.errors}
                  />
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-md-6">
                      <button
                        type="submit"
                        disabled={state.submitting}
                        className="btn btn-dark w-100 fw-bold"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <footer className="page-footer">
        <span className="text-white">&copy </span>
        <a href="https://slattlife.com/" target="_blank" rel="noreferrer">
          
        </a>
      </footer>
    </div>
  );
};

export default Contact;
