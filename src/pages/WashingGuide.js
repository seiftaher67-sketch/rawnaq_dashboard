import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const WashingGuide = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>تعليمات الغسيل</h1>
        <div className="washing-tips">
          <p>يفضل الغسيل اليدوي بماء بارد</p>
          <p>في الغسالة وضع Delicate</p>
          <p>تجفيف بالظل</p>
          <p>كي بدرجة منخفضة</p>
          <p>تعليق على شماعة مبطنة</p>
          <p>عدم رش العطور مباشرة</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WashingGuide;
