const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn } = require("../middelware.js");

const cartControllers = require("../controllers/cart.js");

router.get("/cart", isLoggedIn, wrapAsync(cartControllers.cart));

router.post("/cart", isLoggedIn, wrapAsync(cartControllers.addBookmark));

router.delete("/cart/:id", wrapAsync(cartControllers.Remove));

module.exports = router;
