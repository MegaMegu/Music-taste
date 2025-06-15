import "./Styles/design.css";

const Range = ({ range, setRange }) => {
  const options = [
    { label: "Last 4 weeks", value: "last4Weeks" },
    { label: "Last 6 months", value: "last6Months" },
    { label: "Last year", value: "lastYear" },
  ];

  return (
    <div className="choicesButtons">
      {options.map(({ label, value }) => (
        <button
          key={value}
          className={`choices ${range === value ? "active" : ""}`}
          onClick={() => setRange(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Range;
