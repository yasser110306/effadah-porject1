import React from "react";
import footerLogo from "../../assets/footerLogo.png";

function CopyRight() {
  return (
    <div className=" flex flex-col gap-5 text-right text-white items-end xl-max:hidden">
      <div>
        <img src={footerLogo} alt="footer Logo" />
      </div>
      <p className=" w-80 text-sm">
        . لاشك أن مشوار الألف ميل يبدأ بخطوة واحدة نحـن فـي شركـة أفـادة
        للمــوارد البشريـة بعـون الله تعالـي قد بـدأنـا هذا المـشـوار ، ووضعـنا
        نصـب أعيننا رؤية مستقبلية واضحه وهي تقديم خدمة راقية في مجال توريد
        العمالة بصورة قائمة على أحـدث النظـم التـي تتلاءم مع ثقافتنـا
        وتقالـيدنـا وتتماشي مـع مـا تتطلبـه المرحلـة القادمـة ورؤيـة 2030
      </p>
      <p className="copy-right">
        © جميع الحقوق محفوظة - شركة إفادة للموارد البشرية
      </p>
    </div>
  );
}

export default CopyRight;
