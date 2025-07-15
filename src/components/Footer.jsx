import { Link } from "react-router";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io5";
import Logo from "./Logo";
import BlueVector from "../assests/BlueVector.svg";
import { IoPlayCircleOutline } from "react-icons/io5";
import logowhite from "/logowhite.png";
import { HashLink } from "react-router-hash-link";

export const Footer = () => {
  return (
    <footer className="bg-[#171717] px-6 lg:px-24 pt-20 pb-10">
      <span>
        <Logo variant="white" />
      </span>
      <p className="max-w-[350px] font-medium tracking-tight text-white uppercase text-base lg:text-2xl py-8">
        Unsubscribe, delete, and summarize Your Inbox in{" "}
        <span className="relative inline-block">
          one click{" "}
          <img
            src={BlueVector}
            alt=""
            className="absolute -bottom-1 left-0 w-full h-auto"
          />
        </span>
      </p>
      <section className="flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between lg:items-end">
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="bg-white lg:w-40 w-32 text-center py-2 rounded-xl lg:text-sm text-xs"
          >
            Try For Free
          </Link>
          <HashLink
            smooth
            to="/#demo"
            rel="noopener noreferrer"
            className=" border border-white hover:border hover:border-black text-white lg:w-44 w-32 text-center py-1 rounded-xl flex items-center justify-center lg:text-sm text-xs"
          >
            Watch Demo
            <span>
              <IoPlayCircleOutline size={26} />
            </span>
          </HashLink>
        </div>

        <div className="flex flex-col pt:0 pt-10 ">
          <div className="flex items-center gap-3 mb-4">
            <BsLinkedin fill="white" size={18} />
            <BsInstagram fill="white" size={18} />
            <IoLogoYoutube fill="white" size={18} />
          </div>
          <p className="text-gray-300 text-xs opacity-60">
            All Rights Reserved. 2025 Copyright
          </p>
        </div>
      </section>
    </footer>
  );
};
