import { PlusIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Products() {
  const [expandedFilter, setExpandedFilter] = useState("categories");

  const products = [
    { id: 1, name: "عباية كتان", price: "250 ر.س", stock: 515, color: "أسود", size: "M" },
    { id: 2, name: "عباية شيفون", price: "320 ر.س", stock: 342, color: "بني", size: "L" },
    { id: 3, name: "عباية حرير", price: "450 ر.س", stock: 128, color: "أبيض", size: "M" },
    { id: 4, name: "عباية مطرز", price: "580 ر.س", stock: 67, color: "ذهبي", size: "S" },
    { id: 5, name: "عباية بسيطة", price: "180 ر.س", stock: 890, color: "رمادي", size: "L" },
    { id: 6, name: "عباية فاخرة", price: "720 ر.س", stock: 23, color: "أسود", size: "M" },
  ];

  return (
    <div className="space-y-4">
      {/* ================= Header ================= */}
      <div>
        <h1 className="text-3xl font-bold text-brand-black">المنتجات</h1>
        <p className="text-sm text-gray-dark mt-1">إدارة كتالوج المنتجات الخاص بك</p>
      </div>

      {/* ================= Content with Sidebar ================= */}
      <div className="flex gap-6">
        {/* ================= Left Sidebar Filters ================= */}
        <div className="w-64 bg-white rounded-xl shadow-card p-6 h-fit">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-brand-black">تصفيل المشتري</h2>
            <button className="text-gray-dark hover:text-brand-gold transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.3 4.3a1 1 0 011.4 0L10 8.6l4.3-4.3a1 1 0 111.4 1.4L11.4 10l4.3 4.3a1 1 0 11-1.4 1.4L10 11.4l-4.3 4.3a1 1 0 01-1.4-1.4L8.6 10 4.3 5.7a1 1 0 010-1.4z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Add Product Button */}
          <button className="w-full bg-brand-gold text-brand-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-brand-gold/90 transition mb-6">
            <PlusIcon className="w-5 h-5 inline-block ml-2" />
            إضافة منتج
          </button>

          {/* Filter Sections */}
          <div className="space-y-4">
            {/* Categories */}
            <FilterSection
              title="الفئات"
              expanded={expandedFilter === "categories"}
              onToggle={() => setExpandedFilter(expandedFilter === "categories" ? null : "categories")}
              items={["عبايات", "فساتين", "أكسسوارات", "عطور"]}
            />

            {/* Colors */}
            <FilterSection
              title="الألوان"
              expanded={expandedFilter === "colors"}
              onToggle={() => setExpandedFilter(expandedFilter === "colors" ? null : "colors")}
              items={["أسود", "بني", "أبيض", "رمادي", "ذهبي"]}
            />

            {/* Sizes */}
            <FilterSection
              title="الأحجام"
              expanded={expandedFilter === "sizes"}
              onToggle={() => setExpandedFilter(expandedFilter === "sizes" ? null : "sizes")}
              items={["S", "M", "L", "XL", "XXL"]}
            />

            {/* Price Range */}
            <FilterSection
              title="نطاق السعر"
              expanded={expandedFilter === "price"}
              onToggle={() => setExpandedFilter(expandedFilter === "price" ? null : "price")}
              items={["تحت 200 ر.س", "200 - 500 ر.س", "500 - 1000 ر.س", "فوق 1000 ر.س"]}
            />
          </div>

          {/* Reset Filters */}
          <button className="w-full mt-6 text-brand-gold text-sm font-medium hover:text-brand-gold/80 transition">
            إعادة تعيين المرشحات
          </button>
        </div>

        {/* ================= Products Grid ================= */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= Components ================= */

function FilterSection({ title, expanded, onToggle, items }) {
  return (
    <div className="border-b border-gray-medium/20 pb-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-sm font-semibold text-brand-black hover:text-brand-gold transition"
      >
        {title}
        <ChevronDownIcon className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
      </button>
      {expanded && (
        <div className="space-y-2 mt-3">
          {items.map((item) => (
            <label key={item} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-medium/30 text-brand-gold focus:ring-brand-gold"
              />
              <span className="text-xs text-gray-dark hover:text-brand-black transition">{item}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

function ProductCard({ name, price, stock, color, size }) {
  return (
    <div className="bg-white rounded-lg shadow-soft hover:shadow-card transition overflow-hidden">
      {/* Image */}
      <div className="h-56 bg-gray-light flex items-center justify-center text-gray-medium">
        <span className="text-sm">صورة المنتج</span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <h3 className="text-sm font-semibold text-brand-black line-clamp-2">{name}</h3>

        <div className="space-y-2">
          <p className="text-xs text-gray-dark">
            <span className="font-medium">المخزون:</span> {stock}
          </p>
          <p className="text-xs text-gray-dark">
            <span className="font-medium">اللون:</span> {color}
          </p>
          <p className="text-xs text-gray-dark">
            <span className="font-medium">الحجم:</span> {size}
          </p>
        </div>

        <p className="text-sm font-bold text-brand-gold">{price}</p>

        {/* Edit Button */}
        <button className="w-full text-xs text-brand-gold border border-brand-gold/30 rounded-lg py-2 hover:bg-brand-gold/5 transition font-medium">
          تعديل المنتج
        </button>
      </div>
    </div>
  );
}
