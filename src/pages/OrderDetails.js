import React, { useState } from "react";
import Select from "../components/ui/Select";

export default function OrderDetails() {
  const [status, setStatus] = useState("خارج للتسليم");
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          font-family: 'Cairo', sans-serif;
        }

        body {
          margin: 0;
          background: #fafafa;
          direction: rtl;
        }

        .page {
          padding: 32px 48px 32px 148px;
        }

        /* HEADER */
        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .badge {
          padding: 6px 16px;
          border-radius: 20px;
          background: #f7efff;
          color: #7c3aed;
          font-family: Cairo;
          font-weight: 400;
          font-style: normal;
          font-size: 24px;
          line-height: 24px;
          letter-spacing: 0px;
          text-align: right;
          border: 1px solid #e5d9ff;
          margin-right: auto;
        }

        .title {
          text-align: right;
        }

        .title h1 {
          margin: 0;
          font-size: 24px;
          font-weight: 700;
        }

        .title p {
          margin-top: 6px;
          font-size: 14px;
          color: #6b7280;
        }

        /* LAYOUT */
        .grid {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 32px;
        }

        .card {
          background: #fff;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 1px 6px rgba(0,0,0,.05);
        }

        .card h3 {
          margin: 0 0 20px;
          font-family: Cairo;
          font-weight: 600;
          font-size: 20px;
          line-height: 28px;
          letter-spacing: 0px;
          text-align: right;
        }

        /* SUMMARY */
        .row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 14px;
          font-14
