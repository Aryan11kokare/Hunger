const Cart = require("../models/cart.js");

module.exports.cart = async (req, res) => {
  let carts = await Cart.find().populate("user");
  res.render("listings/cart.ejs", { carts });
};

module.exports.addBookmark = async (req, res) => {
  const newCart = new Cart(req.body.cart);
  newCart.user = req.user._id;
  await newCart.save();
  res.redirect(`/listings/${newCart.listingId}`);
};

module.exports.Remove = async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.redirect(`/cart`);
};
