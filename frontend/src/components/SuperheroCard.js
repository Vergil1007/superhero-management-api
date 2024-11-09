import React, { useState } from "react";
import SuperheroModal from "./SuperheroModal";
import "../styles/SuperheroCard.css";

const SuperheroCard = ({ superhero }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="superhero-card" onClick={openModal}>
        <img
          src={superhero.images[0]}
          alt={superhero.nickname}
          className="superhero-image"
          onError={(event) => {
            event.target.src =
              "https://ocdalecarnegie.com/wp-content/uploads/2021/02/qtq80-K1S0Ph-1024x683.jpeg";
          }}
        />
        <div className="superhero-details">
          <h3>{superhero.nickname}</h3>
        </div>
      </div>

      {isModalOpen && (
        <SuperheroModal superhero={superhero} onClose={closeModal} />
      )}
    </div>
  );
};

export default SuperheroCard;
