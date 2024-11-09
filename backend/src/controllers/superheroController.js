import SuperheroDTO from "../dto/SuperheroDTO.js";
import SuperHero from "../models/Superhero.js";
import SuperheroRepository from "../repositories/superheroRepository.js";

const superheroRepository = new SuperheroRepository(SuperHero);

export const getAllSuperheroes = async (req, res) => {
  try {
    const superheroes = await superheroRepository.getAllSuperheroes();
    res.status(200).json(superheroes);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving superheroes" });
  }
};

export const createSuperhero = async (req, res) => {
  const { error } = SuperheroDTO.validate(req.body);

  if (error) {
    return res.status(400).json({
      errors: error.details.map((detail) => ({
        field: detail.context.key,
        message: detail.message,
      })),
    });
  }

  const superhero = await superheroRepository.createSuperhero(req.body);
  res.status(201).json(superhero);
};

export const updateSuperhero = async (req, res) => {
  const { id, ...hero } = req.body;
  const { error } = SuperheroDTO.validate(hero);

  if (error) {
    return res.status(400).json({
      errors: error.details.map((detail) => ({
        field: detail.context.key,
        message: detail.message,
      })),
    });
  }

  const superhero = await superheroRepository.updateSuperhero(
    req.params.id,
    req.body
  );
  superhero
    ? res.status(200).json(superhero)
    : res.status(404).json({ message: "Superhero not found" });
};

export const deleteSuperhero = async (req, res) => {
  const { id } = req.params;
  try {
    const success = await superheroRepository.deleteSuperhero(id);
    if (!success) {
      return res.status(404).json({ message: "Superhero not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Error deleting superhero" });
  }
};
