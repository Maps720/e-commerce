import asyncHandler from "express-async-handler";
import Product from "../models/productModel.mjs";

export const submitProduct = asyncHandler(async (req, res) => {
  const { name, description, category, quantity, price, picture } = req.body;

  if (!name || !description || !category || !quantity) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  const productExists = await Product.findOne({ name });

  if (productExists) {
    res.status(400);
    throw new Error(`${name} already exists, update quantity instead.`);
  }

  const product = await Product.create({
    name,
    description,
    category,
    quantity,
    price,
    picture,
  });

  if (product) {
    res.status(201).json({
      message: "Producted created succefully",
      name: name,
      description: description,
      category: category,
      quantity: quantity,
      picture: picture,
    });
  } else {
    res.status(400);
    throw new Error("Failed to save product");
  }
});

export const getProducts = asyncHandler(async (req, res) => {});
