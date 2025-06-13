import "./Styles/customizer.css";
import Range from "./Range";
import Design from "./Design";

const Customizer = () => {
  return (
    <span className="czmizer">
      <h1>Customize</h1>
      <h2>Include top artist from</h2>
      <Range />
      <h2>Choose a style</h2>
      <Design />
      <h2>Name your Karinderya</h2>
      <input type="text" placeholder="MusicTaste" />
    </span>
  );
};

export default Customizer;
