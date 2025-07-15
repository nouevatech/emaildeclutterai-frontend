import LoginImg from "../assests/Login.webp";
import ConnectImg from "../assests/Connect.webp";
import OverviewImg from "../assests/Overview.webp";
import arrow1 from "../assests/arrow1.svg";
import arrow2 from "../assests/arrow2.svg";
import howitworks from "../assests/howitworks.svg";

const steps = [
  {
    phase: "Step One: Login",
    subtext: "Kindly Login Using Your Google Account.",
    img: LoginImg,
  },
  {
    phase: "Step Two: Connect",
    subtext: "Kindly Connect Your Gmail Inbox.",
    img: ConnectImg,
  },
  {
    phase: "Step Three: Overview",
    subtext: "Unsubscribe, delete, and summarize in one click.",
    img: OverviewImg,
  },
];

export const HowItWorks = () => {
  return (
    <section id="how" className="px-8 lg:px-24 lg:py-10 wrapper-hero">
      <hr className="border border-[#D7D7D7]" />
      <button className="border border-gray-300 rounded-lg font-bold  flex items-center gap-x-2 justify-center w-44 py-2 mt-8 shadow-md">
        <span>
          <img src={howitworks} alt="how it works" />
        </span>
        How It Works
      </button>
      <div>
        {steps.map(({ phase, subtext, img }, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div key={index} className="">
              <div
                className={`  ${index > 0 ? "-mt-28" : ""} mb-20`}
                style={{ zIndex: steps.length - index }}
              >
                <div
                  className={` flex items-center ${
                    isLeft ? " justify-start" : "justify-end"
                  }`}
                >
                  <div className="flex flex-col mt-20 lg:mt-10">
                    <h3 className="font-bold text-lg mb-2">{phase}</h3>
                    <p className="text-[#949494] mb-8 text-sm">{subtext}</p>
                    <img
                      src={img}
                      alt=""
                      style={{ width: "400px", height: "auto" }}
                      className="w-full h-auto cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                  </div>

                  {/* Arrow beside the first card */}
                  {index === 0 && (
                    <div className="hidden lg:flex justify-center mt-90">
                      <img
                        src={arrow1}
                        style={{
                          width: "100px",
                          height: "auto",
                          marginLeft: "160px",
                        }}
                        alt=""
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Arrow under the second card pointing to card 3 */}
              {index === 1 && (
                <div className="hidden lg:flex justify-center ">
                  <img
                    src={arrow2}
                    style={{
                      width: "100px",
                      height: "auto",
                    }}
                    alt=""
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
