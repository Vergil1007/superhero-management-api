import express from "express";
import sequelize from "./config/database.js";
import superheroRoutes from "./routes/superheroRoutes.js";
import cors from "cors";

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.use("/api/superheroes", superheroRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => console.log("Database connection failed:", err));
