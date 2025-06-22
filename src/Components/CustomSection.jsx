import AteVeeLastYear from "./Icons/AVly.png";
import AteVeeLast6Months from "./Icons/AVl6m.png";
import AteVeeLast4Weeks from "./Icons/AVl4w.png";
import AlingBebangLastYear from "./Icons/ABly.png";
import AlingBebangLast6Months from "./Icons/ABl6m.png";
import AlingBebangLast4Weeks from "./Icons/ABl4w.png";
import MangRoyLastYear from "./Icons/MRly.png";
import MangRoyLast6Months from "./Icons/MRl6m.png";
import MangRoyLast4Weeks from "./Icons/MRl4w.png";

import "./Styles/customSection.css";
import HideButton from "./HideButton";
import { useEffect } from "react";

const CustomSection = ({
  active,
  title,
  range,
  isLoading,
  longTermData,
  setLongTermData,
  mediumTermData,
  setMediumTermData,
  shortTermData,
  setShortTermData,
  errorMessage,
}) => {
  useEffect(() => {
    switch (range) {
      case "lastYear":
        console.log(
          longTermData.map((data) => ({
            name: data.name,
            imageUrl: data.images.at(0).url,
          }))
        );
        break;
      case "last6Months":
        console.log(
          mediumTermData.map((data) => ({
            name: data.name,
            imageUrl: data.images.at(0).url,
          }))
        );
        break;
      case "last4Weeks":
        console.log(
          shortTermData.map((data) => ({
            name: data.name,
            imageUrl: data.images.at(0).url,
          }))
        );
        break;
      default:
        break;
    }
  }, [range, longTermData, mediumTermData, shortTermData]);

  const textClasses = ["mangRoyText", "ateVeeText", "alingBebangText"];
  const selectedTextClass = textClasses[active] || "";

  const names = ["MangRoy", "AteVee", "AlingBebang"];
  const selectedName = names[active];

  const imageVariants = {
    MangRoy: {
      lastYear: MangRoyLastYear,
      last6Months: MangRoyLast6Months,
      last4Weeks: MangRoyLast4Weeks,
    },
    AteVee: {
      lastYear: AteVeeLastYear,
      last6Months: AteVeeLast6Months,
      last4Weeks: AteVeeLast4Weeks,
    },
    AlingBebang: {
      lastYear: AlingBebangLastYear,
      last6Months: AlingBebangLast6Months,
      last4Weeks: AlingBebangLast4Weeks,
    },
  };

  const getTopArtists = () => {
    let data = [];
    let limit = 8;

    switch (range) {
      case "lastYear":
        data = longTermData;
        limit = 24;
        break;
      case "last6Months":
        data = mediumTermData;
        limit = 16;
        break;
      case "last4Weeks":
        data = shortTermData;
        limit = 8;
        break;
      default:
        break;
    }

    return data && data.length >= 1
      ? data.slice(0, limit).map((artist) => artist.name)
      : Array(limit).fill("Loading...");
  };

  const topArtists = getTopArtists();
  const backgroundImg = imageVariants[selectedName]?.[range];

  return (
    <>
      <div className="Menu">
        <h1 className={`userName ${selectedTextClass}`}>
          {title || "MusicTaste"}
        </h1>
        <div className="tc">
          <h2 className="Top1">{topArtists[0]}</h2>
          <h2 className="Top2">{topArtists[3]}</h2>
          <h2 className="Top3">{topArtists[6]}</h2>
          <h2 className="Top4">Clairo</h2>
          <h2 className="Top5">Phoebe Bridgers</h2>
          <h2 className="Top6">Kanye West</h2>
          <h2 className="Top7">Maroon 5</h2>
          <h2 className="Top8">Twice</h2>
        </div>
        <div className="tc2">
          <h2 className="Top1">{topArtists[1]}</h2>
          <h2 className="Top2">{topArtists[4]}</h2>
          <h2 className="Top3">{topArtists[7]}</h2>
          <h2 className="Top4">NewJeans</h2>
          <h2 className="Top5">Artic Monkeys</h2>
          <h2 className="Top6">Niall Horan</h2>
          <h2 className="Top7">John Mayer</h2>
          <h2 className="Top8">Mitski</h2>
        </div>
        <div className="tc3">
          <h2 className="Top1">{topArtists[2]}</h2>
          <h2 className="Top2">{topArtists[5]}</h2>
          <h2 className="Top3">{topArtists[8]}</h2>
          <h2 className="Top4">Sza</h2>
          <h2 className="Top5">Post Malone</h2>
          <h2 className="Top6">Frank Ocean</h2>
          <h2 className="Top7">Plaiboi Carti</h2>
          <h2 className="Top8">Travis Scott</h2>
        </div>
        <img className="custom" src={backgroundImg} alt="background" />
      </div>
      <HideButton />
    </>
  );
};

export default CustomSection;
