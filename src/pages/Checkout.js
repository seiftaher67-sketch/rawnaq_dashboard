import { useState } from "react";

export default function Checkout() {
  const [method, setMethod] = useState("cash");

  return (
    <div className="pt-36 pb-20 container mx-auto px-6">

      <h1 className="text-4xl font-bold mb-10">إتمام الطلب</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Customer Info */}
        <div className="space-y-6">

          <div>
            <label className="block mb-2 text-lg">الاسم الكامل</label>
            <input className="w-full p-3 border rounded-md" />
          </div>

          <div>
            <label className="block mb-2 text-lg">رقم الجوال</label>
            <input className="w-full p-3 border rounded-md" />
          </div>

          <div>
            <label className="block mb-2 text-lg">المدينة</label>
            <input className="w-full p-3 border rounded-md" />
          </div>

          <div>
            <label className="block mb-2 text-lg">العنوان</label>
            <input className="w-full p-3 border rounded-md" />
          </div>

          <div>
            <label className="block mb-2 text-lg">الرمز البريدي</label>
            <input className="w-full p-3 border rounded-md" />
          </div>

        </div>

        {/* Payment Method */}
        <div className="border border-gray-200 p-6 rounded-lg bg-gray-50 shadow-sm">

          <h3 className="text-2xl font-bold mb-6">طريقة الدفع</h3>

          <div className="space-y-4">

            <label className="flex items-center gap-3 text-lg">
              <input
                type="radio"
                name="payment"
                checked={method === "cash"}
                onChange={() => setMethod("cash")}
              />
              الدفع عند الاستلام
            </label>

            <label className="flex items-center gap-3 text-lg">
              <input
                type="radio"
                name="payment"
                checked={method === "mada"}
                onChange={() => setMethod("mada")}
              />
              الدفع ببطاقة مدى
            </label>

            <label className="flex items-center gap-3 text-lg">
              <input
                type="radio"
                name="payment"
                checked={method === "visa"}
                onChange={() => setMethod("visa")}
              />
              فيزا / ماستر كارد
            </label>

          </div>

          <a
            href="/order-success"
            className="block w-full bg-[#C8A06A] text-white text-center py-4 rounded-md text-xl font-bold mt-10 hover:bg-[#B58F5D]"
          >
            إتمام الطلب
          </a>
        </div>

      </div>

    </div>
  );
}