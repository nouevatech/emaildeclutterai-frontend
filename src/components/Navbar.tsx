import { Link } from "react-router";
import Logo from "./Logo";

export const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center py-4 bg-white  px-6 lg:px-24 border-b border-[#D4D4D4] ">
      <Logo />
      <div className="hidden lg:flex text-lg gap-x-8 items-center">
        <p>How It Works</p>
        <p>Watch Demo</p>
      </div>
      <div className="hidden lg:flex items-center text-lg gap-x-6 font-medium">
        <p>Sign In</p>
        <Link to="" className="bg-[#171717] text-white px-3 py-1 rounded-lg">
          Try For Free
        </Link>
      </div>
    </nav>
  );
};
