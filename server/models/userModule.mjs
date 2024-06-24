import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userModel = mongoose.Schema(
  {
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
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

userModel.methods.matchPasswords = async function (enteredPasswored) {
  return await bcrypt.compare(enteredPasswored, this.password);
};

//hash password before saving
userModel.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("user", userModel, process.env.COLLECTION);
export default User;
