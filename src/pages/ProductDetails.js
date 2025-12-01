import { FiHeart, FiMinus, FiPlus, FiShoppingCart } from "react-icons/fi";
import { useState } from "react";

export default function ProductDetails() {
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("M");
  const [color, setColor] = useState("black");

  const increaseQty = () => setQty(qty + 1);
  const decreaseQty = () => qty > 1 && setQty(qty - 1);

  return (
    <div className="pt-36 pb-20 container mx-auto px-6">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Product Image */}
        <div className="relative">
          <button className="absolute top-3 left-3 bg-white p-3 rounded-full shadow-md hover:text-[#C8A06A] transition">
            <FiHeart className="text-2xl" />
          </button>

          <img
            src="/images/1.png"
            alt="تفاصيل المنتج"
            className="w-full h-[550px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Product Info */}
        <div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-[#0F0F0F] mb-6">
            عباية كريب فاخرة تصميم راقي
          </h1>

          {/* Price */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold text-[#C8A06A]">199 ر.س</span>
            <span className="text-xl text-gray-500 line-through">260 ر.س</span>
          </div>

          {/* Select Size */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">اختاري المقاس</h3>
            <div className="flex gap-3">
              {["S", "M", "L", "XL"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-5 py-2 border rounded-md ${
                    size === s
                      ? "border-[#C8A06A] text-[#C8A06A] font-bold"
                      : "border-gray-300 text-gray-600"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Select Color */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">اللون</h3>
            <div className="flex gap-3">
              {[
                { name: "أسود", value: "black", class: "bg-black" },
                { name: "بيج", value: "beige", class: "bg-[#C8A06A]" },
                { name: "رمادي", value: "gray", class: "bg-gray-400" },
              ].map((c) => (
                <div key={c.value} className="flex flex-col items-center">
                  <button
                    onClick={() => setColor(c.value)}
                    className={`w-10 h-10 rounded-full border ${
                      color === c.value ? "border-[#C8A06A] border-4" : "border-gray-300"
                    } ${c.class}`}
                  ></button>
                  <span className="text-sm mt-1 text-gray-600">{c.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">الكمية</h3>

            <div className="flex items-center gap-4 border border-gray-300 rounded-md w-fit px-4 py-2">
              <button onClick={decreaseQty} className="text-xl">
                <FiMinus />
              </button>
              <span className="text-xl font-semibold">{qty}</span>
              <button onClick={increaseQty} className="text-xl">
                <FiPlus />
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="flex items-center gap-3 rounded-md bg-[#0F0F0F] text-white py-4 px-6 text-lg hover:bg-[#222] transition">
              <FiShoppingCart className="text-2xl" />
              أضف إلى السلة
            </button>

            <button className="flex-1 rounded-md bg-[#C8A06A] text-white py-4 px-6 text-lg font-bold hover:bg-[#B58F5D] transition">
              اشترِ الآن
            </button>
          </div>

        </div>
      </div>

      {/* Product Description */}
      <div className="mt-20 max-w-3xl mx-auto">

        <h2 className="text-3xl font-bold mb-4">تفاصيل المنتج</h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          عباية فاخرة مصنوعة من أجود أنواع الكريب، بتصميم مميز يناسب جميع الإطلالات.
          تتميز بخياطة متقنة وجودة عالية، مع خامة ناعمة ومريحة طوال اليوم.
        </p>

        <ul className="text-gray-700 leading-relaxed list-disc pr-6">
          <li>خامة كريب فاخر مستوردة</li>
          <li>مقاسات متنوعة تناسب الجميع</li>
          <li>مناسبة للإطلالات الرسمية واليومية</li>
          <li>خفيفة ومريحة في اللبس</li>
        </ul>

      </div>

    </div>
  );
}