import React from "react";
import ShopNav from "../../Component/ShopNav";

const SingleProduct = () => {
  return (
    <div>
      <ShopNav />
      <section className="mt-5 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="cursor">
                <img
                  src="https://images.unsplash.com/photo-1719835999992-8bfde56aa5e6?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="pics"
                  width="100%"
                  className="img-thumbnail"
                  loading="lazy"
                />
              </div>
              <div className="d-flex gap-2 mt-2">
                <div className="cursor border">
                  <img
                    src="https://images.unsplash.com/photo-1719835999992-8bfde56aa5e6?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="pics"
                    width="100%"
                    className="img-thumbnail"
                    loading="lazy"
                  />
                </div>
                <div className="cursor">
                  <img
                    src="https://images.unsplash.com/photo-1719835999992-8bfde56aa5e6?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="pics"
                    width="100%"
                    className="img-thumbnail"
                    loading="lazy"
                  />
                </div>
                <div className="cursor">
                  <img
                    src="https://images.unsplash.com/photo-1719835999992-8bfde56aa5e6?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="pics"
                    width="100%"
                    className="img-thumbnail"
                    loading="lazy"
                  />
                </div>
                <div className="cursor">
                  <img
                    src="https://images.unsplash.com/photo-1719835999992-8bfde56aa5e6?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="pics"
                    width="100%"
                    className="img-thumbnail"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6">
              <div>
                <div className="mt-4">
                  <h1 className="text-black cursor">BALENCIAGA</h1> <br />
                  <h3>Crush embellished crinkled-leather shoulder bag</h3>{" "}
                  <hr />
                  <p>
                    <span>Price</span>
                    <h4 className="text-black">£2,550</h4>
                  </p>
                  <p>
                    <b className="text-black">
                      Available Sizes: MD, SM, XL, XXL, VL
                    </b>
                  </p>
                  <p>
                    <small>Ratings: 4.5</small>{" "}
                    <small className="bi bi-star text-warning"></small>
                    <small className="bi bi-star text-warning"></small>
                    <small className="bi bi-star text-warning"></small>
                    <small className="bi bi-star text-warning"></small>
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <p>Mode of Deliver: Doorstep Deliver</p>
              </div>
              <div className="">
                <p>Tipically shipped 5-6 days after order</p>
              </div>
              <div className="mt-5">
                <div>
                  <button className="bg-black text-white buy_btn">
                    I want this item{" "}
                  </button>
                </div>
                <div>
                  <button className=" buy_btn love_btn">
                    I love this item{" "}
                    <span className="bi bi-heart text-black text-black"></span>
                  </button>
                </div>
              </div>
              <div className="mt-5">
                <details>
                  <summary>Sellers Note</summary>
                  <p>
                    Epcot is a theme park at Walt Disney World Resort featuring
                    exciting attractions, international pavilions, award-winning
                    fireworks and seasonal special events.
                  </p>
                </details>
                <details className="mt-3">
                  <summary>Details & Care</summary>
                  <p>
                    Epcot is a theme park at Walt Disney World Resort featuring
                    exciting attractions, international pavilions, award-winning
                    fireworks and seasonal special events.
                  </p>
                </details>
                <details className="mt-3">
                  <summary>Delivery & Return Policies</summary>
                  <p>
                    Epcot is a theme park at Walt Disney World Resort featuring
                    exciting attractions, international pavilions, award-winning
                    fireworks and seasonal special events.
                  </p>
                </details>
              </div>

              <div className="mt-5">
                <small>Product code: 1647597345172444</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
