import { useState } from "react";
import { MagnifyingGlassIcon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const notificationsData = [
  {
    id: 1,
    title: "تم استلام طلب جديد",
    description: "الطلب - علاقة الفراشة السوداء - ORD-2024-1547#",
    date: "منذ 5 دقائق",
    icon: "📦",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    title: "تنبيه انخفاض المخزون",
    description: "علاقة مزينة بالالؤلؤ - 3 قطع فقط",
    date: "منذ ساعة",
    icon: "📦",
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: 3,
    title: "تم استلام الدفع",
    description: "تم استقبال الدفع بمبلغ 850.00 ريال سعودي للطلب ORD-2024-1545#",
    date: "منذ ساعتين",
    icon: "✅",
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    id: 4,
    title: "تم شحن الطلب",
    description: "تم شحن الطلب ORD-2024-1543#",
    date: "منذ 3 ساعات",
    icon: "📦",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 5,
    title: "طلب إرجاع",
    description: "طلب المعيل - إرجاع الطلب ORD-2024-1540#",
    date: "منذ 5 ساعات",
    icon: "⭕",
    color: "bg-red-100",
    iconColor: "text-red-600",
  },
];

export default function Header() {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-64 bg-white border-b border-gray-medium/20 shadow-soft z-40">
        <div className="flex items-center justify-between px-6 py-4 gap-6">
          {/* Search Bar */}
          <div className="flex-1">
            <div className="relative">
              <MagnifyingGlassIcon className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-dark" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pr-10 pl-4 py-2 text-sm border border-gray-medium/30 rounded-lg focus:ring-2 focus:ring-transparent focus:outline-none transition"
              />
            </div>
          </div>

          {/* Notifications */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="text-gray-dark hover:text-brand-gold transition relative"
            >
              <BellIcon className="w-6 h-6" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-state-error rounded-full"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Notifications Panel */}
      {showNotifications && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-30 bg-black/20"
            onClick={() => setShowNotifications(false)}
          />

          {/* Notification Panel */}
          <div
            className="fixed bg-white z-50 shadow-lg overflow-hidden flex flex-col"
            style={{
              width: "340px",
              height: "600px",
              top: "100px",
              left: "24px",
              borderRadius: "16px",
              border: "0.8px solid #BDBDBD",
              padding: "0.8px",
              opacity: 1,
            }}
          >
            {/* Header */}
            <div className="px-4 py-4 border-b border-gray-medium/20 flex items-start justify-between">
              <button
                onClick={() => setShowNotifications(false)}
                className="text-gray-dark hover:text-brand-black transition"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
              <div className="text-right flex-1">
                <h3 className="text-lg font-semibold text-brand-black">الاشعارات</h3>
                <p className="text-xs text-gray-medium mt-1">2 اشعارات جديدة</p>
              </div>
            </div>

            {/* Notifications List */}
            <div className="overflow-hidden" style={{ gap: "0px" }}>
              {notificationsData.map((notification) => (
                <div
                  key={notification.id}
                  className="px-3 py-3 hover:bg-gray-light/50 transition cursor-pointer border-b border-gray-medium/10 last:border-b-0 text-right"
                >
                  {/* Title with Icon */}
                  <div className="flex flex-row-reverse items-center justify-end gap-2 mb-1">
                    <div className={`w-8 h-8 rounded-lg ${notification.color} flex items-center justify-center text-base flex-shrink-0`}>
                      {notification.icon}
                    </div>
                    <p className="text-sm font-semibold text-brand-black">{notification.title}</p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-dark leading-tight">{notification.description}</p>

                  {/* Time */}
                  <p className="text-xs text-gray-medium mt-1">{notification.date}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
