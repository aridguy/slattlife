import React, { useState, useEffect } from "react";
import ShopNav from "../../Component/ShopNav";
import { createClient } from "contentful";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const [shopProducts, setShopProducts] = useState([]);
  const client = createClient({
    space: "q2ho18w4i1sf",
    accessToken: "rYmwDHjAyelEuFHukAYE4CvfH8rMu_DjCiQACZ7_ZYM",
  });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const entries = await client.getEntries();
        setShopProducts(entries.items);
        console.log(entries.items); // Debugging: Check what the data structure looks like
      } catch (error) {
        console.log(error);
      }
    };
    getAllEntries();
  }, []);

  const doButtonWish = () => {
    console.log("location.href='https://snapchat.com/t/oBmBMCyH'");
  };

  const navigate = useNavigate()
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
          <div className="row mt-3 mb-3">
            {shopProducts
              // Filter to display only products that have at least one image
              .filter(
                (product) =>
                  product.fields.productImages &&
                  product.fields.productImages.length > 0
              )
              .map((product) => (
                <div key={product.sys.id} className="col-md-3 mt-2">
                  <div className="cursor">
                    <img
                      src={`https:${product.fields.productImages[0].fields.file.url}`}
                      className="card-img-top"
                      alt={
                        product.fields.productImages[0].fields.description ||
                        "default image"
                      }
                      width="100%"
                    />
                  </div>
                  <div className="mt-4">
                    <b className="text-black cursor">
                      {product.fields.productName}
                    </b>{" "}
                    <br />
                    <sup>{product.fields.productShortDescription}</sup> <br />
                    <b className="text-black">
                      N{product.fields.productPrice}
                    </b>{" "}
                    <br />
                    <button onClick={doButtonWish} className="btn btn-whatsapp">
                      <i className="bi bi-cart3"></i> Buy
                    </button>
                    <button onClick={() =>
                      navigate(`/singleProduct/${product.sys.id}`, {
                        state: { ...product },
                      })
                    } className="btn btn-default">
                      <i className="bi bi-cart3"></i>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
