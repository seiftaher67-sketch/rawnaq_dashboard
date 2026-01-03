// import React from 'react';

// const Customers = () => {
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold text-gray-900 mb-6">Customers</h1>
//       <div className="bg-white p-6 rounded-lg shadow">
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Name
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Email
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Phone
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Orders
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               <tr>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                   John Doe
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   john@example.com
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   +1 (555) 123-4567
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   5
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                   <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-4">
//                     View
//                   </a>
//                   <a href="#" className="text-red-600 hover:text-red-900">
//                     Delete
//                   </a>
//                 </td>
//               </tr>
//               {/* Add more rows as needed */}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Customers;

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
      <h1 className="text-2xl font-bold text-gray-800 mb-4">العملاء</h1>
      <p className="text-sm text-gray-500 mb-6">إدارة قاعدة بيانات عملائك</p>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="ابحث عن طريق الاسم، رقم الجوال..."
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none"
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

