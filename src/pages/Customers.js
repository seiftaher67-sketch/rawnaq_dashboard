import React from "react";

export default function Customers() {
  const customers = [
    { name: "Fatima Al-Mansouri", phone: "01557274575", orders: 15, date: "2025-11-29" },
    { name: "Noor Abdullah", phone: "01557274575", orders: 8, date: "2025-11-29" },
    { name: "Mariam", phone: "01557274575", orders: 2, date: "2025-11-29" },
    { name: "Aisha Mohammed", phone: "01557274575", orders: 4, date: "2025-11-29" },
    { name: "Layla Ahmed", phone: "01557274575", orders: 1, date: "2025-11-29" },
  ];

  return (
    <div dir="rtl" className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
<h1 className="text-2xl font-bold text-gray-800" style={{ marginLeft: '15px', marginBottom: '2px', fontFamily: 'Cairo', fontWeight: 600, fontStyle: 'SemiBold', fontSize: '36px', leadingTrim: 'NONE', lineHeight: '36px', letterSpacing: '0px', textAlign: 'right', color: '#101828' }}> العملاء </h1>
 <p style={{ fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'Regular', fontSize: '24px', leadingTrim: 'NONE', lineHeight: '24px', letterSpacing: '0px', textAlign: 'right', marginTop: '16px', paddingRight: '10px' }}>إدارة قاعدة بيانات عملائك</p>
<br></br>
      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="ابحث عن طريق الاسم، رقم الجوال..."
          className="w-full px-4 rounded-lg border border-gray-200 focus:outline-none"
          style={{ height: '59px', backgroundColor: '#E8E8E8' }}
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-right">
          <thead className="bg-gray-50 text-gray-600 text-sm">
            <tr>
              <th className="px-6 py-3">العميل</th>
              <th className="px-6 py-3">رقم الجوال</th>
              <th className="px-6 py-3">عدد الطلبات</th>
              <th className="px-6 py-3">تاريخ آخر طلب</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {customers.map((c, i) => (
              <tr key={i} className="text-sm text-gray-700">
                <td className="px-6 py-4 font-medium">{c.name}</td>
                <td className="px-6 py-4">{c.phone}</td>
                <td className="px-6 py-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {c.orders}
                  </span>
                </td>
                <td className="px-6 py-4">{c.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <p className="text-gray-500 text-sm">الجديد هذا الشهر</p>
          <p className="text-2xl font-bold mt-2">143</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <p className="text-gray-500 text-sm">نشط هذا الشهر</p>
          <p className="text-2xl font-bold mt-2">55</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-4 text-center">
          <p className="text-gray-500 text-sm">إجمالي العملاء</p>
          <p className="text-2xl font-bold mt-2">143</p>
        </div>
      </div>
    </div>
  );
}
