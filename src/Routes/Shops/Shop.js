import React, { useState, useEffect } from "react";
import ShopNav from "../../Component/ShopNav";
import { createClient } from "contentful";
import { useNavigate } from "react-router-dom";
import Draggable from "react-draggable";
import Swal from "sweetalert2";

const Shop = () => {
  const [shopProducts, setShopProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [shopCart, setShopCart] = useState(false);

  const client = createClient({
    space: "q2ho18w4i1sf",
    accessToken: "rYmwDHjAyelEuFHukAYE4CvfH8rMu_DjCiQACZ7_ZYM",
  });

  // Fetch products from Contentful API
  useEffect(() => {
    const getAllEntries = async () => {
      try {
        const entries = await client.getEntries();
        setShopProducts(entries.items);
      } catch (error) {
        console.log(error);
      }
    };
    getAllEntries();
  }, []);

  // Load cart items from localStorage only on component mount
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  // Update localStorage whenever cartItems state changes after mount
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  // Function to add items to the cart
  const addToCart = (product) => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Item added to cart",
    });

    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.sys.id === product.sys.id
      );
      if (existingItem) {
        // Increase quantity if item is already in the cart
        return prevItems.map((item) =>
          item.sys.id === product.sys.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new item with quantity 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to remove items from the cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter(
        (item) => item.sys.id !== productId
      );

      // Update localStorage with the new cart state
      if (updatedItems.length > 0) {
        localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      } else {
        localStorage.removeItem("cartItems"); // Clear localStorage if cart is empty
      }

      return updatedItems;
    });
  };

  const navigate = useNavigate();

  // HANDLE THE CHECKOUT BUTTON
  const handleCheckout = () => {
    // Prepare the cart summary message
    const cartSummary = cartItems
      .map(
        (item) =>
          `${item.fields.productName} - €${item.fields.productPrice} x ${item.quantity}`
      )
      .join("\n");

    // Check if Tawk is available
    if (window.Tawk_API) {
      // Open Tawk chat
      window.Tawk_API.maximize();

      // Send message with cart details
      window.Tawk_API.addEvent("checkout", {
        message: `Checkout items:\n${cartSummary}\n\nTotal: €${cartItems.reduce(
          (total, item) => total + item.fields.productPrice * item.quantity,
          0
        )}`,
      });
    } else {
      console.log("Tawk API is not available.");
    }
  };

 

  return (
    <main>
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
              .filter(
                (product) =>
                  product.fields.productImages &&
                  product.fields.productImages.length > 0
              )
              .map((product) => (
                <div key={product.sys.id} className="col-md-3 mt-2">
                  <div className="cursor">
                    <img
                      onClick={() =>
                        navigate(`/singleProduct/${product.sys.id}`, {
                          state: { ...product },
                        })
                      }
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
                    <b
                      onClick={() =>
                        navigate(`/singleProduct/${product.sys.id}`, {
                          state: { ...product },
                        })
                      }
                      className="text-black cursor"
                    >
                      {product.fields.productName}
                    </b>{" "}
                    <br />
                    <sup>{product.fields.productShortDescription}</sup> <br />
                    <b className="text-black">
                      €{product.fields.productPrice}
                    </b>{" "}
                    <br />
                    <button
                      onClick={() =>
                        navigate(`/singleProduct/${product.sys.id}`, {
                          state: { ...product },
                        })
                      }
                      className="btn btn-whatsapp"
                    >
                      <i className="bi bi-eye"></i>
                    </button>{" "}
                    &nbsp;
                    <button
  className="btn btn-whatsapp"
  onClick={() => {
    if (product.fields.paymentLink) {
      window.open(product.fields.paymentLink, "_blank"); // Opens link in a new tab
    } else {
      console.log("No payment link available for this product.");
    }
  }}
>
  Buy
</button>
                    <button
                      onClick={() => addToCart(product)}
                      className="btn btn-default"
                    >
                      <i className="bi bi-cart3"></i>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <Draggable>
        <div
          style={{
            position: "fixed",
            top: "10px",
            right: "10px",
            zIndex: 1000,
            cursor: "move",
          }}
        >
          <button
            onClick={() => {
              setShopCart(true);
            }}
            type="button"
            className="btn btn-primary btn-rounded"
          >
            <i className="lead bi bi-cart"></i>
            <span className="badge badge-light">
              {cartItems.reduce((total, item) => total + item.quantity, 0)}
            </span>
          </button>
        </div>
      </Draggable>

      {shopCart && (
        <div
          className="container-fluid d-flex align-items-center justify-content-center"
          style={{
            width: "100%",
            height: "100vh",
            backgroundColor: "#00000091",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 999,
          }}
        >
          <div className="col-md-8">
            <div
              className="cart-wrap p-4"
              style={{
                width: "100%",
                height: "30em",
                background: "white",
                borderRadius: "8px",
                overflowY: "auto",
              }}
            >
              <div className="d-flex align-items-center mb-4">
                <span className="lead fw-bold">Your Shopping Cart</span>
                <button
                  onClick={() => {
                    setShopCart(false);
                  }}
                  className="btn btn-default ms-auto"
                >
                  X
                </button>
              </div>

              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Total</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.length > 0 ? (
                      cartItems.map((item) => (
                        <tr key={item.sys.id}>
                          <td>
                            <img
                              src={`https:${item.fields.productImages[0].fields.file.url}`}
                              className="card-img-top"
                              alt={
                                item.fields.productImages[0].fields
                                  .description || "default image"
                              }
                              style={{ width: "50px" }}
                            />
                            {item.fields.productName}
                          </td>
                          <td>€{item.fields.productPrice}</td>
                          <td>
                            <input
                              value={item.quantity}
                              style={{
                                border: "none",
                                outline: "none",
                                width: "3em",
                              }}
                              type="number"
                              readOnly
                            />
                          </td>
                          <td>€{item.fields.productPrice * item.quantity}</td>
                          <td>
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => removeFromCart(item.sys.id)}
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="text-center">
                          Your cart is empty Slatt!.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="d-flex mb-4">
                <div>
                  <button
                    onClick={() => setShopCart(false)}
                    className="btn btn-dark fw-bold"
                  >
                    Close
                  </button>
                </div>
                <div className="ms-auto">
                  <span className="lead fw-bold text-success">
                    Total €
                    {cartItems.reduce(
                      (total, item) =>
                        total + item.fields.productPrice * item.quantity,
                      0
                    )}
                  </span>{" "}
                  <br />
                  <button onClick={handleCheckout} className="btn btn-whatsapp">Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Shop;