fonfmly 'C:#5o'
        }

        .line {
          height: 1px;
          background: #eee;
          margin: 18px 0;
        }

        /* STATUS */
        .select {
          height: 46px;
          border-radius: 12px;
          background: #f1f1f1;
        }

        /* INFO */
        .info {
          display: flex;
          gap: 14px;
          margin-bottom: 18px;
          font-family: 'Cairo';
        }

        .icon {
          width: 32px;
          height: 32px;
          background: #fff4d8;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* PRODUCTS */
        .product {
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid #eee;
          border-radius: 14px;
          padding: 14px;
          margin-bottom: 14px;
        }

        .product img {
          width: 80px;
          height: 105px;
          border-radius: 10px;
        }

        .product h4 {
          margin: 0 0 6px;
          font-size: 14px;
        }

        .product p {
          margin: 0 0 8px;
          font-size: 13px;
          color: #6b7280;
        }
      `}</style>

      <div className="page">
        <div className="top">
          <div className="title">

            <h1 className="text-2xl font-bold text-gray-800" style={{ marginLeft: '15px', marginBottom: '2px', fontFamily: 'Cairo', fontWeight: 600, fontStyle: 'SemiBold', fontSize: '36px', leadingTrim: 'NONE', lineHeight: '36px', letterSpacing: '0px', textAlign: 'right', color: '#101828' }}> تفاصيل الطلب</h1>
           <br></br>
            <p className="text-sm" style={{ marginLeft: '15px', fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'Regular', fontSize: '24px', leadingTrim: 'NONE', lineHeight: '24px', letterSpacing: '0px', textAlign: 'right', color: '#6A7282' }}> 2025-11-30 – #ORD-1246</p>
          </div>

        </div>

        <div className="grid">
          {/* RIGHT */}
          <div>
            <div className="card" style={{ width: '720px', height: '294px', borderRadius: '16px', border: '0.8px solid #eee', transform: 'rotate(0deg)', opacity: 1, gap: '16px', paddingTop: '24.8px', paddingRight: '24.8px', paddingBottom: '0.8px', paddingLeft: '24.8px', fontFamily: 'Cairo' }}>
              <h3>معلومات العميل</h3>

              <div style={{ fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'Regular', fontSize: '16px', leadingTrim: 'NONE', lineHeight: '20px', letterSpacing: '0px', marginRight: '46px' }}>اسم العميل</div>

              <div className="info" style={{ fontWeight: 'bold', color: 'black', fontSize: '18px' }}><div className="icon" style={{ marginTop: '-4px' }}><img src="/images/Icon.png" alt="Name Icon" style={{ width: '24px', height: '24px' }} /></div>عائشة محمد</div>
              <div style={{ fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'Regular', fontSize: '16px', leadingTrim: 'NONE', lineHeight: '20px', letterSpacing: '0px', marginRight: '46px' }}>رقم الهاتف:</div>
              <div className="info" style={{ fontWeight: 'bold', color: 'black', fontSize: '18px' }}><div className="icon" style={{ marginTop: '-4px' }}><img src="/images/phone.png" alt="Phone Icon" style={{ width: '24px', height: '24px' }} /></div>+966 55 234 5678</div>
              <div style={{ fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'Regular', fontSize: '16px', leadingTrim: 'NONE', lineHeight: '20px', letterSpacing: '0px', marginRight: '46px' }}>عنوان التسليم:</div>
              <div className="info" style={{ fontWeight: 'bold', color: 'black', fontSize: '18px' }}><div className="icon" style={{ marginTop: '-4px' }}><img src="/images/location.png" alt="Location Icon" style={{ width: '24px', height: '24px' }} /></div>حي الملكة، الرياض</div>
            </div>

            <div className="card" style={{ marginTop: 20 }}>
              <h3>المنتجات المطلوبة</h3>
              {[1, 2].map(i => (
                <div className="product" key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: 'auto' }}>
                    <img src="/images/ImageWithFallback.png" />
                    <div>
                      <h4 style={{ fontFamily: 'Cairo', fontWeight: 600, fontStyle: 'Regular', fontSize: '16px', leadingTrim: 'NONE', lineHeight: '24px', letterSpacing: '0px', textAlign: 'right', margin: 0 }}>عباءة سوداء أنيقة مع تطريز ذهبي</h4>
                      <br></br>
                      <p style={{ width: '297px', height: '20px', transform: 'rotate(0deg)', opacity: 1, gap: '13px', top: '-1.5px', margin: 0, fontFamily: 'Cairo', fontWeight: 400, fontStyle: 'Regular', fontSize: '16px', leadingTrim: 'NONE', lineHeight: '20px', letterSpacing: '0px', textAlign: 'right' }}>الكمية: 1 · اللون: أسود · المقاس: M</p>
                    </div>
                  </div>
                  <strong style={{ marginRight: 'auto', marginTop: '-50px' }}>SAR 820</strong>
                </div>
              ))}
            </div>
          </div>

          {/* LEFT */}
          <div>
            <div className="card" style={{ fontFamily: 'Cairo' }}>

              <h3>ملخص الطلب</h3>
              <div style={{ color: '#8200DB', fontWeight: 400, fontSize: '20px', lineHeight: '16px', whiteSpace: 'nowrap', textAlign: 'left', position: 'relative', top: '-43px', fontFamily: 'Cairo', textDecoration: (status === 'قيد الانتظار' || status === 'يعالج') ? '' : 'none', textDecorationThickness: (status === 'قيد الانتظار' || status === 'يعالج') ? '3px' : '1px' }}>{status}</div>
              <div className="row"><span>المجموع الفرعي</span><span>SAR 1640</span></div>
              <div className="row green"><span>رسوم التوصيل</span><span>مجاني</span></div>
              <div className="line" />
              <div className="row" style={{ color: 'black', fontWeight: 'bold', fontSize: '18px'   }}><strong>الإجمالي</strong><strong>SAR 1640</strong></div>
            </div>

            <div className="card" style={{ marginTop: 20 }}>
              <h3>تحديث الحالة</h3>
              <Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="select"
              >
                <option value="تم التوصيل"  >تم التوصيل</option>
                <option value="يعالج">يعالج</option>
                <option value="قيد الانتظار">قيد الانتظار</option>
                <option value="خارج للتسليم">خارج للتسليم</option>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
