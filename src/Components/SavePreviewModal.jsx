import "./Styles/savePreviewModal.css";

const SavePreviewModal = ({ image, onDownload, onCancel }) => {
  return (
    <div className="save-modal-backdrop" onClick={onCancel}>
      <div className="save-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Image Preview</h2>
        <img src={image} alt="Preview" className="preview-img" />
        <div className="modal-buttons">
          <button onClick={onDownload}>Download</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SavePreviewModal;
