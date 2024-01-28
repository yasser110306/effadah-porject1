import React from "react";
import { Quote, CalendarDays } from "lucide-react";

function Card({ customer, image }) {
  return (
    <div className=" card relative r p-5 pt-14 flex flex-col items-center gap-4 text-center text-sm bg-white rounded-xl">
      {customer && (
        <div className=" absolute rotate-180  top-3  left-4 text-quotes">
          <Quote size={35} />
        </div>
      )}
      {customer && (
        <div>
          <img src={customer} alt="customer" />
        </div>
      )}
      {image && (
        <div>
          <img src={image} alt="news" />
        </div>
      )}
      {image && (
        <p className=" flex items-end gap-2 text-primary">
          الأحد ، الموافق 29 / 01 / 2022
          <CalendarDays />
        </p>
      )}
      <p className=" font-semibold ">
        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
        القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
        التي يقرأها
      </p>
    </div>
  );
}

export default Card;
