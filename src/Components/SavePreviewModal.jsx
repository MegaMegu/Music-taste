import "./Styles/savePreviewModal.css";

const SavePreviewModal = ({ image, onDownload, onCancel }) => {
  const handleDownload = async () => {
    try {
      await fetch("/api/incrementDownload", {
        method: "POST",
      });
    } catch (err) {
      console.error("Failed to increment download count", err);
    }

    onDownload(); // continue with download logic
  };

  return (
    <div className="save-modal-backdrop" onClick={onCancel}>
      <div className="save-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Image Preview</h2>
        <img src={image} alt="Preview" className="preview-img" />
        <div className="modal-buttons">
          <button onClick={handleDownload}>Download</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SavePreviewModal;
