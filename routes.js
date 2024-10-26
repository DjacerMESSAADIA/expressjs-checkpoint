const express = require("express");
const router = express.Router();

// Home route
router.get("/", (req, res) => {
  res.render("index");
});

// Services route
router.get("/services", (req, res) => {
  res.render("services");
});

// Contact route
router.get("/contact", (req, res) => {
  res.render("contact");
});

// Contact form submission
router.post("/contact", (req, res) => {
  // Handle contact form submission here
  console.log(req.body);
  res.redirect("/contact");
});

// Handle Not Found routes
router.all("*", (req, res) => {
  res.render("notfound");
});

module.exports = router;
