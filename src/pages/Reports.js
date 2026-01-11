
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

export default function ReportsAnalytics() {
  const lineData = [
    { month: "Jan", value: 42000 },
    { month: "Feb", value: 38000 },
    { month: "Mar", value: 52000 },
    { month: "Apr", value: 47000 },
    { month: "May", value: 62000 },
    { month: "Jun", value: 58000 },
    { month: "Jul", value: 71000 },
    { month: "Aug", value: 66000 },
    { month: "Sep", value: 79000 },
    { month: "Oct", value: 83000 },
    { month: "Nov", value: 92000 },
    { month: "Dec", value: 98000 },
  ];

  const barData = [
    { name: "عباية تطريز الذهب الأسود", orders: 200 },
    { name: "نقاب كتان", orders: 160 },
    { name: "طرحة تطريز ذهبي", orders: 140 },
    { name: "عباية كتان", orders: 120 },
    { name: "نقاب قصير", orders: 110 },
  ];

  return (
    <div dir="rtl" className="bg-gray-50 min-h-screen p-6" style={{ fontFamily: 'Cairo' }}>
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-800" style={{ marginLeft: '15px', marginBottom: '2px', fontFamily: 'Cairo', fontWeight: 600, fontStyle: 'SemiBold', fontSize: '36px', leadingTrim: 'NONE', lineHeight: '36px', letterSpacing: '0px', textAlign: 'right', color: '#101828' }}>      التقارير والتحليلات</h1>
      <p className="text-sm" style={{ marginLeft: '15px', marginTop: '16px', fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'normal', fontSize: '20px', leadingTrim: 'NONE', lineHeight: '24px', letterSpacing: '0px', textAlign: 'right', color: '#6A7282' }}>        نظرة عامة على أداء المتجر والطلبات
      </p>
      <br></br>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 mb-6">
        <StatCard
          title="إجمالي الإيرادات"
          value="SAR 98,500"
          note="+15% عن الشهر الماضي"
          color="green"
          image="/images/Container (2).png"
        />
        <StatCard
          title="إجمالي الطلبات"
          value="5000"
          note="+8% عن الشهر الماضي"
          color="blue"
          image="/images/Container (3).png"
        />


        <StatCard
          title="المنتجات المباعة"
          value="3,845"
          note="+12% عن الشهر الماضي"
          color="orange"
          image="/images/Container (0).png"
        />
        <StatCard
          title="متوسط الطلب"
          value="SAR 50,480"
          note="-3% عن الشهر الماضي"
          color="purple"
          image="/images/c1.png"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 mb-6">
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <h3 className="text-sm font-bold mb-4">
            إيرادات المبيعات الشهرية
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#f97316"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm">
          <h3 className="text-sm font-bold mb-4">
            أفضل المنتجات مبيعاً
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="orders"
                fill="#3b82f6"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Order Status */}
      <div className="bg-white rounded-xl p-5 shadow-sm">
        <h3 className="text-sm font-bold mb-4">حالة الطلبات</h3>

        <div className="space-y-3 text-sm">
          <StatusRow label="تم التوصيل" value={15} />
          <StatusRow label="تم الشحن" value={15} />
          <StatusRow label="قيد المعالجة" value={15} />
          <StatusRow label="ملغي" value={15} />
        </div>
      </div>
    </div>
  );
}

/* ===== Components ===== */

function StatCard({ title, value, note, color, image }) {
  const colors = {
    orange: "text-orange-500",
    blue: "text-blue-500",
    green: "text-green-600",
    purple: "text-purple-500",
  };

  return (
    <div className="bg-white shadow-card flex items-start justify-between" style={{ width: '296px', height: '152px', opacity: 1, borderRadius: '16px', border: '1.18px solid #e5e7eb', paddingTop: '25.17px', paddingRight: '25.17px', paddingBottom: '1.18px', paddingLeft: '25.17px' }}>
      <div className="flex-1">
        <p className="text-sm text-gray-dark" style={{ fontFamily: 'Cairo', fontWeight: 600, fontStyle: 'SemiBold', fontSize: '24px', leadingTrim: 'NONE', lineHeight: '20px', letterSpacing: '0px', textAlign: 'right' }}>{title}</p><br />
        <p className="text-3xl font-bold text-brand-black" style={{ marginTop: '-10px' }}>{value}</p>
        <p style={{ fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'normal', fontSize: '16px', lineHeight: '16px', letterSpacing: '0px', textAlign: 'right', color: '#009966', marginTop: '5px' }}>{note}</p>
      </div>

      <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-transparent" style={{ marginTop: '20px' }}>
        {image && <img src={image} alt={title} style={{ width: '50px', height: '50px', transform: 'rotate(0deg)', opacity: 1, borderRadius: '14px', paddingRight: '0.02px' }} />}
      </div>
    </div>
  );
}

function StatusRow({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-700">{label}</span>
      <span className="bg-green-100 text-green-700 px-3 py-0.5 rounded-full text-xs font-bold">
        {value}
      </span>
    </div>
  );
}



