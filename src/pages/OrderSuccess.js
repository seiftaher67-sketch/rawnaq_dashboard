import { FiCheckCircle } from "react-icons/fi";

export default function OrderSuccess() {
  return (
    <div className="pt-40 pb-20 container mx-auto px-6 text-center">

      <FiCheckCircle className="text-green-600 text-7xl mx-auto mb-6" />

      <h1 className="text-4xl font-bold mb-4">تم استلام طلبك بنجاح</h1>

      <p className="text-lg text-gray-600 mb-10">
        رقم الطلب: <span className="font-bold">#52341</span>
      </p>

      <div className="flex justify-center gap-6 mt-6">

        <a
          href="/"
          className="px-8 py-4 bg-[#0F0F0F] text-white rounded-md text-lg hover:bg-[#222]"
        >
          العودة للرئيسية
        </a>

        <a
          href="/orders"
          className="px-8 py-4 bg-[#C8A06A] text-white rounded-md text-lg font-semibold hover:bg-[#B58F5D]"
        >
          متابعة الطلب
        </a>

      </div>
    </div>
  );
}