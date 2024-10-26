//Code for debugging purposes TO BE REMOVED
const debugDate = new Date(2024, 9, 26, 13, 0, 0);
const debugDay = debugDate.getDay();
const debugHour = debugDate.getHours();

const checkWorkingHours = (req, res, next) => {
  const now = new Date();
  const day = now.getDay(); // it goes from 0 for Sunday and so on ... 6 for Saturday.
  const hour = now.getHours();

  // Check if it's Monday to Friday and within 9 AM - 5 PM
  if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
    next(); // this falls between working hours, and should render the routes normally.
  } else {
    res.render("notopen"); // this falls outside working hours, and would render a not open for work page
  }
};

module.exports = { checkWorkingHours };
