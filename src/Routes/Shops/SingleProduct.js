import React, { useEffect, useState } from "react";
import ShopNav from "../../Component/ShopNav";
import { useLocation } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const SingleProduct = () => {
  const location = useLocation();

  // State to hold the current main image
  const [mainImage, setMainImage] = useState(
    `https:${location.state.fields.productImages[0].fields.file.url}`
  );

  // Function to handle image change
  const handleImageClick = (imageUrl) => {
    setMainImage(imageUrl);
    // Reinitialize AOS to ensure the animation works when the image changes
    Aos.refresh(); 
  };

  useEffect(() => {
    Aos.init({ duration: 600 });
  }, []);

  return (
    <div>
      <ShopNav />
      <section className="mt-5 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="cursor">
                {/* Main Image */}
                <img
                  src={mainImage}
                  alt="Main Product"
                  width="100%"
                  className="img-thumbnail"
                  loading="lazy"
                  data-aos="fade-right" // AOS effect on main image
                />
              </div>

              {/* Small Images */}
              <div className="d-flex gap-2 mt-2">
                {location.state.fields.productImages.map((image, index) => (
                  <div
                    key={index}
                    className="cursor border"
                    onClick={() =>
                      handleImageClick(`https:${image.fields.file.url}`)
                    }
                  >
                    <img
                      src={`https:${image.fields.file.url}`}
                      alt={`Thumbnail ${index}`}
                      width="100%"
                      className="img-thumbnail"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-1"></div>
            <div className="col-md-6">
              <div>
                <div className="mt-4">
                  <h1 className="text-black cursor">
                    {location.state.fields.productName}
                  </h1>{" "}
                  <br />
                  <h3>{location.state.fields.productShortDescription}</h3>{" "}
                  <hr />
                  <p>
                    <span>Price</span>
                    <b className="text-black">
                      {" "}
                      {location.state.fields.productPrice}
                    </b>
                  </p>
                  <p>
                    <b className="text-black">
                      Product Sizes: {location.state.fields.productSizes}
                    </b>
                  </p>
                  <p>
                    <small>
                      Ratings: {/*location.state.fields.productRatings*/}
                    </small>{" "}
                    {Array.from(
                      { length: location.state.fields.productRatings },
                      (_, index) => (
                        <small
                          key={index}
                          className="bi bi-star-fill text-warning"
                        ></small>
                      )
                    )}
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <p>
                  Mode of Deliver: {location.state.fields.productDeliveryOption}
                </p>
              </div>
              <div className="">
                <p>{location.state.fields.productDeliveryPeriod}</p>
              </div>
              <div className="mt-5">
                <div>
                  <button className="bg-black text-white buy_btn">
                    I want this item{" "}
                  </button>
                </div>
                <div>
                  <button disabled className=" buy_btn love_btn">
                    I love this item{" "}
                    <span className="bi bi-heart text-black text-black"></span>
                  </button>
                </div>
              </div>
              <div className="mt-5">
                <details>
                  <summary>Sellers Note</summary>
                  <p>{location.state.fields.sellersNote}</p>
                </details>
                <details className="mt-3">
                  <summary>Details & Care</summary>
                  <p>{location.state.fields.detailsAndCare}</p>
                </details>
                <details className="mt-3">
                  <summary>Delivery & Return Policies</summary>
                  <p>{location.state.fields.deliverReturnPolicy}</p>
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
