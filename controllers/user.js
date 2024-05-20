const User = require("../models/user.js");

module.exports.signup = (req, res) => {
  res.render("user/signup.ejs");
};

module.exports.createUser = async (req, res, next) => {
  try {
    let { fullName, username, email, password } = req.body;
    const newUser = new User({
      fullName,
      username,
      email,
    });
    const registerUser = await User.register(newUser, password);
    console.log(registerUser);
    req.login(registerUser, (err) => {
      if (err) {
        return next();
      }
      req.flash("success", "welcome to Hunger");
      res.redirect("/listings");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
};

module.exports.login = (req, res) => {
  res.render("user/login.ejs");
};

module.exports.chekoutUser = async (req, res) => {
  req.flash("success", "Welcome Back to Hunger");
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next();
    }
    req.flash("success", "You are logged out!");
    res.redirect("/listings");
  });
};
