import { IoPlayCircleOutline } from "react-icons/io5";
import Logo from "./Logo";
export const Demo = () => {
  return (
    <section className="px-8 lg:px-24">
      <hr className=" border border-[#D7D7D7] text" />
      <div className="flex  justify-between items-start py-8">
        <p className="text-[#666666] text-base lg:text-lg max-w-[500px] ">
          The AI-powered email decluttering app built for decision-makers.
          Unsubscribe, delete, and summarize in one click.
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="#"
          className="flex items-center gap-x-2 text-white  bg-[#171717] px-4 py-2 rounded-lg font-medium "
        >
          Watch Demo{" "}
          <span>
            <IoPlayCircleOutline size={26} />
          </span>
        </a>
      </div>
      <Logo variant="white" />
    </section>
  );
};
