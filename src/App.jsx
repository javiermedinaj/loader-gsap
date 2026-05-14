import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="app">
      <Loader onComplete={() => setLoading(false)} />
      <div className={`landing ${!loading ? "visible" : ""}`}>
        <Navbar />
        <main>
          <Hero />
          <Products />
          <About />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;
