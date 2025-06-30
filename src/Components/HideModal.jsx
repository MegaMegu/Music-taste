import "./Styles/hideModal.css";

const HideModal = ({
  onClose,
  hiddenArtists,
  allArtists,
  toggleHideArtist,
  showAll,
}) => {
  // Reorder: hidden artists first
  const sortedArtists = [...allArtists].sort((a, b) => {
    const isHiddenA = hiddenArtists.includes(a);
    const isHiddenB = hiddenArtists.includes(b);
    if (isHiddenA && !isHiddenB) return -1;
    if (!isHiddenA && isHiddenB) return 1;
  });

  return (
    <div className="hide-modal-backdrop" onClick={onClose}>
      <div className="hide-modal" onClick={(e) => e.stopPropagation()}>
        <h2>
          {hiddenArtists.length} artists hidden.{" "}
          <span className="show-all" onClick={showAll}>
            Show All
          </span>
        </h2>
        <ul className="artist-list">
          {sortedArtists.map((artist, index) => (
            <li
              className={`artist-item ${
                hiddenArtists.includes(artist) ? "hidden" : ""
              }`}
              key={index}
              onClick={() => toggleHideArtist(artist)}
            >
              <span className="name">{artist}</span>
              <span className="icon" role="button">
                {hiddenArtists.includes(artist) ? "🙈" : "👁️"}
              </span>
            </li>
          ))}
        </ul>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default HideModal;
