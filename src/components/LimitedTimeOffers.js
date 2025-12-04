import React from 'react';
import card1 from '../card1.jpg';
import card2 from '../card2.jpg';
import card3 from '../card3.jpg';

const LimitedTimeOffers = () => {
  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'normal', fontSize: '48px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right', color: '#dc2626' }} className="mb-8">عروض محدودة لفترة قصيرة</h2>
        <div className="flex overflow-x-auto space-x-6 pb-4">
          {/* Card 1 */}
          <div className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <div className="relative">
              <img src="/images/1.png" alt="الفرقة" className="w-full h-48 object-cover rounded-t-lg" />
              <div className="absolute top-2 left-2 bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">25%</div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">الفرقة</h3>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-gray-500 line-through">250 ريال</span>
                <span className="text-red-600 font-bold">250 ريال</span>
              </div>
              <button className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition-colors">اشتري الآن</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <div className="relative">
              <img src="/images/2.png" alt="عبارة كتان" className="w-full h-48 object-cover rounded-t-lg" />
              <div className="absolute top-2 left-2 bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">25%</div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">عبارة كتان</h3>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-gray-500 line-through">255 ريال</span>
                <span className="text-red-600 font-bold">250 ريال</span>
              </div>
              <button className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition-colors">اشتري الآن</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <div className="relative">
              <img src="/images/3.png" alt="طرحة قطن" className="w-full h-48 object-cover rounded-t-lg" />
              <div className="absolute top-2 left-2 bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">25%</div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">طرحة قطن</h3>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-gray-500 line-through">250 ريال</span>
                <span className="text-red-600 font-bold">250 ريال</span>
              </div>
              <button className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition-colors">اشتري الآن</button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <div className="relative">
              <img src="/images/4.jpg" alt="عبارة كتان" className="w-full h-48 object-cover rounded-t-lg" />
              <div className="absolute top-2 left-2 bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm">25%</div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">عبارة كتان</h3>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-gray-500 line-through">250 ريال</span>
                <span className="text-red-600 font-bold">250 ريال</span>
              </div>
              <button className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition-colors">اشتري الآن</button>
            </div>
          </div>
        </div>
        {/* Countdown Timer */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-2">العرض ينتهي خلال:</p>
          <div className="flex justify-center space-x-4">
            <div className="bg-red-500 text-white px-4 py-2 rounded">
              <span className="text-2xl font-bold">02</span><br/>أيام
            </div>
            <div className="bg-red-500 text-white px-4 py-2 rounded">
              <span className="text-2xl font-bold">14</span><br/>ساعات
            </div>
            <div className="bg-red-500 text-white px-4 py-2 rounded">
              <span className="text-2xl font-bold">30</span><br/>دقائق
            </div>
            <div className="bg-red-500 text-white px-4 py-2 rounded">
              <span className="text-2xl font-bold">45</span><br/>ثواني
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitedTimeOffers;
