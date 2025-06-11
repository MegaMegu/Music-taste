import React from "react";
import sample from "./Icons/sample.png";
import "./Styles/customSection.css";
import HideButton from "./HideButton";

const CustomSection = () => {
  return (
    <>
      <img className="custom" src={sample} alt="background" />
      <HideButton />
    </>
  );
};

export default CustomSection;
