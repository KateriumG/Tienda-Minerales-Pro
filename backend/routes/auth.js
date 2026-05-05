import express from "express";
import fs from "fs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

const SECRET = "orestock_secret"; // luego usar .env

// leer usuarios
function getUsers() {
  const data = fs.readFileSync("./data/users.json");
  return JSON.parse(data);
}

// guardar usuarios
function saveUsers(users) {
  fs.writeFileSync("./data/users.json", JSON.stringify(users, null, 2));
}

// REGISTER
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const users = getUsers();

  const exists = users.find(u => u.email === email);

  if (exists) {
    return res.status(400).json({ message: "Usuario ya existe" });
  }

  const hashed = await bcrypt.hash(password, 10);

  const newUser = { id: Date.now(), name, email, password: hashed };

  users.push(newUser);
  saveUsers(users);

  res.json({ message: "Usuario creado" });
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const users = getUsers();

  const user = users.find(u => u.email === email);

  if (!user) {
    return res.status(400).json({ message: "Usuario no encontrado" });
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    return res.status(400).json({ message: "Contraseña incorrecta" });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, name: user.name },
    SECRET,
    { expiresIn: "2h" }
  );

  res.json({ token });
});

export default router;