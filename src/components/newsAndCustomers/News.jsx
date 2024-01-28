import React from "react";
import SeeMore from "../reuse/SeeMore";
import ToggleBtns from "../reuse/ToggleBtns";
import Card from "../reuse/Card";
import news1 from "../../assets/news1.png";
import news2 from "../../assets/news2.png";
import news3 from "../../assets/news3.png";
function News() {
  return (
    <div className=" container mt-24">
      <div className=" flex items-center gap-10">
        <div className="flex-1 lg:grid-cols-2  xl:grid-cols-3  grid gap-5">
          <Card image={news1} />
          <Card image={news2} />
          <Card image={news3} />
        </div>
        <SeeMore span1="اخر" span2="اخبار" span3="الشركة" />
      </div>
      <ToggleBtns />
    </div>
  );
}

export default News;
