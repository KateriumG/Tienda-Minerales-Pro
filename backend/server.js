const express = require("express");
import cors from "cors";

import authRoutes from "./../";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});