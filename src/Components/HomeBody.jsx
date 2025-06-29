import "./Styles/homeBody.css";
import CustomSection from "./CustomSection";
import Customizer from "./Customizer";
import { useState } from "react";
import { useFetchArtists } from "../hooks/spotify-page/use-fetch-artists";

const HomeBody = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [range, setRange] = useState("lastYear"); // range now lives here
  const [
    isLoading,
    title,
    setTitle,
    longTermData,
    setLongTermData,
    mediumTermData,
    setMediumTermData,
    shortTermData,
    setShortTermData,
    errorMessage
  ] = useFetchArtists()

  return (
    <>
      <main className="homeBody">
        <section>
          <CustomSection
            active={activeIndex}
            title={title}
            range={range}
            isLoading={isLoading}
            longTermData={longTermData}
            setLongTermData={setLongTermData}
            mediumTermData={mediumTermData}
            setMediumTermData={setMediumTermData}
            shortTermData={shortTermData}
            setShortTermData={setShortTermData}
            errorMessage={errorMessage}
          />
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
