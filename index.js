import Express from "express";
import Products from "./products.js";

const app = Express();
const port = 3000;

// GET ,PUT, POST, DELETE

app.get("/", (req, res) => {
  res.json(Products);
});

app.listen(port, () => console.log(`Welcome to club ${port}`));
