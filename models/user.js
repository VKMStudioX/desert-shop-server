import mongoose from "mongoose"
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      index: true,
    },
    role: {
      type: String,
      default: "subscriber",
    },
    cart: {
      type: Array,
      default: [],
    },
    address: String,
    wishlist: [{ type: ObjectId, ref: "Product" }],
    credits: {
      type: Number,
      default: 1000,
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
