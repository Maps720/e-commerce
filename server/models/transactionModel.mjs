import mongoose from "mongoose";

const transactionModel = mongoose.Schema(
  {
    invoice_id: { type: Number, trim: true, unique: true },
    user: { type: Number, trim: true },
    items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
      },
    ],
  },
  {
    timeStamps: true,
  }
);

const Transaction = mongoose.model("transaction", transactionModel);
export default Transaction;
