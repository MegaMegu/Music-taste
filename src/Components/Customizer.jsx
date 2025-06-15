import "./Styles/customizer.css";
import Range from "./Range";
import Design from "./Design";

const Customizer = ({
  active,
  setActive,
  title,
  setTitle,
  range,
  setRange,
}) => {
  return (
    <span className="czmizer">
      <h1>Customize</h1>
      <h2>Include top artist from</h2>
      <Range range={range} setRange={setRange} />
      <h2>Choose a style</h2>
      <Design active={active} setActive={setActive} />
      <h2>Name your Karinderya</h2>
      <input
        maxLength={30}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="MusicTaste"
      />
    </span>
  );
};

export default Customizer;
