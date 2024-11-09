import React, { useState, useEffect, createContext } from "react";

const SuperheroContext = createContext();

const SuperheroManagement = ({ children }) => {
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    fetch("/api/superheroes")
      .then((responce) => responce.json())
      .then((data) => setSuperheroes(data))
      .catch((error) => console.error("Error: ", error));
  }, []);

  const onAddSuperhero = (hero) => {
    fetch("/api/superheroes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(hero),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then(() => {
            throw new Error();
          });
        }
        return response.json();
      })
      .then((newHero) =>
        setSuperheroes((prevHeroes) => [...prevHeroes, newHero])
      )
      .catch(() => {
        alert("Superhero was not added due to incorrectly image link");
      });
  };

  const onDeleteSuperhero = (id) => {
    fetch(`/api/superheroes/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setSuperheroes((prevHeroes) => {
          return prevHeroes.filter((hero) => {
            return hero.id !== id;
          });
        });
      })
      .catch((error) => console.error("Error:", error));
  };

  const onUpdateSuperhero = (id, hero) => {
    fetch(`/api/superheroes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(hero),
    })
      .then((responce) => responce.json())
      .then((updatedHero) => {
        setSuperheroes((prevHeroes) => {
          return prevHeroes.map((hero) => {
            return hero.id === updatedHero.id ? updatedHero : hero;
          });
        });
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <SuperheroContext.Provider
      value={{
        superheroes,
        onAddSuperhero,
        onDeleteSuperhero,
        onUpdateSuperhero,
      }}
    >
      {children}
    </SuperheroContext.Provider>
  );
};

export { SuperheroContext, SuperheroManagement };
