import { Link } from "react-router";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io5";
import Logo from "./Logo";
import BlueVector from "../assests/BlueVector.svg";
import { IoPlayCircleOutline } from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className="bg-[#171717] px-24 py-10">
      <Logo variant="white" />
      <p className="max-w-[350px] font-medium tracking-widest text-white uppercase  text-2xl py-8">
        Unsubscribe, delete, and summarize Your Inbox in{" "}
        <span className="relative inline-block">
          {" "}
          one click{" "}
          <img
            src={BlueVector}
            alt=""
            className="absolute -bottom-1 left-0 w-full h-auto"
          />
        </span>
        .
      </p>
      <section className="flex justify-between items-end">
        <div className="flex gap-4">
          <Link
            to="/try-free"
            className="bg-white text-[#171717] px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Try For Free
          </Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            className="flex items-center gap-x-2 border bg-[#171717] text-white px-4 py-2 rounded-lg font-medium "
          >
            Watch Demo{" "}
            <span>
              <IoPlayCircleOutline size={26} />
            </span>
          </a>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-4 mb-4">
            <BsLinkedin fill="white" size={20} />
            <BsInstagram fill="white" size={20} />
            <IoLogoYoutube fill="white" size={20} />
          </div>
          <p className="text-white">All Rights Reserved. 2025 Copyright</p>
        </div>
      </section>
    </footer>
  );
};
