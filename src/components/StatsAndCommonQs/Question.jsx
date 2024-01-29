import React from "react";
import { Plus } from "lucide-react";

function Question() {
  return (
    <p className=" question rounded-lg cursor-pointer text-right flex items-center justify-between p-5 ">
      <Plus /> هذا النص مجرد مثال لشكل السؤال الموضوع هنا لإظهارة وتوضيحة علي
      هذا النمط والشكل ؟
    </p>
  );
}

export default Question;
