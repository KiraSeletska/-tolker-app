import "./RibbonBanner.css";

import whiteRibbon from "../assets/white-ribbon.png";
import blueRibbon from "../assets/blue-ribbon.png";

function RibbonBanner({ theme, text }) {
  const ribbon = theme === "dark" ? whiteRibbon : blueRibbon;

  return (
    <div className="ribbonBanner">
      <div className="ribbonLine">
        <span>{text}</span>
      </div>

      <img src={ribbon} alt="" className="ribbonBow" />
    </div>
  );
}

export default RibbonBanner;