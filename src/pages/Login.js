import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  return (
    <div style={{
      fontFamily: 'Cairo, sans-serif',
      boxSizing: 'border-box'
    }}>
      <h1 style={{
        margin: 0,
        fontSize: '30px',
        fontWeight: 700,
        color: '#222'
      }}>تسجيل الدخول إلى الحساب</h1>
      <div style={{
        marginTop: '6px',
        fontSize: '13px',
        color: '#7a7a7a',
        fontFamily: 'Cairo'
      }}>
        يرجى إدخال البريد الإلكتروني وكلمة المرور للمتابعة
      </div>

      <div style={{
        marginTop: '24px',
        textAlign: 'right'
      }}>
        <div style={{ marginBottom: '18px' }}>
          <label style={{
            display: 'block',
            fontSize: '13px',
            color: '#555',
            marginBottom: '6px',
            fontFamily: 'Cairo'
          }}>ادخل عنوان البريد الإلكتروني</label>
          <input
            type="text"
            placeholder="admin_ik55@gmail.com"
            style={{
              width: '100%',
              height: '42px',
              borderRadius: '8px',
              border: '1px solid #e2e2e2',
              padding: '0 12px',
              fontSize: '14px',
              background: '#f3f3f3',
              userSelect: 'none'
            }}
          />
        </div>

        <div style={{ marginBottom: '18px', position: 'relative' }}>
          <label style={{
            display: 'block',
            fontSize: '13px',
            color: '#555',
            marginBottom: '6px',
            fontFamily: 'Cairo'
          }}>ادخل كلمة المرور</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="كلمة المرور"
            style={{
              width: '100%',
              height: '44px',
              borderRadius: '8px',
              border: '1px solid #e2e2e2',
              padding: '0 40px 0 12px',
              fontSize: '14px',
              background: '#f3f3f3'
            }}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              right: '10px',
              top: '70%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              color: '#555'
            }}
          >
            {showPassword ? '🔒' : '👁️'}
          </button>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '6px',
          fontSize: '12px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: '#555'
          }}>
            <input type="checkbox" checked readOnly style={{ accentColor: '#3b82f6' }} />
            <span style={{ fontFamily:'Cairo' }}>تذكر كلمة المرور</span>
          </div>
          <Link to="/forgot-password" style={{
            color: '#3b82f6',
            textDecoration: 'none',
            fontSize: '12px',
             fontFamily: 'Cairo'
          }}>
            نسيت كلمة المرور؟
          </Link>
        </div>

        <button style={{
          marginTop: '18px',
          width: '100%',
          height: '44px',
          borderRadius: '8px',
          border: 'none',
          background: '#5da0ff',
          color: '#fff',
          fontSize: '14px',
          fontWeight: 600,
          cursor: 'pointer',
          fontFamily: 'Cairo'
        }}>تسجيل الدخول</button>
      </div>
    </div>
  );
}
