import React, { useState } from "react";

export default function AccountSettings() {
  const [activeTab, setActiveTab] = useState('account');
  const [firstName, setFirstName] = useState('احمد');
  const [lastName, setLastName] = useState('محمد');
  const [email, setEmail] = useState('Ahmedmohmed@gmail.com');
  const [phone, setPhone] = useState('015258584566255888');
  const [location, setLocation] = useState('الرياض - السعودية');
  const [timezone, setTimezone] = useState('');
  const [language, setLanguage] = useState('');
  const [saveMessage, setSaveMessage] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    // Simulate saving data
    setSaveMessage('تم حفظ البيانات بنجاح!');
    setTimeout(() => setSaveMessage(''), 3000);
    setIsEditing(false);
  };

  return (
    <div className="wrapper">
      <style>{`
        * {
          box-sizing: border-box;
          font-family: "Cairo", sans-serif;
        }

        body {
          margin: 0;
          background: #fafafa;
        }

        .wrapper, .page {
          direction: rtl;
          padding: 28px;
          max-width: 1200px;
          margin: auto;
        }

        .page {
          padding: 24px;
        }

        h1 {
          font-size: 22px;
          margin: 0;
          font-weight: 700;
        }

        .subtitle {
          color: #8b8b8b;
          font-size: 14px;
          margin-top: 6px;
        }

        /* Tabs */
        .tabs {
          display: flex;
          background: #ffffff;
          border-radius: 14px;
          overflow: hidden;
          width: 100%;
          height: 44px;
          opacity: 1;
          margin-bottom: 24px;
        }

        .tab {
          flex: 1;
          text-align: center;
          padding: 10px 0;
          font-size: 14px;
          color: #777;
          cursor: pointer;
          border: 2px solid white;
        }

        .tab.active {
          background: #fff6dc;
          color: #b88a00;
          font-weight: 600;
        }

        .tab.frame {
          border: 2px solid white;
        }

        /* Cards */
        .card {
          background: #ffffff;
          border-radius: 14px;
          padding: 22px;
          margin-top: 22px;
          box-shadow: 0 0 0 1px #eee;
        }

        /* User Card */
        .user-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .user-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .avatar {
          width: 54px;
          height: 54px;
          background: #ffe8a3;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9b7600;
          font-size: 22px;
        }

        .user-name {
          font-size: 15px;
          font-weight: 700;
        }

        .user-role {
          font-size: 13px;
          color: #8a8a8a;
          margin-top: 2px;
        }

        .edit-btn {
          background: #fff3d8;
          color: #b88a00;
          border: none;
          padding: 6px 12px;
          border-radius: 18px;
          font-size: 12px;
          font-weight: 600;
        }

        /* Section */
        .section-title {
          font-family: Cairo;
          font-weight: 700;
          font-style: Bold;
          font-size: 20px;
          leading-trim: NONE;
          line-height: 24px;
          letter-spacing: 0px;
          text-align: right;
          margin-bottom: 18px;
        }

        /* Form */
        .form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px 24px;
        }

        .field {
          display: flex;
          flex-direction: column;
        }

        .field.full {
          grid-column: 1 / -1;
        }

        label {
          font-size: 13px;
          color: #666;
          margin-bottom: 6px;
        }

        input {
          height: 42px;
          border-radius: 10px;
          border: 1px solid #e6e6e6;
          padding: 0 12px;
          font-size: 14px;
          background: #fff;
        }

        input:focus {
          outline: none;
        }

        input:disabled {
          background: #f9f9f9;
          color: #999;
        }

        /* Additional styles for account tab */
        .user-info {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .badge {
          background: #dff7ea;
          color: #0b9056ff;
          font-size: 15px;
          padding: 6px 10px;
          border-radius: 20px;
          font-weight: 700;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group.full {
          grid-column: 1 / -1;
        }

        /* Password form */
        .password-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .password-form input {
          width: 100%;
        }

        .save-btn {
          margin-top: 10px;
          width: 180px;
          height: 44px;
          border-radius: 10px;
          border: none;
          background: #4d96ff;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }

        /* Sessions */
        .session {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 0;
          border-bottom: 1px solid #f0f0f0;
        }

        .session:last-child {
          border-bottom: none;
        }

        .session-title {
          font-size: 14px;
          font-weight: 600;
        }

        .session-sub {
          font-size: 12px;
          color: #8a8a8a;
          margin-top: 2px;
        }

        .status {
          font-family: Arial;
          font-weight: 700;
          font-style: normal;
          font-size: 12px;
          leading-trim: none;
          line-height: 16px;
          letter-spacing: 0px;
        }

        .current {
          color: #2aa84a;
        }

        .revoke {
          color: #e34d4d;
          cursor: pointer;
        }
      `}</style>
      <h1 className="text-2xl font-bold text-gray-800" style={{ marginLeft: '15px', marginBottom: '2px', fontFamily: 'Cairo', fontWeight: 600, fontStyle: 'SemiBold', fontSize: '36px', leadingTrim: 'NONE', lineHeight: '36px', letterSpacing: '0px', textAlign: 'right', color: '#101828' }}>    إعدادات الحساب</h1>
      <p className="text-sm" style={{ marginLeft: '15px', marginTop: '16px', fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'normal', fontSize: '20px', leadingTrim: 'NONE', lineHeight: '24px', letterSpacing: '0px', textAlign: 'right', color: '#6A7282' }}>    إدارة إعدادات حسابك وتفضيلاتك</p>

      <br></br>

      <div className="tabs">
        <div
          className={`tab ${activeTab === 'account' ? 'active' : ''}`}
          onClick={() => setActiveTab('account')}
        >
          الحساب
        </div>
        <div
          className={`tab ${activeTab === 'security' ? 'active' : ''}`}
          onClick={() => setActiveTab('security')}
        >
          الأمان
        </div>
      </div>

      {activeTab === 'account' && (
        <>
          {/* User Card */}
          <div className="card user-card">
            <div className="user-info">
              <div className="avatar">
                <img src="/images/acc.png" alt="User Avatar" style={{ width: '80%', height: '80%', borderRadius: '12px', objectFit: 'cover' }} />
              </div>
              <div>
                <div className="user-name">احمد محمد</div>
                <div className="user-role">مدير</div>
              </div>
            </div>
            <button className="badge" onClick={!isEditing ? () => setIsEditing(true) : handleSave} style={{ border: 'none', cursor: 'pointer' }}>
              {!isEditing ? 'تعديل الحساب' : 'حفظ التغيرات'}
            </button>
          </div>

          {/* Personal Info */}
          <div className="card">
            <div className="section-title">المعلومات الشخصية</div>
            <div className="form-grid">
              <div className="form-group">
                <label>الاسم الأول</label>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} disabled={!isEditing} />
              </div>

              <div className="form-group">
                <label>اسم العائلة</label>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} disabled={!isEditing} />
              </div>

              <div className="form-group">
                <label>البريد الإلكتروني</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} disabled={!isEditing} />
              </div>

              <div className="form-group">
                <label>رقم الهاتف</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} disabled={!isEditing} />
              </div>

              <div className="form-group full">
                <label>الموقع</label>
                <input value={location} onChange={(e) => setLocation(e.target.value)} disabled={!isEditing} />
              </div>
            </div>
          </div>

          {/* Region Settings */}
          <div className="card">
            <div className="section-title">إعدادات المنطقة</div>
            <div className="form-grid">
              <div className="form-group">
                <label>المنطقة الزمنية</label>
                <input value={timezone} onChange={(e) => setTimezone(e.target.value)} disabled={!isEditing} />
              </div>

              <div className="form-group">
                <label>اللغة</label>
                <input value={language} onChange={(e) => setLanguage(e.target.value)} disabled={!isEditing} />
              </div>
            </div>
            {saveMessage && <p style={{ color: 'green', marginTop: '10px' }}>{saveMessage}</p>}
          </div>
        </>
      )}

      {activeTab === 'security' && (
        <>
          {/* Password */}
          <div className="card">
            <div className="section-title">تغيير كلمة المرور</div>

            <div className="password-form">
              <div>
                <label>كلمة المرور الحالية</label>
                <br></br>
                <input type="password" />
              </div>

              <div>
                <label>كلمة المرور الجديدة</label>
                <br></br>

                <input type="password" />
              </div>

              <div>
                <label>تأكيد كلمة المرور الجديدة</label>
                <br></br>

                <input type="password" />
              </div>

              <button className="save-btn">حفظ التغييرات</button>
            </div>
          </div>

          {/* Sessions */}
          <div className="card">
            <div className="section-title">الجلسات النشطة</div>

            <div className="session">
              <div>
                <div className="session-title">Chrome on MacBook Pro</div>
                <div className="session-sub">
                  Riyadh, Saudi Arabia · Last active: Now
                </div>
              </div>
              <div className="status current">Current</div>
            </div>

            <div className="session">
              <div>
                <div className="session-title">Safari on iPhone 14 Pro</div>
                <div className="session-sub">
                  Riyadh, Saudi Arabia · Last active: 2 hours ago
                </div>
              </div>
              <div className="status revoke">Revoke</div>
            </div>
          </div>
        </>
      )}

    </div>

  );

}
