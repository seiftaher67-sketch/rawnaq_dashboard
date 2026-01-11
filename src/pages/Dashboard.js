import {
  ArrowTrendingUpIcon,
  ShoppingBagIcon,
  UsersIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

export default function Dashboard() {
  const statsData = [
    {
      title: "الطلبات اليوم",
      value: "24",
      change: "+8 من الأمس",
      icon: "/images/Container (3).png",
      bgColor: "bg-transparent",
      iconColor: "text-amber-600",
    },
    {
      title: "الإيرادات الشهرية",
      value: "SAR 98,500",
      change: "+1.32% عن الشهر الماضي",
      icon: "/images/Container (0).png",
      bgColor: "bg-transparent",
      iconColor: "text-blue-600",
    },
    {
      title: "عملاء جدد",
      value: "143",
      change: "+43 هذا الشهر",
      icon: "/images/c1.png",
      bgColor: "bg-[#FEF3C680]",
      iconColor: "text-green-600",
    },
    {
      title: "المبيعات اليوم",
      value: "SAR 12,450",
      change: "+5.21% من الأمس",
      icon: "/images/Container (2).png",
      bgColor: "bg-transparent",
      iconColor: "text-yellow-600",
    },
  ];

  const ordersData = [
    {
      id: "#ORD-1247",
      name: "Fatima Al-Mansouri",
      name_ar: "فاطمة المنصوري",
      amount: "SAR 850",
      status: "تم التوصيل",
      statusClass: "bg-[#D0FAE5] text-green-700",
    },
    {
      id: "#ORD-1247",
      name: "Noor Abdullah",
      name_ar: "نور عبدالله",
      amount: "SAR 850",
      status: "يعالج",
      statusClass: "bg-[#C8E0FF] text-blue-700",
    },
    {
      id: "#ORD-1247",
      name: "Mariam Hassan",
      name_ar: "مريم حسن",
      amount: "SAR 1,200",
      status: "قيد الانتظار",
      statusClass: "bg-orange-100 text-orange-700",
    },
    {
      id: "#ORD-1247",
      name: "Aisha Mohammed",
      name_ar: "عائشة محمد",
      amount: "SAR 980",
      status: "خارج للتوصيل",
      statusClass: "bg-purple-100 text-purple-700",
    },
    {
      id: "#ORD-1247",
      name: "Layla Ahmed",
      name_ar: "ليلى أحمد",
      amount: "SAR 850",
      status: "تم التوصيل",
      statusClass: "bg-[#D0FAE5] text-green-700",
    },
  ];

  const chartData = [25, 28, 24, 30, 27, 32, 28, 35, 30, 38, 35, 42];

  return (
    <div className="space-y-6">
      {/* ================= Header ================= */}
      <div className="flex items-center justify-between">
        <div>

          <h1 className="font-cairo font-semibold text-4xl text-right leading-none">لوحة التحكم</h1>
          <br></br>
          <p className="font-cairo font-normal text-2xl text-right leading-none mt-1">
            مرحبًا بعودتك، إليك نظرة عامة على متجرك
          </p>
        </div>
      </div>

      {/* ================= Stats Cards ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
        {statsData.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* ================= Charts ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-2.5">
        {/* Sales Chart */}
        <div className="bg-white rounded-xl shadow-card p-6">
          <h3 className="text-lg font-semibold text-brand-black mb-4" style={{ fontFamily: 'Cairo', fontWeight: 700, fontStyle: 'Bold', fontSize: '24px', leadingTrim: 'NONE', lineHeight: '28px', letterSpacing: '0px', textAlign: 'right' }}>
            تحليلات المبيعات
          </h3>

          {/* Chart */}
          <div className="relative h-72">
            <img src="/images/Container.png" alt="تحليلات المبيعات" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* ================= Orders Table ================= */}
      <div className="bg-white rounded-xl shadow-card p-6">
        <h3 className="text-lg font-semibold text-brand-black mb-4" style={{ fontFamily: 'Cairo', fontWeight: 700, fontStyle: 'Bold', fontSize: '24px', leadingTrim: 'NONE', lineHeight: '28px', letterSpacing: '0px', textAlign: 'right' }}>أحدث الطلبات</h3>

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
                حالة الطلب
              </th>
              <th className="px-4 py-3" style={{ fontFamily: 'Cairo', fontWeight: 700, fontStyle: 'Bold', fontSize: '20px', lineHeight: '16px', letterSpacing: '0.6px', textAlign: 'center', textTransform: 'uppercase', color: '#374151' }}>
                المبلغ الكلي
              </th>
            </tr>
          </thead>
          <tbody>
            {ordersData.map((order, index) => (
              <tr key={index} className="border-b border-gray-light hover:bg-gray-light">
                <td className="px-4 py-3 text-sm text-brand-black" style={{ fontFamily: 'Cairo', fontWeight: 400, fontSize: '20px', lineHeight: '20px', letterSpacing: '0px', textAlign: 'right', leadingTrim: 'NONE' }}>
                  {order.id}
                </td>
                <td className="px-4 py-3 text-sm text-brand-black" style={{ fontFamily: 'Cairo', fontWeight: 400, fontSize: '20px', lineHeight: '20px', letterSpacing: '0px', textAlign: 'center', leadingTrim: 'NONE' }}>
                  {order.name_ar}
                </td>
                <td className="px-4 py-3 text-center">
                  <span className={`px-3 py-1 rounded-lg text-xs font-medium ${order.statusClass}`} style={{ width: '173px', height: '38px', borderRadius: '12px', borderWidth: '1.18px', borderStyle: 'solid', borderColor: '#e5e7eb', display: 'inline-block', textAlign: 'center', fontFamily: 'Cairo', fontWeight: 400, fontSize: '20px', lineHeight: '16px', letterSpacing: '0px', leadingTrim: 'NONE', position: 'relative', top: '16px', left: '14px' }}>
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-brand-black text-center" style={{ fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'normal', fontSize: '20px', leadingTrim: 'none', lineHeight: '20px', letterSpacing: '0px' }}>
                  {order.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= Order Details Frame ================= */}
      <div className="bg-gray-100 rounded-xl p-6 flex gap-6 h-12 items-center" style={{ width: '1060px' }}>
      </div>
    </div>
  );
}

/* ================= Components ================= */

function StatCard({ title, value, change, icon, bgColor, iconColor }) {
  const IconComponent = icon;
  return (
    <div className="bg-white shadow-card flex items-start justify-between" style={{ width: '296px', height: '152px', opacity: 1, borderRadius: '16px', border: '1.18px solid #e5e7eb', paddingTop: '25.17px', paddingRight: '25.17px', paddingBottom: '1.18px', paddingLeft: '25.17px' }}>
      <div className="flex-1">
        <p className="text-sm text-gray-dark" style={{ fontFamily: 'Cairo', fontWeight: 600, fontStyle: 'SemiBold', fontSize: '24px', leadingTrim: 'NONE', lineHeight: '20px', letterSpacing: '0px', textAlign: 'right' }}>{title}</p><br />
        <p className="text-3xl font-bold text-brand-black" style={{ marginTop: '-10px' }}>{value}</p>
        <p style={{ fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'normal', fontSize: '16px', lineHeight: '16px', letterSpacing: '0px', textAlign: 'right', color: '#009966', marginTop: '5px' }}>{change}</p>
      </div>

      <div className={`w-14 h-14 flex items-center justify-center rounded-lg ${bgColor}`} style={{ marginTop: '20px' }}>
        {typeof icon === 'string' ? (
          <img src={icon} alt={title} style={{ width: '50px', height: '50px', transform: 'rotate(0deg)', opacity: 1, borderRadius: '14px', paddingRight: '0.02px' }} />
        ) : (
          <IconComponent className={`w-7 h-7 ${iconColor}`} />
        )}
      </div>
    </div>
  );
}

function OrderItem({ id, name_ar, amount, status, statusClass }) {
  return (
    <li className="flex items-center justify-between p-3 hover:bg-gray-light rounded-lg transition">
      <div className="flex-1">
        <p className="text-sm font-medium text-brand-black">{name_ar}</p>
        <p className="text-xs text-gray-dark">{amount}</p>
      </div>

      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusClass}`}>
        {status}
      </span>
    </li>
  );
}

function SalesChart({ data }) {
  // Calculate chart dimensions
  const width = 100;
  const height = 100;
  const padding = 10;
  const innerWidth = width - padding * 2;
  const innerHeight = height - padding * 2;

  // Find min and max values
  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  const range = maxValue - minValue || 1;

  // Calculate points for the line
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * innerWidth + padding;
    const y = height - ((value - minValue) / range) * innerHeight - padding;
    return `${x},${y}`;
  });

  const pathData = `M ${points.join(" L ")}`;

  // Y-axis labels
  const yLabels = [minValue, (minValue + maxValue) / 2, maxValue];

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
      {/* Grid lines */}
      {yLabels.map((label, index) => (
        <line
          key={`grid-${index}`}
          x1={padding}
          y1={height - ((label - minValue) / range) * innerHeight - padding}
          x2={width - padding}
          y2={height - ((label - minValue) / range) * innerHeight - padding}
          stroke="#e5e7eb"
          strokeWidth="0.5"
        />
      ))}

      {/* X-axis */}
      <line
        x1={padding}
        y1={height - padding}
        x2={width - padding}
        y2={height - padding}
        stroke="#d1d5db"
        strokeWidth="1"
      />

      {/* Y-axis */}
      <line
        x1={padding}
        y1={padding}
        x2={padding}
        y2={height - padding}
        stroke="#d1d5db"
        strokeWidth="1"
      />

      {/* Data line */}
      <path
        d={pathData}
        fill="none"
        stroke="#3b82f6"
        strokeWidth="1.5"
      />

      {/* Data points */}
      {points.map((point, index) => {
        const [x, y] = point.split(",").map(Number);
        return (
          <circle
            key={`dot-${index}`}
            cx={x}
            cy={y}
            r="1.5"
            fill="#3b82f6"
          />
        );
      })}

      {/* X-axis labels */}
      {data.map((_, index) => {
        const x = (index / (data.length - 1)) * innerWidth + padding;
        const labelIndex = Math.round((index / (data.length - 1)) * 12);
        return (
          <text
            key={`label-${index}`}
            x={x}
            y={height - padding + 8}
            textAnchor="middle"
            fontSize="3"
            fill="#6b7280"
          >
            {labelIndex}
          </text>
        );
      })}

      {/* Y-axis labels */}
      {yLabels.map((label, index) => (
        <text
          key={`ylabel-${index}`}
          x={padding - 2}
          y={height - ((label - minValue) / range) * innerHeight - padding + 1}
          textAnchor="end"
          fontSize="3"
          fill="#6b7280"
        >
          {Math.round(label)}
        </text>
      ))}
    </svg>
  );
}
