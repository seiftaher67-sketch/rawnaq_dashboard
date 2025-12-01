import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "عباية كريب فاخرة راقية",
      price: 199,
      qty: 1,
      image: "/images/1.png",
    },
    {
      id: 2,
      name: "عباية خليجية مطرزة فاخرة",
      price: 259,
      qty: 1,
      image: "/images/1.png",
    },
  ]);

  const increaseQty = (id) =>
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );

  const decreaseQty = (id) =>
    setCart(
      cart.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );

  const removeItem = (id) => setCart(cart.filter((item) => item.id !== id));

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="pt-36 pb-20 container mx-auto px-6">

      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#0F0F0F]">عربة التسوق</h1>
        <p className="text-lg text-gray-600 mt-2">
          يمكنك مراجعة منتجاتك وتعديل الكمية قبل إتمام الطلب
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* CART ITEMS */}
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="p-5 border border-gray-200 rounded-xl bg-white shadow-sm flex gap-6"
            >
              {/* IMAGE */}
              <img
                src={item.image}
                className="w-40 h-40 rounded-md object-cover shadow"
                alt={item.name}
              />

              {/* PRODUCT INFO */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#0F0F0F]">
                  {item.name}
                </h3>

                <p className="text-[#C8A06A] text-2xl font-bold mt-3">
                  {item.price} ر.س
                </p>

                {/* Quantity */}
                <div className="flex items-center gap-4 mt-5">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="p-2 border rounded-md"
                  >
                    <FiMinus />
                  </button>

                  <span className="text-xl font-semibold">{item.qty}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="p-2 border rounded-md"
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>

              {/* REMOVE BUTTON */}
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 text-3xl hover:text-red-700"
              >
                <FiTrash2 />
              </button>
            </div>
          ))}
        </div>

        {/* ORDER SUMMARY */}
        <div className="bg-gray-100 border border-gray-200 rounded-xl p-6 shadow-md h-fit">

          <h3 className="text-3xl font-bold mb-8">ملخص الطلب</h3>

          <div className="space-y-4 text-lg">

            <div className="flex justify-between">
              <span>إجمالي المنتجات</span>
              <span>{total} ر.س</span>
            </div>

            <div className="flex justify-between">
              <span>رسوم الشحن</span>
              <span>20 ر.س</span>
            </div>

            <div className="flex justify-between">
              <span>الخصم</span>
              <span>0 ر.س</span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between text-2xl font-bold text-[#C8A06A]">
              <span>الإجمالي النهائي</span>
              <span>{total + 20} ر.س</span>
            </div>

          </div>

          {/* CHECKOUT BUTTON */}
          <a
            href="/checkout"
            className="block w-full mt-10 bg-[#0F0F0F] text-white text-center py-4 rounded-md text-xl hover:bg-[#222] transition"
          >
            متابعة لإتمام الطلب
          </a>

        </div>

      </div>
    </div>
  );
}
