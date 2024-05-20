const express = require("express");
const router = express.Router({ mergeParams: true });
const passport = require("passport");
const { saveRedirctUrl } = require("../middelware.js");

const userControllers = require("../controllers/user.js");

//signup
router
  .route("/signup")
  .get(userControllers.signup)
  .post(userControllers.createUser);

//login route
router
  .route("/login")
  .get(userControllers.login)
  .post(
    saveRedirctUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userControllers.chekoutUser
  );

//logout
router.get("/logout", userControllers.logout);

module.exports = router;
