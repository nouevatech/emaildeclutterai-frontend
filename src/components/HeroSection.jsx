import { Link } from "react-router";
import HomeImage from "../assests/HomeImage.webp";
import { IoPlayCircleOutline } from "react-icons/io5";
import { HashLink } from "react-router-hash-link";

export const HeroSection = () => {
  return (
    <main className="px-6 lg:px-24 lg:py-10 pt-0 pb-4 wrapper-hero">
      <div className="grid grid-col-1 lg:grid-cols-2 justify-between items-center">
        <div className="pt-20">
          <div className="w-full">
            <h1 className="text-3xl lg:text-5xl font-semibold leading-tight mb-2">
              Email Decluttering For High-performing CEOs and founders
            </h1>
            <p className="text-gray-500 lg:text-lg mb-8">
              The AI-powered email decluttering app built for decision-makers.
              Unsubscribe, delete, and summarize in one click.
            </p>
          </div>
          <div className="lg:flex grid gap-4">
            <Link
              to="/login"
              className="bg-black text-white lg:w-40 w-60 text-center py-2 rounded-lg"
            >
              Try For Free
            </Link>
            <HashLink
              smooth
              to="/#demo"
              rel="noopener noreferrer"
              className=" border border-white hover:border hover:border-black text-black lg:w-44 w-60 text-center py-2 rounded-lg flex items-center justify-center"
            >
              Watch Demo
              <span>
                <IoPlayCircleOutline size={26} />
              </span>
            </HashLink>
          </div>
        </div>

        {/* hero image */}
        <div className="lg:w-3/4 h-auto lg:ml-auto lg:pt-20 pt-4 pb-10">
          <img
            src={HomeImage}
            alt="Email decluttering dashboard interface showing smart suggestions and bulk actions"
            className="cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out w-full h-full"
          />
        </div>
      </div>
    </main>
  );
};
