import "./Styles/hideButton.css";

const HideButton = ({ onClick, hiddenCount }) => {
  return (
    <div className="hide" onClick={onClick}>
      <div className="customArtist">Customize Artist</div>
      <div className="hidelist">{hiddenCount} Hidden</div>
    </div>
  );
};

export default HideButton;
