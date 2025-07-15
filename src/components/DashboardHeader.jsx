import { LucideChevronDown } from "lucide-react";
import { IoMdSettings } from "react-icons/io";

import logoblack from "/logoblack.png";

export default function DashboardHeader() {
  return (
    <header className="flex justify-end items-center p-4">
      <div className="flex items-center gap-4">
        <button className="settings-icon">
          <IoMdSettings />
        </button>
        <div className="bg-teal-100 border-transparent rounded-full px-2 pr-4 py-1">
          <div className="flex items-center">
            <span className="bg-green-900 border-transparent rounded-full ml-1 px-2 py-0.5 text-white">
              R
            </span>
            <div className="flex pl-3">
              <span className="font-semibold">Roseline</span>
              <span className="text-gray-600 pl-2 text-xs flex self-center">
                <LucideChevronDown size={16} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
