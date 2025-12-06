import { FiHeart, FiMinus, FiPlus, FiShoppingCart } from "react-icons/fi";
import { useState } from "react";

export default function ProductDetails() {
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("M");
  const [color, setColor] = useState("black");
  const [mainImage, setMainImage] = useState("/images/1.png");
  const [isFavorite, setIsFavorite] = useState(false);

  const increaseQty = () => setQty(qty + 1);
  const decreaseQty = () => qty > 1 && setQty(qty - 1);

  // Thumbnail images
  const thumbnails = [
    "/images/1.png",
    "/images/1.png",
    "/images/1.png",
    "/images/1.png",
    "/images/1.png",
  ];

  return (
    <div className="pt-32 pb-20 container mx-auto px-6" dir="rtl">
      {/* Product Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        
        {/* Thumbnails Gallery */}
        <div className="flex flex-col gap-3 md:order-2">
          {thumbnails.map((img, index) => (
            <button
              key={index}
              onClick={() => setMainImage(img)}
              className={`relative w-full aspect-square rounded-lg overflow-hidden border-2 transition ${
                mainImage === img
                  ? "border-brand-gold"
                  : "border-gray-light hover:border-gray-medium"
              }`}
            >
              <img
                src={img}
                alt={`Product view ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Main Image */}
        <div className="relative md:col-span-1 md:order-1 flex items-center justify-center">
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-card hover:shadow-lg z-10 transition"
          >
            <FiHeart
              className={`text-2xl transition ${
                isFavorite ? "fill-red-500 text-red-500" : "text-brand-black"
              }`}
            />
          </button>

          <img
            src={mainImage}
            alt="تفاصيل المنتج"
            className="w-full h-auto max-h-[600px] object-cover rounded-lg shadow-card"
          />
        </div>

        {/* Product Info */}
        <div className="md:col-span-1 md:order-3">
          {/* Title */}
          <h1 className="text-3xl font-bold text-brand-black mb-3">
            عباية كتان
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-brand-gold text-lg">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <span className="text-sm text-gray-dark">(5.0)</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-light">
            <span className="text-lg text-gray-dark line-through">دج 300</span>
            <span className="text-3xl font-bold text-brand-gold">دج 250</span>
          </div>

          {/* Size Chart Link */}
          <div className="mb-6">
            <a href="#" className="text-sm text-brand-gold underline hover:no-underline">
              جدول المقاسات
            </a>
          </div>

          {/* Select Size */}
          <div className="mb-6">
            <h3 className="text-base font-semibold mb-3 text-brand-black">المقاسات</h3>
            <div className="flex gap-3">
              {["S", "M", "L", "XL"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-6 py-2 rounded-full border-2 font-medium transition ${
                    size === s
                      ? "border-brand-black bg-brand-black text-white"
                      : "border-gray-medium text-brand-black hover:border-brand-black"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Select Color */}
          <div className="mb-6">
            <h3 className="text-base font-semibold mb-3 text-brand-black">الألوان</h3>
            <div className="flex gap-4">
              {[
                { name: "أسود", value: "black", class: "bg-black" },
                { name: "رمادي", value: "gray", class: "bg-gray-500" },
                { name: "أزرق داكن", value: "navy", class: "bg-blue-900" },
                { name: "بني داكن", value: "burgundy", class: "bg-red-900" },
              ].map((c) => (
                <button
                  key={c.value}
                  onClick={() => setColor(c.value)}
                  className={`w-10 h-10 rounded-full border-3 transition ${
                    color === c.value ? "border-brand-black" : "border-gray-light"
                  } ${c.class}`}
                  title={c.name}
                />
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <h3 className="text-base font-semibold mb-3 text-brand-black">الكمية</h3>
            <div className="flex items-center gap-4 border-2 border-gray-light rounded-full w-fit px-5 py-2">
              <button
                onClick={decreaseQty}
                className="text-xl hover:text-brand-gold transition"
              >
                <FiMinus />
              </button>
              <span className="text-lg font-semibold min-w-8 text-center">{qty}</span>
              <button
                onClick={increaseQty}
                className="text-xl hover:text-brand-gold transition"
              >
                <FiPlus />
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <button className="w-full rounded-full bg-brand-black text-white py-3 px-6 text-lg font-bold hover:bg-brand-softBlack transition">
              اشتري الآن
            </button>
            <button className="w-full flex items-center justify-center gap-2 rounded-full border-2 border-brand-black text-brand-black py-3 px-6 text-lg font-semibold hover:bg-gray-light transition">
              <FiShoppingCart className="text-2xl" />
              أضف إلى السلة
            </button>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="max-w-2xl mx-auto border-t border-gray-light pt-12">
        <h2 className="text-2xl font-bold mb-6 text-brand-black">تفاصيل المنتج</h2>

        <p className="text-gray-dark leading-relaxed mb-6">
          عباية فاخرة مصنوعة من أجود أنواع الكتان، بتصميم مميز يناسب جميع الإطلالات.
          تتميز بخياطة متقنة وجودة عالية، مع خامة ناعمة ومريحة طوال اليوم.
        </p>

        <ul className="text-gray-dark leading-relaxed space-y-2">
          <li className="flex items-start gap-3">
            <span className="text-brand-gold font-bold">✓</span>
            <span>خامة كتان فاخر مستوردة</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-brand-gold font-bold">✓</span>
            <span>مقاسات متنوعة تناسب الجميع</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-brand-gold font-bold">✓</span>
            <span>مناسبة للإطلالات الرسمية واليومية</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-brand-gold font-bold">✓</span>
            <span>خفيفة ومريحة في اللبس</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
