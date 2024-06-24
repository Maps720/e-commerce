import mongoose from "mongoose";

const productModel = mongoose.Schema(
  {
    name: { type: String, trim: true },
    description: { type: String, trim: true },
    category: { type: String, trim: true },
    quantity: { type: Number, trim: true },
    price: { type: Number, trim: true },
    picture: {
      type: String,
      default:
        "https://icon-library.com.images/anonymous-avater-icon/anonymous-avater-icon-25.jpg",
    },
  },
  {
    timeStamps: true,
  }
);

const Product = mongoose.model("product", productModel, process.env.COLLECTION);
export default Product;
