import React, { useState, useContext } from "react";
import SuperheroCard from "./SuperheroCard";
import { SuperheroContext } from "./SuperheroContext";
import "../styles/SuperheroList.css";

const SuperheroList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { superheroes } = useContext(SuperheroContext);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(superheroes.length / itemsPerPage);

  const currentSuperheroes = superheroes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const checkCurrentPage = () => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
    return currentPage;
  };
  return (
    <div className="superhero-list-container">
      {totalPages && (
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Prev
          </button>
          <span>
            Page {checkCurrentPage()} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
      <div className="superhero-list">
        {currentSuperheroes.map((superhero) => (
          <SuperheroCard key={superhero.id} superhero={superhero} />
        ))}
      </div>
    </div>
  );
};

export default SuperheroList;
