import express from "express";
import {
  submitProduct,
  getProducts,
} from "../controllers/productController.mjs";

const router = express.Router();

router.route("/").post(submitProduct);
router.get("/", getProducts);

export default router;
