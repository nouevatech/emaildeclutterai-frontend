import LoginImg from "../assests/Login.webp";
import ConnectImg from "../assests/Connect.webp";
import OverviewImg from "../assests/Overview.webp";
import arrow1 from "../assests/arrow1.svg";
import arrow2 from "../assests/arrow2.svg";

const steps = [
  {
    phase: "Step One:Login",
    subtext: "Kindly Login Using Your Google Account.",
    img: LoginImg,
  },
  {
    phase: "Step Two:Connect",
    subtext: "Kindly Connect Your Gmail Inbox.",
    img: ConnectImg,
  },
  {
    phase: "Step Three:Overview",
    subtext: "Unsubscribe, delete, and summarize in one click.",
    img: OverviewImg,
  },
];

const HowItworks = () => {
  return (
    <section className="px-8 lg:px-24">
      <hr className="border border-[#D7D7D7]" />
      <button>How It Works</button>
      <div>
        {steps.map(({ phase, subtext, img }, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div key={index}>
              <div
                className={`  ${index > 0 ? "-mt-28" : ""}`}
                style={{ zIndex: steps.length - index }}
              >
                <div
                  className={`flex items-center ${
                    isLeft ? " justify-start" : "justify-end"
                  }`}
                >
                  <div className="flex flex-col">
                    <h5>{phase}</h5>
                    <p>{subtext}</p>
                    <img
                      src={img}
                      alt=""
                      style={{ width: "400px", height: "auto" }}
                      className="w-[500px] h-auto"
                    />
                  </div>

                  {/* Arrow beside the first card */}
                  {index === 0 && (
                    <img
                      src={arrow1}
                      style={{
                        width: "100px",
                        height: "auto",
                        marginLeft: "20px",
                      }}
                      alt=""
                    />
                  )}
                </div>
              </div>

              {/* Arrow under the second card pointing to card 3 */}
              {index === 1 && (
                <div className="flex justify-center ">
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

export default HowItworks;
