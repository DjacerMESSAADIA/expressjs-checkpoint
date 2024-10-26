const express = require("express");
const { checkWorkingHours } = require("../middlewares/middlewares.js");
const router = express.Router();

// parsing application/x-www-form-urlencoded
router.use(express.urlencoded({ extended: true }));
// parsing application/json
router.use(express.json());
// Check Working Timeline Middleware
//router.use(checkWorkingHours);

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
  try {
    //getting username and message for later use example storing in database
    const { username, message } = req.body;
    if (username) {
      return res.json({
        success: true,
        username,
        redirect: "/contact",
      });
    }
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({
      success: false,
      error: "Server error occurred",
    });
  }
});

// Handle Not Found routes
router.all("*", (req, res) => {
  res.render("notfound");
});

module.exports = router;
