// src/pages/Offers.js

import ProductCard from "../components/ProductCard.jsx";

export default function Offers() {
  const offersData = [
    {
      id: 1,
      name: "عباية كريب فاخرة",
      price: 180,
      oldPrice: 240,
      image: "/images/1.png",
    },
    {
      id: 2,
      name: "عباية سعودية فاخرة",
      price: 220,
      oldPrice: 300,
      image: "/images/1.png",
    },
    {
      id: 3,
      name: "عباية يومية أنيقة",
      price: 150,
      oldPrice: 199,
      image: "/images/1.png",
    },
    {
      id: 4,
      name: "عباية لكجري مفتوحة",
      price: 190,
      oldPrice: 260,
      image: "/images/1.png",
    },
    {
      id: 5,
      name: "عباية رسمية مطرزة",
      price: 250,
      oldPrice: 330,
      image: "/images/1.png",
    },
    {
      id: 6,
      name: "عباية صيفية خفيفة",
      price: 140,
      oldPrice: 180,
      image: "/images/1.png",
    },
  ];

  return (
    <div className="pt-32 pb-20 bg-white">

      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#0F0F0F] mb-4">
          العروض والخصومات الحالية
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          اكتشفي أحدث المجموعات بأسعار مميزة وخصومات حصرية لفترة محدودة
        </p>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-6">
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {offersData.map((product) => (
            <div key={product.id}>
              <ProductCard
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                oldPrice={product.oldPrice}
                showOldPrice={true}
                variant="offer"
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}