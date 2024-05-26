// import logo from './logo.svg';
import "./App.css";
import Terms from "./Pages/Terms";
import Contact from "./Routes/contact/Contact";
import Forum from "./Routes/forums/Forum";
import Home from "./Routes/home/Home";
import Menu from "./Routes/menu/Menu";
import Shop from "./Routes/shop/Shop";
import About from "./Routes/about/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SinglePerson from "./Routes/singlePerson/SinglePerson";
import NoPage from "./Routes/nopage/NoPage";
import Advert from "./Routes/advert/Advert";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="advert" element={<Advert />} />
          <Route path="about" element={<About />} />
          <Route path="forums" element={<Forum />} />
          <Route path="contact" element={<Contact />} />
          <Route path="terms" element={<Terms />} />
          <Route path="shop" element={<Shop />} />
          <Route path="singleproduct" element={<SinglePerson />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
