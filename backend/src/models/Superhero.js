import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Superhero = sequelize.define(
  "superheroes",
  {
    nickname: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    real_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    origin_description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    superpowers: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    catch_phrase: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    images: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default Superhero;
