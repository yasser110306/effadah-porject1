import React from "react";
import SeeMore from "../reuse/SeeMore";
import Card from "../reuse/Card";
import customer1 from "../../assets/customer1.png";
import customer2 from "../../assets/customer2.png";
import customer3 from "../../assets/customer3.png";
import customer4 from "../../assets/customer4.png";
import ToggleBtns from "../reuse/ToggleBtns";

function Customers() {
  return (
    <>
      <div className=" container mt-24 flex flex-col">
        <div className=" flex items-center gap-10">
          <div className="flex-1 lg:grid-cols-2  xl:grid-cols-4  grid gap-5">
            <Card customer={customer1} />
            <Card customer={customer2} />
            <Card customer={customer3} />
            <Card customer={customer4} />
          </div>
          <SeeMore span1="عملائنا" span2="المميزون" span3="لدينا" />
        </div>
        <ToggleBtns />
      </div>
    </>
  );
}

export default Customers;
