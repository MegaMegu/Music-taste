import { useEffect, useState } from "react";
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
import HideModal from "./HideModal";

const CustomSection = ({
  active,
  exportRef,
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
  const [showModal, setShowModal] = useState(false);
  const [hiddenArtists, setHiddenArtists] = useState([]);

  const toggleHideArtist = (name) => {
    setHiddenArtists((prev) =>
      prev.includes(name) ? prev.filter((a) => a !== name) : [...prev, name]
    );
  };

  useEffect(() => {
    console.log("longTermData length:", longTermData?.length || 0);
    console.log("mediumTermData length:", mediumTermData?.length || 0);
    console.log("shortTermData length:", shortTermData?.length || 0);
  }, [longTermData, mediumTermData, shortTermData]);

  const showAll = () => {
    setHiddenArtists([]);
  };

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

  const getCurrentData = () => {
    switch (range) {
      case "lastYear":
        return longTermData;
      case "last6Months":
        return mediumTermData;
      case "last4Weeks":
        return shortTermData;
      default:
        return [];
    }
  };

  const getTopArtists = () => {
    const data = getCurrentData();
    const limit =
      range === "lastYear"
        ? 50
        : range === "last6Months"
        ? 43
        : range === "last4Weeks"
        ? 24
        : 0;

    return data
      .filter((artist) => !hiddenArtists.includes(artist.name))
      .slice(0, limit);
  };

  const topArtists = getTopArtists();
  const allArtistNames = getCurrentData().map((a) => a.name);
  const backgroundImg = imageVariants[selectedName]?.[range];

  return (
    <>
      <div
        className={`Menu menu ${selectedName.toLowerCase()}`}
        ref={exportRef}
      >
        {/* Profile Images */}
        <div className="top-artist-images">
          {range === "lastYear" &&
            topArtists
              .slice(0, 3)
              .map((artist, i) => (
                <img
                  key={i}
                  className="top-artist-img"
                  src={artist.images?.[0]?.url || "/fallback.png"}
                  crossOrigin="anonymous"
                  alt={artist.name}
                />
              ))}
          {range === "last6Months" &&
            topArtists
              .slice(0, 2)
              .map((artist, i) => (
                <img
                  key={i}
                  className="top-artist-img"
                  src={artist.images?.[0]?.url || "/fallback.png"}
                  crossOrigin="anonymous"
                  alt={artist.name}
                />
              ))}
          {range === "last4Weeks" && topArtists[0] && (
            <img
              className="top-artist-img"
              src={topArtists[0].images?.[0]?.url || "/fallback.png"}
              crossOrigin="anonymous"
              alt={topArtists[0].name}
            />
          )}
        </div>

        <h1 className={`userName ${selectedTextClass}`}>
          {title || "MusicTaste"}
        </h1>

        {range === "lastYear" && (
          <div className="lastYear">
            {[0, 1, 2].map((colIndex) => (
              <div className={`tc${colIndex + 1}`} key={colIndex}>
                {[...Array(8)].map((_, rowIndex) => {
                  const artistIndex = colIndex + rowIndex * 3;
                  return (
                    <h2 className={`Top${rowIndex + 1}`} key={artistIndex}>
                      {topArtists[artistIndex]?.name || ""}
                    </h2>
                  );
                })}
              </div>
            ))}
          </div>
        )}

        {range === "last6Months" && (
          <div className="last6months">
            {[0, 1].map((colIndex) => (
              <div className={`tc${colIndex + 1}`} key={colIndex}>
                {[...Array(8)].map((_, rowIndex) => {
                  const artistIndex = colIndex + rowIndex * 2;
                  return (
                    <h2 className={`Top${rowIndex + 1}`} key={artistIndex}>
                      {topArtists[artistIndex]?.name || ""}
                    </h2>
                  );
                })}
              </div>
            ))}
          </div>
        )}

        {range === "last4Weeks" && (
          <div className="last4weeks">
            <div className="tc">
              {[...Array(8)].map((_, index) => (
                <h2 className={`Top${index + 1}`} key={index}>
                  {topArtists[index]?.name || ""}
                </h2>
              ))}
            </div>
          </div>
        )}

        <img className="custom" src={backgroundImg} alt="background" />
      </div>

      <HideButton
        onClick={() => setShowModal(true)}
        hiddenCount={hiddenArtists.length}
      />

      {showModal && (
        <HideModal
          onClose={() => setShowModal(false)}
          hiddenArtists={hiddenArtists}
          allArtists={allArtistNames}
          toggleHideArtist={toggleHideArtist}
          showAll={showAll}
        />
      )}
    </>
  );
};

export default CustomSection;
