import { Filter, Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OrdersPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filterOptions = [
    { label: "تم التوصيل", value: "delivered" },
    { label: "بالطريق", value: "in_transit" },
    { label: "قيد الانتظار", value: "pending" },
    { label: "خارج للتسليم", value: "out_for_delivery" },
  ];

  const orders = [
    { id: "#ORD-1247", name: "Fatima Al-Mansouri", phone: "+966 50 123 4567", amount: "SAR 850", status: "تم التوصيل", statusClass: "bg-[#D0FAE5] text-green-700", date: "2023-10-15" },
    { id: "#ORD-1247", name: "Noor Abdullah", phone: "+966 50 234 5678", amount: "SAR 850", status: "يعالج", statusClass: "bg-[#C8E0FF] text-blue-700", date: "2023-10-14" },
    { id: "#ORD-1247", name: "Mariam Hassan", phone: "+966 50 345 6789", amount: "SAR 1,200", status: "قيد الانتظار", statusClass: "bg-orange-100 text-orange-700", date: "2023-10-13" },
    { id: "#ORD-1247", name: "Aisha Mohammed", phone: "+966 50 456 7890", amount: "SAR 980", status: "خارج للتوصيل", statusClass: "bg-purple-100 text-purple-700", date: "2023-10-12" },
    { id: "#ORD-1247", name: "Layla Ahmed", phone: "+966 50 567 8901", amount: "SAR 850", status: "تم التوصيل", statusClass: "bg-[#D0FAE5] text-green-700", date: "2023-10-11" },
  ];

  const returns = [
    { id: "#ORD-1247", name: "Fatima Al-Mansouri", phone: "01557274575", amount: "SAR 850", status: "مرتجع", statusClass: "bg-red-100 text-red-700", date: "2025-11-29" },
    { id: "#ORD-1248", name: "Sara Ahmed", phone: "+966 50 789 0123", amount: "SAR 1,050", status: "مرتجع", statusClass: "bg-red-100 text-red-700", date: "2025-11-28" },
  ];

  const customOrders = [
    {
      id: "#ORD-1246",
      name: "فاطمة المنصوري",
      phone: "+966 50 123 4567",
      amount: "SAR 650",
      status: "يعالج",
      statusClass: "bg-blue-100 text-blue-700",
      date: "2025-11-30",
      address: "المدينة المنورة، السعودية",
      productName: "عباية مطرزة حسب الطلب",
      originalPrice: "SAR 1200",
      pricing: "SAR 1300",
      specifications: {
        neckline: "170cm",
        chestMeasure: "40cm",
        waistMeasure: "20cm",
        thighMeasure: "20cm",
        hemMeasure: "20cm",
        sleeveWidth: "50cm",
        sleeveLengthAnkle: "100cm",
      },
      specialNotes: "أرغب في عباية مطرزة بشكل خاص مع خيطان ذهبي فاخر، والنسيج يجب أن يكون حرير طبيعي 100%.",
    },
    {
      id: "#ORD-2002",
      name: "نور عبدالله",
      phone: "+966 50 234 5678",
      amount: "SAR 1,800",
      status: "قيد الانتظار",
      statusClass: "bg-orange-100 text-orange-700",
      date: "2025-11-19",
      address: "الرياض، السعودية",
      productName: "فستان سهرة مطرز",
      originalPrice: "SAR 2000",
      pricing: "SAR 1800",
      specifications: {
        neckline: "160cm",
        chestMeasure: "38cm",
        waistMeasure: "25cm",
        thighMeasure: "22cm",
        hemMeasure: "18cm",
        sleeveWidth: "45cm",
        sleeveLengthAnkle: "95cm",
      },
      specialNotes: "فستان سهرة فاخر مع تطريز يدوي وخرز",
    },
  ];

  const getTableTitle = () => {
    if (activeTab === "all") return "أحدث الطلبات";
    if (activeTab === "custom") return "الطلبات المخصصة";
    return "المرتجعات";
  };

  const getTableData = () => {
    if (activeTab === "all") return orders;
    if (activeTab === "custom") return customOrders;
    return returns;
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen" dir="rtl">
      <h1 style={{ fontFamily: 'Cairo', fontWeight: 600, fontStyle: 'SemiBold', fontSize: '36px', leadingTrim: 'NONE', lineHeight: '36px', letterSpacing: '0px', textAlign: 'right' }}>الطلبات</h1>
      <br></br>
      <p style={{ fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'Regular', fontSize: '24px', leadingTrim: 'NONE', lineHeight: '24px', letterSpacing: '0px', textAlign: 'right' }}>إدارة وتتبع جميع طلبات العملاء</p>

      {/* Tabs */}
      <br></br>
      <br></br>
      <div className="flex gap-6 border-b mb-4">
        <button
          onClick={() => setActiveTab("all")}
          style={{ fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'Regular', fontSize: '20px', leadingTrim: 'NONE', lineHeight: '20px', letterSpacing: '0px', textAlign: 'right' }}
          className={`pb-2 font-medium transition-all ${activeTab === "all"
            ? "border-b-2 border-blue-500 text-blue-500"
            : "text-gray-400 hover:text-gray-600"
            }`}
        >
          جميع الطلبات
        </button>
        <button
          onClick={() => setActiveTab("custom")}
          style={{ fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'Regular', fontSize: '20px', leadingTrim: 'NONE', lineHeight: '20px', letterSpacing: '0px', textAlign: 'right' }}
          className={`pb-2 font-medium transition-all ${activeTab === "custom"
            ? "border-b-2 border-blue-500 text-blue-500"
            : "text-gray-400 hover:text-gray-600"
            }`}
        >
          الطلبات المخصصة
        </button>
        <button
          onClick={() => setActiveTab("returns")}
          style={{ fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'Regular', fontSize: '20px', leadingTrim: 'NONE', lineHeight: '20px', letterSpacing: '0px', textAlign: 'right' }}
          className={`pb-2 font-medium transition-all ${activeTab === "returns"
            ? "border-b-2 border-blue-500 text-blue-500"
            : "text-gray-400 hover:text-gray-600"
            }`}
        >
          المرتجعات
        </button>
      </div>

      {/* Latest Orders Heading */}


      {/* Search & Filter */}
      <div className="grid grid-cols-8 gap-4 mb-4">
        <div className="col-span-6 flex items-center bg-[#E8E8E8] rounded-lg px-3 py-4 shadow-sm">
          <Search className="w-4 h-4 text-gray-600 ml-2" />
          <input
            className="outline-none flex-1 bg-transparent text-black placeholder-gray-500"
            style={{
              fontFamily: 'Cairo',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '0px',
              textAlign: 'right'
            }}
            placeholder="ابحث عن طريق اسم العميل، رقم الطلب، رقم الهاتف..."
          />
        </div>
        <div className="col-span-2 relative">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="w-full flex items-center justify-start bg-[#E8E8E8] rounded-lg px-3 py-4 shadow-sm hover:bg-gray-300 transition"
            style={{ height: '56px' }}
          >
            <Filter className="w-4 h-4 text-gray-600" />
          </button>

          {/* Dropdown Menu */}
          {isFilterOpen && (
            <div className="absolute top-full right-0 mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-light z-50">
              {filterOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsFilterOpen(false);
                  }}
                  className="w-full px-4 py-3 text-right hover:bg-gray-light transition border-b border-gray-light last:border-b-0"
                  style={{ fontFamily: 'Cairo', fontWeight: 400, fontSize: '18px', lineHeight: '24px', textAlign: 'right', color: '#333333' }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <br></br>
      {/* Table */}
      <h3 className="text-lg font-semibold text-brand-black mb-4" style={{ fontFamily: 'Cairo', fontWeight: 700, fontStyle: 'Bold', fontSize: '32px', leadingTrim: 'NONE', lineHeight: '32px', letterSpacing: '0px', textAlign: 'right' }}>{getTableTitle()}</h3>
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
              <th className="px-4 py-3" style={{ fontFamily: 'Cairo', fontWeight: 700, fontStyle: 'Bold', fontSize: '20px', lineHeight: '16px', letterSpacing: '0.6px', textAlign: 'center', textTransform: 'uppercase', color: '#374151' }}>
                النشاط
              </th>
            </tr>
          </thead>
          <tbody>
            {getTableData().map((order, index) => (
              <tr
                key={index}
                className={`border-b border-gray-light ${activeTab === "custom" ? "hover:bg-gray-light cursor-pointer" : "hover:bg-gray-light"}`}
                onClick={() => activeTab === "custom" && navigate(`/orders/${order.id}`, { state: { orderData: order } })}
              >
                <td className="px-4 py-3 text-sm text-brand-black" style={{ fontFamily: 'Cairo', fontWeight: 400, fontSize: '20px', lineHeight: '20px', letterSpacing: '0px', textAlign: 'right', leadingTrim: 'NONE', verticalAlign: 'middle' }}>
                  {order.id}
                </td>
                <td className="px-4 py-3 text-sm text-brand-black" style={{ fontFamily: 'Cairo', fontWeight: 400, fontSize: '20px', lineHeight: '20px', letterSpacing: '0px', textAlign: 'center', leadingTrim: 'NONE', verticalAlign: 'middle' }}>
                  {order.name}
                </td>
                <td className="px-2 py-3 text-sm text-brand-black" style={{ fontFamily: 'Cairo', fontWeight: 400, fontSize: '20px', lineHeight: '20px', letterSpacing: '0px', textAlign: 'center', leadingTrim: 'NONE', verticalAlign: 'middle', whiteSpace: 'nowrap' }}>
                  {order.phone}
                </td>
                <td className="px-4 py-3 text-center" style={{ verticalAlign: 'middle' }}>
                  <span className={`px-3 py-1 rounded-lg text-xs font-medium ${order.statusClass}`} style={{ width: '173px', height: '38px', borderRadius: '12px', borderWidth: '1.18px', borderStyle: 'solid', borderColor: '#e5e7eb', display: 'inline-block', textAlign: 'center', fontFamily: 'Cairo', fontWeight: 400, fontSize: '20px', lineHeight: '16px', letterSpacing: '0px', leadingTrim: 'NONE' }}>
                    {order.status}
                  </span>
                </td>
                <td className="px-2 py-3 text-sm text-brand-black text-center" style={{ fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'normal', fontSize: '20px', leadingTrim: 'none', lineHeight: '20px', letterSpacing: '0px', verticalAlign: 'middle', whiteSpace: 'nowrap' }}>
                  {order.date}
                </td>
                <td className="px-4 py-3 text-sm text-brand-black text-center" style={{ fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'normal', fontSize: '20px', leadingTrim: 'none', lineHeight: '20px', letterSpacing: '0px', verticalAlign: 'middle' }}>
                  {order.amount}
                </td>
                <td className="px-4 py-3 text-center" style={{ verticalAlign: 'middle' }}>
                  <div className="text-center">
                    <img
                      src="/images/ays.png"
                      alt="نشاط"
                      className="w-8 h-8 mx-auto cursor-pointer"
                      style={{ verticalAlign: 'middle' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/orders/${order.id.replace('#', '')}`, { state: { orderData: order } });
                      }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
