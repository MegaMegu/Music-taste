import "./Styles/homeBody.css";
import CustomSection from "./CustomSection";
import Customizer from "./Customizer";
import { useState } from "react";

const HomeBody = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [title, setTitle] = useState("");
  const [range, setRange] = useState("lastYear"); // range now lives here

  return (
    <>
      <main className="homeBody">
        <section>
          <CustomSection active={activeIndex} title={title} range={range} />
        </section>
        <section className="customizer">
          <Customizer
            active={activeIndex}
            setActive={setActiveIndex}
            setTitle={setTitle}
            title={title}
            range={range}
            setRange={setRange}
          />
          <button className="savebtn">Save And Share</button>
        </section>
      </main>
    </>
  );
};

export default HomeBody;
