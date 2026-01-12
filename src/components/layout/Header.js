import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import NotificationPanel from "./NotificationPanel";

export default function Header() {

  return (
    <>
      <header className="fixed top-0 left-0 right-[267px] bg-white border-b border-gray-medium/20 shadow-soft z-40">
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
            <NotificationPanel />
          </div>
        </div>
      </header>


    </>
  );
}
