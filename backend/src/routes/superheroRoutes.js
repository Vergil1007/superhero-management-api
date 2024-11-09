import express from "express";
import {
  createSuperhero,
  getAllSuperheroes,
  updateSuperhero,
  deleteSuperhero,
} from "../controllers/superheroController.js";

const router = express.Router();

router.get("/", getAllSuperheroes);

router.post("/", createSuperhero);

router.patch("/:id", updateSuperhero);

router.delete("/:id", deleteSuperhero);

export default router;
