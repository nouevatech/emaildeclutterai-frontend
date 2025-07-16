import { IoPlayCircleOutline } from "react-icons/io5";
import Logo from "./Logo";
import { Link } from "react-router";
export const Demo = () => {
  return (
    <section id="demo" className="px-8 lg:px-24">
      <hr className=" border border-[#D7D7D7] text" />
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-y-0 justify-between items-start py-8">
        <p className="text-[#666666] text-sm lg:text-base max-w-[500px] lg:pt-0 pt-10">
          The AI-powered email decluttering app built for decision-makers.
          Unsubscribe, delete, and summarize in one click.
        </p>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="/demo"
          className="flex items-center gap-x-2 text-white  bg-[#171717] w-44 justify-center py-2 rounded-lg font-semibold text-sm "
        >
          Watch Demo
          <span>
            <IoPlayCircleOutline size={26} />
          </span>
        </Link>
      </div>
      <Logo variant="white" />
    </section>
  );
};
