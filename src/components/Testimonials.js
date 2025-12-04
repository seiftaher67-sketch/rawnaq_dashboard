import React from 'react';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "ظننت مبدأ أن العياب أمر بهيج للتراث لكني وجدت انه يعطيك حضور وثقة كبيرة جداً رائع فعلا وصل الطلب في وقت وجيز والخامة ممتازة وراقية جداً وشكراً لكم كثير شكراً على الشحن السريع حقيقة انتم الأفضل",
      name: "سارة خالد",
      image: "/images/g1.jpg",
      rating: 5
    },
    {
      id: 2,
      text: "عملت بحثا وتوازن كثير قبل ما اشتري والحمد لله اختيار موفق جداً الجودة رائعة والألوان والتصميمات حلوة جداً والتوصيل سريع والعاملين في الشركة لطيفين جداً شكراً لكم",
      name: "مريم أحمد",
      image: "/images/g2.jpg",
      rating: 5
    },
    {
      id: 3,
      text: "متشكرة جداً على الجودة العالية والاهتمام بالتفاصيل كل شيء رائع جداً من اختيار الخامة إلى التغليف والشحن كل شيء احترافي وراقي جداً سأتسوق منكم مرة أخرى بكل تأكيد",
      name: "هبة إبراهيم",
      image: "/images/g3.jpg",
      rating: 5
    },
    {
      id: 4,
      text: "تجربة تسوق رائعة جداً بكل صراحة الموقع سهل جداً والمنتجات بجودة عالية والأسعار مقبولة جداً والشحن كان سريع وحريص على المنتج والحمد لله وصل بحالة ممتازة أنصح الجميع بالشراء منكم",
      name: "فاطمة محمد",
      image: "/images/g1.jpg",
      rating: 5
    },
    {
      id: 5,
      text: "أول مرة أشتري منكم والحمد لله كانت تجربة ممتازة جداً الموظفات لطيفات جداً والمنتج جيد والتغليف احترافي جداً بصراحة ستكون مشترية دائمة أشكركم على هذا الاهتمام واستمروا بهذا المستوى الراقي",
      name: "ليلى علي",
      image: "/images/g2.jpg",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gray-light">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-1">
            ثقة عملائنا هي سر تميزنا
          </h2>
          <p className="text-gray-dark text-sm">
            اكتشفي تقييماتهم معنا
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 border border-gray-light transition-transform duration-300 hover:border-gray-medium"
            >
              {/* Review Text */}
              <p className="text-brand-softBlack text-xs leading-relaxed mb-4 line-clamp-5 text-right italic font-medium">
                {testimonial.text}
              </p>

              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-400" size={12} />
                ))}
              </div>

              {/* Customer Info */}
              <div className="flex items-center gap-3 justify-end">
                <div>
                  <h4 className="text-brand-black font-bold text-sm">
                    {testimonial.name}
                  </h4>
                </div>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
