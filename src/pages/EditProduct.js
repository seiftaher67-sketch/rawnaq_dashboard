import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function EditProduct() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [images, setImages] = useState([]);
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
    { c: "green", t: "زيتي" },
    { c: "brown", t: "بني" },
    { c: "orange", t: "كحلي" },
    { c: "gray", t: "رمادي" },
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-[#f5f5f5] flex justify-center p-6" style={{ fontFamily: 'Cairo' }}>
      <div className="w-full max-w-[1400px]">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800" style={{ marginLeft: '15px', marginBottom: '2px', fontFamily: 'Cairo', fontWeight: 600, fontStyle: 'SemiBold', fontSize: '36px', leadingTrim: 'NONE', lineHeight: '36px', letterSpacing: '0px', textAlign: 'right', color: '#101828' }}>تعديل المنتج</h1>
          <p className="text-sm" style={{ marginLeft: '15px', marginTop: '16px', fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'normal', fontSize: '20px', leadingTrim: 'NONE', lineHeight: '24px', letterSpacing: '0px', textAlign: 'right', color: '#6A7282' }}>حدّث تفاصيل المنتج أدناه</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-6">
          {/* Right Content */}
          <div className="col-span-9 space-y-6">
            {/* Images */}
            <div className="bg-white rounded-xl p-4">
              <h3 className="font-semibold text-sm mb-4" style={{ fontFamily: 'Cairo', fontWeight: 600, fontStyle: 'SemiBold', fontSize: '24px', leadingTrim: 'NONE', lineHeight: '28px', letterSpacing: '0px', textAlign: 'right' }}>صور المنتج</h3>
              <div className="flex gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="w-[90px] h-[120px] bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition" />
                ))}
                <div className="w-[90px] h-[120px] border-2 border-dashed rounded-lg flex items-center justify-center text-gray-400 text-xs cursor-pointer hover:bg-gray-50 transition">رفع</div>
              </div>
              <p className="text-xs text-gray-400 mt-2 "> قم برفع ما يصل إلى 8 صور. ستكون الصورة الأولى هي صورة الغلاف.</p>
            </div>

            {/* Basic Info */}
            <div className="bg-white rounded-xl p-4">
              <h3 className="font-semibold text-sm mb-4" style={{ fontFamily: 'Cairo', fontWeight: 600, fontStyle: 'SemiBold', fontSize: '24px', leadingTrim: 'NONE', lineHeight: '28px', letterSpacing: '0px', textAlign: 'right' }}>معلومات اساسية</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <label className="block mb-1 text-gray-500" style={{ fontFamily: 'Cairo', fontWeight: 700, fontStyle: 'normal', fontSize: '16px', leadingTrim: 'NONE', lineHeight: '20px', letterSpacing: '0px', textAlign: 'right' }}>اسم المنتج</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-100  rounded-lg p-2 focus:outline-none"
                    style={{ fontFamily: 'Cairo', fontWeight: 600, color: '#0F0F0F', fontSize: '16px' }}
                    placeholder="عباية سوداء مزينة"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 text-gray-500" style={{ fontFamily: 'Cairo', fontWeight: 700, fontStyle: 'normal', fontSize: '16px', leadingTrim: 'NONE', lineHeight: '20px', letterSpacing: '0px', textAlign: 'right' }}>الوصف</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full bg-gray-100 border rounded-lg p-2 h-24 resize-none focus:outline-none"
                    style={{ fontFamily: 'Cairo', fontWeight: 600, color: '#0F0F0F', fontSize: '16px' }}
                    placeholder="عباية فاخرة مصنوعة من أفضل أنواع القماش..."
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 text-gray-500" style={{ fontFamily: 'Cairo', fontWeight: 700, fontStyle: 'normal', fontSize: '16px', leadingTrim: 'NONE', lineHeight: '20px', letterSpacing: '0px', textAlign: 'right' }}>سعر المنتج (ريال سعودي)</label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      min="0"
                      step="0.01"
                      className="w-full bg-gray-100 border rounded-lg p-2 focus:outline-none price-input"
                      style={{ fontFamily: 'Cairo', fontWeight: 600, color: '#0F0F0F', fontSize: '16px' }}
                      placeholder="500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-gray-500" style={{ fontFamily: 'Cairo', fontWeight: 700, fontStyle: 'normal', fontSize: '16px', leadingTrim: 'NONE', lineHeight: '20px', letterSpacing: '0px', textAlign: 'right' }}>كمية المخزون</label>
                    <input
                      type="number"
                      name="stock"
                      value={formData.stock}
                      onChange={handleInputChange}
                      min="1"
                      className="w-full bg-gray-100 border rounded-lg p-2 focus:outline-none"
                      style={{ fontFamily: 'Cairo', fontWeight: 600, color: '#0F0F0F', fontSize: '16px' }}
                      placeholder="50"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Variants */}
            <div className="bg-white rounded-xl p-4">
              <h3 className="font-semibold text-sm mb-4" style={{ fontFamily: 'Cairo', fontWeight: 600, fontSize: '24px', textAlign: 'right' }}>متغيرات المنتج</h3>
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-3" style={{ fontFamily: 'Cairo', fontWeight: 700, textAlign: 'right', fontSize: '16px' }}>الألوان المتاحة</p>
                <div className="flex gap-2 flex-wrap">
                  {colorOptions.map((col, i) => {
                    const colorMap = {
                      black: '#1F2937',
                      green: '#02321A',
                      brown: '#321502',
                      orange: '#02321A',
                      gray: '#747474'
                    };
                    const isSelected = formData.colors.includes(col.c);
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleColorToggle(col.c)}
                        className="px-4 py-2 rounded-full text-white text-sm font-semibold focus:outline-none transition-all duration-300"
                        style={{
                          backgroundColor: colorMap[col.c] || '#6B7280',
                          opacity: isSelected ? 1 : 0.6,
                          fontFamily: 'Cairo',
                          fontWeight: 600,
                          border: isSelected ? '3px solid #C8A06A' : '3px solid transparent',
                          transform: isSelected ? 'scale(1.08)' : 'scale(1)',
                          boxShadow: isSelected ? '0 0 12px rgba(200, 160, 106, 0.5)' : 'none'
                        }}
                      >
                        {col.t}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-3" style={{ fontFamily: 'Cairo', fontWeight: 700, textAlign: 'right', fontSize: '16px' }}>المقاسات المتاحة</p>
                <div className="flex gap-2 flex-wrap">
                  {["XS", "S", "M", "L", "XL", "XXL"].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => handleSizeToggle(s)}
                      className="px-4 py-2 rounded-full text-sm font-semibold focus:outline-none transition-all"
                      style={{
                        backgroundColor: formData.sizes.includes(s) ? '#2563EB' : '#F3F4F6',
                        color: formData.sizes.includes(s) ? '#FFFFFF' : '#6B7280',
                        fontFamily: 'Cairo',
                        fontWeight: 600
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Discount */}
            <div className="bg-white rounded-xl p-4">
              <h3 className="font-semibold mb-4" style={{ fontFamily: 'Cairo', fontWeight: 700, fontSize: '24px', textAlign: 'right', color: '#0F0F0F' }}>إضافة عرض على المنتج %</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-gray-600" style={{ fontFamily: 'Cairo', fontWeight: 600, fontSize: '16px', textAlign: 'right' }}>تاريخ انتهاء العرض</label>
                    <input
                      type="text"
                      name="discountEnd"
                      value={formData.discountEnd}
                      onChange={handleInputChange}
                      className="w-full bg-gray-100 border rounded-lg p-3 focus:outline-none"
                      style={{ fontFamily: 'Cairo', fontWeight: 600, color: '#0F0F0F', fontSize: '16px', textAlign: 'center' }}
                      placeholder="يوم/شهر/سنه"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-gray-600" style={{ fontFamily: 'Cairo', fontWeight: 600, fontSize: '16px', textAlign: 'right' }}>تاريخ بدء العرض</label>
                    <input
                      type="text"
                      name="discountStart"
                      value={formData.discountStart}
                      onChange={handleInputChange}
                      className="w-full bg-gray-100 border rounded-lg p-3 focus:outline-none"
                      style={{ fontFamily: 'Cairo', fontWeight: 600, color: '#0F0F0F', fontSize: '16px', textAlign: 'center' }}
                      placeholder="يوم/شهر/سنه"
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-gray-600" style={{ fontFamily: 'Cairo', fontWeight: 600, fontSize: '16px', textAlign: 'right' }}>نسبة الخصم</label>
                  <div className="relative">
                    <input
                      type="number"
                      name="discountPercent"
                      value={formData.discountPercent}
                      onChange={handleInputChange}
                      min="0"
                      step="0.01"
                      className="w-full bg-gray-100 border rounded-lg p-3 focus:outline-none discount-input"
                      style={{ fontFamily: 'Cairo', fontWeight: 600, color: '#0F0F0F', fontSize: '16px', textAlign: 'center', paddingRight: '28px' }}
                      placeholder="20"
                    />

                    <span style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', fontFamily: 'Cairo', fontWeight: 600, fontSize: '16px', color: '#0F0F0F', pointerEvents: 'none', marginLeft: '5px' }}> % </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Left Actions */}
          <div className="col-span-3 space-y-4">
            <button type="submit" className="w-full text-white py-3 rounded-lg transition" style={{ background: 'linear-gradient(to right, #2f6fd6, #1e40af)', fontFamily: 'Cairo', fontWeight: 600, fontStyle: 'SemiBold', fontSize: '24px', leadingTrim: 'NONE', lineHeight: '28px', letterSpacing: '0px' }}>حفظ التعديلات</button>
            <button type="button" onClick={handleCancel} className="w-full py-3 rounded-lg text-sm text-black hover:bg-gray-50 transition text-center" style={{ backgroundColor: '#FCFCFC', fontFamily: 'Cairo', fontWeight: 600, fontStyle: 'SemiBold', fontSize: '24px', leadingTrim: 'NONE', lineHeight: '28px', letterSpacing: '0px' }}>إلغاء</button>

            <div className="bg-white rounded-xl p-4">
              <h3 className="font-semibold text-sm mb-3" style={{ fontFamily: 'Cairo', fontWeight: 600, fontStyle: 'SemiBold', fontSize: '20px', leadingTrim: 'NONE', lineHeight: '28px', letterSpacing: '0px', textAlign: 'right' }}>الفئة ونوع القماشة</h3>
              <div className="mb-3">
                <label className="block mb-1" style={{ fontFamily: 'Cairo', fontWeight: 600, fontStyle: 'SemiBold', fontSize: '20px', leadingTrim: 'NONE', lineHeight: '28px', letterSpacing: '0px', textAlign: 'right' }}>الفئة</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full bg-gray-100 border rounded-lg p-2 text-sm focus:outline-none"
                  style={{ fontFamily: 'Cairo', fontWeight: 700, fontSize: '16px', color: '#0F0F0F', textAlign: 'right' }}
                >
                  <option>نقابات</option>
                  <option>عبايات</option>
                  <option>طرح</option>
                </select>
              </div>
              <div>
                <label className="block mb-1" style={{ fontFamily: 'Cairo', fontWeight: 600, fontStyle: 'SemiBold', fontSize: '20px', leadingTrim: 'NONE', lineHeight: '28px', letterSpacing: '0px', textAlign: 'right' }}>نوع القماش</label>
                <select
                  name="fabric"
                  value={formData.fabric}
                  onChange={handleInputChange}
                  className="w-full bg-gray-100 border rounded-lg p-2 text-sm focus:outline-none"
                  style={{ fontFamily: 'Cairo', fontWeight: 700, fontSize: '16px', color: '#0F0F0F', textAlign: 'right' }}
                >
                  <option>كريب</option>
                  <option>جاكور</option>
                  <option>حرير</option>
                  <option>صوف</option>
                  <option>قطن</option>
                </select>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4">
              <h3 className="font-semibold text-sm mb-3" style={{ fontFamily: 'Cairo', fontWeight: 600, fontStyle: 'SemiBold', fontSize: '20px', leadingTrim: 'NONE', lineHeight: '28px', letterSpacing: '0px', textAlign: 'right' }}>اختر الحالة</h3>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="w-full bg-gray-100 border rounded-lg p-2 text-sm focus:outline-none"
                style={{ fontFamily: 'Cairo', fontWeight: 700, fontSize: '16px', color: '#0F0F0F', textAlign: 'right' }}
              >
                <option>نشط</option>
                <option>أرشيف</option>
                <option>نفذ المخذون</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
