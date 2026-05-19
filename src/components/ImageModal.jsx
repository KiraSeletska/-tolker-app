import "./ImageModal.css";

function ImageModal({ src, alt, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="imageModal" onClick={onClose}>
<button className="imageModalClose" onClick={onClose} />

      <img
        src={src}
        alt={alt}
        className="imageModalImg"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

export default ImageModal;