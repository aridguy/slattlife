import React from "react";
import Comm from "../Assets/img_avatar.png";
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Community = () => {
  return (
    <div>
      <section className="call-to-action">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-white">
              <div className="pt-5">
                <h2 className="mt-5">
                  Explore Our Friendly Community Crews/Members
                </h2>
                <button className="btn btn-info">Contact us!</button>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12">
              <div>
                <h1 className="text-center text-black fw-5">
                  Meet the Community!
                  <i className="fab fa-user-group text-info"></i>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="main_wrap_community">
        <div className="container mt-5">
          <div className="row mt-3">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <section className="comm_wrap">
                <div className="row">
                  <div className="col-md-4">
                    <Carousel dynamicHeight={true} emulateTouch={true}>
                      <div>
                        <img src={Comm} alt="slider" />
                        
                      </div>
                      <div>
                        <img src={Comm} alt="slider" />
                        
                      </div>
                      <div>
                        <img src={Comm} alt="slider" />
                        
                      </div>
                      <div>
                        <img src={Comm} alt="slider" />
                        
                      </div>
                      <div>
                        <img src={Comm} alt="slider" />
                       
                      </div>
                    </Carousel>
                  </div>
                  <div className="col-md-8 p-5">
                    <h3 className="text-white">
                      Kevin Lo <br />
                      Business Analyst
                    </h3>

                    <p>
                      Kevin joined Shunwei Investment and Management Capital as
                      a Business Analyst in early 2018 and while his coverage is
                      general in nature, has a particular interest in Blockchain
                      technology and Crypto currency.
                    </p>
                    <details>
                      <summary>More Details</summary>
                      <p>
                        Prior to joining Shunwei Investment and Management
                        Capital, Kevin was at Overseas-Chinese Banking
                        Corporation (OCBC) where he advised High Net-worth
                        clients on financial markets and investments for two
                        years. Previous to OCBC, Kevin worked in Trade Finance
                        and Accounting at Petronas. Kevin holds a Bachelor of
                        Science in Business Administration (Honors) from the
                        University at Buffalo.
                      </p>
                      <div className="d-flex gap-2 text-white">
                        <i class="bi bi-snapchat cursor"></i>
                        <i class="bi bi-tiktok cursor"></i>
                        <i class="bi bi-instagram cursor"></i>
                      </div>
                    </details>
                  </div>
                </div>
              </section>
            </div>
            <div className="col-md-1"></div>
          </div>
          <div className="row mt-5">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <section className="comm_wrap">
                <div className="row">
                  <div className="col-md-4">
                    <img width="100%" src={Comm} alt="" />
                  </div>
                  <div className="col-md-8 p-5">
                    <h3 className="text-white">
                      Kevin Lo <br />
                      Business Analyst
                    </h3>
                    <p>
                      Kevin joined Shunwei Investment and Management Capital as
                      a Business Analyst in early 2018 and while his coverage is
                      general in nature, has a particular interest in Blockchain
                      technology and Crypto currency.
                    </p>
                    <p>
                      Prior to joining Shunwei Investment and Management
                      Capital, Kevin was at Overseas-Chinese Banking Corporation
                      (OCBC) where he advised High Net-worth clients on
                      financial markets and investments for two years. Previous
                      to OCBC, Kevin worked in Trade Finance and Accounting at
                      Petronas. Kevin holds a Bachelor of Science in Business
                      Administration (Honors) from the University at Buffalo.
                    </p>
                  </div>
                </div>
              </section>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;


