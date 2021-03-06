import express from "express";
const router = express.Router();

// middlewares
import { authCheck } from "../middlewares/auth.js";
// controllers
import { 
  userCart, 
  getUserCart, 
  emptyCart, 
  saveAddress, 
  applyCouponToUserCart, 
  orders, 
  addToWishlist, 
  wishlist, 
  removeFromWishlist, 
  createCashOrder } from "../controllers/user.js";

router.post("/user/cart", authCheck, userCart); // save cart
router.get("/user/cart", authCheck, getUserCart); // get cart
router.delete("/user/cart", authCheck, emptyCart); // empty cart
router.post("/user/address", authCheck, saveAddress);

router.post("/user/cash-order", authCheck, createCashOrder); // cod
router.get("/user/orders", authCheck, orders);

// coupon
router.post("/user/cart/coupon", authCheck, applyCouponToUserCart);

// wishlist
router.post("/user/wishlist", authCheck, addToWishlist);
router.get("/user/wishlist", authCheck, wishlist);
router.put("/user/wishlist/:productId", authCheck, removeFromWishlist);

export default router;
