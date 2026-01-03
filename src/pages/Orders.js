import { Filter, Search } from "lucide-react";

export default function OrdersPage() {
  const orders = [
    { id: "#ORD-1247", name: "Fatima Al-Mansouri", phone: "+966 50 123 4567", amount: "SAR 850", status: "تم التوصيل", statusClass: "bg-[#D0FAE5] text-green-700", date: "2023-10-15" },
    { id: "#ORD-1247", name: "Noor Abdullah", phone: "+966 50 234 5678", amount: "SAR 850", status: "يعالج", statusClass: "bg-[#C8E0FF] text-blue-700", date: "2023-10-14" },
    { id: "#ORD-1247", name: "Mariam Hassan", phone: "+966 50 345 6789", amount: "SAR 1,200", status: "قيد الانتظار", statusClass: "bg-orange-100 text-orange-700", date: "2023-10-13" },
    { id: "#ORD-1247", name: "Aisha Mohammed", phone: "+966 50 456 7890", amount: "SAR 980", status: "خارج للتوصيل", statusClass: "bg-purple-100 text-purple-700", date: "2023-10-12" },
    { id: "#ORD-1247", name: "Layla Ahmed", phone: "+966 50 567 8901", amount: "SAR 850", status: "تم التوصيل", statusClass: "bg-[#D0FAE5] text-green-700", date: "2023-10-11" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen" dir="rtl">
      <h1 style={{ fontFamily: 'Cairo', fontWeight: 600, fontStyle: 'SemiBold', fontSize: '36px', leadingTrim: 'NONE', lineHeight: '36px', letterSpacing: '0px', textAlign: 'right' }}>الطلبات</h1>
      <br></br>
      <p style={{ fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'Regular', fontSize: '24px', leadingTrim: 'NONE', lineHeight: '24px', letterSpacing: '0px', textAlign: 'right' }}>إدارة وتتبع جميع طلبات العملاء</p>

      {/* Tabs */}
      <br></br>
      <br></br>
      <div className="flex gap-6 border-b mb-4">
        <span style={{ fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'Regular', fontSize: '20px', leadingTrim: 'NONE', lineHeight: '20px', letterSpacing: '0px', textAlign: 'right' }} className="pb-2 border-b-2 border-blue-500 text-blue-500 font-medium">جميع الطلبات</span>
        <span style={{ fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'Regular', fontSize: '20px', leadingTrim: 'NONE', lineHeight: '20px', letterSpacing: '0px', textAlign: 'right' }} className="text-gray-400">الطلبات المخصصة</span>
        <span style={{ fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'Regular', fontSize: '20px', leadingTrim: 'NONE', lineHeight: '20px', letterSpacing: '0px', textAlign: 'right' }} className="text-gray-400">المرتجعات</span>
      </div>

      {/* Search & Filter */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center bg-white rounded-lg px-3 py-2 w-full shadow-sm">
          <Search className="w-4 h-4 text-gray-400 ml-2" />
          <input
            className="outline-none flex-1 text-sm"
            placeholder="ابحث عن طريق اسم العميل، رقم الطلب، رقم الهاتف..."
          />
        </div>

        <button className="bg-white p-2 rounded-lg shadow-sm">
          <Filter className="w-4 h-4 text-gray-500" />
        </button>
      </div>
      <br></br>
      {/* Table */}
      <h3 className="text-lg font-semibold text-brand-black mb-4" style={{ fontFamily: 'Cairo', fontWeight: 700, fontStyle: 'Bold', fontSize: '24px', leadingTrim: 'NONE', lineHeight: '28px', letterSpacing: '0px', textAlign: 'right' }}>أحدث الطلبات</h3>
      <div className="bg-white rounded-xl shadow-card p-6">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-light" style={{ backgroundColor: '#E4E4E4', height: '48px', opacity: 1 }}>
              <th className="px-4 py-3" style={{ fontFamily: 'Cairo', fontWeight: 700, fontStyle: 'Bold', fontSize: '20px', lineHeight: '16px', letterSpacing: '0.6px', textAlign: 'right', textTransform: 'uppercase', color: '#374151' }}>
                رقم الطلب
              </th>
              <th className="px-4 py-3" style={{ fontFamily: 'Cairo', fontWeight: 700, fontStyle: 'Bold', fontSize: '20px', lineHeight: '16px', letterSpacing: '0.6px', textAlign: 'center', textTransform: 'uppercase', color: '#374151' }}>
                العميل
              </th>
              <th className="px-4 py-3" style={{ fontFamily: 'Cairo', fontWeight: 700, fontStyle: 'Bold', fontSize: '20px', lineHeight: '16px', letterSpacing: '0.6px', textAlign: 'center', textTransform: 'uppercase', color: '#374151' }}>
                رقم الهاتف
              </th>
              <th className="px-4 py-3" style={{ fontFamily: 'Cairo', fontWeight: 700, fontStyle: 'Bold', fontSize: '20px', lineHeight: '16px', letterSpacing: '0.6px', textAlign: 'center', textTransform: 'uppercase', color: '#374151' }}>
                حالة الطلب
              </th>
              <th className="px-4 py-3" style={{ fontFamily: 'Cairo', fontWeight: 700, fontStyle: 'Bold', fontSize: '20px', lineHeight: '16px', letterSpacing: '0.6px', textAlign: 'center', textTransform: 'uppercase', color: '#374151' }}>
                التاريخ
              </th>
              <th className="px-4 py-3" style={{ fontFamily: 'Cairo', fontWeight: 700, fontStyle: 'Bold', fontSize: '20px', lineHeight: '16px', letterSpacing: '0.6px', textAlign: 'center', textTransform: 'uppercase', color: '#374151' }}>
                المبلغ الكلي
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-b border-gray-light hover:bg-gray-light">
                <td className="px-4 py-3 text-sm text-brand-black" style={{ fontFamily: 'Cairo', fontWeight: 400, fontSize: '20px', lineHeight: '20px', letterSpacing: '0px', textAlign: 'right', leadingTrim: 'NONE' }}>
                  {order.id}
                </td>
                <td className="px-4 py-3 text-sm text-brand-black" style={{ fontFamily: 'Cairo', fontWeight: 400, fontSize: '20px', lineHeight: '20px', letterSpacing: '0px', textAlign: 'center', leadingTrim: 'NONE' }}>
                  {order.name}
                </td>
                <td className="px-4 py-3 text-sm text-brand-black" style={{ fontFamily: 'Cairo', fontWeight: 400, fontSize: '20px', lineHeight: '20px', letterSpacing: '0px', textAlign: 'center', leadingTrim: 'NONE' }}>
                  {order.phone}
                </td>
                <td className="px-4 py-3 text-center">
                  <span className={`px-3 py-1 rounded-lg text-xs font-medium ${order.statusClass}`} style={{ width: '173px', height: '38px', borderRadius: '12px', borderWidth: '1.18px', borderStyle: 'solid', borderColor: '#e5e7eb', display: 'inline-block', textAlign: 'center', fontFamily: 'Cairo', fontWeight: 400, fontSize: '20px', lineHeight: '16px', letterSpacing: '0px', leadingTrim: 'NONE', position: 'relative', top: '16px', left: '14px' }}>
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-brand-black text-center" style={{ fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'normal', fontSize: '20px', leadingTrim: 'none', lineHeight: '20px', letterSpacing: '0px' }}>
                  {order.date}
                </td>
                <td className="px-4 py-3 text-sm text-brand-black text-center" style={{ fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'normal', fontSize: '20px', leadingTrim: 'none', lineHeight: '20px', letterSpacing: '0px' }}>
                  {order.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


