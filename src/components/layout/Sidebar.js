import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  HomeIcon,
  ShoppingBagIcon,
  CubeIcon,
  UsersIcon,
  ChartBarIcon,
  EnvelopeIcon,
  UserCircleIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const menuItems = [
  {
    path: "/dashboard",
    label: "لوحة التحكم",
    icon: HomeIcon,
  },
  {
    path: "/orders",
    label: "الطلبات",
    icon: ShoppingBagIcon,
  },
  {
    path: "/products",
    label: "المنتجات",
    icon: CubeIcon,
  },
  {
    path: "/customers",
    label: "العملاء",
    icon: UsersIcon,
  },
  {
    path: "/reports",
    label: "التقارير",
    icon: ChartBarIcon,
  },
  // {
  //   path: "/profile",
  //   label: "محمد أحمد",
  //   icon: UserCircleIcon,
  // },
];

export default function Sidebar() {
  const location = useLocation();
  const [activePath, setActivePath] = useState("/dashboard");

  return (
    <aside className="w-[267px] h-[864px] bg-white flex flex-col" style={{ position: 'fixed', right: '0', opacity: 1, transform: 'rotate(0deg)', paddingBottom: 0, borderRightWidth: '1.18px' }}>
      {/* Header with Logo and Dropdown */}
      <div className="px-6 py-5 border-b border-gray-medium/20">
        <div className="flex items-center justify-between gap-3">
          <img src="/images/logoo.png" alt="Logo" className="h-10 object-contain" />
          <button className="text-brand-black hover:bg-gray-medium/10 p-1 rounded transition-colors flex-shrink-0">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="pr-6 mt-2">
          <p className="font-cairo font-medium text-sm leading-none text-right" style={{ fontSize: '16px', letterSpacing: '0px', lineHeight: '16px' }}>
            لوحة تحكم لادارة العبايات
          </p>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-3 py-6 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePath === item.path;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setActivePath(item.path)}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium
                transition-colors hover:bg-gray-medium/10
                ${isActive
                  ? "bg-[#FEF3C680] text-brand-black"
                  : "text-gray-dark"
                }
              `}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* User Profile Footer */}
      <div className="px-3 py-4 border-t border-gray-medium/20" style={{ marginTop: '0px', marginBottom: '200px' }}>
        <NavLink
          to="/profile"
          onClick={() => setActivePath("/profile")}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors flex-row ${activePath === "/profile"
              ? "bg-[#FEF3C680] text-brand-black"
              : "bg-gray-medium/5 hover:bg-gray-medium/10"
            }`}
        >
          <UserCircleIcon className="w-5 h-5 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-brand-black truncate">محمد أحمد</p>
            <p className="text-xs text-gray-dark truncate">مدير</p>
          </div>
        </NavLink>
      </div>
    </aside>
  );
}
