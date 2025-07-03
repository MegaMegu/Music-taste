import "./Styles/homeBody.css";
import { useState, useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import CustomSection from "./CustomSection";
import Customizer from "./Customizer";
import SavePreviewModal from "./SavePreviewModal";
import { useFetchArtists } from "../hooks/spotify-page/use-fetch-artists";

const HomeBody = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [range, setRange] = useState("lastYear");
  const [downloadCount, setDownloadCount] = useState(0);

  useEffect(() => {
    fetch("/api/incrementDownload")
      .then((res) => res.json())
      .then((data) => setDownloadCount(data.count));
  }, []);

  const exportRef = useRef();
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

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
    errorMessage,
  ] = useFetchArtists();

  const handleSave = async () => {
    if (!exportRef.current) return;

    // Wait for images to load
    const images = exportRef.current.querySelectorAll("img");
    await Promise.all(
      Array.from(images).map(
        (img) =>
          new Promise((resolve) => {
            if (img.complete) return resolve();
            img.onload = img.onerror = resolve;
          })
      )
    );

    const canvas = await html2canvas(exportRef.current, { useCORS: true });
    const dataUrl = canvas.toDataURL("image/png");

    setPreviewImage(dataUrl);
    setShowSaveModal(true); // ✅ show modal now
  };

  return (
    <>
      <main className="homeBody">
        <section>
          <CustomSection
            exportRef={exportRef}
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
          <button className="savebtn" onClick={handleSave}>
            Save And Share
          </button>
          <h1 className=" metrics">
            {downloadCount} people created their karinderya via MusicTaste
          </h1>
        </section>
      </main>

      {showSaveModal && previewImage && (
        <SavePreviewModal
          image={previewImage}
          onDownload={async () => {
            try {
              // 🔁 Increment Redis counter
              const res = await fetch("/api/incrementDownload", {
                method: "POST",
              });

              if (!res.ok) throw new Error("Failed to increment");

              const data = await res.json();
              setDownloadCount(data.count); // ✅ Update displayed count
            } catch (err) {
              console.error("Failed to increment download count:", err);
            }

            // 💾 Trigger download
            const link = document.createElement("a");
            link.download = "music-taste.png";
            link.href = previewImage;
            link.click();

            setShowSaveModal(false); // ✅ Close modal
          }}
          onCancel={() => setShowSaveModal(false)}
        />
      )}
    </>
  );
};

export default HomeBody;
