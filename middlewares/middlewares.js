const WORKING_DAYS = {
  0: false, //Sunday
  1: true, // Monday
  2: true, // Tuesday
  3: true, // Wednesday
  4: true, // Thursday
  5: true, // Friday
  6: false, // Saturday
};

const WORK_START_HOUR = 9;
const WORK_END_HOUR = 17;

const checkWorkingHours = (req, res, next) => {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  if (WORKING_DAYS[day] && hour >= WORK_START_HOUR && hour < WORK_END_HOUR) {
    return next();
  }

  return res.render("notopen");
};

module.exports = { checkWorkingHours };
