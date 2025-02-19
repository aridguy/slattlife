import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./Routes/NoPage";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Menu from "./Routes/Menu";
import About from "./Routes/About";
import Shop from "./Routes/Shops/Shop";
import SingleProduct from "./Routes/Shops/SingleProduct";
import Forums from "./Routes/Forum/Forums";
import Terms from "./Routes/Terms";
import Community from "./Routes/Community";
import Media from "./Routes/Media/Media";
import Advert from "./Routes/Advert";

const App = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log("Service Worker registered with scope:", registration.scope);
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    });
  }
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="about" element={<About />} />
          <Route path="forums" element={<Forums />} />
          <Route path="contact" element={<Contact />} />
          <Route path="media" element={<Media />} />
          <Route path="terms" element={<Terms />} />
          <Route path="shop" element={<Shop />} />
          <Route path="community" element={<Community />} />
          <Route path="advert" element={<Advert />} />
          <Route path="singleproduct/:id" element={<SingleProduct />} />

          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
