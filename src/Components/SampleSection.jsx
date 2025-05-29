import React from "react";
import sample from "./Icons/sample.png";
import "./Styles/sampleSection.css";

const SampleSection = () => {
  return (
    <section className="sampleSection">
      <div className="sampleWrapper">
        <img class="sample" src={sample} />
        <img class="sample" src={sample} />
        <img class="sample" src={sample} />
        <img class="sample" src={sample} />
        <img class="sample" src={sample} />
        <img class="sample" src={sample} />
      </div>
    </section>
  );
};

export default SampleSection;
