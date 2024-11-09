import React, { useState, useContext } from "react";
import { SuperheroContext } from "./SuperheroContext";

const AddSuperheroModal = ({ isModal }) => {
  const [nickname, setNickname] = useState("Nickname");
  const [realName, setRealName] = useState("Real Name");
  const [originDescription, setOriginDescription] =
    useState("Origin Description");
  const [superpowers, setSuperpowers] = useState("Superpowers");
  const [catchPhrase, setCatchPhrase] = useState("Catch Phrase");
  const [newImage, setNewImage] = useState(
    "https://ocdalecarnegie.com/wp-content/uploads/2021/02/qtq80-K1S0Ph-1024x683.jpeg"
  );

  const { onAddSuperhero } = useContext(SuperheroContext);

  const onSave = (newHero) => {
    onAddSuperhero(newHero);
    isModal(false);
  };

  const handleSave = () => {
    onSave({
      nickname: nickname,
      real_name: realName,
      origin_description: originDescription,
      superpowers: superpowers,
      catch_phrase: catchPhrase,
      images: [newImage],
    });
  };

  return (
    <div className="modal-overlay">
      <div
        className="modal-content"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="close-button" onClick={() => isModal(false)}>
          &times;
        </button>

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
          <strong>Add an image:</strong>
          <input
            type="text"
            value={newImage}
            onChange={(event) => setNewImage(event.target.value)}
            className="modal-input"
            placeholder="Link to the image you want to add"
          />
        </div>

        <button className="modal-button save-button" onClick={handleSave}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddSuperheroModal;
