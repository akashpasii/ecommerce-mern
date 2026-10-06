import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.css"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-[85vh] px-5 py-10 max-w-[1400px] mx-auto animate-[fadeIn_0.6s_ease-in-out]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
