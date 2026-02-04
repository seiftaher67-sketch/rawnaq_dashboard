import React from 'react';
import { Link } from 'react-router-dom';

export default function Account() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#FBFBFB' }}>

      {/* ================= HEADER ================= */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FBFBFB',
        zIndex: 100
      }}>
        <Link to="/">
          <img
            src="/image/LOGOS.png"
            alt="Logo"
            style={{
              width: '120px',
              position: 'absolute',
              top: '20px',
              right: '30px',
              borderRadius: '10px'
            }}
          />
        </Link>

        <div style={{
          position: 'absolute',
          top: '34px',
          left: '800px',
          display: 'flex',
          gap: '30px',
          fontFamily: 'El Messiri',
          fontSize: '30px',
          color: '#022B3A'
        }}>
          <Link to="/" style={{ color: '#022B3A', textDecoration: 'none' }}>الرئيسية</Link>
          <Link to="/men" style={{ color: '#022B3A', textDecoration: 'none' }}>رجالي</Link>
          <Link to="/women" style={{ color: '#022B3A', textDecoration: 'none' }}>نسائي</Link>
          <Link to="/medical-tools" style={{ color: '#022B3A', textDecoration: 'none' }}>أدوات طبية</Link>
        </div>

        <div style={{
          position: 'absolute',
          top: '105px',
          left: 0,
          right: 0,
          height: '4px',
          backgroundColor: '#BFBFBF'
        }} />

        <div style={{ height: '130px' }} />
      </div>

      {/* ================= CONTENT ================= */}
      <div style={{ marginTop: '130px', background: '#f6f6f6', direction: 'rtl' }}>
        <style>{`
          * { box-sizing: border-box; font-family: Cairo, sans-serif; }

          .account-page {
            width: 1281px;
            margin: auto;
            padding: 30px 0;
          }

          .account-layout {
            display: grid;
            grid-template-columns: 300px 1fr;
            gap: 30px;
            align-items: flex-start;
          }

          .card {
            background: #fff;
            border-radius: 14px;
            padding: 20px;
            box-shadow: 0 1px 3px rgba(0,0,0,.05);
            width: 820px;
            height: 347px;
          
              transform: translateX(-150px);
          }

          .form-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
          }

          label {
            font-size: 13px;
            color: #555;
            margin-bottom: 6px;
            display: block;
          }

          input, select {
            width: 100%;
            padding: 10px;
            border-radius: 8px;
            border: 1px solid #ddd;
          }

          .save-btn {
            margin-top: 15px;
            background: #0f3d3e;
            color: #fff;
            border: none;
            padding: 10px 18px;
            border-radius: 8px;
            cursor: pointer;
          }

          .profile-card,
          .menu-card {
            background: #fff;
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 1px 3px rgba(0,0,0,.05);
            width: 450px;
          }

          .profile-card {
            margin-bottom: 20px;
          }

          .profile-header {
            display: flex;
            align-items: center;
            gap: 15px;
          }

          .avatar {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: #0f3d3e;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            font-weight: bold;
          }

          .welcome {
            font-size: 14px;
            color: #667085;
          }

          .username {
            font-size: 18px;
            font-weight: 700;
            color: #101828;
          }

          .email {
            font-size: 14px;
            color: #475467;
          }

          .progress-box {
            margin-top: 15px;
          }

          .progress-label {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            margin-bottom: 6px;
          }

          .progress-bar {
            height: 8px;
            background: #E4E7EC;
            border-radius: 20px;
            overflow: hidden;
          }

          .progress-fill {
            width: 80%;
            height: 100%;
            background: #0f3d3e;
          }

          .menu li {
            list-style: none;
            padding: 10px;
            border-radius: 8px;
            cursor: pointer;
          }

          .menu li.active {
            background: #e6f0f0;
          }
        `}</style>

        <div className="account-page">

          <h1 style={{ fontFamily: 'El Messiri', fontSize: '55px' }}>حسابي</h1>
          <p style={{ fontSize: '32px', color: '#3F4254', marginBottom: '30px' }}>
            عرض وتحديث معلومات حسابك وبيانات الاتصال
          </p>

          <div className="account-layout">

            {/* ===== RIGHT ===== */}
            <div>
              <div className="profile-card">
                <div className="profile-header">
                  <div className="avatar">س</div>
                  <div>
                    <div className="welcome">مرحبًا 👋</div>
                    <div className="username">سيف</div>
                    <div className="email">seif@example.com</div>
                  </div>
                </div>

                <div className="progress-box">
                  <div className="progress-label">
                    <span>اكتمال الملف الشخصي</span>
                    <span>80%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill"></div>
                  </div>
                </div>
              </div>

              <div className="menu-card">
                <ul className="menu">
                  <li className="active">👤 حسابي</li>
                  <li>📦 الطلبات</li>
                  <li>↩️ المرتجعات</li>
                  <li>📍 العناوين</li>
                  <li>💳 المدفوعات</li>
                </ul>

                <button style={{ width: '100%' }}>🚪 تسجيل الخروج</button>
              </div>
            </div>

            {/* ===== LEFT ===== */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginLeft: '-200px' }}>
              <div className="card">
                <h3>المعلومات الشخصية</h3>
                <div className="form-grid">
                  <div>
                    <label>الاسم الأول</label>
                    <input defaultValue="أحمد" />
                  </div>
                  <div>
                    <label>اسم العائلة</label>
                    <input defaultValue="يحي" />
                  </div>
                  <div>
                    <label>النوع</label>
                    <select><option>ذكر</option></select>
                  </div>
                  <div>
                    <label>تاريخ الميلاد</label>
                    <input type="date" />
                  </div>
                </div>
                <button className="save-btn">حفظ التغييرات</button>
              </div>

              <div className="card">
                <h3>معلومات التواصل</h3>
                <div className="form-grid">
                  <div>
                    <label>البريد الإلكتروني</label>
                    <input defaultValue="seif@example.com" />
                  </div>
                  <div>
                    <label>رقم الهاتف</label>
                    <input />
                  </div>
                </div>
                <button className="save-btn">حفظ التغييرات</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
