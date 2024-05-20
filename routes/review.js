const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../schema.js");
const { isReviewAuthor, isLoggedIn } = require("../middelware.js");

const reviewControllers = require("../controllers/review.js");

const validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

//reviews
//post route
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewControllers.post));

//delet route
router.delete(
  "/:reviewId",
  isReviewAuthor,
  wrapAsync(reviewControllers.delete)
);

module.exports = router;
