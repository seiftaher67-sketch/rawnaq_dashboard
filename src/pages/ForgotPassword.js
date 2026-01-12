import React from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const handleResetPassword = () => {
    navigate('/reset-password');
  };

  const handleBack = () => {
    navigate('/login');
  };

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
      }}>نسيت كلمة المرور</h1>
      <div style={{
        marginTop: '8px',
        fontSize: '13px',
        color: '#7a7a7a',
        lineHeight: 1.6
      }}>
        تم إرسال رمز التحقق إلى بريدك الإلكتروني المسجل
      </div>

      <div style={{
        marginTop: '26px',
        textAlign: 'right'
      }}>
        <div style={{
          marginBottom: '10px',
          fontSize: '13px',
          color: '#555'
        }}>ادخل رمز التحقق</div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '8px',
          direction: 'ltr'
        }}>
          <input style={{
            width: '48px',
            height: '44px',
            borderRadius: '8px',
            border: '1px solid #e3e3e3',
            background: '#f4f4f4',
            textAlign: 'center',
            fontSize: '18px',
            fontWeight: 600
          }} />
          <input style={{
            width: '48px',
            height: '44px',
            borderRadius: '8px',
            border: '1px solid #e3e3e3',
            background: '#f4f4f4',
            textAlign: 'center',
            fontSize: '18px',
            fontWeight: 600
          }} />
          <input style={{
            width: '48px',
            height: '44px',
            borderRadius: '8px',
            border: '1px solid #e3e3e3',
            background: '#f4f4f4',
            textAlign: 'center',
            fontSize: '18px',
            fontWeight: 600
          }} />
          <input style={{
            width: '48px',
            height: '44px',
            borderRadius: '8px',
            border: '1px solid #e3e3e3',
            background: '#f4f4f4',
            textAlign: 'center',
            fontSize: '18px',
            fontWeight: 600
          }} />
          <input style={{
            width: '48px',
            height: '44px',
            borderRadius: '8px',
            border: '1px solid #e3e3e3',
            background: '#f4f4f4',
            textAlign: 'center',
            fontSize: '18px',
            fontWeight: 600
          }} />
          <input style={{
            width: '48px',
            height: '44px',
            borderRadius: '8px',
            border: '1px solid #e3e3e3',
            background: '#f4f4f4',
            textAlign: 'center',
            fontSize: '18px',
            fontWeight: 600
          }} />
        </div>

        <button
          onClick={handleResetPassword}
          style={{
            marginTop: '18px',
            width: '100%',
            height: '46px',
            borderRadius: '10px',
            border: 'none',
            background: '#5da0ff',
            color: '#fff',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          إعادة تعيين كلمة المرور
        </button>
      </div>
    </div>
  );
}
