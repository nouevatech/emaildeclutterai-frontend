import Howitworks from "../assests/howitworks.svg";
import Step1Img from "../assests/stepone.svg";
import Step2Img from "../assests/steptwo.svg";
import Step3Img from "../assests/stepthree.svg";

export const HowItWorks = () => {
  return (
    <section className="px-8 lg:px-24 py-10">
      <hr className="border border-[#D7D7D7]" />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="#"
        className="flex items-center gap-x-1 border border-[#949494] text-black px-8 py-2 rounded-lg font-medium mt-4 w-56"
      >
        <span>
          <img src={Howitworks} alt="How It Works" />
        </span>
        How it works
      </a>
      <div className="mt-2 flex lg:flex-row justify-between items-center gap-x-8">
        {/* login */}
        <div className="mt-2">
          <h3 className="text-lg text-black font-semibold mb-1">
            Step One: Login
          </h3>
          <p className="mb-4 text-sm text-[#949494]">
            Kindly Login Using Your Google Account.
          </p>
          <img
            src={Step1Img}
            alt="Login with Google"
            className="shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
        {/* connect to google */}
        <div className="mt-2">
          <h3 className="text-lg text-black font-semibold mb-1">
            Step Two: Connect to Google
          </h3>
          <p className="mb-4 text-sm text-[#949494]">
            Please allow access to your Google Account.
          </p>
          <img
            src={Step2Img}
            alt="Connect to Google"
            className=" shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
        {/* overview */}
        <div className="mt-2">
          <h3 className="text-lg text-black font-semibold mb-1">
            Step Three: Overview
          </h3>
          <p className="mb-4 text-sm text-[#949494]">
            Here's a quick overview of what to expect.
          </p>
          <img
            src={Step3Img}
            alt="Overview"
            className="shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};
