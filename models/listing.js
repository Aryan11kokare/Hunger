const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("../models/review.js");
const { string } = require("joi");

const listingSchema = new Schema({
  category: {
    type: String,
  },
  title: {
    type: String,
  },
  image: {
    url: String,
    filename: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

module.exports = mongoose.model("Listing", listingSchema);
