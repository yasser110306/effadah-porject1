import React from "react";
import Navbar from "./Navbar";

function Home() {
  return (
    <div id="hero-section" className=" relative">
      <div id="overlay" className=" absolute top-0 left-0 w-full h-full">
        <Navbar />
      </div>
    </div>
  );
}

export default Home;
