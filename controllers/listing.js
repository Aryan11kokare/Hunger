const Listing = require("../models/listing.js");

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.new = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.search = async (req, res) => {
  const qurey = req.query.q;
  const listings = await Listing.find({
    title: { $regex: qurey, $options: "i" },
  }).limit(40);
  res.render("listings/search.ejs", { listings, qurey });
};

module.exports.show = async (req, res) => {
  const listing = await Listing.findById(req.params.id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  res.render("listings/show.ejs", { listing });
};

module.exports.create = async (req, res) => {
  const newListing = new Listing(req.body.listing);
  let url = req.file.path;
  let filename = req.file.filename;
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  await newListing.save();
  req.flash("success", "New Dish Created!");
  res.redirect("/listings");
};

module.exports.edit = async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  res.render("listings/edit.ejs", { listing });
};

module.exports.update = async (req, res) => {
  const listing = await Listing.findByIdAndUpdate(req.params.id, {
    ...req.body.listing,
  });
  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }
  req.flash("success", "Dish Updated!");
  res.redirect(`/listings/${listing._id}`);
};

module.exports.delete = async (req, res) => {
  const listing = await Listing.findByIdAndDelete(req.params.id);
  req.flash("success", "Dish Deleted Successfully!");
  res.redirect(`/listings`);
};
