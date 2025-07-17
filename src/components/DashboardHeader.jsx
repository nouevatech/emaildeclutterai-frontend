import { LucideChevronDown } from "lucide-react";
import { IoMdSettings } from "react-icons/io";

export default function DashboardHeader({ user, onLogout }) {
  const defaultUser = { name: "Roseline", picture: "" };
  const safeUser = user || defaultUser;

  const initial = safeUser.name?.[0]?.toUpperCase() || "?";

  return (
    <div className="flex items-center gap-4">
      <button className="settings-icon">
        <IoMdSettings />
      </button>

      <div className="bg-teal-100 border-transparent rounded-full px-2 pr-4 py-1">
        <div className="flex items-center">
          {safeUser.picture ? (
            <img
              src={safeUser.picture}
              alt={safeUser.name}
              className="w-8 h-8 rounded-full"
            />
          ) : (
            <span className="bg-green-900 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
              {initial}
            </span>
          )}

          <div className="flex pl-3">
            <span className="font-semibold">{safeUser.name}</span>
            <span className="text-gray-600 pl-2 text-xs flex self-center">
              <LucideChevronDown size={16} />
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={onLogout}
        className="text-xs font-semibold text-gray-700 hover:text-red-600"
      >
        Logout
      </button>
    </div>
  );
}
