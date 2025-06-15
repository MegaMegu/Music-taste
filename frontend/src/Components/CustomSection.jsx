import AteVeeLastYear from "./Icons/AVly.png";
import AteVeeLast6Months from "./Icons/AVl6m.png";
import AteVeeLast4Weeks from "./Icons/AVl4w.png";
import AlingBebangLastYear from "./Icons/ABly.png";
import AlingBebangLast6Months from "./Icons/ABl6m.png";
import AlingBebangLast4Weeks from "./Icons/ABl4w.png";
import MangRoyLastYear from "./Icons/MRly.png";
import MangRoyLast6Months from "./Icons/MRl6m.png";
import MangRoyLast4Weeks from "./Icons/MRl4w.png";

import "./Styles/customSection.css";
import HideButton from "./HideButton";

const CustomSection = ({ active, title, range }) => {
  const textClasses = ["mangRoyText", "ateVeeText", "alingBebangText"];
  const selectedTextClass = textClasses[active] || "";

  const names = ["MangRoy", "AteVee", "AlingBebang"];
  const selectedName = names[active];

  const imageVariants = {
    MangRoy: {
      lastYear: MangRoyLastYear,
      last6Months: MangRoyLast6Months,
      last4Weeks: MangRoyLast4Weeks,
    },
    AteVee: {
      lastYear: AteVeeLastYear,
      last6Months: AteVeeLast6Months,
      last4Weeks: AteVeeLast4Weeks,
    },
    AlingBebang: {
      lastYear: AlingBebangLastYear,
      last6Months: AlingBebangLast6Months,
      last4Weeks: AlingBebangLast4Weeks,
    },
  };

  const backgroundImg = imageVariants[selectedName]?.[range];
  return (
    <>
      <div className="Menu">
        <h1 className={`userName ${selectedTextClass}`}>
          {title || "MusicTaste"}
        </h1>
        <img className="custom" src={backgroundImg} alt="background" />
      </div>
      <HideButton />
    </>
  );
};

export default CustomSection;
