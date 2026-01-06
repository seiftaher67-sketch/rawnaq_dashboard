import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function OrderDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const [statusUpdate, setStatusUpdate] = useState("");

  // Get order data from navigation state
  const passedData = location.state?.orderData;
  
  const orderData = passedData ? {
    date: passedData.date,
    orderNumber: passedData.id,
    customerName: passedData.name,
    customerPhone: passedData.phone,
    customerAddress: passedData.address || 'الرياض – حي النرجس – السعودية',
    email: 'customer@email.com',
    productName: passedData.productName,
    productPrice: passedData.amount,
    originalPrice: passedData.originalPrice || 'SAR 1200',
    fabric: 'كريب',
    measurements: passedData.specifications || {
      height: '170cm',
      chestCircumference: '40cm',
      waistCircumference: '20cm',
      abeaLength: '20cm',
      hipsCircumference: '50cm',
      shoulderWidth: '100cm',
      sleeveLength: '20cm',
      armCircumference: '20cm',
    },
    notes: passedData.specialNotes || 'طول إضافي',
  } : {
    date: '2025-11-30',
    orderNumber: '#ORD-1246',
    customerName: 'أحمد محمد',
    customerPhone: '+966 55 234 5678',
    customerAddress: 'الرياض – حي النرجس – السعودية',
    email: 'ahmed@email.com',
    productName: 'عباية نسائية سوداء',
    productPrice: 'SAR 650',
    originalPrice: 'SAR 1200',
    fabric: 'كريب',
    measurements: {
      height: '170cm',
      chestCircumference: '40cm',
      waistCircumference: '20cm',
      abeaLength: '20cm',
      hipsCircumference: '50cm',
      shoulderWidth: '100cm',
      sleeveLength: '20cm',
      armCircumference: '20cm',
    },
    notes: 'طول إضافي',
  };

  const measurementsArray = [
    ['الطول', orderData.measurements.height],
    ['محيط الصدر', orderData.measurements.chestCircumference],
    ['محيط الخصر', orderData.measurements.waistCircumference],
    ['طول العباءة', orderData.measurements.abeaLength],
    ['محيط الأرداف', orderData.measurements.hipsCircumference],
    ['عرض الكتف', orderData.measurements.shoulderWidth],
    ['طول الكم', orderData.measurements.sleeveLength],
    ['محيط الذراع', orderData.measurements.armCircumference],
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-[#f6f6f6] flex justify-center p-6 font-sans">
      <div className="w-full max-w-[1100px] bg-white rounded-xl p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-1 text-sm bg-[#e8f0ff] text-[#3b82f6] rounded-full hover:bg-[#d0e2ff] transition"
              style={{ fontFamily: 'Cairo' }}
            >
              رجوع
            </button>
            <h1 className="text-xl font-bold" style={{ fontFamily: 'Cairo' }}>
              تفاصيل الطلب المخصص
            </h1>
          </div>
          <span className="text-sm text-gray-400" style={{ fontFamily: 'Cairo' }}>
            {orderData.date} • {orderData.orderNumber}
          </span>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Left column */}
          <div className="col-span-4 space-y-6">
            {/* Order Summary */}
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold mb-3" style={{ fontFamily: 'Cairo' }}>
                ملخص الطلب
              </h3>
              <div className="flex justify-between text-sm mb-2" style={{ fontFamily: 'Cairo' }}>
                <span>سعر الطلب</span>
                <span>{orderData.originalPrice}</span>
              </div>
              <div className="flex justify-between text-sm mb-2" style={{ fontFamily: 'Cairo' }}>
                <span>رسوم التوصيل</span>
                <span>مجاني</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-semibold" style={{ fontFamily: 'Cairo' }}>
                <span>الإجمالي</span>
                <span>{orderData.productPrice}</span>
              </div>
            </div>

            {/* Status Update */}
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold mb-3" style={{ fontFamily: 'Cairo' }}>
                تحديث الحالة
              </h3>
              <select
                value={statusUpdate}
                onChange={(e) => setStatusUpdate(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 text-sm bg-gray-100"
                style={{ fontFamily: 'Cairo' }}
              >
                <option value="">-- اختر الحالة --</option>
                <option value="pending">قيد الانتظار</option>
                <option value="processing">قيد المعالجة</option>
                <option value="completed">مكتمل</option>
                <option value="cancelled">ملغى</option>
              </select>
            </div>
          </div>

          {/* Right column */}
          <div className="col-span-8 space-y-6">
            {/* Customer Info */}
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold mb-4" style={{ fontFamily: 'Cairo' }}>
                معلومات العميل
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm" style={{ fontFamily: 'Cairo' }}>
                <div>
                  👤 اسم العميل: <span className="font-medium">{orderData.customerName}</span>
                </div>
                <div>
                  📞 رقم الجوال: <span className="font-medium">{orderData.customerPhone}</span>
                </div>
                <div>
                  ✉️ البريد الإلكتروني: <span className="font-medium">{orderData.email}</span>
                </div>
                <div>
                  📍 العنوان: <span className="font-medium">{orderData.customerAddress}</span>
                </div>
              </div>
            </div>

            {/* Required Item */}
            <div className="border border-gray-200 rounded-xl p-4 flex gap-4 items-center">
              <img
                src="https://via.placeholder.com/80x100"
                alt="item"
                className="rounded-lg w-20 h-24 object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <h4 className="font-semibold" style={{ fontFamily: 'Cairo' }}>
                  {orderData.productName}
                </h4>
                <p className="text-sm text-gray-500" style={{ fontFamily: 'Cairo' }}>
                  القماش: {orderData.fabric} • المقاس المخصص
                </p>
              </div>
              <div className="font-semibold" style={{ fontFamily: 'Cairo' }}>
                {orderData.productPrice}
              </div>
            </div>

            {/* Measurements */}
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold mb-4" style={{ fontFamily: 'Cairo' }}>
                القياسات المطلوبة
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {measurementsArray.map(([label, value], i) => (
                  <div key={i} className="border border-gray-200 rounded-lg p-3 text-sm flex justify-between" style={{ fontFamily: 'Cairo' }}>
                    <span>{label}</span>
                    <span className="text-gray-500">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-semibold mb-2" style={{ fontFamily: 'Cairo' }}>
                ملاحظات إضافية
              </h3>
              <p className="text-sm text-gray-600" style={{ fontFamily: 'Cairo' }}>
                {orderData.notes}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
