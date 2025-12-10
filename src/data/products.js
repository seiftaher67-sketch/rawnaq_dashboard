export const products = [
  {
    id: 1,
    name: "عباية كريب فاخرة",
    price: 199,
    originalPrice: 250,
    image: "/images/a1.jpg",
    thumbnails: ["/images/a1.jpg", "/images/a1.jpg", "/images/a1.jpg", "/images/a1.jpg", "/images/a1.jpg"],
    rating: 5,
    description: "عباية فاخرة مصنوعة من أجود أنواع الكتان، بتصميم يناسب الإطلالات الرسمية واليومية. خياطة عالية الجودة وخامة خفيفة ومريحة طوال اليوم.",
    features: [
      "خامة كتان فاخر مستورد",
      "متوفر بعدة مقاسات تناسب الجميع",
      "تصميم مناسب للاستخدام اليومي",
      "خفيف ولطيف على الجسم"
    ],
    reviews: [
      {
        name: "سارة محمد",
        rating: 5,
        date: "13 يوليو 2023",
        text: "العباية روعة جدًا والخامة ممتازة، التوصيل كان سريع والتعامل راقي."
      },
      {
        name: "منه الله",
        rating: 4,
        date: "4 ديسمبر 2023",
        text: "المقاسات مضبوطة والخامة مريحة جداً. أنصح بالشراء."
      },
      {
        name: "هدير إسلام",
        rating: 3,
        date: "12 ديسمبر 2023",
        text: "الخامة جيدة لكن التوصيل تأخر يومين. أتمنى تتحسن خدمة الشحن."
      }
    ],
    similarProducts: [
      {
        name: "عباية كريب فاخرة",
        image: "/images/1.png",
        oldPrice: 300,
        price: 250,
        id: 2
      },
      {
        name: "عباية قطنية ناعمة",
        image: "/images/2.png",
        oldPrice: 220,
        price: 180,
        id: 3
      },
      {
        name: "عباية حرير فاخرة",
        image: "/images/3.png",
        oldPrice: 350,
        price: 299,
        id: 4
      }
    ]
  },
  {
    id: 2,
    name: "عباية مطرزة سعودية",
    price: 250,
    originalPrice: 300,
    image: "/images/a2.jpg",
    thumbnails: ["/images/a2.jpg", "/images/a2.jpg", "/images/a2.jpg", "/images/a2.jpg", "/images/a2.jpg"],
    rating: 5,
    description: "عباية مطرزة بالذهب مصنوعة بعناية عالية جداً، مناسبة للمناسبات الخاصة والحفلات.",
    features: [
      "خامة قماش فاخر عالي الجودة",
      "تطريز يدوي بالذهب والفضة",
      "مقاسات متعددة وملبسة",
      "مناسبة للمناسبات الخاصة"
    ],
    reviews: [
      {
        name: "ليلى عمر",
        rating: 5,
        date: "20 نوفمبر 2023",
        text: "تحفة فنية بكل المعاني! الخياطة احترافية والتطريز رائع جداً."
      },
      {
        name: "فاطمة أحمد",
        rating: 5,
        date: "8 ديسمبر 2023",
        text: "ممتازة جداً وتستحق السعر. سأشتري منهم مجددا."
      }
    ],
    similarProducts: [
      {
        name: "عباية كريب فاخرة",
        image: "/images/1.png",
        oldPrice: 300,
        price: 250,
        id: 1
      },
      {
        name: "عباية قطنية ناعمة",
        image: "/images/2.png",
        oldPrice: 220,
        price: 180,
        id: 3
      },
      {
        name: "عباية حرير فاخرة",
        image: "/images/3.png",
        oldPrice: 350,
        price: 299,
        id: 4
      }
    ]
  },
  {
    id: 3,
    name: "عباية يومية عملية",
    price: 170,
    originalPrice: 220,
    image: "/images/a3.jpg",
    thumbnails: ["/images/a3.jpg", "/images/a3.jpg", "/images/a3.jpg", "/images/a3.jpg", "/images/a3.jpg"],
    rating: 5,
    description: "",
    features: [
      "خامة قطنية ناعمة وخفيفة",
      "سهلة العناية والغسيل",
      "متوفرة بألوان متعددة",
      "مناسبة للاستخدام اليومي"
    ],
    reviews: [
      {
        name: "نور محمد",
        rating: 4,
        date: "15 ديسمبر 2023",
        text: "مريحة جداً وأسعارها معقول. أنصح بها للجميع."
      }
    ],
    similarProducts: [
      {
        name: "عباية كريب فاخرة",
        image: "/images/1.png",
        oldPrice: 300,
        price: 250,
        id: 1
      },
      {
        name: "عباية قطنية ناعمة",
        image: "/images/2.png",
        oldPrice: 220,
        price: 180,
        id: 3
      },
      {
        name: "عباية حرير فاخرة",
        image: "/images/3.png",
        oldPrice: 350,
        price: 299,
        id: 4
      }
    ]
  },
  {
    id: 4,
    name: "عباية رسميّة راقية",
    price: 280,
    originalPrice: 350,
    image: "/images/a4.jpg",
    thumbnails: ["/images/a4.jpg", "/images/a4.jpg", "/images/a4.jpg", "/images/a4.jpg", "/images/a4.jpg"],
    rating: 5,
    description: "عباية رسمية بتصميم فاخر وراقي، مناسبة للمناسبات الرسمية والعزائم.",
    features: [
      "خامة حرير فاخرة ناعمة",
      "تصميم فريد وراقي",
      "مقاسات حصرية",
      "مناسبة للمناسبات الرسمية"
    ],
    reviews: [
      {
        name: "دينا سامي",
        rating: 5,
        date: "18 ديسمبر 2023",
        text: "روعة! الخامة فاخرة جداً والتصميم مميز."
      }
    ],
    similarProducts: [
      {
        name: "عباية كريب فاخرة",
        image: "/images/1.png",
        oldPrice: 300,
        price: 250,
        id: 1
      },
      {
        name: "عباية قطنية ناعمة",
        image: "/images/2.png",
        oldPrice: 220,
        price: 180,
        id: 3
      },
      {
        name: "عباية حرير فاخرة",
        image: "/images/3.png",
        oldPrice: 350,
        price: 299,
        id: 4
      }
    ]
  }
];

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};
