

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
    <div
      dir="rtl"
      style={{
        minHeight: "100vh",
        background: "#F7F7F7",
        padding: "32px",
        fontFamily: "Cairo",
      }}
    >
      {/* ===== Header ===== */}
      {/* <div style={{ marginBottom: 24 }}>
        <h1
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: "#101828",
            marginBottom: 8,
          }}
        >
          العملاء
        </h1>
        <p style={{ fontSize: 16, color: "#667085" }}>
          إدارة قاعدة بيانات عملائك
        </p>
      </div> */}

      <h1 style={{ fontFamily: 'Cairo', fontWeight: 600, fontStyle: 'SemiBold', fontSize: '36px', leadingTrim: 'NONE', lineHeight: '36px', letterSpacing: '0px', textAlign: 'right' }}>العملاء</h1>
      <br></br>
      <p style={{ fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'Regular', fontSize: '24px', leadingTrim: 'NONE', lineHeight: '24px', letterSpacing: '0px', textAlign: 'right' }}>إدارة قاعدة بيانات عملائك</p>

      <br></br>
      <br></br>

      {/* ===== Search ===== */}
      <div style={{ marginBottom: 24 }}>
        <input
          type="text"
          placeholder="ابحث عن طريق الاسم، رقم الجوال..."
          style={{
            width: "100%",
            height: 56,
            padding: "0 16px",
            borderRadius: 12,
            border: "1px solid #E4E7EC",
            background: "#E8E8E8",
            fontSize: 16,
            outline: "none",
          }}
        />
      </div>

      {/* ===== Table ===== */}
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: 16,
          border: "1px solid #EAECF0",
          overflow: "hidden",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#E8E8E8" }}>
              <th style={thStyle}>العميل</th>
              <th style={thStyle}>رقم الجوال</th>
              <th style={thStyle}>عدد الطلبات</th>
              <th style={thStyle}>تاريخ آخر طلب</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((c, i) => (
              <tr
                key={i}
                style={{
                  borderBottom: "1px solid #EAECF0",
                }}
              >
                <td style={{ ...tdStyle, color: '#000000', fontWeight: 900 }}>{c.name}</td>
                <td style={tdStyle}>{c.phone}</td>
                <td style={tdStyle}>
                  <span
                    style={{
                      background: "#ECFDF3",
                      color: "#027A48",
                      padding: "6px 16px",
                      borderRadius: 999,
                      fontSize: 14,
                      fontWeight: 600,
                      display: "inline-block",
                      minWidth: 44,
                      textAlign: "center",
                    }}
                  >
                    {c.orders}
                  </span>
                </td>
                <td style={tdStyle}>{c.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===== Stats ===== */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 4,
          marginTop: 32,
        }}
      >
        <StatCard title="إجمالي العملاء " value="77" />
        <StatCard title="نشط هذا الشهر" value="55" />
        <StatCard title="الجديد هذا الشهر" value="143" />
      </div>
    </div>
  );
}

/* ===== Styles ===== */
const thStyle = {
  padding: "16px 24px",
  fontSize: 14,
  fontWeight: 600,
  color: "#475467",
  textAlign: "right",
};

const tdStyle = {
  padding: "18px 24px",
  fontSize: 16,
  color: "#101828",
  textAlign: "right",
};

function StatCard({ title, value }) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: 16,
        border: "1px solid #EAECF0",
        padding: 24,
        textAlign: "center",
      }}
    >
      <p style={{ fontFamily: 'Cairo', fontWeight: 400, fontSize: 24, lineHeight: '20px', letterSpacing: '0px', textAlign: 'right', color: "#667085" }}>{title}</p>
      <p style={{ fontFamily: 'Cairo', fontWeight: 600, fontSize: 40, lineHeight: '36px', letterSpacing: '0px', textAlign: 'right', marginTop: 16 }}>
        {value}
      </p>
    </div>
  );
}

