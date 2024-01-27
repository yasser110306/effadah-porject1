import React from "react";
import { ArrowLeft } from "lucide-react";

function SeeMore(props) {
  const name = props.name;
  return (
    <div>
      <h2>{name}</h2>
      <hr className="" />
      <div id="see-more-btn">
        <ArrowLeft />
        <p>اكتشف المزيد</p>
      </div>
    </div>
  );
}

export default SeeMore;
