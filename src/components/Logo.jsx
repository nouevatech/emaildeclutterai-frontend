import logo from "../assests/logo.svg";

const Logo = ({ variant = "default" }) => {
  const colorVariants = {
    default: "text-black",
    white: "text-white",
  };

  const svgColorVariants = {
    default: "brightness-0", // Makes SVG black
    white: "brightness-0 invert", // Makes SVG white
  };

  return (
    <div className="flex items-end ">
      <img
        src={logo}
        style={{ width: "30px", height: "auto" }}
        alt="EmaildeclutterAi Logo"
        className={svgColorVariants[variant]}
      />
      <p className={`text-base font-medium ${colorVariants[variant]}`}>
        EmaildeclutterAi
      </p>
    </div>
  );
};

export default Logo;
