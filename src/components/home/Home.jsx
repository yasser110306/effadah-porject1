import React from "react";
import Navbar from "../Navbar/Navbar";
import heroLogo from "../../assets/logo-hero.png";
import HomePageInfo from "./HomePageInfo";

function Home() {
  return (
    <div id="hero-section" className=" relative flex flex-col">
      <img
        src={heroLogo}
        alt="hero-sec-logo"
        id="hero-logo"
        className="opacity-5  absolute hidden lg:block "
      />
      <Navbar />
      <HomePageInfo />
    </div>
  );
}

export default Home;
