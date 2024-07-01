import mongoose from "mongoose";

const pieceSchema = new mongoose.Schema({
  name: { type: String, trim: true },
  units: { type: Number, trim: true },
});

const objectSchema = new mongoose.Schema({
  name: { type: String, trim: true },
  price: { type: Number, trim: true },
  image: { type: String, trim: true },
  pieces: {
    form1: pieceSchema,
    form2: pieceSchema,
    form3: pieceSchema,
    form4: pieceSchema,
    form5: pieceSchema,
  },
});

const formFactorSchema = new mongoose.Schema({
  name: { type: String, trim: true },
  priceEffect: { type: Boolean, trim: true },
  objects: {
    object1: objectSchema,
    object2: objectSchema,
    object3: objectSchema,
    object4: objectSchema,
  },
});

const reviewSchema = new mongoose.Schema({
  rating: { type: Number, trim: true },
  count: { type: Number, trim: true },
});

const discountSchema = new mongoose.Schema({
  percentage: { type: Number, trim: true },
  valid: { type: String, trim: true },
  minimum: { type: Number, trim: true },
});

const productModel = mongoose.Schema(
  {
    id: { type: Number, trim: true },
    name: { type: String, trim: true },
    description: { type: String, trim: true },
    category: { type: String, trim: true },
    price: { type: Number, trim: true },
    picture: {
      type: String,
    },
    forms: {
      formFactor1: formFactorSchema,
      formFactor2: formFactorSchema,
    },
    units: {
      left: { type: Number, trim: true },
      sold: { type: Number, trim: true },
    },
    image: [{ type: String, trim: true }],
    reviews: reviewSchema,
    discount: {
      retail: discountSchema,
      wholesale: discountSchema,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productModel, process.env.COLLECTION);
export default Product;
