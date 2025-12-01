import ProductCard from "../components/ProductCard.jsx";

export default function Niqabs() {
  const niqabsList = [
    { id: 1, name: "نقاب خليجي فاخر", price: 39, image: "/images/1.png" },
    { id: 2, name: "نقاب سوفت مريح", price: 49, image: "/images/2.png" },
    { id: 3, name: "نقاب قطني ناعم", price: 35, image: "/images/3.png" },
    { id: 4, name: "نقاب بفتحة للعين", price: 45, image: "/images/4.png" },
    { id: 5, name: "نقاب خفيف يومي", price: 29, image: "/images/5.png" },
    { id: 6, name: "نقاب كويتي ممتاز", price: 55, image: "/images/7.png" },
  ];

  return (
    <div className="pt-36 pb-20 bg-white">

      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#0F0F0F]">النقابات</h1>

        <p className="text-lg text-gray-600 max-w-xl mx-auto mt-3">
          مجموعة متنوعة من أجود أنواع النقابات المصممة بعناية لتناسب احتياجاتك اليومية
        </p>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-6 mb-12">
        <div className="bg-gray-100 border border-gray-200 rounded-lg p-5 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">

          {/* Sort */}
          <select className="p-3 rounded-md border border-gray-300 text-gray-700">
            <option>الفرز: من الأقل سعراً</option>
            <option>الفرز: من الأعلى سعراً</option>
            <option>الأحدث</option>
          </select>

          {/* Color */}
          <select className="p-3 rounded-md border border-gray-300 text-gray-700">
            <option>اللون</option>
            <option>أسود</option>
            <option>بني</option>
            <option>رمادي</option>
          </select>

        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-6">
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {niqabsList.map((product) => (
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
