const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  category: {
    type: String,
  },
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  listingId: {
    type: String,
  },
  quantity: {
    type: Number,
    default: 1,
    max: 5,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Cart", cartSchema);
