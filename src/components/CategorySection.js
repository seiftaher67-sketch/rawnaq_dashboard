import React from 'react';
import { Link } from 'react-router-dom';

const CategorySection = () => {
  const categories = [
    {
      name: 'العبايات',
      path: '/abayas',
      image: '/images/2.png',
      description: 'مجموعة متنوعة من العبايات الأنيقة'
    },
    {
      name: 'الطرح',
      path: '/tarhas',
      image: '/images/3.png',
      description: 'طرح عصري وأنيق لكل المناسبات'
    },
    {
      name: 'النقابات',
      path: '/niqabs',
      image: '/images/1.png',
      description: 'نقابات بأشكال وألوان متنوعة'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            التسوق حسب الفئة
          </h2>
          <p className="text-lg text-gray-600">
            اكتشفي مجموعاتنا المتنوعة من الملابس الإسلامية
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.path}
              to={category.path}
              className="group relative rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-80"
            >
              <div
                style={{ backgroundImage: `url(${category.image})` }}
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300" />
              <div className="relative h-full flex flex-col items-center justify-center text-center p-4">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-200">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-gray-400 text-black py-3">
            <div className="animate-pulse">
              <p className="text-center text-lg font-semibold">
                🚚 شحن مجاني لجميع الطلبات داخل السعودية لفترة محدودة
              </p>
            </div>
          </div>
      </div>
    </section>
  );
};

export default CategorySection;
