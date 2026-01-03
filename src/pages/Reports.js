import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, ResponsiveContainer } from "recharts";

export default function ReportsAnalytics() {
  const lineData = [
    { month: "Jan", value: 60 },
    { month: "Feb", value: 55 },
    { month: "Mar", value: 70 },
    { month: "Apr", value: 65 },
    { month: "May", value: 80 },
    { month: "Jun", value: 75 },
    { month: "Jul", value: 90 },
    { month: "Aug", value: 95 },
    { month: "Sep", value: 105 },
    { month: "Oct", value: 110 },
  ];

  const barData = [
    { name: "منتج 1", orders: 120 },
    { name: "منتج 2", orders: 100 },
    { name: "منتج 3", orders: 90 },
    { name: "منتج 4", orders: 80 },
    { name: "منتج 5", orders: 75 },
  ];

  return (
    <div dir="rtl" className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-1">التقارير والتحليلات</h1>
      <p className="text-sm text-gray-500 mb-6">نظرة عامة على أداء المتجر والطلبات</p>

      {/* Stat Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <StatCard title="الطلبات المكتملة" value="3,845" note="+12% عن الشهر الماضي" noteColor="text-green-600" />
        <StatCard title="إجمالي الطلبات" value="5,000" note="+8% عن الشهر الماضي" noteColor="text-green-600" />
        <StatCard title="إجمالي الإيرادات" value="SAR 98,500" note="+15% عن الشهر الماضي" noteColor="text-green-600" />
        <StatCard title="متوسط الطلب" value="SAR 50.80" note="-3% عن الشهر الماضي" noteColor="text-red-600" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h3 className="text-sm font-bold mb-4">إيرادات المبيعات الشهرية</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#f97316" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h3 className="text-sm font-bold mb-4">أفضل المنتجات مبيعاً</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="orders" fill="#3b82f6" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Order Status */}
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <h3 className="text-sm font-bold mb-4">حالة الطلبات</h3>
        <div className="flex gap-4 text-sm">
          <StatusBadge label="قيد المعالجة" value={15} />
          <StatusBadge label="تم الشحن" value={18} />
          <StatusBadge label="تم التوصيل" value={45} />
          <StatusBadge label="ملغي" value={5} />
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, note, noteColor }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold mt-2">{value}</p>
      <p className={`text-xs mt-1 ${noteColor}`}>{note}</p>
    </div>
  );
}

function StatusBadge({ label, value }) {
  return (
    <div className="bg-gray-50 rounded-lg px-4 py-2 flex items-center gap-2">
      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-bold">
        {value}
      </span>
      <span style={{ fontFamily: 'Cairo', fontWeight: 400, fontSize: '20px', lineHeight: '16px', letterSpacing: '0px', textAlign: 'center', leadingTrim: 'NONE' }}>{label}</span>
    </div>
  );
}
