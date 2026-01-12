import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [buttonBg, setButtonBg] = useState('#5da0ff');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleBack = () => {
    navigate('/forgot-password');
  };

  const handleMouseDown = () => {
    setButtonBg('#4a90e2');
  };

  const handleMouseUp = () => {
    setButtonBg('#5da0ff');
  };

  const handleResetPassword = () => {
    // Here you could add validation, e.g., check if passwords match and are at least 8 chars
    // For now, just navigate to login
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
          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
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
                top: '50%',
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
        </div>

        <div style={{ marginBottom: '18px' }}>
          <label style={{
            display: 'block',
            fontSize: '13px',
            color: '#555',
            marginBottom: '6px'
          }}>تأكيد كلمة المرور</label>
          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
                top: '50%',
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
        </div>

        <div style={{
          fontSize: '12px',
          color: '#3b82f6',
          marginTop: '-6px',
          marginBottom: '18px'
        }}>
          يجب أن تحتوي على 8 أحرف على الأقل
        </div>

        <button
          onClick={handleResetPassword}
          style={{
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
          تعيين كلمة المرور
        </button>
      </div>
    </div>
  );
}
