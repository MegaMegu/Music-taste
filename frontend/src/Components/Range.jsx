import { useState } from "react";
import "./Styles/design.css";

const Range = () => {
  const [active, setActive] = useState(2); // Default to "Last year"
  const options = ["Last 4 weeks", "Last 6 months", "Last year"];

  return (
    <div className="choicesButtons">
      {options.map((label, index) => (
        <button
          key={index}
          className={`choices ${active === index ? "active" : ""}`}
          onClick={() => setActive(index)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Range;
