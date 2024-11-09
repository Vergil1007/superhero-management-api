import React, { useState } from "react";
import SuperheroList from "./SuperheroList";
import { SuperheroManagement } from "./SuperheroContext";
import AddSuperheroModal from "./AddSuperheroModal";
import "../styles/App.css";

const App = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <SuperheroManagement>
      {showAddForm && <AddSuperheroModal isModal={setShowAddForm} />}
      <div className="app">
        <div className="header">
          <h1>Superheroes</h1>
          <button
            className="add-superhero-button"
            onClick={() => setShowAddForm(true)}
          >
            Add superhero
          </button>
        </div>
        <SuperheroList />
      </div>
    </SuperheroManagement>
  );
};

export default App;
