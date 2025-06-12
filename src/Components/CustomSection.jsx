import AteVee from "./Icons/Ate Vee Template.png";
import "./Styles/customSection.css";
import HideButton from "./HideButton";

const CustomSection = () => {
  return (
    <>
      <img className="custom" src={AteVee} alt="background" />
      <HideButton />
    </>
  );
};

export default CustomSection;
