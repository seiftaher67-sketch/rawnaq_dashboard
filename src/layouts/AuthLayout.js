import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: 'url("/images/bglogin.jpeg") center / cover no-repeat',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      direction: 'rtl'
    }}>
      <div style={{
        width: '450px',
        
        background: '#ffffff',
        borderRadius: '20px',
        padding: '32px 28px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.25)',
        textAlign: 'center'
      }}>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
