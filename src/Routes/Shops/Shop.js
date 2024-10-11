import React from "react";

import ShopNav from "../../Component/ShopNav";

const Shop = () => {
  

  // const products = [
  //   {
  //     productName: "Men's Leather Jacket",
  //     image: "https://images.unsplash.com/photo-1550246147-0f1e57c84f51",
  //     productPrice: 150.0,
  //     rating: 4.5,
  //     productDescription:
  //       "High-quality leather jacket, perfect for all seasons.",
  //     size: ["S", "M", "L", "XL"],
  //   },
  //   {
  //     productName: "Women's Red Dress",
  //     image: "https://images.unsplash.com/photo-1593032465259-47a5a6b69fe1",
  //     productPrice: 80.0,
  //     rating: 4.7,
  //     productDescription: "Elegant red dress suitable for formal events.",
  //     size: ["XS", "S", "M", "L"],
  //   },
  //   {
  //     productName: "Running Shoes",
  //     image: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
  //     productPrice: 60.0,
  //     rating: 4.8,
  //     productDescription:
  //       "Comfortable and durable running shoes for daily exercise.",
  //     size: [6, 7, 8, 9, 10, 11],
  //   },
  //   {
  //     productName: "Smartwatch",
  //     image: "https://images.unsplash.com/photo-1518961295611-11b9e7182375",
  //     productPrice: 120.0,
  //     rating: 4.6,
  //     productDescription:
  //       "Advanced smartwatch with multiple health tracking features.",
  //     size: ["One Size"],
  //   },
  //   {
  //     productName: "Bluetooth Headphones",
  //     image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
  //     productPrice: 50.0,
  //     rating: 4.4,
  //     productDescription:
  //       "Wireless headphones with high-quality sound and noise cancellation.",
  //     size: ["One Size"],
  //   },
  //   {
  //     productName: "Backpack",
  //     image: "https://images.unsplash.com/photo-1591013173587-dc8d0df06c0b",
  //     productPrice: 45.0,
  //     rating: 4.3,
  //     productDescription:
  //       "Durable and spacious backpack for travel and daily use.",
  //     size: ["One Size"],
  //   },
  //   {
  //     productName: "Stainless Steel Watch",
  //     image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  //     productPrice: 200.0,
  //     rating: 4.7,
  //     productDescription:
  //       "Elegant stainless steel watch with a classic design.",
  //     size: ["One Size"],
  //   },
  //   {
  //     productName: "Wireless Mouse",
  //     image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a08",
  //     productPrice: 25.0,
  //     rating: 4.5,
  //     productDescription:
  //       "Ergonomic wireless mouse with adjustable DPI settings.",
  //     size: ["One Size"],
  //   },
  //   {
  //     productName: "Gaming Keyboard",
  //     image: "https://images.unsplash.com/photo-1587202372775-9c70b6394e9e",
  //     productPrice: 70.0,
  //     rating: 4.6,
  //     productDescription: "Mechanical keyboard with customizable RGB lighting.",
  //     size: ["One Size"],
  //   },
  //   {
  //     productName: "Fitness Tracker",
  //     image:
  //       "https://images.unsplash.com/photo-1719835999992-8bfde56aa5e6?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     productPrice: 40.0,
  //     rating: 4.4,
  //     productDescription:
  //       "Fitness tracker with heart rate monitoring and sleep tracking.",
  //     size: ["One Size"],
  //   },
  // ];

  const doButtonWish = () =>
    console.log("location.href='https://snapchat.com/t/oBmBMCyH'");

  return (
    <div>
      <ShopNav />
      <section className="shop-header-title">
        <div className="container text-center">
          <div className="mt-3">
            <h2>New Season Shoppings</h2>
            <span>
              Discover the distinctive new collection – including everything
              from standout accessories to cool denim separates.
            </span>
          </div>
        </div>
        <div className="container">
          <hr />
        </div>
      </section>
      <section className="shop_products">
        <div className="container">
          <div className="row mt-3">
            <div className="col-md-3 mt-2">
              <div className="cursor">
                <img
                  src="https://images.unsplash.com/photo-1719835999992-8bfde56aa5e6?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="pics"
                  width="100%"
                />
              </div>
              <div className="mt-4">
                <b className="text-black cursor">XEX</b> <br />
                <span>
                  Crush embellished crinkled-leather shoulder bag
                </span>{" "}
                <br />
                <b className="text-black">£2,550</b> <br />
                <button onClick={doButtonWish} className="btn btn-whatsapp">
                  <i className="bi bi-cart3"></i> Buy
                </button>
              </div>
            </div>
            <div className="col-md-3 mt-2">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1719835999992-8bfde56aa5e6?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="pics"
                  width="100%"
                />
              </div>
              <div className="mt-4">
                <b className="text-black cursor">VEXIERS</b> <br />
                <span>
                  Crush embellished crinkled-leather shoulder bag
                </span>{" "}
                <br />
                <b className="text-black">£2,550</b> <br />
                <button onClick={doButtonWish} className="btn btn-whatsapp">
                  <i className="bi bi-cart3"></i> Buy
                </button>
              </div>
            </div>
            <div className="col-md-3 mt-2">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1719835999992-8bfde56aa5e6?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="pics"
                  width="100%"
                />
              </div>
              <div className="mt-4">
                <b className="text-black cursor">BALENCIAGA</b> <br />
                <span>
                  Crush embellished crinkled-leather shoulder bag
                </span>{" "}
                <br />
                <b className="text-black">£2,550</b> <br />
                <button onClick={doButtonWish} className="btn btn-whatsapp">
                  <i className="bi bi-cart3"></i> Buy
                </button>
              </div>
            </div>
            <div className="col-md-3 mt-2">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1719835999992-8bfde56aa5e6?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="pics"
                  width="100%"
                />
              </div>
              <div className="mt-4">
                <b className="text-black cursor">BALENCIAGA</b> <br />
                <span>
                  Crush embellished crinkled-leather shoulder bag
                </span>{" "}
                <br />
                <b className="text-black">£2,550</b> <br />
                <button onClick={doButtonWish} className="btn btn-whatsapp">
                  <i className="bi bi-cart3"></i> Buy
                </button>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-3 mt-2">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1719835999992-8bfde56aa5e6?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="picss"
                  width="100%"
                  loading="lazy"
                />
              </div>
              <div className="mt-4">
                <b className="text-black cursor">BALENCIAGA</b> <br />
                <span>
                  Crush embellished crinkled-leather shoulder bag
                </span>{" "}
                <br />
                <b className="text-black">£2,550</b> <br />
                <button onClick={doButtonWish} className="btn btn-whatsapp">
                  <i className="bi bi-cart3"></i> Buy
                </button>
              </div>
            </div>
            <div className="col-md-3 mt-2">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1719835999992-8bfde56aa5e6?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="pics"
                  width="100%"
                />
              </div>
              <div className="mt-4">
                <b className="text-black cursor">BALENCIAGA</b> <br />
                <span>
                  Crush embellished crinkled-leather shoulder bag
                </span>{" "}
                <br />
                <b className="text-black">£2,550</b> <br />
                <button onClick={doButtonWish} className="btn btn-whatsapp">
                  <i className="bi bi-cart3"></i> Buy
                </button>
              </div>
            </div>
            <div className="col-md-3 mt-2">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1719835999992-8bfde56aa5e6?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="pics"
                  width="100%"
                />
              </div>
              <div className="mt-4">
                <b className="text-black cursor">BALENCIAGA</b> <br />
                <span>
                  Crush embellished crinkled-leather shoulder bag
                </span>{" "}
                <br />
                <b className="text-black">£2,550</b> <br />
                <button onClick={doButtonWish} className="btn btn-whatsapp">
                  <i className="bi bi-cart3"></i> Buy
                </button>
              </div>
            </div>
            <div className="col-md-3 mt-2">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1719835999992-8bfde56aa5e6?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="pics"
                  width="100%"
                />
              </div>
              <div className="mt-4">
                <b className="text-black cursor">BALENCIAGA</b> <br />
                <span>
                  Crush embellished crinkled-leather shoulder bag
                </span>{" "}
                <br />
                <b className="text-black">£2,550</b> <br />
                <button onClick={doButtonWish} className="btn btn-whatsapp">
                  <i className="bi bi-cart3"></i> Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
