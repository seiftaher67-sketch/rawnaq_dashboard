import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MyOrders = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>سجل الطلبات</h1>
        <div className="orders-list">
          <div className="order-item">
            <img src="" alt="Product" />
            <div className="order-details">
              <h3>اسم المنتج</h3>
              <p>السعر</p>
              <button>إعادة الطلب</button>
            </div>
          </div>
          {/* Repeat for other orders */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MyOrders;
