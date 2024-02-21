import React from "react";
import Navbar from "./components/nav/Navbar";
import Hero from "./components/home/Hero";
import InputCard from "./components/input/InputCard";
import "./App.css";
import Services from "./components/services/Services";
import Banner from "./components/home/Banner";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <InputCard />
      <Services />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
