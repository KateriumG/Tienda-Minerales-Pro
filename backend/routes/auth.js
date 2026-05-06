import express from "express";
import fs from "fs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "../data/users.json");

const router = express.Router();

const SECRET = "orestock_secret"; // luego usar .env

// leer usuarios
function getUsers() {
  try {
    const data = fs.readFileSync(filePath, "utf-8");

    if (!data) return [];

    return JSON.parse(data);
  } catch (err) {
    console.error("Error leyendo usuarios:", err);
    return [];
  }
}

// guardar usuarios
function saveUsers(users) {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
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

  if (!email || !password) {
    return res.status(400).json({ message: `Email y contraseña requeridos ${filePath}` });
  }

  const users = getUsers();

  const user = users.find(
    u => u.email.toLowerCase() === email.toLowerCase()
  );

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