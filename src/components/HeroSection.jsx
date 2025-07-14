import { Link } from "react-router";
import HomeImage from "../assests/HomeImage.webp";
import { IoPlayCircleOutline } from "react-icons/io5";

export const HeroSection = () => {
  return (
    <main className="grid grid-col-1 gap-y-10 lg:gap-y-0 lg:grid-cols-2 gap-x-8 justify-between  items-center px-6 lg:px-24 py-10">
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl lg:text-5xl max-w-[500px] font-semibold leading-tight text-[#000000] mb-6">
          Email Decluttering For High-performing CEOs and founders
        </h1>
        <p className="text-[#666666] text-lg lg:text-xl max-w-[500px] mb-8">
          The AI-powered email decluttering app built for decision-makers.
          Unsubscribe, delete, and summarize in one click.
        </p>
        <div className="flex  gap-4">
          <Link
            to="/try-free"
            className="bg-black text-white px-4  lg:px-8 py-3 rounded-lg font-medium "
          >
            Try For Free
          </Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            className="flex items-center gap-x-2 border border-black text-black px-4 lg:px-8 py-2 rounded-lg font-medium "
          >
            Watch Demo{" "}
            <span>
              <IoPlayCircleOutline size={26} />
            </span>
          </a>
        </div>
      </div>
      <div className="flex justify-center items-end ">
        <div className="lg:w-[75%] w-[100%] h-auto">
          <img
            src={HomeImage}
            alt="Email decluttering dashboard interface showing smart suggestions and bulk actions"
            className="cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
    </main>
  );
};
