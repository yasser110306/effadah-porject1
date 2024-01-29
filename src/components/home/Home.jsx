import React from "react";
import heroLogo from "../../assets/logo-hero.png";
import HomePageInfo from "./HomePageInfo";
import Section2 from "../scetorsAndFields/Section2";
import Customers from "../newsAndCustomers/Customers";
import News from "../newsAndCustomers/News";
import Stats from "../StatsAndCommonQs/Stats";
import CommonQs from "../StatsAndCommonQs/CommonQs";
import ContactUs from "../contactUs/ContactUs";

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
        <HomePageInfo />
      </div>
      <div>
        <Section2 />
      </div>
      <Customers />
      <News />
      <Stats />
      <CommonQs />
      <ContactUs />
    </>
  );
}

export default Home;
