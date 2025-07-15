import { LucideChevronDown } from "lucide-react";
import { GoDash, GoPlus } from "react-icons/go";
import { IoTrashOutline } from "react-icons/io5";

export default function DashboardSettings() {
  return (
    <section className="p-4 my-8 wrapper">
      <hr className="text-gray-300 " />
      <div className="flex gap-2 items-center pt-10 pb-5">
        <h2 className="text-xl">Settings</h2>
        <span className="text-gray-600 text-sm flex self-center">
          <LucideChevronDown size={16} />
        </span>
      </div>

      <div className="lg:flex grid lg:justify-between">
        <div className="lg:flex grid  gap-4 mb-4 lg:flex-wrap font-semibold">
          <button className="bg-black text-white px-5 py-3 rounded-full text-xs flex gap-1 items-center w-44">
            <GoPlus /> Add Account
          </button>
          <button className="bg-black text-white px-5 py-3 rounded-full text-xs flex gap-1 items-center w-44">
            <GoDash /> Remove Account
          </button>
          <button className="bg-black text-white px-5 py-3 rounded-full text-xs flex gap-1 items-center w-44">
            <IoTrashOutline /> Delete Account
          </button>
        </div>

        <div className="lg:pt-0 pt-10">
          <p className="text-sm">Set Auto Declutter</p>
          <div className="lg:flex grid gap-4 text-sm">
            <label className="flex items-center gap-1">
              <input type="radio" name="declutter" />
              Daily
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" name="declutter" />
              Weekly
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" name="declutter" />
              Never
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
