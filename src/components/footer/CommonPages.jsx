import React from "react";

function CommonPages() {
  return (
    <div className=" text-white flex flex-col items-end gap-10 lg-max:hidden">
      <div className="flex flex-col items-end gap-2 ">
        <h2 className=" text-right text-xl">أبرز الصفحات</h2>
        <hr className="custom-hr self-end w-1/2 border-primary border" />
      </div>
      <div className="flex flex-col gap-5 text-right">
        <p>تسجيل</p>
        <p>عن إفادة</p>
        <p>خدماتنا</p>
        <p>توظيف</p>
        <p>الأسئلة الشائعة</p>
        <p>تواصل معنا</p>
      </div>
    </div>
  );
}

export default CommonPages;
