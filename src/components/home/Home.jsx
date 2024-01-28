import React from "react";
import Navbar from "../Navbar/Navbar";
import heroLogo from "../../assets/logo-hero.png";
import HomePageInfo from "./HomePageInfo";
import Section2 from "../scetorsAndFields/Section2";
import Customers from "../newsAndCustomers/Customers";
import News from "../newsAndCustomers/News";
function Home() {
  return (
    // hero section start
    <>
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
      <div>
        <Section2 />
      </div>
      <Customers />
      <News />
    </>
  );
}

export default Home;
