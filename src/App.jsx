// App.jsx
import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Section from "./components/Section";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import AirpodsSection from "./components/AirpodsSection";
import Ipad from "./components/Ipad";
import IphoneSection from "./components/IphoneSection";

import macImg from "./assets/macbook.jpg";
import ipadImg from "./assets/ipad.jpg";
import watchImg from "./assets/watch.jpg";
import airpodsImg from "./assets/airpods.jpg";

function App() {
  return (
    <div className="App font-sans">
      {/* Navbar */}
      <Nav />

      {/* Hero Section */}
      <Hero />

      {/* AirPods Special Section */}
      <AirpodsSection />

      {/* 2-Column Product Grid */}
      <ProductGrid />

      {/* MacBook Pro Section */}
      <Section />

      {/* iPad Section */}
      <Ipad />

      {/* iPhone Section */}
      <IphoneSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
