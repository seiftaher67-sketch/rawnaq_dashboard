import React, { useState } from 'react';
import { ChevronDown, Upload, Eye } from 'lucide-react';

const EditProduct = () => {
  const [selectedColors, setSelectedColors] = useState(['black', 'green', 'brown']);
  const [selectedSizes, setSelectedSizes] = useState(['XL', 'L', 'M']);

  const colors = [
    { name: 'black', label: 'أسود', hex: '#000000' },
    { name: 'green', label: 'أخضر', hex: '#22C55E' },
    { name: 'brown', label: 'بني', hex: '#8B4513' },
    { name: 'purple', label: 'بنفسجي', hex: '#A855F7' },
    { name: 'gray', label: 'رمادي', hex: '#6B7280' },
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const toggleColor = (colorName) => {
    setSelectedColors(prev =>
      prev.includes(colorName)
        ? prev.filter(c => c !== colorName)
        : [...prev, colorName]
    );
  };

  const toggleSize = (size) => {
    setSelectedSizes(prev =>
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  return (
    <div className="flex bg-gray-50 min-h-screen" dir="rtl">
      {/* Main Content Area - Left Side */}
      <div className="flex-1">
        {/* Top Navigation */}
        <div className="bg-white border-b border-gray-light px-6 py-4 flex justify-end gap-6">
          <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900" style={{ fontFamily: 'Cairo' }}>
            <span>اودة الدخول</span>
          </button>
          <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900" style={{ fontFamily: 'Cairo' }}>
            <span>الطلبات</span>
          </button>
          <button className="flex items-center gap-2 text-brand-gold hover:text-yellow-700" style={{ fontFamily: 'Cairo' }}>
            <span>المنتجات</span>
          </button>
          <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900" style={{ fontFamily: 'Cairo' }}>
            <span>الإعلانات</span>
          </button>
          <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900" style={{ fontFamily: 'Cairo' }}>
            <span>التقارير</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="px-6 py-6 -ml-[60px]">
          <h1 style={{ fontFamily: 'Cairo', fontWeight: 700, fontSize: '36px' }} className="text-3xl font-bold text-right mb-2">تعديل المنتج</h1>
          <p style={{ fontFamily: 'Cairo', fontWeight: 400, fontSize: '18px', color: '#666' }} className="text-right">تحديث تفاصيل المنتج</p>
        </div>

        {/* Content Sections */}
        <div className="px-6 pb-6 space-y-6 -ml-[20px]">
          {/* Product Images Section */}
          <div className="bg-white rounded-lg p-6 shadow-card">
            <h2 style={{ fontFamily: 'Cairo', fontWeight: 600, fontSize: '20px' }} className="font-semibold text-right mb-4">صور المنتج</h2>
            <div className="flex gap-4">
              {[1, 2, 3].map((idx) => (
                <div key={idx} className="w-24 h-24 bg-gray-light rounded-lg flex items-center justify-center border-2 border-dashed border-gray-medium">
                  <Upload className="w-6 h-6 text-gray-medium" />
                </div>
              ))}
            </div>
          </div>

          {/* Basic Information Section */}
          <div className="bg-white rounded-lg p-6 shadow-card">
            <h2 style={{ fontFamily: 'Cairo', fontWeight: 600, fontSize: '20px' }} className="font-semibold text-right mb-6">معلومات أساسية</h2>
            <div className="space-y-4">
              <div>
                <label style={{ fontFamily: 'Cairo', fontWeight: 500 }} className="block text-right text-gray-700 mb-2">اسم المنتج</label>
                <input
                  type="text"
                  placeholder="اكتب اسم المنتج..."
                  className="w-full px-4 py-2 border border-gray-light rounded-lg text-right bg-white"
                  style={{ fontFamily: 'Cairo' }}
                />
              </div>
              <div>
                <label style={{ fontFamily: 'Cairo', fontWeight: 500 }} className="block text-right text-gray-700 mb-2">وصف المنتج</label>
                <textarea
                  placeholder="اكتب وصف تفصيلي للمنتج..."
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-light rounded-lg text-right bg-white resize-none"
                  style={{ fontFamily: 'Cairo' }}
                />
              </div>
            </div>
          </div>

          {/* Product Variations Section */}
          <div className="bg-white rounded-lg p-6 shadow-card">
            <h2 style={{ fontFamily: 'Cairo', fontWeight: 600, fontSize: '20px' }} className="font-semibold text-right mb-6">مشاهدات المنتج</h2>

            {/* Colors Section */}
            <div className="mb-8">
              <h3 style={{ fontFamily: 'Cairo', fontWeight: 500, fontSize: '16px' }} className="text-right mb-3">الألوان المتاحة</h3>
              <div className="flex gap-3 flex-wrap justify-end">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => toggleColor(color.name)}
                    className={`w-12 h-12 rounded-lg border-2 transition flex items-center justify-center ${
                      selectedColors.includes(color.name)
                        ? 'border-blue-600 ring-2 ring-blue-300'
                        : 'border-gray-light'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.label}
                  >
                    {selectedColors.includes(color.name) && (
                      <span className="text-white text-lg font-bold">✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes Section */}
            <div>
              <h3 style={{ fontFamily: 'Cairo', fontWeight: 500, fontSize: '16px' }} className="text-right mb-3">المقاسات المتاحة</h3>
              <div className="flex gap-2 flex-wrap justify-end">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => toggleSize(size)}
                    className={`px-4 py-2 rounded-lg border-2 transition font-medium ${
                      selectedSizes.includes(size)
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-700 border-gray-light hover:border-gray-medium'
                    }`}
                    style={{ fontFamily: 'Cairo' }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Prices Section */}
            <div className="mt-6 pt-6 border-t border-gray-light">
              <h3 style={{ fontFamily: 'Cairo', fontWeight: 500, fontSize: '16px' }} className="text-right mb-3">الأسعار</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label style={{ fontFamily: 'Cairo', fontWeight: 500 }} className="block text-right text-gray-700 mb-2">السعر الأصلي</label>
                  <input
                    type="number"
                    placeholder="0.00"
                    className="w-full px-4 py-2 border border-gray-light rounded-lg text-right"
                    style={{ fontFamily: 'Cairo' }}
                  />
                </div>
                <div>
                  <label style={{ fontFamily: 'Cairo', fontWeight: 500 }} className="block text-right text-gray-700 mb-2">سعر البيع</label>
                  <input
                    type="number"
                    placeholder="0.00"
                    className="w-full px-4 py-2 border border-gray-light rounded-lg text-right"
                    style={{ fontFamily: 'Cairo' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Product Display Statistics Section */}
          <div className="bg-white rounded-lg p-6 shadow-card">
            <h2 style={{ fontFamily: 'Cairo', fontWeight: 600, fontSize: '20px' }} className="font-semibold text-right mb-6">إحصائية عرض على المنتج</h2>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-light rounded-lg p-4">
                <p style={{ fontFamily: 'Cairo', fontWeight: 400, fontSize: '14px', color: '#666' }} className="text-right mb-1">نسبة العرض</p>
                <p style={{ fontFamily: 'Cairo', fontWeight: 600, fontSize: '20px' }} className="text-right">30%</p>
              </div>
              <div className="bg-gray-light rounded-lg p-4">
                <p style={{ fontFamily: 'Cairo', fontWeight: 400, fontSize: '14px', color: '#666' }} className="text-right mb-1">التاريخ</p>
                <p style={{ fontFamily: 'Cairo', fontWeight: 600, fontSize: '20px' }} className="text-right">15-2-2025</p>
              </div>
              <div className="bg-gray-light rounded-lg p-4">
                <p style={{ fontFamily: 'Cairo', fontWeight: 400, fontSize: '14px', color: '#666' }} className="text-right mb-1">تاريخ آخر عرض</p>
                <p style={{ fontFamily: 'Cairo', fontWeight: 600, fontSize: '20px' }} className="text-right">10-2-2025</p>
              </div>
            </div>

            {/* Chart Placeholder */}
            <div className="mt-6 bg-gray-light rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <Eye className="w-12 h-12 text-gray-medium mx-auto mb-2" />
                <p style={{ fontFamily: 'Cairo', color: '#999' }}>الرسم البياني</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-64 bg-white shadow-sm p-6 flex flex-col border-l border-gray-light">
        {/* Logo */}
        <div className="mb-8">
          <img src="/logo.svg" alt="Logo" className="h-10" />
        </div>

        {/* Update Button */}
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium mb-4 hover:bg-blue-700 transition" style={{ fontFamily: 'Cairo' }}>
          تحديث المنتج
        </button>

        {/* Cancel Button */}
        <button className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-medium mb-4 hover:bg-gray-light transition" style={{ fontFamily: 'Cairo' }}>
          الغاء
        </button>

        {/* Delete Button */}
        <button className="w-full border-2 border-red-500 text-red-500 py-3 rounded-lg font-medium mb-8 hover:bg-red-50 transition" style={{ fontFamily: 'Cairo' }}>
          حذف المنتج
        </button>

        {/* Dropdowns */}
        <div className="space-y-6">
          {/* Category Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Cairo' }}>الفئة والقسم الرئيسي</label>
            <select className="w-full border border-gray-light rounded-lg px-3 py-2 bg-white appearance-none cursor-pointer" style={{ fontFamily: 'Cairo' }}>
              <option>الفئة</option>
              <option>ملابس</option>
              <option>أحذية</option>
              <option>إكسسوارات</option>
            </select>
          </div>

          {/* Summary Type Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Cairo' }}>نوع الملخص</label>
            <select className="w-full border border-gray-light rounded-lg px-3 py-2 bg-white appearance-none cursor-pointer" style={{ fontFamily: 'Cairo' }}>
              <option>اختر نوع</option>
              <option>عادي</option>
              <option>متقدم</option>
              <option>بسيط</option>
            </select>
          </div>

          {/* Product Status Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Cairo' }}>حالة المنتج</label>
            <select className="w-full border border-gray-light rounded-lg px-3 py-2 bg-white appearance-none cursor-pointer" style={{ fontFamily: 'Cairo' }}>
              <option>نشط</option>
              <option>غير نشط</option>
              <option>قيد المراجعة</option>
              <option>محذوف</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
