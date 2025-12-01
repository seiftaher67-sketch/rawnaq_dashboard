import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ReturnPolicy = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>سياسة الاسترجاع</h1>
        <div className="return-policy">
          <p>استلام طلب خاطئ → استرجاع كامل</p>
          <p>استلام طلب ناقص</p>
          <p>غير قابل للاسترجاع بعد تعديل المقاسات</p>
          <p>الاسترجاع خلال ١ يوم</p>
          <p>معالجة الاسترجاع خلال ١٤ يوم</p>
          <p>المنتج يجب أن يكون بحالته الأصلية</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReturnPolicy;
