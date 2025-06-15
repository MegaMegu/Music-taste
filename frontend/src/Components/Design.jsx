import "./Styles/design.css";

const Design = ({ active, setActive }) => {
  const options = ["Mang Roy", "Ate Vee", "Aling Bebang"];

  return (
    <div className="choicesButtons">
      {options.map((name, index) => (
        <button
          key={index}
          className={`choices ${active === index ? "active" : ""}`}
          onClick={() => setActive(index)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default Design;
