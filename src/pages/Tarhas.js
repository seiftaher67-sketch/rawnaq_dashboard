import ProductCard from "../components/ProductCard.jsx";

export default function Tarhas() {
  const tarhasList = [
    { id: 1, name: "طرحة شيفون ناعمة", price: 49, image: "/images/1.png" },
    { id: 2, name: "طرحة قطن ممتاز", price: 59, image: "/images/1.png" },
    { id: 3, name: "طرحة سوفت راقية", price: 45, image: "/images/1.png" },
    { id: 4, name: "طرحة خليجية فاخرة", price: 79, image: "/images/1.png" },
    { id: 5, name: "طرحة سوبر ديلاكس", price: 69, image: "/images/1.png" },
    { id: 6, name: "طرحة سادة يومية", price: 39, image: "/images/1.png" },
  ];

  return (
    <div className="pt-36 pb-20 bg-white">

      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#0F0F0F]">الطرح</h1>

        <p className="text-lg text-gray-600 max-w-xl mx-auto mt-3">
          اكتشفي أرقى أنواع الطرح المصممة بأفضل الخامات لتناسب جميع الإطلالات اليومية والمناسبات
        </p>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-6 mb-12">
        <div className="bg-gray-100 border border-gray-200 rounded-lg p-5 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">

          {/* Sort */}
          <select className="p-3 rounded-md border border-gray-300 text-gray-700">
            <option>الفرز: من السعر الأقل للأعلى</option>
            <option>الفرز: من الأعلى للأقل</option>
            <option>الأحدث</option>
          </select>

          {/* Size */}
          <select className="p-3 rounded-md border border-gray-300 text-gray-700">
            <option>المقاس</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>

          {/* Color */}
          <select className="p-3 rounded-md border border-gray-300 text-gray-700">
            <option>اللون</option>
            <option>أسود</option>
            <option>بيج</option>
            <option>رمادي</option>
          </select>

        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-6">
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {tarhasList.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              variant="default"
            />
          ))}
        </div>
      </div>

    </div>
  );
}
