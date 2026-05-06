import express from "express";

const router = express.Router();

const products = [
  { id: 1, name: "Amatista", price: 20000 },
  { id: 2, name: "Cuarzo Rosa", price: 18000 },
  { id: 3, name: "Obsidiana", price: 25000 }
];

// GET /api/products
router.get("/", (req, res) => {
  res.json(products);
});

export default router;