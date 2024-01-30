import React from "react";
import Navbar from "../Navbar/Navbar";
import SeeMore from "../reuse/SeeMore";
import SignCard from "./SignCard";
import person from "../../assets/person.png";
import company from "../../assets/company.png";
import agent from "../../assets/agent.png";
import sec2bg from "../../assets/sec2bg.png";

function SignIn() {
  return (
    <>
      <img src={sec2bg} alt="bg" className=" absolute -z-10 -left-96 " />
      <Navbar id="nav-bar" />
      <div className=" pt-40">
        <div className="container flex flex-col items-end gap-10 mt-20">
          <div className=" w-fit ">
            <SeeMore
              span1="خدماتنا في قطاع الاعمال"
              noBtn="yes"
              id="signIn-see-more"
            />
          </div>
          <div className=" w-full grid-cols-1 lg:grid-cols-2   xl:grid-cols-3  grid gap-5">
            <SignCard type="فرد" src={person} bgClr="#2CC87A" role="user" />
            <SignCard
              type="شركة"
              src={company}
              bgClr="#2C98C8"
              role="company"
            />
            <SignCard type="وكيل" src={agent} bgClr="#C89B2C" role="agent" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
