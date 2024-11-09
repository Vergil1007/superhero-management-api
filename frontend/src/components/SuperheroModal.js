import React, { useContext, useState } from "react";
import { SuperheroContext } from "./SuperheroContext";
import EditableSuperheroModal from "./EditableSuperheroModal";
import "../styles/SuperheroModal.css";

const SuperheroModal = ({ superhero, onClose }) => {
  const { onDeleteSuperhero, onUpdateSuperhero } = useContext(SuperheroContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === superhero.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? superhero.images.length - 1 : prevIndex - 1
    );
  };

  const handleSave = (id, updatedSuperhero) => {
    onUpdateSuperhero(id, updatedSuperhero);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <EditableSuperheroModal
        superhero={superhero}
        onClose={() => setIsEditing(false)}
        onSave={handleSave}
      />
    );
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{superhero.nickname}</h2>
        <div className="carousel">
          {superhero.images.length !== 1 && (
            <button className="carousel-button" onClick={prevImage}>
              {"<"}
            </button>
          )}
          <img
            src={superhero.images[currentImageIndex]}
            alt={`${superhero.nickname} - ${currentImageIndex + 1}`}
            className="modal-image"
            onError={(event) => {
              event.target.src =
                "https://ocdalecarnegie.com/wp-content/uploads/2021/02/qtq80-K1S0Ph-1024x683.jpeg";
            }}
          />
          {superhero.images.length !== 1 && (
            <button className="carousel-button" onClick={nextImage}>
              {">"}
            </button>
          )}
        </div>
        <p>
          <strong>Real Name:</strong> {superhero.real_name}
        </p>
        <p>
          <strong>Origin Description:</strong> {superhero.origin_description}
        </p>
        <p>
          <strong>Superpowers:</strong> {superhero.superpowers}
        </p>
        <p>
          <strong>Catch Phrase:</strong> {superhero.catch_phrase}
        </p>
        <div className="modal-buttons">
          <button
            className="modal-button edit-button"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
          <button
            className="modal-button delete-button"
            onClick={() => {
              onDeleteSuperhero(superhero.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuperheroModal;
