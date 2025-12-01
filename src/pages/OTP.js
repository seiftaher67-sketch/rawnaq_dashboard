import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const OTP = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="otp-container">
          <h1>تم إرسال رمز 6 أرقام</h1>
          <p>أدخل الرمز المرسل إلى رقم هاتفك</p>
          <form className="otp-form">
            <input type="text" maxLength="6" placeholder="رمز التحقق" />
            <button type="submit">تسجيل الدخول</button>
          </form>
          <button className="resend">إعادة إرسال الرمز</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OTP;
