import { useEffect, useRef, useState } from "react";
import AlingBebang from "./Icons/Aling Bebang Template.png";
import MangRoy from "./Icons/Mang Roy Template.png";
import AteVee from "./Icons/Ate Vee Template.png";
import "./Styles/sampleSection.css";

const SampleSection = () => {
  const wrapperRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const images = wrapperRef.current.querySelectorAll("img");

    Promise.all(
      Array.from(images).map(
        (img) =>
          new Promise((resolve) => {
            if (img.complete) return resolve();
            img.onload = img.onerror = resolve;
          })
      )
    ).then(() => setIsLoaded(true));
  }, []);

  return (
    <section className="sampleSection">
      <div
        ref={wrapperRef}
        className={`sampleWrapper ${isLoaded ? "animate-slide" : ""}`}
      >
        <img className="sample" src={AlingBebang} />
        <img className="sample" src={MangRoy} />
        <img className="sample" src={AteVee} />
        <img className="sample" src={AlingBebang} />
        <img className="sample" src={MangRoy} />
        <img className="sample" src={AteVee} />
      </div>
    </section>
  );
};

export default SampleSection;
