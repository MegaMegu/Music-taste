import AlingBebang from "./Icons/Aling Bebang Template.png";
import MangRoy from "./Icons/Mang Roy Template.png";
import AteVee from "./Icons/Ate Vee Template.png";
import "./Styles/sampleSection.css";

const SampleSection = () => {
  return (
    <section className="sampleSection">
      <div className="sampleWrapper">
        <img class="sample" src={AlingBebang} />
        <img class="sample" src={MangRoy} />
        <img class="sample" src={AteVee} />
        <img class="sample" src={AlingBebang} />
        <img class="sample" src={MangRoy} />
        <img class="sample" src={AteVee} />
      </div>
    </section>
  );
};

export default SampleSection;
