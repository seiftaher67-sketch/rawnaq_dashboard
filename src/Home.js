





import React, { useState } from 'react';

function Index() {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = (isHovered) => ({
    position: 'absolute',
    top: '620px',
    right: '65px',
    width: '275px',
    height: '76px',
    background: isHovered ? '#2A9D8F' : '#1F7A8C',
    color: 'white',
    fontFamily: 'El Messiri',
    fontWeight: 600,
    fontSize: '34px',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.3s ease, box-shadow 0.3s ease',
    boxShadow: isHovered ? '0 2px 5px rgba(0,0,0,0.1)' : 'none'
  });

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', backgroundColor: '#FBFBFB' }}>
      {/* Header Section */}
      <img
        src="/image/Header.png"
        alt="Header"
        style={{
          width: 'calc(100vw - 32px)',
          height: '879px',
          position: 'absolute',
          top: '16px',
          left: '16px',
          transform: 'scaleX(-1)',
          opacity: 1,
          borderRadius: '10px'
        }}
      />
      <img
        src="/image/cont1.png"
        alt="Cont1"
        style={{
          width: '235px',
          height: '282px',
          position: 'absolute',
          top: '500px',
          left: '165px',
          transform: 'rotate(0deg)',
          opacity: 1,
          borderRadius: '20px'
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '500px',
          left: '165px',
          width: '235px',
          height: '282px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '20px'
        }}
      >
        <div
          style={{
            fontFamily: 'El Messiri',
            fontWeight: 500,
            fontSize: '20px',
            lineHeight: '150%',
            textAlign: 'center',
            color: 'white',
            direction: 'rtl',
            marginBottom: '10px'
          }}
        >
          خصم خاص على جميع الإسكرابات لا تفوّتوا الفرصة
        </div>
        <div
          style={{
            fontFamily: 'El Messiri',
            fontWeight: 700,
            fontSize: '64px',
            lineHeight: '150%',
            textAlign: 'center',
            color: 'white'
          }}
        >
          30%
        </div>
      </div>
      <img
        src="/image/logo.png"
        alt="Logo"
        style={{
          width: '100px',
          height: 'auto',
          position: 'absolute',
          top: '53px',
          right: '50px',
          borderRadius: '10px',
          marginRight: '30px',
          marginTop: '0px'
        }}
      />
      <div style={{ position: 'absolute', top: '160px', right: '60px', lineHeight: '-20px' }}>
        <h2 style={{ fontFamily: 'El Messiri', fontWeight: 700, fontSize: '64px', lineHeight: '130%', letterSpacing: '0%', textAlign: 'right', color: '#FFFFFF', marginRight: '20px' }}>رونق سكربات طبية </h2>
        <h2 style={{ fontFamily: 'El Messiri', fontWeight: 700, fontSize: '64px', lineHeight: '1%', letterSpacing: '0%', textAlign: 'right', color: '#FFFFFF', marginRight: '20px', paddingTop: '0px' }}>تجمع بين الراحة </h2>
        <h2 style={{ fontFamily: 'El Messiri', fontWeight: 700, fontSize: '64px', lineHeight: '1%', letterSpacing: '0%', textAlign: 'right', color: '#FFFFFF', marginRight: '20px', paddingTop: '40px' }}>والأناقة</h2>
      </div>
      <div style={{ position: 'absolute', top: '240px', right: '65px', lineHeight: '100px' }}>
        <p style={{ fontFamily: 'Cairo', fontWeight: 500, fontSize: '24px', lineHeight: '150%', letterSpacing: '0%', textAlign: 'right', color: '#FFFFFF', marginTop: '250px', marginBottom: '0px', wordSpacing: '1px' }}>سكربات طبية بجودة عالية وتصاميم عملية تناسب ساعات </p>
        <p style={{ fontFamily: 'Cairo', fontWeight: 500, fontSize: '24px', lineHeight: '150%', letterSpacing: '0%', textAlign: 'right', color: '#FFFFFF', marginTop: '0px', wordSpacing: '5px' }}> العمل الطويل.راحة، متانة، ومقاسات تناسب الجميع  </p>
      </div>
      <button
        style={buttonStyle(isHovered)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span style={{
          display: 'inline-block',
          transition: 'transform 0.3s ease, font-size 0.3s ease',
          transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
          fontSize: isHovered ? '36px' : '34px'
        }}>
          تسوق الأن
        </span>
      </button>
      <div style={{
        position: 'absolute',
        top: '53px',
        left: '0px',
        display: 'flex',
        flexDirection: 'row',
        gap: '30px',
        alignItems: 'center'
      }}>
        <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'rgba(251, 251, 251, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '90px' }}>
          <img src="/image/icon1.png" alt="Icon 1" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
        </div>
        <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'rgba(251, 251, 251, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/image/icon2.png" alt="Icon 2" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
        </div>
        <div style={{ position: 'relative', width: '295px', height: '70px' }}>
          <input type="text" placeholder="أبحث عن منتج" dir="rtl" style={{ width: '100%', height: '100%', borderRadius: '50px', backgroundColor: '#FBFBFB', opacity: 1, border: 'none', padding: '0 60px 0 20px', fontFamily: 'El Messiri', fontWeight: 400, fontSize: '24px', lineHeight: '150%', outline: 'none', backgroundImage: 'url(/image/adca.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 20px center', backgroundSize: '20px 20px' }} />
        </div>
      </div>
      <div style={{
        position: 'absolute',
        top: '73px',
        left: '800px',
        display: 'flex',
        flexDirection: 'row',
        gap: '30px',
        alignItems: 'center',
        color: 'white',
        fontFamily: 'El Messiri',
        fontWeight: 400,
        fontSize: '24px',
        lineHeight: '150%',
        wordSpacing: '20px'
      }}>
        <span>أدوات طبية</span>
        <span>نسائي </span>
        <span>رجالي</span>
        <span>الرئيسية </span>
      </div>

      {/* ================== Best Sellers Section ================== */}
      <div style={{ position: 'absolute', width: '100%', height: '900px', top: '995px' }}>

        {/* Title */}
        <div style={{ position: 'absolute', top: '0', right: '80px' }}>
          <h2
            style={{
              fontFamily: 'El Messiri',
              fontWeight: 700,
              fontSize: '56px',
              lineHeight: '84px',
              margin: 0
            }}
          >
            الأكثر مبيعًا
          </h2>

          <p
            style={{
              fontFamily: 'Cairo',
              fontWeight: 500,
              fontSize: '28px',
              lineHeight: '42px',
              marginTop: '8px',
              color: '#6B7280'
            }}
          >
            اختيارات الأطباء والممارسين الصحيين
          </p>
        </div>

        {/* More Products Button */}
        <div style={{ position: 'absolute', top: '20px', left: '80px' }}>
          <button
            style={{
              backgroundColor: '#1B4B66',
              color: 'white',
              fontFamily: 'El Messiri',
              fontWeight: 500,
              fontSize: '20px',
              padding: '16px 44px',
              borderRadius: '50px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            المزيد من المنتجات
          </button>
        </div>

        {/* Product Cards */}
        <div
          style={{
            position: 'absolute',
            top: '180px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'row-reverse',
            gap: '32px'
          }}
        >
          {[
            '/image/product1.png',
            '/image/product2.png',
            '/image/product3.png',
            '/image/product4.png'
          ].map((img, index) => (
            <div
              key={index}
              style={{
                width: '270px',
                backgroundColor: 'white',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px rgba(0,0,0,0.08)'
              }}
            >
              {/* Image */}
              <img
                src={img}
                alt="product"
                style={{
                  width: '100%',
                  height: '310px',
                  objectFit: 'cover'
                }}
              />

              {/* Content */}
              <div style={{ padding: '20px 18px', textAlign: 'right' }}>
                <h3
                  style={{
                    fontFamily: 'El Messiri',
                    fontWeight: 600,
                    fontSize: '20px',
                    marginBottom: '12px'
                  }}
                >
                  سكراب طبي
                </h3>

                {/* Color Dots */}
                <div style={{ display: 'flex', gap: '10px', marginBottom: '14px', justifyContent: 'flex-end' }}>
                  {['#111827', '#1B4B66', '#9CA3AF', '#991B1B'].map((c, i) => (
                    <span
                      key={i}
                      style={{
                        width: '14px',
                        height: '14px',
                        borderRadius: '50%',
                        backgroundColor: c
                      }}
                    />
                  ))}
                </div>

                {/* Price + Arrow */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Cairo',
                      fontWeight: 700,
                      fontSize: '18px',
                      color: '#1B4B66'
                    }}
                  >
                    230 ر.س
                  </span>

                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      backgroundColor: '#1B4B66',
                      borderRadius: '50%',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    ←
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Middle Image Section */}
      <img
        src="/image/middle.jpg"
        alt="Middle"
        style={{
          position: 'absolute',
          top: '1700px',
          left: '85px',
          width: '95%',
          height: '719px',
         
        }}
      />

      {/* Footer Text Section */}
      <div style={{
        position: 'absolute',
        top: '2545px',
        left: '0',
        width: '100%',
        textAlign: 'center',
        padding: '60px 20px'
      }}>
        <h2 style={{
          fontFamily: 'El Messiri',
          fontWeight: 700,
          fontSize: '55px',
          lineHeight: '150%',
          color: '#1B4B66'
        }}>
          أساسياتك الطبية، بأسلوب عصري
        </h2>
      </div>

      {/* Spacer for scrolling */}
    </div>
  );
}

export default Index;

