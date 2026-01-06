import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    discountPercent: "",
    discountStart: "",
    discountEnd: "",
    category: "",
    fabric: "",
    status: "",
    colors: ["black", "green", "brown"],
    sizes: ["M", "L", "XL"],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleColorToggle = (colorName) => {
    setFormData(prev => ({
      ...prev,
      colors: prev.colors.includes(colorName)
        ? prev.colors.filter(c => c !== colorName)
        : [...prev.colors, colorName]
    }));
  };

  const handleSizeToggle = (size) => {
    setFormData(prev => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter(s => s !== size)
        : [...prev.sizes, size]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit product data
    navigate("/products");
  };

  const handleCancel = () => {
    navigate("/products");
  };

  const colorOptions = [
    { c: "black", t: "أسود" },
    { c: "green", t: "أخضر" },
    { c: "brown", t: "بني" },
    { c: "orange", t: "برتقالي" },
    { c: "blue", t: "أزرق" },
    { c: "gray", t: "رمادي" },
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-[#f5f5f5] flex justify-center p-6 font-sans">
      <div className="w-full max-w-[1200px]">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">إضافة منتج جديد</h1>
          <p className="text-sm text-gray-400">أضف منتج جديد إلى متجرك</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-6">
          {/* Right Content */}
          <div className="col-span-9 space-y-6">
            {/* Images */}
            <div className="bg-white rounded-xl p-4">
              <h3 className="font-semibold text-sm mb-4">صور المنتج</h3>
              <div className="flex gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-[90px] h-[120px] bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition" />
                ))}
                <div className="w-[90px] h-[120px] border-2 border-dashed rounded-lg flex items-center justify-center text-gray-400 text-xs cursor-pointer hover:bg-gray-50 transition">رفع</div>
              </div>
              <p className="text-xs text-gray-400 mt-2">اسحب الصور أو انقر لتحميل صور المنتج.</p>
            </div>

            {/* Basic Info */}
            <div className="bg-white rounded-xl p-4">
              <h3 className="font-semibold text-sm mb-4">معلومات أساسية</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <label className="block mb-1 text-gray-500">اسم المنتج</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-100 border rounded-lg p-2" 
                    placeholder="عباية سوداء مزينة" 
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-500">الوصف</label>
                  <textarea 
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full bg-gray-100 border rounded-lg p-2 h-24" 
                    placeholder="عباية فاخرة مصنوعة من أفضل أنواع القماش..."
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 text-gray-500">سعر المنتج (SAR)</label>
                    <input 
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      className="w-full bg-gray-100 border rounded-lg p-2" 
                      placeholder="500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-gray-500">كمية المخزون</label>
                    <input 
                      type="number"
                      name="stock"
                      value={formData.stock}
                      onChange={handleInputChange}
                      className="w-full bg-gray-100 border rounded-lg p-2" 
                      placeholder="50"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Variants */}
            <div className="bg-white rounded-xl p-4">
              <h3 className="font-semibold text-sm mb-4">متغيرات المنتج</h3>
              <div className="mb-3">
                <p className="text-xs text-gray-500 mb-2">الألوان المتاحة</p>
                <div className="flex gap-2">
                  {colorOptions.map((col, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleColorToggle(col.c)}
                      className={`px-3 py-1 rounded-full text-white text-xs ${
                        formData.colors.includes(col.c) 
                          ? `bg-${col.c}-600 ring-2 ring-blue-300` 
                          : `bg-${col.c}-600 opacity-50`
                      }`}
                    >
                      {col.t}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-2">المقاسات المتاحة</p>
                <div className="flex gap-2">
                  {["XS", "S", "M", "L", "XL", "XXL"].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => handleSizeToggle(s)}
                      className={`px-3 py-1 rounded-full text-xs ${
                        formData.sizes.includes(s)
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Discount */}
            <div className="bg-white rounded-xl p-4">
              <h3 className="font-semibold text-sm mb-4">إضافة عرض على المنتج %</h3>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <label className="block mb-1 text-gray-500">نسبة الخصم</label>
                  <input 
                    type="number"
                    name="discountPercent"
                    value={formData.discountPercent}
                    onChange={handleInputChange}
                    className="w-full bg-gray-100 border rounded-lg p-2" 
                    placeholder="20%" 
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-500">تاريخ بدء العرض</label>
                  <input 
                    type="date" 
                    name="discountStart"
                    value={formData.discountStart}
                    onChange={handleInputChange}
                    className="w-full bg-gray-100 border rounded-lg p-2" 
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-500">تاريخ انتهاء العرض</label>
                  <input 
                    type="date" 
                    name="discountEnd"
                    value={formData.discountEnd}
                    onChange={handleInputChange}
                    className="w-full bg-gray-100 border rounded-lg p-2" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Left Actions */}
          <div className="col-span-3 space-y-4">
            <button type="submit" className="w-full bg-[#3b82f6] text-white py-3 rounded-lg text-sm font-medium hover:bg-blue-600 transition">حفظ المنتج</button>
            <button type="button" onClick={handleCancel} className="w-full border py-3 rounded-lg text-sm hover:bg-gray-50 transition">إلغاء</button>

            <div className="bg-white rounded-xl p-4">
              <h3 className="font-semibold text-sm mb-3">الفئة ونوع القماشة</h3>
              <select 
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full mb-3 bg-gray-100 border rounded-lg p-2 text-sm"
              >
                <option>الفئة</option>
                <option>ملابس</option>
                <option>أحذية</option>
                <option>إكسسوارات</option>
              </select>
              <select 
                name="fabric"
                value={formData.fabric}
                onChange={handleInputChange}
                className="w-full bg-gray-100 border rounded-lg p-2 text-sm"
              >
                <option>نوع القماش</option>
                <option>قطن</option>
                <option>حرير</option>
                <option>صوف</option>
              </select>
            </div>

            <div className="bg-white rounded-xl p-4">
              <h3 className="font-semibold text-sm mb-3">حالة المنتج</h3>
              <select 
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="w-full bg-gray-100 border rounded-lg p-2 text-sm"
              >
                <option>اختر الحالة</option>
                <option>نشط</option>
                <option>غير نشط</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
