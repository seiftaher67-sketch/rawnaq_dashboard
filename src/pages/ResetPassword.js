import React from "react";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/forgot-password');
  };

  return (
    <div style={{
      fontFamily: 'Cairo, sans-serif',
      boxSizing: 'border-box'
    }}>
      <button
        onClick={handleBack}
        style={{
          position: 'absolute',
          top: '16px',
          left: '0',
          padding: '8px 12px',
          borderRadius: '6px',
          border: '1px solid #e2e2e2',
          background: '#f9f9f9',
          color: '#555',
          fontSize: '12px',
          cursor: 'pointer'
        }}
      >
        ← رجوع
      </button>
      <h1 style={{
        margin: 0,
        fontSize: '20px',
        fontWeight: 700,
        color: '#222'
      }}>إعادة تعيين كلمة المرور</h1>
      <div style={{
        marginTop: '8px',
        fontSize: '13px',
        color: '#7a7a7a',
        lineHeight: 1.6
      }}>
        من فضلك أنشئ كلمة مرور جديدة قوية ويصعب تخمينها للتأكيد
      </div>

      <div style={{
        marginTop: '26px',
        textAlign: 'right'
      }}>
        <div style={{ marginBottom: '18px' }}>
          <label style={{
            display: 'block',
            fontSize: '13px',
            color: '#555',
            marginBottom: '6px'
          }}>ادخل كلمة المرور الجديدة</label>
          <input
            type="password"
            value="••••••••"
            readOnly
            style={{
              width: '100%',
              height: '44px',
              borderRadius: '8px',
              border: '1px solid #e2e2e2',
              padding: '0 12px',
              fontSize: '14px',
              background: '#f3f3f3'
            }}
          />
        </div>

        <div style={{ marginBottom: '18px' }}>
          <label style={{
            display: 'block',
            fontSize: '13px',
            color: '#555',
            marginBottom: '6px'
          }}>تأكيد كلمة المرور</label>
          <input
            type="password"
            value="••••••••"
            readOnly
            style={{
              width: '100%',
              height: '44px',
              borderRadius: '8px',
              border: '1px solid #e2e2e2',
              padding: '0 12px',
              fontSize: '14px',
              background: '#f3f3f3'
            }}
          />
        </div>

        <div style={{
          fontSize: '12px',
          color: '#3b82f6',
          marginTop: '-6px',
          marginBottom: '18px'
        }}>
          يجب أن تحتوي على 8 أحرف على الأقل
        </div>

        <button style={{
          width: '100%',
          height: '46px',
          borderRadius: '10px',
          border: 'none',
          background: '#5da0ff',
          color: '#fff',
          fontSize: '14px',
          fontWeight: 600,
          cursor: 'pointer'
        }}>تعيين كلمة المرور</button>
      </div>
    </div>
  );
}
