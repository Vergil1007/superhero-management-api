import React, { useState } from "react";
import "../styles/EditableSuperheroModal.css";

const EditableSuperheroModal = ({ superhero, onClose, onSave }) => {
  const [nickname, setNickname] = useState(superhero.nickname);
  const [realName, setRealName] = useState(superhero.real_name);
  const [originDescription, setOriginDescription] = useState(
    superhero.origin_description
  );
  const [superpowers, setSuperpowers] = useState(superhero.superpowers);
  const [catchPhrase, setCatchPhrase] = useState(superhero.catch_phrase);
  const [images, setImages] = useState(superhero.images);
  const [newImage, setNewImage] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleSave = () => {
    const updatedImages = newImage ? [...images, newImage] : images;
    setImages(updatedImages);
    onSave(superhero.id, {
      ...superhero,
      nickname: nickname,
      real_name: realName,
      origin_description: originDescription,
      superpowers: superpowers,
      catch_phrase: catchPhrase,
      images: updatedImages,
    });
  };

  const handleImageDelete = () => {
    setImages((prevImages) => {
      return prevImages.filter((image, index) => {
        return index !== currentImageIndex;
      });
    });
    currentImageIndex !== 0 && prevImage();
  };

  return (
    <div className="modal-overlay">
      <div
        className="modal-content"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="carousel margin-top">
          {images.length !== 1 && (
            <button className="carousel-button" onClick={prevImage}>
              {"<"}
            </button>
          )}

          <div className="image-container">
            <img
              src={images[currentImageIndex]}
              alt={`${superhero.nickname} - ${currentImageIndex + 1}`}
              className="modal-image edit-image"
              onError={(event) => {
                event.target.src =
                  "https://ocdalecarnegie.com/wp-content/uploads/2021/02/qtq80-K1S0Ph-1024x683.jpeg";
              }}
            />
            <button
              className="delete-image-button"
              onClick={() => {
                images.length === 1
                  ? alert("You can't delete the last image")
                  : handleImageDelete();
              }}
            >
              Delete
            </button>
          </div>

          {images.length !== 1 && (
            <button className="carousel-button" onClick={nextImage}>
              {">"}
            </button>
          )}
        </div>
        <div className="form-row">
          <strong>Nickname:</strong>
          <input
            type="text"
            value={nickname}
            onChange={(event) => setNickname(event.target.value)}
            className="modal-input"
            placeholder="Nickname"
            maxLength="50"
          />
        </div>
        <div className="form-row">
          <strong>Real Name:</strong>
          <input
            type="text"
            value={realName}
            onChange={(event) => setRealName(event.target.value)}
            className="modal-input"
            placeholder="Real Name"
            maxLength="100"
          />
        </div>
        <div className="form-row">
          <strong>Origin Description:</strong>
          <textarea
            value={originDescription}
            onChange={(event) => setOriginDescription(event.target.value)}
            className="modal-textarea"
            placeholder="Description"
            rows="10"
            maxLength="500"
          />
        </div>

        <div className="form-row">
          <strong>Superpowers:</strong>
          <textarea
            value={superpowers}
            onChange={(event) => setSuperpowers(event.target.value)}
            className="modal-textarea"
            placeholder="Superpowers"
            maxLength="500"
          />
        </div>

        <div className="form-row">
          <strong>Catch Phrase:</strong>
          <input
            type="text"
            value={catchPhrase}
            onChange={(event) => setCatchPhrase(event.target.value)}
            className="modal-input"
            placeholder="Catchphrase"
            maxLength="500"
          />
        </div>

        <div className="form-row">
          <strong>Add a new image:</strong>
          <input
            type="text"
            value={newImage}
            onChange={(event) => setNewImage(event.target.value)}
            className="modal-input"
            placeholder="Link to the image you want to add"
          />
        </div>

        <button className="modal-button save-button" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditableSuperheroModal;
